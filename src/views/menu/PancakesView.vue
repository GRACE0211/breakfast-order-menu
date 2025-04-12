<template>
  <div class="main-view">
    <div class="product-list">
      <div v-for="product in pancakes" :key="product.id" class="product-card">
        <img :src="product.image" alt="product" class="product-image" />
        <div class="product-details">
          <div class="product-title">{{ product.title }}</div>
          <div class="product-description">{{ product.description }}</div>
          <div class="product-price">${{ product.price }}</div>
          <button class="add-to-cart-btn" @click="handleAdd(product)">
            Add To Cart<span v-if="getCount(product)"> ( {{ getCount(product) }} )</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PancakesView',
  props: ['cart'],
  emits: ['add-to-cart'],
  data() {
    return {
      pancakes: [],
    }
  },
  methods: {
    handleAdd(product) {
      // 1. 顯示括號用的 count 自增
      if (!product.count) product.count = 0
      product.count++

      // 2. 實際加入購物車（傳給 parent）
      this.$emit('add-to-cart', product)
    },
    getCount(product) {
      const item = this.cart.find((p) => p.id === product.id)
      return item ? item.count : 0
    },
  },
  mounted() {
    fetch('data/data.json') // ✅ 相對路徑讓 GitHub Pages 可用
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data.json')
        return res.json()
      })
      .then((data) => {
        this.sandwiches = data
          .filter((item) => item.type === 'Sandwiches')
          .map((item) => ({ ...item, count: 0 }))
      })
      .catch((err) => {
        console.error('Fetch error:', err)
      })
  },
}
</script>
<style scoped>
.main-view {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.product-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.product-card {
  display: flex;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 33.33%;
  object-fit: cover;
  border-top-left-radius: 16px;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  flex: 1;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  color: #5a2e0d;
}

.product-description {
  font-size: 14px;
  color: #8b5e3c;
  margin-top: 4px;
}

.product-price {
  font-size: 16px;
  font-weight: 600;
  color: #5a2e0d;
  margin-top: 8px;
}

.add-to-cart-btn {
  margin-top: 12px;
  padding: 6px 16px;
  background-color: #eab308;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;
}

.add-to-cart-btn:hover {
  background-color: #ca8a04;
}
@media (max-width: 768px) {
  .main-view {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px; /* 預留空間避免 nav 擋到 */
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 固定兩列 */
    gap: 20px;
  }

  /* 每張卡片 */
  .product-card {
    display: flex;
    flex-direction: column; /* 卡片內容上下堆疊 */
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }

  .product-card:hover {
    transform: scale(1.02); /* 滑過微放大 */
  }

  /* 讓圖片等比例縮放（上方） */
  .product-image {
    width: 100%;
    height: auto;
    aspect-ratio: 3.9/4; /* 設定比例（可調） */
    object-fit: fill;
  }

  /* 卡片下方文字 */
  .product-details {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  .product-title {
    font-size: 18px;
    font-weight: bold;
    color: #5a2e0d;
  }

  .product-description {
    font-size: 14px;
    color: #8b5e3c;
    margin-top: 4px;
  }

  .product-price {
    font-size: 16px;
    font-weight: 600;
    color: #5a2e0d;
    margin-top: 8px;
  }

  .add-to-cart-btn {
    margin-top: 12px;
    padding: 6px 16px;
    background-color: #eab308;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s;
  }

  .add-to-cart-btn:hover {
    background-color: #ca8a04;
  }
}
</style>
