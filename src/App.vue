<template>
<div v-if="settingsRef" id="container" :class="[settingsRef.darkMode ? 'dark' : 'light']">
  <transition name="slide-fade">
    <div style="height:100%" class="section" v-if="viewSurahSelector && progressRef && settingsRef">
      <div style="height:50px; display: flex;justify-content:space-between; align-items:center">
        <div style="display:flex;align-items:center;justify-content:center">
          <div style="font-weight:bold; font-size:16pt">
            simpleQuran
          </div>
        </div>
        <!-- <div @click="toggleSettings">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_b)">
            <rect width="36" height="36" rx="11" fill="url(#paint0_radial)" fill-opacity="0.55" />
          </g>
          <path d="M24.0001 11.9999C24.2653 11.9999 24.5196 11.8946 24.7072 11.707C24.8947 11.5195 25.0001 11.2651 25.0001 10.9999C25.0001 10.7347 24.8947 10.4803 24.7072 10.2928C24.5196 10.1053 24.2653 9.99991 24.0001 9.99991L16.7321 9.99991C16.5565 9.6959 16.304 9.44344 16 9.26792C15.696 9.0924 15.3511 9 15.0001 9C14.649 9 14.3041 9.0924 14.0001 9.26792C13.6961 9.44344 13.4436 9.6959 13.2681 9.99991L12.0001 9.99991C11.7348 9.99991 11.4805 10.1053 11.293 10.2928C11.1054 10.4803 11.0001 10.7347 11.0001 10.9999C11.0001 11.2651 11.1054 11.5195 11.293 11.707C11.4805 11.8946 11.7348 11.9999 12.0001 11.9999L13.2681 11.9999C13.4436 12.3039 13.6961 12.5564 14.0001 12.7319C14.3041 12.9074 14.649 12.9998 15.0001 12.9998C15.3511 12.9998 15.696 12.9074 16 12.7319C16.304 12.5564 16.5565 12.3039 16.7321 11.9999L24.0001 11.9999ZM24.0001 17.9999C24.2653 17.9999 24.5196 17.8946 24.7072 17.707C24.8947 17.5195 25.0001 17.2651 25.0001 16.9999C25.0001 16.7347 24.8947 16.4803 24.7072 16.2928C24.5196 16.1053 24.2653 15.9999 24.0001 15.9999L22.7321 15.9999C22.5565 15.6959 22.304 15.4434 22 15.2679C21.696 15.0924 21.3511 15 21.0001 15C20.649 15 20.3041 15.0924 20.0001 15.2679C19.6961 15.4434 19.4436 15.6959 19.2681 15.9999L12.0001 15.9999C11.7348 15.9999 11.4805 16.1053 11.293 16.2928C11.1054 16.4803 11.0001 16.7347 11.0001 16.9999C11.0001 17.2651 11.1054 17.5195 11.293 17.707C11.4805 17.8946 11.7348 17.9999 12.0001 17.9999L19.2681 17.9999C19.4436 18.3039 19.6961 18.5564 20.0001 18.7319C20.3041 18.9074 20.649 18.9998 21.0001 18.9998C21.3511 18.9998 21.696 18.9074 22 18.7319C22.304 18.5564 22.5565 18.3039 22.7321 17.9999L24.0001 17.9999ZM25.0001 22.9999C25.0001 23.2651 24.8947 23.5195 24.7072 23.707C24.5196 23.8946 24.2653 23.9999 24.0001 23.9999L16.7321 23.9999C16.5565 24.3039 16.304 24.5564 16 24.7319C15.696 24.9074 15.3511 24.9998 15.0001 24.9998C14.649 24.9998 14.3041 24.9074 14.0001 24.7319C13.6961 24.5564 13.4436 24.3039 13.2681 23.9999L12.0001 23.9999C11.7348 23.9999 11.4805 23.8946 11.293 23.707C11.1054 23.5195 11.0001 23.2651 11.0001 22.9999C11.0001 22.7347 11.1054 22.4803 11.293 22.2928C11.4805 22.1053 11.7348 21.9999 12.0001 21.9999L13.2681 21.9999C13.4436 21.6959 13.6961 21.4434 14.0001 21.2679C14.3041 21.0924 14.649 21 15.0001 21C15.3511 21 15.696 21.0924 16 21.2679C16.304 21.4434 16.5565 21.6959 16.7321 21.9999L24.0001 21.9999C24.2653 21.9999 24.5196 22.1053 24.7072 22.2928C24.8947 22.4803 25.0001 22.7347 25.0001 22.9999Z" fill="white" />
          <defs>
            <filter id="filter0_b" x="-10" y="-10" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
            </filter>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.5 -45.5) rotate(103.761) scale(75.672)">
              <stop stop-color="white" stop-opacity="0.44" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

      </div> -->
        <!-- <button class="topbutton" @click="toggleSettings">Settings</button> -->
      </div>
      <SurahSelector :progressRef=progressRef :settingsRef=settingsRef :surahList=surahList @selectSurah=toggleSelectSurah />
    </div>
  </transition>
  <transition name="slide-fade">
    <div style="height:100%" v-if="viewSettings && settingsRef">
      <div @click="toggleSettings" style="height: 50px; display:flex;align-items:center;justify-content:left">
        <div>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#E4F1FF" fill-opacity="0.1" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.707 24.7069C17.5195 24.8944 17.2652 24.9997 17 24.9997C16.7349 24.9997 16.4806 24.8944 16.293 24.7069L10.293 18.7069C10.1056 18.5194 10.0002 18.2651 10.0002 17.9999C10.0002 17.7348 10.1056 17.4804 10.293 17.2929L16.293 11.2929C16.4816 11.1108 16.7342 11.01 16.9964 11.0122C17.2586 11.0145 17.5094 11.1197 17.6948 11.3051C17.8803 11.4905 17.9854 11.7413 17.9877 12.0035C17.99 12.2657 17.8892 12.5183 17.707 12.7069L13.414 16.9999H25C25.2652 16.9999 25.5196 17.1053 25.7071 17.2928C25.8947 17.4803 26 17.7347 26 17.9999C26 18.2651 25.8947 18.5195 25.7071 18.707C25.5196 18.8946 25.2652 18.9999 25 18.9999H13.414L17.707 23.2929C17.8945 23.4804 17.9998 23.7348 17.9998 23.9999C17.9998 24.2651 17.8945 24.5194 17.707 24.7069Z" fill="white" />
          </svg>
        </div>
        <div style="margin:10px; font-weight:bold">
          Settings
        </div>
      </div>
      <Settings :settings=settingsRef />
    </div>
  </transition>
  <transition name="slide-fade">
    <div style="height:100%" v-if="viewPage && progressRef && settingsRef">
      <div style="height:50px; display: flex;justify-content:space-between; align-items:center">
        <div @click="toggleSelectSurah" style="display:flex;align-items:center;justify-content:center">
          <div>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#E4F1FF" fill-opacity="0.1" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.707 24.7069C17.5195 24.8944 17.2652 24.9997 17 24.9997C16.7349 24.9997 16.4806 24.8944 16.293 24.7069L10.293 18.7069C10.1056 18.5194 10.0002 18.2651 10.0002 17.9999C10.0002 17.7348 10.1056 17.4804 10.293 17.2929L16.293 11.2929C16.4816 11.1108 16.7342 11.01 16.9964 11.0122C17.2586 11.0145 17.5094 11.1197 17.6948 11.3051C17.8803 11.4905 17.9854 11.7413 17.9877 12.0035C17.99 12.2657 17.8892 12.5183 17.707 12.7069L13.414 16.9999H25C25.2652 16.9999 25.5196 17.1053 25.7071 17.2928C25.8947 17.4803 26 17.7347 26 17.9999C26 18.2651 25.8947 18.5195 25.7071 18.707C25.5196 18.8946 25.2652 18.9999 25 18.9999H13.414L17.707 23.2929C17.8945 23.4804 17.9998 23.7348 17.9998 23.9999C17.9998 24.2651 17.8945 24.5194 17.707 24.7069Z" fill="white" />
            </svg>
          </div>
          <div style="margin:10px; font-weight:bold">
            {{surahList[progressRef.id-1].name[settingsRef.lang]}}
          </div>
        </div>
        <div @click="toggleSettings">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b)">
              <rect width="36" height="36" rx="11" fill="url(#paint0_radial)" fill-opacity="0.55" />
            </g>
            <path d="M24.0001 11.9999C24.2653 11.9999 24.5196 11.8946 24.7072 11.707C24.8947 11.5195 25.0001 11.2651 25.0001 10.9999C25.0001 10.7347 24.8947 10.4803 24.7072 10.2928C24.5196 10.1053 24.2653 9.99991 24.0001 9.99991L16.7321 9.99991C16.5565 9.6959 16.304 9.44344 16 9.26792C15.696 9.0924 15.3511 9 15.0001 9C14.649 9 14.3041 9.0924 14.0001 9.26792C13.6961 9.44344 13.4436 9.6959 13.2681 9.99991L12.0001 9.99991C11.7348 9.99991 11.4805 10.1053 11.293 10.2928C11.1054 10.4803 11.0001 10.7347 11.0001 10.9999C11.0001 11.2651 11.1054 11.5195 11.293 11.707C11.4805 11.8946 11.7348 11.9999 12.0001 11.9999L13.2681 11.9999C13.4436 12.3039 13.6961 12.5564 14.0001 12.7319C14.3041 12.9074 14.649 12.9998 15.0001 12.9998C15.3511 12.9998 15.696 12.9074 16 12.7319C16.304 12.5564 16.5565 12.3039 16.7321 11.9999L24.0001 11.9999ZM24.0001 17.9999C24.2653 17.9999 24.5196 17.8946 24.7072 17.707C24.8947 17.5195 25.0001 17.2651 25.0001 16.9999C25.0001 16.7347 24.8947 16.4803 24.7072 16.2928C24.5196 16.1053 24.2653 15.9999 24.0001 15.9999L22.7321 15.9999C22.5565 15.6959 22.304 15.4434 22 15.2679C21.696 15.0924 21.3511 15 21.0001 15C20.649 15 20.3041 15.0924 20.0001 15.2679C19.6961 15.4434 19.4436 15.6959 19.2681 15.9999L12.0001 15.9999C11.7348 15.9999 11.4805 16.1053 11.293 16.2928C11.1054 16.4803 11.0001 16.7347 11.0001 16.9999C11.0001 17.2651 11.1054 17.5195 11.293 17.707C11.4805 17.8946 11.7348 17.9999 12.0001 17.9999L19.2681 17.9999C19.4436 18.3039 19.6961 18.5564 20.0001 18.7319C20.3041 18.9074 20.649 18.9998 21.0001 18.9998C21.3511 18.9998 21.696 18.9074 22 18.7319C22.304 18.5564 22.5565 18.3039 22.7321 17.9999L24.0001 17.9999ZM25.0001 22.9999C25.0001 23.2651 24.8947 23.5195 24.7072 23.707C24.5196 23.8946 24.2653 23.9999 24.0001 23.9999L16.7321 23.9999C16.5565 24.3039 16.304 24.5564 16 24.7319C15.696 24.9074 15.3511 24.9998 15.0001 24.9998C14.649 24.9998 14.3041 24.9074 14.0001 24.7319C13.6961 24.5564 13.4436 24.3039 13.2681 23.9999L12.0001 23.9999C11.7348 23.9999 11.4805 23.8946 11.293 23.707C11.1054 23.5195 11.0001 23.2651 11.0001 22.9999C11.0001 22.7347 11.1054 22.4803 11.293 22.2928C11.4805 22.1053 11.7348 21.9999 12.0001 21.9999L13.2681 21.9999C13.4436 21.6959 13.6961 21.4434 14.0001 21.2679C14.3041 21.0924 14.649 21 15.0001 21C15.3511 21 15.696 21.0924 16 21.2679C16.304 21.4434 16.5565 21.6959 16.7321 21.9999L24.0001 21.9999C24.2653 21.9999 24.5196 22.1053 24.7072 22.2928C24.8947 22.4803 25.0001 22.7347 25.0001 22.9999Z" fill="white" />
            <defs>
              <filter id="filter0_b" x="-10" y="-10" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
              </filter>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.5 -45.5) rotate(103.761) scale(75.672)">
                <stop stop-color="white" stop-opacity="0.44" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>

        </div>
        <!-- <button class="topbutton" @click="toggleSettings">Settings</button> -->
      </div>
      <Page :settingsRef=settingsRef :progressRef=progressRef :surahList=surahList style=" width:100%; height:80%; overflow:auto" />
    </div>
  </transition>

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
      'darkMode': true
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

.topbutton {
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
  padding: 5%;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(122.99% 137.12% at 80.53% -33.26%, #0054849f 0%, rgba(5, 81, 124, 0) 58.16%);
  background-color: #181920;
  /* border:solid 2px #fff */
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
  color: #E1E3E5;
  background-color: #181920;
  transition: ease-in-out 500ms;
}

.slide-fade-enter-active {
  transition: all .2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0 ease-out;
}

.slide-fade-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
  /* -webkit-transform: translate3d(0,0,0) rotateY(-90deg);  */
}
</style>
