<template>
  <div id="app">
    <div class="nav-container">
      <NavbarSection />
    </div>
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from './components/NavbarSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavbarSection,
    FooterSection,
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  .nav-container {
    height: 100px;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

body {
  margin: 0;
}

main {
  flex-grow: 1;
}

.footer {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 14px;
}

.footer p {
  margin: 0;
}

.footer span {
  margin: 0 5px;
}
</style>
