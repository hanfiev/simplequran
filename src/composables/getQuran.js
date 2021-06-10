import {ref} from 'vue'

const getQuran = () => {
  const quran = ref(null)
  const error = ref(null)

  const loadQuran = async () => {
    try {
      const res = await fetch('data/quran.json')
      quran.value = await res.json()
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return {quran,error,loadQuran}

}

export default getQuran