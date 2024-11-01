<template>
  <div>
    <div ref="mapContainer" style="width: 800px; height: 500px;"></div>
    <button @click="setDestination">Set Destination</button>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios";
//import "mapbox-gl/dist/mapbox-gl.css"; // Ensure Mapbox CSS is loaded

export default {
  name: "Map",
  data() {
    return {
      map: null,
      userMarker: null,
      destination: null,
      accessToken: "pk.eyJ1IjoibWVycmlsbGdvbnNhbHZlcyIsImEiOiJjajN6ampkbzcwM3VxMzJyemR5Y2dqdTZuIn0.EGosEkXFJM5K_82Vy0XuCA", // Replace with your Mapbox token
    };
  },
  mounted() {
    try {
      mapboxgl.accessToken = this.accessToken;
      this.initMap();
    } catch (error) {
      console.error("Error during mounted hook:", error);
    }
  },
  methods: {
    initMap() {
      if (!this.$refs.mapContainer) {
        console.error("Map container not found.");
        return;
      }

      this.map = new mapboxgl.Map({
        container: this.$refs.mapContainer,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [72.90714,19.11818], // Initial coordinates
        zoom: 14,
      });

      this.map.on('load', () => {
        console.log("Map has loaded successfully!");
        this.userMarker = new mapboxgl.Marker({ color: "blue" }).setLngLat([0, 0]).addTo(this.map);
        this.trackUserLocation();
      });
    },
    trackUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const lng = position.coords.longitude;
            const lat = position.coords.latitude;

            // Update user marker position
            this.userMarker.setLngLat([lng, lat]);

            // Center map on user's location if no destination is set
            if (!this.destination) {
              this.map.setCenter([lng, lat]);
            }
          },
          (error) => {
            console.error("Error getting location:", error);
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
      } else {
        console.error("Geolocation not supported by this browser.");
      }
    },
    setDestination() {
      this.destination = [72.85368,19.11734]; // Example destination (New York, NY)

      // Log the destination to ensure it is set
      console.log("Destination set to:", this.destination);

      // Use hardcoded user location for testing
           if (this.userMarker.getLngLat()) {
        const origin = this.userMarker.getLngLat().toArray();
        this.getDirections(origin, this.destination);
      }
    },
    async getDirections(origin, destination) {
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?geometries=geojson&access_token=${this.accessToken}`;

      try {
        const response = await axios.get(url);
        
        // Log the response data
        console.log("Directions API response:", response.data);
        
        const route = response.data.routes[0].geometry;

        // Check if route is valid
        if (!route || !route.coordinates.length) {
          console.error("No route found.");
          return;
        }

        // Remove previous route layer if exists
        if (this.map.getSource("route")) {
          this.map.removeLayer("route");
          this.map.removeSource("route");
        }

        // Add route to the map
        this.map.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: route,
          },
        });

        this.map.addLayer({
          id: "route",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3b9ddd",
            "line-width": 5,
          },
        });

        // Center map on the route
        const bounds = new mapboxgl.LngLatBounds();
        route.coordinates.forEach(coord => bounds.extend(coord));
        this.map.fitBounds(bounds, { padding: 20 });

      } catch (error) {
        console.error("Error fetching directions:", error);
      }
    },
  },
};
</script>

<style>
/* Add any additional styling you need */
</style>
