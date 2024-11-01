// Composable Function with ref
import {ref, isRef, unref, watchEffect} from 'vue'
import axios from 'axios'

//Get Single User Data
function getSigluUserData(url) {
	const usersData = ref(null)
	const error = ref(null)
	const getSigluUserData = async () => {
		usersData.value = null
		error.value = null
		try {
			//unref() returns the inner value if the argument is a ref,
			//otherwise return the argument itself.

			const res = await axios(unref(url) )
			//console.log("Res:", res)
			//console.log(res.data.data)
			usersData.value = res.data.data
		} catch (err) {
			error.value = err
		}
	}
	//isRef() checks if a value is a ref object.
	if (isRef(url)) {
		//setup reactive re-fetch if input URL is a ref
		watchEffect(getSigluUserData)
	} else {
		//otherwise, just fetch once and avoid the overhead of a
		//watcher
		getSigluUserData()
	}
	return {usersData, error}
	// body...
}

export { getSigluUserData }