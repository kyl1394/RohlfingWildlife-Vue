<template>
  <nav class="navbar">
    <div class="links-container">
      <ul>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/print-shop">Print Shop</router-link></li>
        <li><router-link to="/workshops">Workshops</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <div class="logo-container">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="Logo" class="logo" />
      </router-link>
    </div>
    <div class="social-container">
      <a href="https://www.instagram.com/your_instagram" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/your_facebook" target="_blank">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.etsy.com/shop/your_etsy_shop" target="_blank">
        <i class="fab fa-etsy"></i>
      </a>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .hero-content {
    text-align: center;
    color: white;
    padding: 100px 2rem 2rem 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    max-width: 100%;
  }

  .links-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin: 0 10px;

        a {
          color: #fff;
          text-decoration: none;

          &:hover {
            color: #000;
          }
        }
      }
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    a, img {
      height: 100%;
      max-height: 70px;

      svg {
        fill: white;
      }
    }
  }

  .social-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    a {
      color: #fff;
      text-decoration: none;
      margin-left: 10px;

      i {
        font-size: 24px;
      }

      &:hover {
        color: #000;
      }
    }
  }
}
</style>
