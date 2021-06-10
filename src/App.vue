<template>
<div v-if="settingsRef" id="container" :class="[settingsRef.darkMode ? 'dark' : 'light']">
  <div class="section" v-if="viewSurahSelector && progressRef && settingsRef">
    <div class="title">
      <h2>Daftar Surat</h2>
    </div>
    <SurahSelector :progressRef=progressRef :settingsRef=settingsRef :surahList=surahList @selectSurah=toggleSelectSurah />
  </div>
  <div v-if="viewSettings && settingsRef">
    <button @click="toggleSettings">back</button>

    <Settings :settings=settingsRef />
  </div>
  <div v-if="viewPage && progressRef && settingsRef">
    <div style="display: flex; width:100%">    
    <button class="topbutton" @click="toggleSelectSurah">Select Surah</button>
    <button class="topbutton" @click="toggleSettings">Settings</button></div>


    <Page :settingsRef=settingsRef :progressRef=progressRef :surahList=surahList />
  </div>

</div>
</template>

<script>
import {
  ref
} from '@vue/reactivity'
import Settings from './components/Settings.vue'
import SurahSelector from './components/SurahSelector.vue'
import Page from './components/Page.vue'
import Localbase from 'localbase'
import getSurahList from './composables/getSurahList'

export default {
  name: 'App',
  components: {
    Settings,
    SurahSelector,
    Page
  },
  setup() {
    var viewSettings = ref(false);
    var viewSurahSelector = ref(false);
    var viewPage = ref(true)

    var lang = ref('en')

    const toggleSettings = () => {
      viewSettings.value = !viewSettings.value
      viewPage.value = !viewPage.value
    }

    const toggleSelectSurah = () => {
      viewSurahSelector.value = !viewSurahSelector.value
      viewPage.value = !viewPage.value
    }

    const progressDefault = {
      'id': 1,
      'verse': 1,
      'maxVerse': 7
    }
    const settingsDefault = {
      'lang': 'id',
      'verse': true,
      'transliterate': true,
      'translation': true,
      'darkMode': false
    }

    const progressRef = ref(null)
    const settingsRef = ref(null)

    let db = new Localbase('db')
    db.collection('progress').get().then(data => {
      if (data.length) {
        progressRef.value = data[0] //if there is existing data use this data
      } else {
        progressRef.value = progressDefault
        db.collection('progress').add(progressDefault, 'progress') //if there is no existing data use default
      }
    })

    db.collection('settings').get().then(data => {
      if (data.length) {
        settingsRef.value = data[0] //if there is existing data use this data
      } else {
        settingsRef.value = settingsDefault
        db.collection('settings').add(settingsDefault, 'settings') //if there is no existing data use default
      }
    })

    const {
      surahList,
      error,
      load
    } = getSurahList()
    load()

    document.addEventListener('touchmove', function (event) {
      if (event.scale !== 1) {
        event.preventDefault();
      }
    }, false);

    return {
      db,
      viewSettings,
      viewSurahSelector,
      viewPage,
      lang,
      settingsRef,
      progressRef,
      surahList,
      toggleSettings,
      toggleSelectSurah,
      progressDefault,
      settingsDefault
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(-45deg, #ffffff, #3ca8e7, #23a6d5, #23d5ab); */
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
.topbutton{
  width: 100%;
  height: 30px;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  width: 100%;
  /* max-width: 480px; */
  height: 100vh;
  /* background-color: #fff; */
  margin: auto;
}

#container {
  /* padding: 10px; */
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}

#bg {
  width: 100%;
  height: 233px;
  position: fixed;
  background: radial-gradient(76.03% 84.76% at 67.47% -10.73%, #60C6FF 0%, rgba(96, 198, 255, 0) 58.16%);
}

@media screen and (-webkit-min-device-pixel-ratio:0) {

  select,
  textarea,
  input {
    font-size: 16px;
  }
}

.section {
  height: 100%;
  overflow-y: auto;
}

.light {
  color: #242424;
  background-color: #fff;
  transition: ease-in-out 500ms;
}

.dark {
  color: #fff;
  background-color: #242424;
  transition: ease-in-out 500ms;
}
</style>
