import { createSlice, configureStore } from '@reduxjs/toolkit'

import { lang_en } from '../assets/data/locales/en'
import { lang_fr } from '../assets/data/locales/fr'
import { lang_de } from '../assets/data/locales/de.js'
import { lang_it } from '../assets/data/locales/it.js'
import { lang_sp } from '../assets/data/locales/sp.js'
import { lang_lt } from '../assets/data/locales/lt.js'

const app_languages = {
  en: lang_en,
  fr: lang_fr,
  de: lang_de,
  it: lang_it,
  sp: lang_sp,
  lt: lang_lt
}

const appSlice = createSlice({
  name: 'coyaba-app',
  initialState: {
    lowcarbon: false,
    theme: 'dark',
    headerTheme: null,
    locale: "",
    languages: app_languages["en"],
    openModal: false,
    currentModal: null,
    modalProps: null,
    openMobileNav: false,
    metaData: {
      themeColor: '#12274C'
    }
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setHeaderTheme: (state, action) => {
      state.headerTheme = action.payload
    },
    setLocale: (state, action) => {
      state.locale = action.payload.locale === 'en' ? '' : action.payload.locale;
      state.languages = app_languages[action.payload.locale];
    },
    openModal: (state, action) => {
      state.openModal = true;
      state.currentModal = action.payload.currentModal;
      state.modalProps = action.payload.modalProps;
    },
    closeModal: (state, action) => {
      state.openModal = false;
      state.currentModal = null;
      state.modalProps = null;
    },
    openMobileNav: (state, action) => {
      state.openMobileNav = action.payload;
    },
    setMetaData: (state, action) => {
      state.metaData = action.payload
    }
  }
})

export const { 
  setTheme,
  setLocale,
  setHeaderTheme,
  setCollapsed,
  openModal,
  closeModal,
  openMobileNav,
  setMetaData
} = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;