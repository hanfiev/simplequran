<template>
<div style="width:100%; height:100%;">
  <div class="page" v-if="progressRef && quran">
    <br>
    <div class="verseContainer">
      <div>
        <div class="arab" v-if="settingsRef.verse">
          {{quran[progressRef.id-1].verses[progressRef.verse-1].text.arab}}
        </div>
      </div>
      <br>
      <div>
        <div v-if="settingsRef.transliterate" style="text-align: center">
          {{quran[progressRef.id-1].verses[progressRef.verse-1].text.transliteration.en}}
        </div>
        <br>
        <div v-if="settingsRef.translation" style="text-align: center; color: rgba(255, 255, 255, 0.48);">
          {{quran[progressRef.id-1].verses[progressRef.verse-1].translation[settingsRef.lang]}}
        </div>
      </div>

    </div>

    <br>
    <!-- <div class="gradient"></div> -->


    <div id="pagination">
      <div @click.prevent="decrement">

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 5.29303C12.8945 5.48056 12.9998 5.73487 12.9998 6.00003C12.9998 6.26519 12.8945 6.5195 12.707 6.70703L9.41403 10L12.707 13.293C12.8892 13.4816 12.99 13.7342 12.9877 13.9964C12.9854 14.2586 12.8803 14.5094 12.6948 14.6948C12.5094 14.8803 12.2586 14.9854 11.9964 14.9877C11.7342 14.99 11.4816 14.8892 11.293 14.707L7.29303 10.707C7.10556 10.5195 7.00024 10.2652 7.00024 10C7.00024 9.73487 7.10556 9.48056 7.29303 9.29303L11.293 5.29303C11.4806 5.10556 11.7349 5.00024 12 5.00024C12.2652 5.00024 12.5195 5.10556 12.707 5.29303Z" fill="white" />
        </svg>
      </div>

      <!-- <button @click.prevent="decrement">prev</button> -->
      {{progressRef.verse}} of {{progressRef.maxVerse}}
      <div @click.prevent="increment">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29303 14.707C7.10556 14.5195 7.00024 14.2652 7.00024 14C7.00024 13.7349 7.10556 13.4806 7.29303 13.293L10.586 10L7.29303 6.70704C7.11087 6.51844 7.01008 6.26584 7.01236 6.00364C7.01463 5.74144 7.1198 5.49063 7.30521 5.30522C7.49062 5.11981 7.74143 5.01465 8.00363 5.01237C8.26583 5.01009 8.51843 5.11088 8.70703 5.29304L12.707 9.29304C12.8945 9.48057 12.9998 9.73488 12.9998 10C12.9998 10.2652 12.8945 10.5195 12.707 10.707L8.70703 14.707C8.5195 14.8945 8.26519 14.9998 8.00003 14.9998C7.73487 14.9998 7.48056 14.8945 7.29303 14.707Z" fill="white" />
        </svg>

      </div>
      <!-- <button @click.prevent="increment">next</button> -->
    </div>

  </div>
</div>
</template>

<script>
import {
  ref
} from '@vue/reactivity'
import getQuran from '../composables/getQuran'
import Localbase from 'localbase'

export default {
  props: ['progressRef', 'settingsRef', 'surahList'],

  setup(props) {
    const {
      quran,
      error,
      loadQuran
    } = getQuran()

    loadQuran()

    let db = new Localbase('db')

    const progress = ref(props.progressRef)

    const increment = () => {
      if (progress.value.id == 114 && progress.value.verse == 6) {
        return
      }
      if (progress.value.verse < props.progressRef.maxVerse) {
        progress.value.verse++
        db.collection('progress').doc('progress').update(progress.value)

      } else {
        progress.value.verse = 1
        progress.value.maxVerse = props.surahList[progress.value.id].verses
        progress.value.id++
        db.collection('progress').doc('progress').update(progress.value)

      }
    }
    const decrement = () => {
      if (progress.value.id == 1 && progress.value.verse == 1) {
        return
      }
      if (progress.value.verse > 1) {
        progress.value.verse--
        db.collection('progress').doc('progress').update(progress.value)
      } else {
        progress.value.id--
        progress.value.maxVerse = props.surahList[progress.value.id - 1].verses
        progress.value.verse = progress.value.maxVerse
        db.collection('progress').doc('progress').update(progress.value)
      }
    }
    return {
      quran,
      error,
      loadQuran,
      increment,
      decrement,
      progress,
    }
  }

}
</script>

<style>
.page {
  /* background-color: yellow; */
  /* height: 500px; */
  overflow: auto;
}

.verseContainer {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  height: 100%;
  /* background-color: blue */
}

.arab {
  height: 100%;
  text-align: center;
  font-size: 24pt;
  padding: 5px 10px
}

#pagination {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  /* background-color: blue; */
  margin: auto;
  position: absolute;
  /* padding: 35px 10px; */
  bottom: 5%;
  left: 5%;
  right: 5%;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 14%;
  /* background-color: red; */
  background: linear-gradient(180deg, #191A21 0%, rgba(24, 25, 32, 0) 100%);
  transform: rotate(-180deg);
}
</style>
