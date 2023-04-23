<template>
  <div class="hero-section">
    <div class="hero-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div class="hero-content">
        <h1 v-if="title" class="hero-title">{{ title }}</h1>
        <p v-if="description" class="hero-description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
}

.hero-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center 30%; /* Move image down by 20% of its container height */
}

.hero-content {
  text-align: center;
  color: white;
  margin-top: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 100%;
}
</style>
