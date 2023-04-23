
<template>
    <div class="homepage">
      <router-view />
      <HeroSection
        class="hero-section"
        :imageUrl="require('@/assets/hero-image.jpg')"
      />
      <div class="thumbnail-grid">
        <img src="@/assets/one.jpg" />
        <img src="@/assets/two.jpg" />
        <img src="@/assets/three.jpg" />
        <img src="@/assets/four.jpg" />
        <img src="@/assets/five.jpg" />
        <img src="@/assets/six.jpg" />
        <img src="@/assets/seven.jpg" />
        <img src="@/assets/eight.jpg" />
      </div>
    </div>
  </template>



<script>
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection
  }
}
</script>

<style lang="scss">
.navbar {
  box-shadow: none;
}

.homepage {
  margin-top: -100px;
}

.hero-section {
  max-height: 85vh;
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid black;
    padding: 15px;
  }
}
</style>