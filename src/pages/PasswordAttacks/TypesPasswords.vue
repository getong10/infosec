<template>
  <div class="back">
    <div class="content" v-if="content === 'first'">
      <h1>Полный перебор <span>(Brute Force)</span></h1>
      <p>Допустим, есть 4-значный пароль: <span>abcd</span></p>
      <p>Если в пароле возможен следующий список символов:<br/> <span>0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
      </p>
      <p>При полном переборе надо проверить все возможные комбинации символов от <span>0000 до ZZZZ.</span></p>
      <p>В худшем случае количество всех возможных комбинаций: 62*62*62*62 = <span>14 776 336</span>, так как длина
        пароля 4 символа, а количество букв алфавита 62.</p>
      <anonymous-modal text-message="<p>Типичный способ перебора паролей – это полный перебор всех возможных комбинаций.</p>
      <p>Требует много времени и ресурсов.</p>"></anonymous-modal>
      <secondary-button @click="content = 'second'" style="position: absolute; left: 21vw; bottom: 5vh">Другой метод ⟶
      </secondary-button>
    </div>

    <div class="content" v-if="content === 'second'">
      <h1>Подбор со словарём <span>(Dictionary Attack)</span></h1>
      <p>1 шаг. Сбор или поиск словаря</p>
      <p>Злоумышленник обычно использует словарь, который может включать в себя общие слова, известные пароли, их
        вариации, слова на разных языках, и другие комбинации. Обычно такие словари создаются с помощью <span>частотного
        анализа</span> распределения символов в пароле.</p>
      <p>2 шаг. Попытка входа с использованием словаря</p>
      <p>Злоумышленник последовательно проверяет каждый элемент словаря, пытаясь ввести их в систему в качестве пароля,
        пока не достигнет успеха.</p>
      <p></p>
      <p>Пример <span>словаря популярных паролей:</span></p>
      <ol type="1">
        <li>123456</li><li>12345</li><li>123456789</li><li>password</li><li>iloveyou</li><li>princess</li>
        <li>1234567</li><li>rockyou</li><li>abc123</li><li>nicole</li><li>daniel</li><li>babygirl</li>
        <li>monkey</li><li>lovely</li><li>jessica</li><li>654321</li><li>ashley</li><li>qwerty</li>
        <li>111111</li><li>iloveu</li><li>000000</li><li>michelle</li><li>tigger</li><li>sunshine</li>
        <li>password1</li><li>soccer</li><li>anthony</li><li>friends</li><li>butterfly</li><li>purple</li>
        <li>angel</li><li>jordan</li>
      </ol>
      <anonymous-modal text-message="<p>Ещё один способ перебора паролей – это использование заранее подготовленного словаря с часто используемыми паролями.</p>
<p>Требует меньше времени, чем брутфорс.</p>"></anonymous-modal>
      <secondary-button @click="content = 'third'" style="position: absolute; left: 21vw; bottom: 5vh">Другой метод ⟶
      </secondary-button>
    </div>

    <div class="content" v-if="content === 'third'">
      <h1>Отслеживание нажатий клавиш <span>(Keylogger)</span></h1>
      <p>Кейлоггер - это программа или устройство (между клавиатурой и компьютером), которое записывает <span>события нажатия клавиш на клавиатуре.</span></p>
      <p>Кейлоггеры обычно работает <span>в фоновом режиме</span> и записывает нажатия клавиш в специальный журнал, который может быть просмотрен и анализирован злоумышленником.</p>
      <h2 style="text-align: center">Общая схема работы кейлоггера</h2>
      <img src="/assets/img/schemaKeylogger.png" class="schema"/>
      <anonymous-modal text-message="<p>Типичный способ перебора паролей – это полный перебор всех возможных комбинаций.</p>
      <p>Требует много времени и ресурсов.</p>"></anonymous-modal>
      <secondary-button @click="content = 'fourth'" style="position: absolute; left: 21vw; bottom: 5vh">Другой метод ⟶
      </secondary-button>
    </div>

    <div class="content" v-if="content === 'fourth'">
      <h1>Анимация перебора значений по времени<br/><span>(Timing Attack)</span></h1>
      <p>Допустим, есть 4-значный пароль: <span>abcd</span></p>
      <p>Если в пароле возможен следующий список символов:<br/> <span>0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
      </p>
      <p>При полном переборе надо проверить все возможные комбинации символов от <span>0000 до ZZZZ.</span></p>
      <p>В худшем случае количество всех возможных комбинаций: 62*62*62*62 = <span>14 776 336</span>, так как длина
        пароля 4 символа, а количество букв алфавита 62.</p>
      <anonymous-modal text-message="<p>Типичный способ перебора паролей – это полный перебор всех возможных комбинаций.</p>
      <p>Требует много времени и ресурсов.</p>"></anonymous-modal>
      <secondary-button @click="animation = 'stop'" v-if="animation === 'start'" svg-prop="PlayArrow.svg"
                        style="position: absolute; left: 21vw; bottom: 5vh ">Запустить анимацию
      </secondary-button>
      <secondary-button @click="animation = 'start'" v-if="animation === 'stop'" svg-prop="Stop.svg"
                        style="position: absolute; left: 21vw; bottom: 5vh ">Остановить анимацию
      </secondary-button>
    </div>
    <secondary-button @click='$router.push(`/passwordAttack`)' svg-prop="Home.svg">Вернуться на главную
    </secondary-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      content: "first",
      animation: "start"
    }
  }
}
</script>

<style scoped>
.back {
  background-color: #EDEFEF;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.content {
  width: 92vw;
}

span {
  color: #38691B
}

h1 {
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 3vh;
}

h2 {
  margin-bottom: 10vh;
}

p {
  font-size: larger;
  margin-bottom: 2vh;
}

ol {
  columns: 4;
  font-size: x-large;
  height: 35vh;
}

li {
  position: relative;
  left: 4vw;
}

.schema {
  width: 90vw
}
</style>
