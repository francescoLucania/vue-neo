<template>
  <div id="app">
    <router-view/>
    <right-menu :state="rightMenuState"/>
  </div>
</template>

<script>

import rightMenu from './components/common/rightMenu/RightMenu'

export default {
  name: 'app',
  data () {
    return {
      rightMenuState: '',
    }
  },
  components: {
    rightMenu
  }
}
</script>