import {ref} from 'vue'

const getSurahList = () => {
  const surahList = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await fetch('data/surahList.json')
      surahList.value = await res.json()
      
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return {surahList,error,load}

}

export default getSurahList