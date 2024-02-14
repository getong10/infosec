<!-- Шаблон страницы CULTUREBERRIES -->
<template>
  <div class="full-page" style="overflow: auto;">
    <div class="header-wb">
      <h1 @click="clearSessionStorageAndNavigate" class="logo">CULTUREBERRIES</h1>
      <div class="search-field">
        <!-- Поле поиска -->
        <input placeholder="Поиск" class="wb-search"
               :disabled="!isAuth"
               :style="{ cursor: isAuth ? 'text' : 'not-allowed' }"
               v-model="searchQuery"
               @keyup.enter="searching"/>
        <!-- Кнопка с иконкой поиска -->
        <button v-if="isAuth" class="searching-button" @click="searching">
          <img src="public/assets/img/searchIcon.svg">
        </button>
      </div>
    </div>
    <!-- Форма входа -->
    <div class="authentication" v-if="!isAuth">
      <div class="form-auth">
        <h1 class="text-header">Вход</h1>
        <input placeholder="Логин" v-model="login"/>
        <input placeholder="Пароль" type="password" v-model="password"/>
        <button @click="authIn" class="wb-button">Войти</button>
      </div>
      <anonymous-modal
          text-message="<p>Самая популярная уязвимость при входе это SQL-запрос на сравнение логина и пароля в базе данных, выглядит он так: SELECT id, name, last_name, password, login, role_id</br>
          FROM users<br/>
          WHERE login = '$uname' AND password_noencoder = '$passw' AND deleted_at is null;
          </p>
           <p>$uname и $passw – переменные, значение которых передаются из полей логин и пароль.</p>
           <p>Вставьте ''' or ''''''=''' в поле “Логин” и ''' or 1=1 limit 1 offset 5-- в поле ”Пароль”.</p>
           <p>В таком случае проверка покажет истину, так как в запросе сложится следующее условие: WHERE login = '' or ''='' AND password_noencoder = '' or 1=1 limit 1 offset 5--'AND deleted_at is null;</p>"></anonymous-modal>
    </div>
    <!-- Основная страница CULTUREBERRIES -->
    <div class="pageShop" v-else>
      <!-- Список карточек товаров -->
      <div class="cards">
        <div class="card-item"
             v-for="product in products"
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
      <h2 style="text-align: center; color: grey;" v-if="products.length === 0">Товар не найден</h2>
      <anonymous-modal
          text-message="<p>На сайте Интернет-магазина внутри поиска встроен SQL-запрос:<br/>SELECT * FROM Products <br/>WHERE name = '{$ЗначениеИзПоляПоиска}';</p>
           <p>Разработчики не настроили администрирование и забыли сделать проверку поля на ввод посторонних символов.</p>
           <p>Поэтому в поле поиска можно вставить SQL-инъекцию и нажать Enter:<br/> ';  UPDATE products </br>SET price=1</br>  WHERE name='Смартфон Samsung Galaxy S21' ; SELECT'</p>
           <p>Обновите страницу и посмотрите как изменилась цена.</p>
           <p>Ещё один из вариантов – удалить таблицу Продукты:<br/>'; TRUNCATE TABLE products CASCADE; SELECT '</p>
      "></anonymous-modal>
    </div>
    <!-- Контейнер с дополнительными кнопками -->
    <div class="buttons-bottom-container">
      <secondary-button @click='clearSessionStorageAndNavigate' svg-prop="Home.svg">Вернуться на главную</secondary-button>
      <secondary-button @click='reboot' svg-prop="update.svg">Восстановить БД</secondary-button>
    </div>
  </div>
</template>
<!-- Скрипт страницы CULTUREBERRIES -->
<script>
import {BACKEND_URL} from "@/constants";

export default {
  components: {},
  // Перечисление переменных для использования в шаблоне
  data() {
    return {
      isAuth: sessionStorage.getItem('authToken') !== null, // Получение токена из памяти сессии
      searchQuery: '',
      login: '',
      password: '',
      products: []
    }
  },
  // Срабатывает при появлении компонента (проверка авторизации)
  mounted() {
    if (this.isAuth) {
      this.getAllProducts();
    }
  },
  // Методы страницы
  methods: {
    // Получение полного пути к изображению продукта
    getPathImage(photo) {
      return `/assets/img/product-img/${photo}.jpg`;
    },
    // Обработка ошибки загрузки изображения продукта
    handleImageError(event) {
      event.target.src = '/assets/img/product-img/nullPhoto.jpg';
    },
    // Очистка sessionStorage и перенаправление на главную страницу атаки
    clearSessionStorageAndNavigate() {
      if (sessionStorage) {
        sessionStorage.clear();
      }
      this.$router.push('/sql');
    },
    // Аутентификация пользователя с обращением к бекенду
    async authIn() {
      try {
        let response = await fetch(`${BACKEND_URL}/fail/log`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
          },
          body: JSON.stringify(this.auth)
        });
        if (response.ok) {
          this.isAuth = true;
          await this.getAllProducts();
          const authToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
          sessionStorage.setItem('authToken', authToken);
        } else {
          alert("Неверный логин или пароль. Статус ошибки: " + response.status);
        }
      } catch (error) {
        console.error("Ошибка во время выполнения запроса:", error);
      }
    },
    // Получение списка всех продуктов
    async getAllProducts() {
      try {
        let res = await fetch(`${BACKEND_URL}/fail/main/all`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Accept': '*/*',
          }
        })
        if (res.ok) {
          this.products = await res.json()
        } else {
          alert("Ошибка при выполнении запроса получения списка продуктов");
        }
      } catch (e) {
        console.error(e)
      }
    },
    // Поиск продуктов в базе данных
    async searching() {
      try {
        let res = await fetch(`${BACKEND_URL}/fail/main/search?name=${this.searchQuery}`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Accept': '*/*'
          }
        })
        if (res.ok) {
          this.products = await res.json()
        } else {
          alert("Ошибка при выполнении запроса поиска в базе данных");
        }
      } catch (e) {
        console.error(e)
      }
    },
    // Восстановление базы данных
    async reboot() {
      try {
        await fetch(`${BACKEND_URL}/fail/main/reboot`)
        await this.getAllProducts()
      } catch (e) {
        console.error(e)
      }
    },
  },
  computed: {
    // Вычисляемое свойство для формирования объекта аутентификации
    auth() {
      return {
        username: this.login,
        password: this.password
      }
    },
  }
}
</script>
<!-- Стили для страницы CULTUREBERRIES -->
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

.search-field {
  display: flex;
  justify-content: center;
  align-items: center;
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

.searching-button {
  width: 10vh;
  height: 6vh;
  position: relative;
  right: 2vw;
  border-radius: 2vw;
  border: none;
  cursor: pointer;
  background-color: #B535B8;
}
.searching-button:hover {
  background-color: #a831ab;
}

.searching-button img {
  margin-top: 0.5vh;
  height: 3vh;
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
  margin-left: 5vw;
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

.secondary-button {
  position: relative;
}

.buttons-bottom-container {
  display: flex;
  width: 30vw;
  position: absolute;
  justify-content: space-around;
  bottom: 0;
}
</style>
