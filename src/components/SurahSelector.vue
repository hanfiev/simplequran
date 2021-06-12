<template>
<div style="width: 100%; height:90%">
  <input id="search" placeholder="search surah" type="text" v-model="search">
  <div class="surahContainer">
    <div class="surah" v-for="surah in surahSearch" :key="surah.id" @click="handleClick(surah)">
      <div>
        {{surah.id}}
        {{surah.name[settingsRef.lang]}} <br>
        {{surah.translation[settingsRef.lang]}}
      </div>
      <div>
        {{surah.arab}}
      </div>

    </div>
  </div>

  <br>
  <div class="progressCard" @click="continueProgress">
      <div>
        {{surahList[progressRef.id-1].name[settingsRef.lang]}} ({{progressRef.verse}} of {{progressRef.maxVerse}})
      </div>
      <div style="font-weight:bold">
        Continue
      </div>
  </div>

</div>
</template>

<script>
import {
  ref,
  computed
} from '@vue/reactivity'
import Localbase from 'localbase'

export default {
  props: ['progressRef', 'settingsRef', 'surahList'],
  setup(props, context) {
    const progress = ref()
    progress.value = props.progressRef

    let db = new Localbase('db')

    const continueProgress = () => {
      context.emit("selectSurah", context)
    }

    const handleClick = (surah) => {
      progress.value.id = surah.id
      progress.value.verse = 1
      progress.value.maxVerse = surah.verses
      db.collection('progress').doc('progress').update(progress.value)
      context.emit("selectSurah", context)
    }
    const search = ref('')
    const surahSearch = computed(() => {
      return props.surahList.filter((surah) => surah.name[props.settingsRef.lang].toUpperCase().includes(search.value.toUpperCase()))
    })

    return {
      continueProgress,
      progress,
      search,
      surahSearch,
      handleClick
    }
  }
}
</script>

<style>
#search {
  box-sizing: border-box;
  width: 100%;
  padding: 7px;
  margin: auto;
}

.surahContainer {
  /* background-color: red; */
  height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
}

.progressCard {
  padding: 15px;
  /* background-color: red; */
  background: radial-gradient(81.61% 160.38% at 51.49% 112.26%, rgba(99, 143, 185, 0.49) 0%, rgba(10, 44, 75, 0) 100%);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
}

.surah {
  padding-top: 25px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  display: flex;
  justify-content: space-between;
}

.surah:hover {
  transform: translateX(5px);
}

input {
  opacity: 0.8;
  background-color: rgb(99, 99, 99);
  outline: none;
  border: none;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  padding-left: 15px;
}
</style>
