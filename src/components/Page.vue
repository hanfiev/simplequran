<template>
<div class="page">
  <div v-if="progressRef && quran">
    <br>
   <div style="text-align:center">
      {{quran[progressRef.id-1].name.transliteration.id}} <br>
      </div>

    <br>

    <div v-if="settingsRef.verse" style="text-align:right; font-size:24pt; padding: 5px 10px">
      {{quran[progressRef.id-1].verses[progressRef.verse-1].text.arab}}
    </div>
    <br>

    <div v-if="settingsRef.transliterate" style="text-align: center">
      {{quran[progressRef.id-1].verses[progressRef.verse-1].text.transliteration.en}}
    </div>
    <br>
    <div v-if="settingsRef.translation" style="text-align: center">
      {{quran[progressRef.id-1].verses[progressRef.verse-1].translation[settingsRef.lang]}}
    </div>

    <br>
    <div id="pagination">
      <button @click.prevent="decrement">prev</button>
      {{progressRef.verse}} of {{progressRef.maxVerse}}
      <button @click.prevent="increment">next</button>
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
.page{
  /* background-color: red; */
}
#pagination {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  /* background-color: blue; */
  width: 100%;
  position: absolute;
  padding: 35px 10px;
  bottom:0;
}
</style>
