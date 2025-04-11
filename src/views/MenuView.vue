<template>
  <div class="">
    <!-- Header -->
    <header class="">
      <div class="title">THE SUNNY RESTAURANT</div>
      <div class="title-nav">
        <!-- <a href="#menu">MENU</a> -->
        <img
          src="https://img.icons8.com/?size=100&id=84926&format=png&color=FFFFFF"
          alt="cart"
          class="cart-icon-img"
          @click="goToCart"
        />
        <img
          src="https://img.icons8.com/?size=100&id=98957&format=png&color=FFFFFF"
          alt="cart"
          class="cart-icon-img"
        />
      </div>
    </header>

    <!-- Menu Toggle Button (手機版才顯示) -->
    <button class="menu-toggle" @click="toggleNav">☰</button>

    <!-- Sidebar + Main -->
    <div class="">
      <!-- Sidebar / Categories -->
      <aside class="">
        <div class="nav-div" v-if="navOpen || isDesktop">
          <router-link
            v-for="item in categories"
            :key="item"
            :to="`/menu/${item.toLowerCase()}`"
            class="nav-link"
          >
            <p>{{ item }}</p>
          </router-link>
        </div>
      </aside>

      <!-- Dynamic Category View -->
      <main class="">
        <!-- <router-view @add-to-cart="addToCart" /> -->
        <router-view
          :cart="cart"
          @add-to-cart="addToCart"
          @increase="(item) => item.count++"
          @decrease="(item) => (item.count = Math.max(1, item.count - 1))"
          @remove="(item) => (cart = cart.filter((p) => p.id !== item.id))"
        />
      </main>
    </div>

    <!-- Floating Cart Icon -->
    <div class="cart-icon" @click="goToCart">
      <img
        src="https://img.icons8.com/?size=100&id=84926&format=png&color=FFFFFF"
        alt="cart"
        class="cart-icon-img"
      />
      <div class="cart-count">
        {{ totalCartCount }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuView',
  data() {
    return {
      categories: [],
      allProducts: [],
      cart: [],
      navOpen: false,
      isDesktop: window.innerWidth > 768,
    }
  },
  computed: {
    totalCartCount() {
      return this.cart.reduce((total, item) => total + item.count, 0)
    },
  },
  methods: {
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id)
      if (existing) {
        existing.count++
      } else {
        this.cart.push({ ...product, count: 1 })
      }
    },
    goToCart() {
      this.$router.push('/cart')
    },
    toggleNav() {
      this.navOpen = !this.navOpen
    },
    handleResize() {
      this.isDesktop = window.innerWidth > 768
      if (this.isDesktop) this.navOpen = false
    },
  },
  mounted() {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        this.allProducts = data.map((p) => ({ ...p, count: 0 }))
        this.categories = [...new Set(data.map((p) => p.type))]
      })

    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style scoped>
.title {
  font-weight: bolder;
  color: #ffffff;
}
.menu-toggle {
  display: none;
  position: fixed;
  /* top: 200px; */
  left: 16px;
  z-index: 1001;
  background: #d19112;
  color: white;
  border: none;
  font-size: 20px;
  padding: 12px 12px;
  border-radius: 6px;
}

.nav-div {
  background-color: rgb(215, 215, 215);
  position: fixed;
  border-radius: 10px;
  top: 100px;
  left: 15px;
  z-index: 999;
  padding: 2px 10px;
}

.nav-link {
  text-decoration: none;
  color: #311a1a;
  border-bottom: 1px solid;
  border-color: rgb(179, 178, 178);
  font-weight: bold;
  display: block;
  padding: 0px 20px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(209, 145, 18);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

header > .title-nav {
  margin-right: 50px;
}

header > .title-nav > img {
  margin: 0px 5px;
}

main {
  width: 85%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
}

.cart-icon {
  position: fixed;
  bottom: 60px;
  right: 40px;
  width: 48px;
  height: 48px;
  background-color: #6b3f1d;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;
}

.cart-icon-img {
  width: 27px;
  height: 27px;
  object-fit: contain;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -7px;
  width: 24px;
  height: 24px;
  background-color: #facc15; /* tailwind yellow-400 對應色 */
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  main {
    margin-top: 60px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .menu-toggle {
    display: block;
    top: 3px;
    left: 0px;
  }

  .nav-div {
    top: 45px;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: 0;
    text-align: center;
    padding: 10px 0;
  }
  header > .title {
    padding-left: 20px;
  }
}
</style>
