<template>
<div style="width: 100%">
      <input id="search" type="text" v-model="search">
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
      progress,
      search,
      surahSearch,
      handleClick
    }
  }
}
</script>

<style>
#search{
  box-sizing: border-box;
  width: 100%;
  padding:7px;
  margin: auto;
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
</style>
