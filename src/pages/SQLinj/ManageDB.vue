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
      <img src="/assets/img/exit.svg" alt="exit" @click="statusPage = 'registration'" class="svg-exit"/>
    </div>
    <div class="column-container">
      <div class="column-1">
        <h2>Полученные данные:</h2>
        <div class="response-table">
          <table>
            <thead>
            <tr>
              <th v-for="header in tableHeaders" :key="header">
                {{ header }}
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in table" :key="item.id">
              <td v-for="header in tableHeaders" :key="header">
                {{ item[header] || 'Нет данных' }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div class="column-2">
        <h2>Ввод SQL-запросов:</h2>
        <div class="text-input">
          <textarea autocomplete="off" placeholder="SQL-запрос (Отправка запроса Alt + Enter)" class="input-sql" v-model="query" @keyup.alt.enter="sendSQLQuery" title="Отправка запроса Alt + Enter"/>
          <div class="sendButton" @click="sendSQLQuery">
            <img alt="Send" src="public/assets/img/PlayArrow.svg" />
          </div>
        </div>
      </div>
    </div>
    <home-button></home-button>
    <anonymous-modal v-if="role === 'Администратор'" text-message='<p>Сейчас Вы являетесь администратором базы данных (БД). Админ имеет право изменять, получать, обновлять и удалять все данные из БД.</p>
<p>Попробуйте получить данные из таблицы Товары с помощью запроса:<br/> SELECT * FROM Products;</p>
<p>Также Вы можете попробовать обновить поле таблицы Товары с помощью SQL-запроса: UPDATE Products SET Price=5000 WHERE id = 3;<br/>Затем выполните SELECT * FROM Products;</p>
<p>Посмотрите как изменилось значение Price в третьей записи.</p>
<p>Нажмите на иконку выхода из роли Администратора.</p>'></anonymous-modal>
    <anonymous-modal v-if="role === 'Пользователь'" text-message='<p>Вы - обычный пользователь, который имеет право ТОЛЬКО на чтение данных из БД.</p>
<p>Получите данные из таблицы Товары: SELECT * FROM Products;</p>
<p>А теперь попробуйте изменить данные: UPDATE Products SET Price=8000 WHERE id=3;<br/>И посмотрите на результат<br/>SELECT * FROM Products;</p>
<p>Как видите, ничего не изменилось, т.к. у Вас недостаточно прав для изменения данных.</p>
<p>На этом всё. Администрирование баз данных - это один из аспектов информационной безопасности баз данных.</p>'></anonymous-modal>
  </div>
</template>

<script>
import {BACKEND_URL} from "@/constants";

export default {
  data() {
    return {
      role: 'Администратор',
      query: '',
      table: [],
      statusPage: 'roles',
      tableHeaders: []
    }
  },
  methods: {
    async sendSQLQuery() {
      try {
        let res = await fetch(`${BACKEND_URL}/query`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept' : '*/*'
          },
          body: JSON.stringify(this.objectQuery)
        })
        if (res.ok) {
          let response = await res.json()
          console.log(res)
          console.log(response)
          this.table = response.response
          if (this.table.length > 0) {
            this.tableHeaders = Object.keys(this.table[0]);
          }
        } else {
          console.log("Ошибка запроса", res.status)
        }
      } catch (e) {
        alert(e)
      }
    },
  },
  computed: {
    objectQuery() {
      return {
        query: this.query,
        role_id: this.role === 'Администратор' ? '3' : '1'
      }
    },
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

.column-1 {
  flex: 1;
  text-align: center;
}

.column-2 {
  flex: 1;
  text-align: center;
}

.text-input {
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 2vh;
}

textarea {
  width: 40vw;
  padding: 1vw;
  border: none;
  border-radius: 1vw;
  font-size: 1.2rem;
  resize: none;
}

textarea:focus {
  outline: none;
}

.type-button {
  margin-top: 2vh;
}
.sendButton {
  background-color: #92E3A9;
  border-radius: 1vw;
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

table,
th,
td {
  border: 1px solid #92E3A9;
  border-radius: 0.5vw;
}

table {
  width: 45vw;
  padding: 2vw;
  border: none;
  font-size: 1.2rem;
  resize: none;
}

th {
  position: sticky;
  top: 0;
  background-color: #92E3A9;
  padding: 1vh;
}
td:hover {
  background-color: #f6fff5;
}

.response-table {
  background-color: white;
  margin-left: 2vw;
  margin-top: 1vw;
  max-width: 50vw;
  max-height: 75vh;
  overflow: scroll;
  border-radius: 1vw;
}

.response-table::-webkit-scrollbar {
  width: 2.5vh;
  height: 2.5vh;
}

.response-table::-webkit-scrollbar-thumb {
  background-color: #92E3A9;
  border-radius: 1vw;
  border: 4px solid white;
}

.response-table::-webkit-scrollbar-thumb:hover {
  background-color: #8cd2a0;
}

.response-table::-webkit-scrollbar-track {
  min-width: 1.5vh;
}

.response-table::-webkit-scrollbar-corner {
  border-radius: 1vw;
}
</style>
