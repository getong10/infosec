<template>
  <div class="full-page" style="overflow: auto;">
    <div class="header-wb">
      <h1 @click="$router.push('/menu')" class="logo">CULTUREBERRIES</h1>
      <div class="search-field">
        <input placeholder="Поиск" class="wb-search"
               :disabled="!isAuth"
               :style="{ cursor: isAuth ? 'text' : 'not-allowed' }"
               v-model="searchQuery"
               @keyup.enter="searching"/>
      </div>
    </div>
    <div class="authentication" v-if="!isAuth">
      <div class="form-auth">
        <h1 class="text-header">Вход</h1>
        <input placeholder="Логин" v-model="login"/>
        <input placeholder="Пароль" type="password" v-model="password"/>
        <button @click="authIn" class="wb-button">Войти</button>
      </div>
      <anonymous-modal
          text-message="<p>Самая популярная уязвимость при входе это SQL-запрос на сравнение логина и хеша пароля в базе данных, выглядит он так: SELECT username, hashPass FROM users WHERE username='$uname' AND hashPass='$hashPass'</p>
           <p>$uname и $hashPass – переменные, значение которых передаются из полей логин и пароль.</p>
           <p>По привычке для администратора разработчики установили $uname как admin. Вставьте admin'-- в поле “Логин”, так вторая часть условия с паролем станет комментарием.</p>
           <p>В таком случае проверка покажет истину, так как в запросе сложится следующее условие: WHERE username='admin'--' AND hashPass=''</p>"></anonymous-modal>
    </div>
    <div class="pageShop" v-else>
      <div class="cards">
        <div class="card-item"
             v-for="product in filteredProducts"
             :key="product"
        >
          <img class="image-product"
               :src="getPathImage(product.name)"
               :alt="'Картинка '+ product.name"
               @error="handleImageError"/>
          <span class="name-product">{{ product.name }}</span>
          <span class="price-product">{{ product.price }}₽</span>
          <button class="bucket-button">В корзину</button>
        </div>
      </div>
      <anonymous-modal
          text-message="<p>На сайте Интернет-магазина внутри поиска встроен SQL-запрос:<br/>SELECT * FROM Products <br/>WHERE name = “{$ЗначениеИзПоляПоиска}”;</p>
           <p>Разработчики не настроили администрирование и забыли сделать проверку поля на ввод посторонних символов.</p>
           <p>Поэтому в поле поиска можно вставить SQL-инъекцию и нажать Enter:<br/>“; UPDATE Products SET Price = 1 <br/>WHERE name = “Наушники</p>
           <p>Посмотрите как изменилась цена.</p>"></anonymous-modal>
    </div>
    <secondary-button @click='$router.push(`/menu`)' svg-prop="Home.svg">Вернуться на главную</secondary-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isAuth: false,
      inputFocused: false,
      searchQuery: '',
      login: '',
      password: '',
      products: []
    }
  },
  methods: {
    getPathImage(photo) {
      return `/assets/img/product-img/${photo}.jpg`;
    },
    handleImageError(event) {
      event.target.src = '/assets/img/product-img/nullPhoto.jpg';
    },
    async authIn() {
      let res = await fetch('http://localhost:1489/fail/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify(this.auth)
      })
      let response = await res.json()
      if (response.role_id === 1 || response.role_id === 2 || response.role_id === 3) {
        this.isAuth = true
      }
      await this.getAllProducts()
    },
    async getAllProducts() {
      let res = await fetch(`http://localhost:1489/fail/main/all`, {
        method: 'GET',
        headers: {
          'Accept': '*/*'
        }
      })
      console.log(res.json())
      this.products = await res.json()
    },
    async searching() {
      let res = await fetch(`http://localhost:1489/fail/main/search?name=${this.searchQuery}`, {
        method: 'GET',
        headers: {
          'Accept': '*/*'
        }
      })
      this.products = await res.json()
    },
  },
  computed: {
    auth() {
      return {
        username: this.login,
        password: this.password
      }
    },
    filteredProducts() {
      if (this.searchQuery === "") {
        return this.products
      } else {
        return this.products.filter(item => {
              return item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            }
        )
      }
    }
  }
}
</script>

<style scoped>
.full-page {
  background-color: #EDEFEF;
  width: 100vw;
  height: 100vh;
}

.full-page::-webkit-scrollbar {
  width: 0.5vw;
}

.full-page::-webkit-scrollbar-thumb {
  background-color: #B535B8;
  border-radius: 1vw;
}

.full-page::-webkit-scrollbar-track {
  background-color: #FFF;
}

.header-wb {
  background: linear-gradient(90deg, #DC06FF 7.14%, #E807C6 76.13%, #EB07B9 91.66%);
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header-wb h1 {
  color: #FFFFFF;
}

.wb-search {
  border-radius: 2vw;
  background: rgba(255, 255, 255, 0.50);
  color: white;
  width: 60vw;
  height: 6vh;
  border: none;
  padding-left: 1.5vw;
}

.wb-search::placeholder {
  color: white;
}

.wb-search:focus {
  border: none;
  outline: none;
  color: #FFFFFF;
}

.search-field img {
  position: absolute;
  left: 36vw;
  top: 3.6vh;
  cursor: text;
}

.form-auth input {
  border: none;
  border-radius: 1vw;
  padding-left: 1vw;
  width: 25vw;
  height: 5vh;
  font-weight: 500;
  margin-bottom: 1vh;
}

.form-auth input:focus {
  outline: none;
  border: 1px solid #B535B8;
}

.wb-button {
  border: none;
  border-radius: 1vw;
  background-color: #B535B8;
  color: white;
  width: 25vw;
  cursor: pointer;
  height: 5.2vh;
}

.wb-button:hover {
  background-color: #c940cc;
}

.form-auth {
  margin: 30vh auto auto;
  width: 25vw;
}

.logo {
  cursor: pointer;
  font-size: 2.1vw;
}

h1 {
  text-align: center;
}

.text-header {
  font-size: x-large;
  padding-bottom: 1vh;
}

.cards {
  width: 80vw;
  margin: 5vh auto auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-item {
  width: calc(33.33% - 5vw);
  border-radius: 2vw;
  background-color: #FFFFFF;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vw;
}

.price-product {
  font-size: x-large;
  padding: 1vh 0;
}

.image-product {
  width: 100%;
  height: 45vh;
  object-fit: cover;
  border-radius: calc(2vw - 1vh);
  margin-bottom: 1vh;
}

.bucket-button {
  border: none;
  border-radius: 1vw;
  background-color: #B535B8;
  color: white;
  width: 100%;
  cursor: pointer;
  height: 5.2vh;
}

.bucket-button:hover {
  background-color: #c940cc;
}


</style>
