<template>
  <div class="full-page">
    <div class="authentication" v-if="!isAuth">
      <div class="header-wb">
        <h1 @click="$router.push('/menu')" class="logo">CULTUREBERRIES</h1>
        <div class="search-field">
          <img src="@/assets/img/searchIcon.svg"/>
          <input placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Поиск" class="wb-search" disabled/>
        </div>
      </div>
      <div class="form-auth">
        <h1 class="text-header">Вход</h1>
        <input placeholder="Логин"/>
        <input placeholder="Пароль"/>
        <button @click="changeAuth">Войти</button>
      </div>
      <anonymous-modal text-message="<p>Самая популярная уязвимость при входе это SQL-запрос на сравнение логина и хеша пароля в базе данных, выглядит он так: SELECT username, hashPass FROM users WHERE username='$uname' AND hashPass='$hashPass'</p>
      <p>$uname и $hashPass – переменные, значение которых передаются из полей логин и пароль.</p>
      <p>По привычке для администратора разработчики установили $uname как admin. Вставьте admin'-- в поле “Логин”, так вторая часть условия с паролем станет комментарием.</p>
      <p>В таком случае проверка покажет истину, так как в запросе сложится следующее условие: WHERE username='admin'--' AND hashPass=''</p>"></anonymous-modal>
    </div>
    <div class="pageShop" v-else>
      <div class="header-wb">
        <h1 @click="$router.push('/menu')" class="logo">CULTUREBERRIES</h1>
        <div class="search-field">
          <img src="@/assets/img/searchIcon.svg" v-if="!inputFocused"/>
          <input placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Поиск" class="wb-search"
                 @focus="handleInputFocus"
                 @blur="handleInputBlur"/>
        </div>
      </div>
    </div>
    <secondary-button @click='$router.push(`/menu`)' svg-prop="Home.svg">Вернуться на главную</secondary-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuth: false,
      inputFocused: false
    }
  },
  methods: {
    changeAuth() {
      this.isAuth = !this.isAuth
    },
    handleInputFocus() {
      this.inputFocused = true;
    },
    handleInputBlur() {
      this.inputFocused = false;
    },
  }
}
</script>

<style scoped>
.full-page {
  background-color: #EDEFEF;
  width: 100vw;
  height: 100vh;
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
  width: 60vw;
  height: 6vh;
  border: none;
  padding-left: 1vw;
}

.wb-search::placeholder {
  color: white;
}

.wb-search:focus {
  border: none;
  outline: none;
  color: #FFFFFF;
}

.wb-search:focus::placeholder {
  color: #F183EF;
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

.form-auth button {
  border: none;
  border-radius: 1vw;
  background-color: #B535B8;
  color: white;
  width: 25vw;
  cursor: pointer;
  height: 5.2vh;
}

.form-auth button:hover {
  background-color: #c940cc;
}

.form-auth {
  margin: 30vh auto auto;
  width: 25vw;
}

.logo {
  cursor: pointer;
}

h1 {
  text-align: center;
}

.text-header {
  font-size: x-large;
  padding-bottom: 1vh;
}
</style>
