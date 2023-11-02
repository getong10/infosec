<template>
  <div class="manage-DB" v-if="statusPage === 'registration'">
    <div class="buttons">
      <type-button @click="statusPage = 'roles'; this.role = 'Пользователь'">Войти как пользователь</type-button>
      <type-button @click="statusPage = 'roles'; this.role = 'Администратор'">Войти как администратор</type-button>
    </div>
    <home-button></home-button>
    <anonymous-modal text-message='<p>Роль администратора ты уже попробовал. Теперь можешь выбрать роль пользователя.</p>'></anonymous-modal>
  </div>
  <div v-if="statusPage === 'roles'" class="manage-DB">
    <div class="role-panel">
      <span><b class="bold">Роль:</b> {{ role }}</span>
      <img src="@/assets/img/exit.svg" alt="exit" @click="statusPage = 'registration'" class="svg-exit"/>
    </div>
    <div class="column-container">
      <div class="column-1">
        <h2>Полученные данные:</h2>
        <textarea class="input-data" placeholder="Таблица" v-model="table" readonly/>
      </div>
      <div class="column-2">
        <h2>Ввод SQL-запросов:</h2>
        <textarea autocomplete="off" placeholder="SQL-запрос" class="input-sql" v-model="query"/>
        <type-button @click="sendSQLQuery">Отправить запрос</type-button>
      </div>
    </div>
    <home-button></home-button>
    <anonymous-modal v-if="role === 'Администратор'" text-message='<p>Привет! Я – анонимус.</p> <p>Сейчас Вы являетесь администратором базы данных (БД). Админ имеет право изменять, получать, обновлять и удалять все данные из БД.</p>
<p>Попробуйте получить данные из таблицы Товары с помощью запроса:<br/> SELECT * FROM Products;</p>
<p>Также Вы можете попробовать обновить поле таблицы Товары с помощью SQL-запроса: UPDATE Products SET Price=5000 WHERE id = 3;<br/>SELECT * FROM Products;</p>
<p>Посмотрите как изменилось значение Price в третьей записи.</p>
<p>Нажмите на иконку выхода из роли Администратора.</p>'></anonymous-modal>
    <anonymous-modal v-if="role === 'Пользователь'" text-message='<p>Вы - обычный пользователь, который имеет право только на чтение данных из БД.</p>
<p>Попробуйте получить данные из таблицы Товары с помощью запроса: SELECT * FROM Products;</p>
<p>А теперь попробуйте изменить данные: UPDATE Products SET Price=8000 WHERE id=3; SELECT * FROM Products;</p>
<p>Как видите, ничего не изменилось, т.к. у Вас недостаточно прав для изменения данных.</p>
<p>На этом всё. Администрирование баз данных - это один из аспектов информационной безопасности баз данных.</p>'></anonymous-modal>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      role: 'Администратор',
      query: '',
      table: '',
      statusPage: 'roles'
    }
  },
  methods: {
    sendSQLQuery() {
      console.log(this.query)
      this.table = this.query
    }
  }
}
</script>

<style scoped>
.manage-DB {
  background: #EDEFEF;
  width: 100vw;
  height: 100vh;
}

.role-panel {
  position: relative;
  left: 5vw;
  top: 7vh;
  width: 20vw;
  height: 6vh;
  border-radius: 3vw;
  background: #FFF;
  filter: drop-shadow(0px 0px 25px rgba(82, 82, 82, 0.20));
  display: flex;
  font-size: 1.2vw;
  align-items: center;
  justify-content: space-around;
}

.svg-exit {
  margin-top: 0.5vh;
  width: 3.5vh;
  height: 3.5vh;
  cursor: pointer;
}

.bold {
  font-weight: 800;
}

.column-container {
  outline: none;
  border: none;
  display: flex;
  justify-content: space-around;
  margin-top: 10vh;
  column-count: 2;
}

.column-1, .column-2 {
  flex: 1;
  text-align: center;
}

textarea {
  margin-top: 2vh;
  width: 45vw;
  padding: 1vw;
  border: none;
  border-radius: 1vw;
  font-size: 1.2rem;
  resize: none;
}

.input-data {
  height: 70vh;
  font-size: 1rem;
  cursor: default;
}

textarea:focus {
  outline: none;
}

.type-button {
  margin-top: 2vh;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
