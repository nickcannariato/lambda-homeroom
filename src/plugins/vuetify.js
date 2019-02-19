import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#a6172d',
    secondary: '#d3e0f7',
    accent: '#181842',
    error: '#CA1C36',
    info: '#2196F3',
    success: '#22C322',
    warning: '#E9B12F'
  }
})
