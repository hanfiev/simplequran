<template>
<div style="height:90%">

  <div id="settings">
    <div class="settingsGroup" id="language">
      <div class="category">Language</div>
      <div class="item active" @click.prevent="langSwitch('en')">English</div>
      <div class="item" @click.prevent="langSwitch('id')">Indonesia</div>
    </div>
    <hr>
    <div class="settingsGroup" id="theme">
      <div class="category">Theme</div>
      <br>
      <div id="themeToggle">
        <div class="themeItem">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.88064 1.00732V1.66073V1.00732ZM6.88064 12.1152V12.7686V12.1152ZM12.7613 6.88797H12.1079H12.7613ZM1.6534 6.88797H1H1.6534ZM11.0389 11.0462L10.577 10.5843L11.0389 11.0462ZM3.18433 3.19166L2.72238 2.7297L3.18433 3.19166ZM11.0389 2.7297L10.577 3.19166L11.0389 2.7297ZM3.18433 10.5843L2.72238 11.0462L3.18433 10.5843ZM9.49426 6.88797C9.49426 7.58114 9.2189 8.24593 8.72875 8.73608C8.2386 9.22623 7.57382 9.50159 6.88064 9.50159C6.18747 9.50159 5.52268 9.22623 5.03254 8.73608C4.54239 8.24593 4.26702 7.58114 4.26702 6.88797C4.26702 6.19479 4.54239 5.53001 5.03254 5.03986C5.52268 4.54971 6.18747 4.27435 6.88064 4.27435C7.57382 4.27435 8.2386 4.54971 8.72875 5.03986C9.2189 5.53001 9.49426 6.19479 9.49426 6.88797V6.88797Z" stroke="white" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Light</div>
        <div class="themeItem active">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.501 9.07951C11.4315 9.50958 10.2592 9.61586 9.12985 9.38512C8.00046 9.15439 6.9638 8.59682 6.14871 7.78173C5.33362 6.96664 4.77605 5.92998 4.54532 4.80059C4.31458 3.67121 4.42086 2.49892 4.85093 1.42944C3.58444 1.93958 2.53485 2.87438 1.88207 4.07359C1.2293 5.2728 1.014 6.66174 1.27309 8.0023C1.53218 9.34286 2.24952 10.5516 3.30213 11.4212C4.35475 12.2908 5.67709 12.7672 7.04245 12.7686C8.21657 12.7687 9.36384 12.4174 10.3366 11.7599C11.3094 11.1025 12.0632 10.1689 12.501 9.07951Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Dark</div>
        <div class="themeItem">
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3348 10.311C11.2653 10.741 10.093 10.8473 8.96363 10.6166C7.83425 10.3858 6.79758 9.82827 5.98249 9.01318C5.1674 8.19809 4.60984 7.16142 4.3791 6.03204C4.14837 4.90266 4.25465 3.73037 4.68472 2.66089C3.41823 3.17102 2.36863 4.10582 1.71586 5.30504C1.06308 6.50425 0.847787 7.89319 1.10688 9.23375C1.36597 10.5743 2.0833 11.783 3.13592 12.6526C4.18854 13.5222 5.51087 13.9986 6.87624 14.0001C8.05036 14.0001 9.19762 13.6488 10.1704 12.9914C11.1432 12.3339 11.897 11.4004 12.3348 10.311Z" stroke="white" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.63351 1V1.6534M14.5142 6.88064H13.8608M12.7918 2.72238L12.3298 3.18433M10.4816 8.72875C10.9718 8.2386 11.2471 7.57382 11.2471 6.88064C11.2471 6.18747 10.9718 5.52268 10.4816 5.03254C9.99147 4.54239 9.32669 4.26702 8.63351 4.26702C7.94034 4.26702 7.49015 4.43028 7 4.92043" stroke="white" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          System</div>
      </div>
    </div>
    <hr>
    <div class="settingsGroup" id="appearance">
      <div class="category">Appearance</div>

      <div class="toggleSection">
        <div class="label">Ayat</div>
        <div id="verseToggle">
          <Toggle class="ctoggle" v-model="settings.verse" />
        </div>
      </div>
      <div class="toggleSection">
        <div class="label">Transliterate</div>
        <div id="transliterateToggle">
          <Toggle class="ctoggle" v-model="settings.transliterate" />
        </div>
      </div>
      <div class="toggleSection">
        <div class="label">Translasi</div>
        <div id="translationToggle">
          <Toggle class="ctoggle" v-model="settings.translation" />
        </div>
      </div>
      <div class="toggleSection">
        <div class="label">Mode Gelap</div>
        <div id="darkmodeToggle">
          <Toggle class="ctoggle" v-model="settings.darkMode" />
        </div>
      </div>

    </div>
    <hr>
    <div class="settingsGroup" id="others">
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
import {
  ref
} from '@vue/reactivity'
import Localbase from 'localbase'
import {
  watch
} from '@vue/runtime-core'

export default {
  props: ['settings'],
  components: {
    Toggle
  },
  setup(props) {
    const settings = ref(props.settings)
    let db = new Localbase('db')

    watch(settings.value, () => {
      db.collection('settings').doc('settings').update(settings._rawValue)
    })

    const langSwitch = (lang) => {
      settings.value.lang = lang
    }

    return {
      settings,
      db,
      langSwitch
    }
  }
}
</script>

<style>
#header {
  font-weight: bold;
}

#settings{
  height: 100%;
  overflow: auto;
}

.category {
  text-transform: uppercase;
  font-size: 10pt;
  font-weight: bold;
  letter-spacing: 0.1em;
  /* margin: 5px 0px; */
}

.label {
  font-size: 11pt;
  color: #BABABA;
}

.toggleSection {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}

.settingsGroup {
  padding: 15px 0px;
}

.item {
  padding: 15px 15px;
  margin: 10px 0px
}

.item.active {
  background: radial-gradient(48.79% 182.95% at 49.86% 128.41%, rgba(44, 67, 80, 0.5) 0%, rgba(36, 37, 46, 0.19) 100%);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 7px;
}

:root {
  --toggle-bg-on: #3CB8FF;
  --toggle-border-on: #3CB8FF;
}

.ctoggle:focus {

  border: none;
  outline: none;
}

hr {
  border: 0.5px solid rgba(236, 245, 255, 0.1);
}

#themeToggle {
  display: flex;
  box-sizing: content-box;
  border-radius: 7px;
  padding: 3px;
  background-color: #101119;
  justify-content: space-between;
}

.themeItem {
  text-align: center;
  /* background: radial-gradient(79.77% 91.03% at 50% 107.69%, #47476C 0%, rgba(31, 31, 39, 0) 100%); */
  width: 100%;
  margin: 3px;
  padding: 10px 0px;
  border-radius: 7px;
}

.themeItem.active {
  background: radial-gradient(79.77% 91.03% at 50% 107.69%, #47476C 0%, rgba(31, 31, 39, 0) 100%);
  border: 1px solid rgba(64, 64, 91, 0.27);
  font-weight: bold;
}
</style>
<style src="@vueform/toggle/themes/default.css"></style>
