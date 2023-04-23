<template>
  <nav class="navbar-container">
    <div class="navbar">
      <div class="links-container">
        <div class="menu-toggle" @click="toggleMenu">
          <i v-if="!isMenuOpen" class="fas fa-bars fa-2x"></i>
          <i v-if="isMenuOpen" class="fas fa-x fa-2x"></i>        
        </div>
        <ul class="desktop-links">
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/print-shop">Prints</router-link></li>
          <li><router-link to="/workshops">Workshops</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="logo-container">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
          <span class="title">Rohlfing Wildlife</span>
        </router-link>
      </div>
      <div class="social-container">
        <a href="https://www.instagram.com/rohlfingwildlife" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/rohlfingwildlife" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.etsy.com/shop/rohlfingwildlife" target="_blank">
          <i class="fab fa-etsy"></i>
        </a>
      </div>
    </div>
    <template v-if="isMenuOpen">
      <ul class="mobile-menu" ref="menuContainer">
        <li><router-link to="/portfolio" @click="toggleMenu">Portfolio<i class="fas fa-caret-right"></i></router-link></li>
        <li><router-link to="/print-shop" @click="toggleMenu">Prints<i class="fas fa-caret-right"></i></router-link></li>
        <li><router-link to="/workshops" @click="toggleMenu">Workshops<i class="fas fa-caret-right"></i></router-link></li>
        <li><router-link to="/about" @click="toggleMenu">About<i class="fas fa-caret-right"></i></router-link></li>
        <li><router-link to="/contact" @click="toggleMenu">Contact<i class="fas fa-caret-right"></i></router-link></li>

        <div class="social-container">
          <a href="https://www.instagram.com/rohlfingwildlife" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/rohlfingwildlife" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.etsy.com/shop/rohlfingwildlife" target="_blank">
            <i class="fab fa-etsy"></i>
          </a>
        </div>
      </ul>
    </template>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu(e) {
      e.stopPropagation()
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    handleClickOutside(event) {
      if (!this.isMenuOpen) return

      if (!this.$refs.menuContainer.contains(event.target)) {
        this.isMenuOpen = false;
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
  }
}
</script>


<style lang="scss">
.navbar-container {
  
  .navbar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 0px 20px;
    
    .hero-content {
      text-align: center;
      color: white;
      padding: 100px 2rem 2rem 2rem;
      background-color: rgba(0, 0, 0, 0.5);
      max-width: 100%;
    }

    .menu-toggle {
      display: none;
      cursor: pointer;
      color: white;
    }

    .links-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .desktop-links {
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

      @media (max-width: 1080px) {
        .desktop-links {
          display: none;
        }

        .menu-toggle {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    margin: 0;
    padding: 0;
    
    li {
      margin: 0;
      padding: 20px 10px;
      display: flex;
      justify-content: center;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 24px;

        &:hover {
          color: #000;
        }

        .fa-caret-right {
          margin-left: 10px;
        }
      }
    }

    .social-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 45px;
      padding: 10px 25px;
      border-top: 1px solid black;

      a {
        margin: 0;
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
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 20px;
      
      .title {
        font-family: 'wildwest', sans-serif;
        font-size: 64px;  
        color: white;
        display: inline-block;
        position: relative;
        text-decoration: none;
        font-size: 2em;

        /* Add some padding to create space for the underline */
        padding-bottom: 0.2em;

        &::after {
          /* Create a pseudo-element to represent the underline */
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background-image: linear-gradient(
            to left,
            transparent 0%,
            #fff 80%
          );
          /* Adjust the curve of the underline */
          border-radius: 10px;
        }
      }

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

    @media (max-width: 768px) {
      display: none;
    }

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
