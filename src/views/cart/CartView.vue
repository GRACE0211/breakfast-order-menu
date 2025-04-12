<template>
  <div class="cart-container">
    <h2 class="cart-title">🛒 購物車</h2>
    <div v-if="cart && cart.length > 0" class="cart-list">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="getImageUrl(item.image)" alt="product" class="cart-item-image" />
        <div class="cart-item-info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <div class="cart-item-controls">
            <div class="qty-controls">
              <button @click="$emit('decrease', item)">-</button>
              <span>{{ item.count }}</span>
              <button @click="$emit('increase', item)">+</button>
            </div>
            <span class="subtotal">= ${{ item.price * item.count }}</span>
            <button class="delete-btn" @click="$emit('remove', item)">
              <img
                src="https://img.icons8.com/?size=100&id=11767&format=png&color=FFFFFF"
                alt="trash-can"
                class=""
              />
            </button>
          </div>
        </div>
      </div>
      <div class="cart-total">總金額：$ {{ totalPrice }}</div>
    </div>
    <div v-else class="cart-empty">目前購物車是空的 😢</div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['increase', 'decrease', 'remove'], // ← 少了這個逗號！！
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.count, 0)
    },
  },
  methods: {
    getImageUrl(path) {
      return import.meta.env.BASE_URL + path
    },
  },
}
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 50px auto 40px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cart-title {
  font-size: 24px;
  margin-bottom: 16px;
  color: #5a2e0d;
  text-align: center;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-item {
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 12px;
}

.cart-item-image {
  width: 120px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
}
.cart-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-item-info h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.cart-item-info p {
  font-size: 14px;
  color: #777;
  margin: 4px 0;
}

.cart-item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.subtotal {
  font-weight: bold;
  color: #5a2e0d;
  margin-left: auto; /* 👈 這樣會推到最右邊 */
}

.cart-total {
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
  color: #5a2e0d;
}

.cart-empty {
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #777;
  margin-top: 40px;
}
.qty-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-controls button {
  padding: 4px 10px;
  font-weight: bold;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.qty-controls button:hover {
  background-color: #ccc;
}

.delete-btn {
  /* margin-left: 12px; */
  background-color: #dc0000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.delete-btn > img {
  width: 20px;
  height: 20px;
  padding: 3px 0 2px;
}

.delete-btn:hover {
  background-color: #a50101;
}
</style>
