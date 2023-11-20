<template>
  <div class="chat-wrapper">
      <h2>Free <span>ChatGT</span> and Search Engine</h2>
      <div class="chat-content">
        <div v-if="isModalOpen">
          <div class="hidden-content">
            <div class="hidden-avatar-wrapper">
                <div class="hidden-avatar">
                </div>
                <span>user_nakrutchik</span>
            </div>
            <div class="hidden-bg-img">
              <img src="/assets/bg-img.png" alt="">
            </div>
            <div class="hidden-text-content">
              <div><span>user_nakrutchik</span> Поставь лайк и удача будет на твоей стороне!</div>
              <button class="btn-like"  v-if="isButtonVisible">
                <img src="/assets/like.svg" alt="">
                Like
              </button>
              <button class="btn-liked" v-else @click="toggleButton">
                <img src="/assets/liked.svg" alt="">
                Liked
              </button>
            </div>
          </div>
        </div>
        <input placeholder="Пишите вопрос сюда..." />
        <button class="btn-search" @click="toggleButton">Найти</button>
      </div>
      <div class="btn-wrapper">
          <button  @click="$router.push(`/clickjacking`)">
            <img src="/assets/home.svg" alt="" width="20px" height="20px">
            Вернуться на главную
          </button>
          <button @click="openModal">
            <img src="/assets/eye.svg" alt="" width="20px" height="20px">
            Показать скрытое окно
            </button>
      </div>
      <anonymous-modal text-message='<p>Сейчас Вы в роли жертвы.</p>
<p>Вам отправили ссылку на поисковик с искусственным интеллектом. Вы вводите запрос, нажимаете кнопку “Найти”, но ничего не происходит.</p>
<p>На самом деле кнопка “Найти” отключена, а за ней скрывается полупрозрачный фрейм (окно) с другого сайта и подставлена кнопка “Лайк”. Нажимая на одну кнопку, Вы совершайте действие на другом сайте, которого даже не видите.</p>
<p>Здесь безобидная ситуация и Вы просто ставите лайк на аве другого человека, а действие от Вашего имени могут совершить и не только на таких сайтах.</p>'></anonymous-modal>
  </div>
</template>

<script>
import AnonymousModal from "@/components/UI/AnonymousModal.vue";

export default {
  components: {AnonymousModal},
  data() {
    return {
      isModalOpen: false,
      isButtonVisible: true,
    };
  },
  methods: {
    toggleButton() {
      this.isButtonVisible = !this.isButtonVisible;
    },
    openModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  }
}
</script>

<style scoped>
  .chat-wrapper h2 {
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    font-family: Montserrat;
    font-size: 96px;
    font-weight: 600;
    line-height: 117px;
    letter-spacing: 0em;
    text-align: center;
  }

  .chat-wrapper h2 span {
    color: #810202;
  }

  .chat-content input {
    display: block;
    margin: 10px auto 40px;
    width: 80%;
    height: 80px;
    outline: none;
    border: none;
    font-size: 24px;
    border-radius: 50px;
    padding-left: 30px;
    background: rgb(229, 228, 228);
  }

  .chat-content input::placeholder {
    font-family: Tahoma;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
  }

  .chat-content button {
    display: block;
    margin: 0 auto;
    width: 240px;
    height: 56px;
    background: #810202;
    border-radius: 35px;
    color: #fff;
    border: none;
    font-size: 24px;
    outline: none;
  }

  button.btn-search {
    margin: 0;
    margin-left: 500px;
  }


  .chat-content button:hover {
    cursor: pointer;
    background: rgb(99, 20, 20)
  }

  .btn-wrapper {
    position: absolute;
    bottom: 50px;
    left: 40px;
    display: flex;
    justify-content: center;
    gap: 40px
  }

  .btn-wrapper button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    background: #92E3A9;
    border: none;
    border-radius: 10px;
  }

  .btn-wrapper button:hover {
    cursor: pointer;
    background: #77db93;
  }

  .hidden-content {
    opacity: .9;
    position: fixed;
    z-index: 500;
    top: -50px;
    left: -50px;
    width: 100%;
    max-width: 860px;
    height: 40%;
    background: rgb(173, 173, 173);
    border-radius: 12px;
    padding: 10px 30px;
    height: 490px;
  }

  .hidden-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url("./assets/bg-img.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .hidden-avatar-wrapper {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .hidden-bg-img {
    width: 740px;
    height: 300px;
    margin: 0 auto 40px;
  }

  .hidden-bg-img img {
    width: 100%;
  }

  .hidden-text-content {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  .hidden-text-content span {
    font-weight: 900;
  }

  .hidden-text-content .btn-like, .hidden-text-content .btn-liked {
    background: #C42FF9;
  }

  .hidden-text-content .btn-like:hover, .hidden-text-content .btn-liked:hover {
    background: #a64fc6;
  }
</style>
