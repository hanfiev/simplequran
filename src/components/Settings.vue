<template>
<div>
  <div id="header">
    Pengaturan
  </div>
  <div class="settingsGroup" id="user">
    User
  </div>
  <div id="settings">
    <div class="settingsGroup"  id="language">
      <div class="item" @click.prevent="langSwitch('en')">English</div>
      <div class="item" @click.prevent="langSwitch('id')">Indonesia</div>
    </div>
    <hr>
    <div class="settingsGroup"  id="appearance">
      <div class="toggleSection">
        <div class="label">Ayat</div>
        <div id="verseToggle"><Toggle class="ctoggle" v-model="settings.verse" /></div>
      </div>
      <div class="toggleSection" >
        <div class="label">Transliterate</div>
        <div id="transliterateToggle"><Toggle class="ctoggle" v-model="settings.transliterate" /></div>
      </div>
      <div class="toggleSection" >
        <div class="label">Translasi</div>
        <div id="translationToggle"><Toggle class="ctoggle" v-model="settings.translation" /></div>
      </div>
      <div class="toggleSection" >
        <div class="label">Mode Gelap</div>
        <div id="darkmodeToggle"><Toggle class="ctoggle" v-model="settings.darkMode" /></div>
      </div>

    </div>
    <hr>
    <div class="settingsGroup"  id="others">
      <div class="settingsGroup" id="donation">
        Donasi
      </div>
      <div class="settingsGroup" id="about">
        Tentang Aplikasi
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Toggle from '@vueform/toggle'
import { ref } from '@vue/reactivity'
import Localbase from 'localbase'
import { watch } from '@vue/runtime-core'


export default {
  props:['settings'],
  components:{Toggle},
  setup(props){
    const settings = ref(props.settings)
    let db = new Localbase('db')

    watch(settings.value,() => {
       db.collection('settings').doc('settings').update(settings._rawValue)
    })

    const langSwitch = (lang) => {
      settings.value.lang = lang
    }

    return {settings,db, langSwitch}
  }
}
</script>

<style>
#header{
  font-weight: bold;
}

.toggleSection{
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}

.settingsGroup{
  padding: 15px 0px;
}

.item{
  padding: 10px 0px;
  
}
:root {
  --toggle-bg-on: #3CB8FF;
  --toggle-border-on: #3CB8FF;
}

.ctoggle:focus{

    border: none;
    outline: none;

}
</style>
<style src="@vueform/toggle/themes/default.css"></style>