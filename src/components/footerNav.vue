<template>
  <div class="nav">
    <div class="nav-divider" @click="closeForm">
      <img src="../assets/icons/footer.svg" alt="shop">
    </div>
    <div class="nav-button" @click="openAksForm">{{ 'askMe' | localize}}</div>
    <div class="nav-askForm" v-if="visibleForm">
      <div class="nav-askForm__tag">
        <h2>{{ 'askMe' | localize}}</h2>
        <my-button @myButtonEvent="closeForm">
          <img src="../assets/icons/exit.png" alt="#">
        </my-button>
      </div>
      <input type="email" placeholder="Example@example.com" v-model="form.email">
      <input type="text" placeholder="Name:" v-model="form.name">
      <textarea placeholder="'type text...'" v-model="form.desc"/>
      <my-button class="nav-askForm_btn">{{ 'send' | localize}}</my-button>
      <my-button class="nav-askForm_btn" @myButtonEvent="resetForm">{{ 'clear' | localize}}</my-button>
    </div>
    <h2 class="nav-askForm_text">{{ 'followMeOn' | localize}}</h2>
    <div class="nav-contact">
      <a :href="icon.link" v-for="icon in social" :key="icon.name">
        <img
            :src="require('../assets/icons/' + icon.src)" alt="social" >
      </a>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
export default {
  name: "footerNav",
  components: {
    myButton
  },
  data() {
    return {
      visibleForm: false,
      form: {
        email: '',
        name: '',
        desc: '',
      },
      social: [
        {
          name: 'facebook',
          src: 'facebook.png',
          link: 'https://www.facebook.com/tilek.moldaliev.1'
        },
        {
          name: 'telegram',
          src: 'telegram.png',
          link: 'https://t.me/Tilek_07'
        },
        {
          name: 'linkedin',
          src: 'linkedin.png',
          link: 'https://www.linkedin.com/in/tilek-talant-uulu-aab343227'
        },
        {
          name: 'skype',
          src: 'skype.png',
          link: 'https://join.skype.com/invite/E2FXYdJQwPwN'
        },
        {
          name: 'instagram',
          src: 'instagram.png',
          link: 'https://www.instagram.com/tilek07/'
        },
        {
          name: 'github',
          src: 'github.png',
          link: 'https://github.com/Tilek0?tab=repositories'
        },
      ]
    }
  },
  methods: {
    resetForm() {
      this.form.email = this.form.name = this.form.desc = '';
    },
    openAksForm() {
      this.visibleForm = true;
    },
    closeForm() {
      this.visibleForm = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  margin-top: 13%;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  &-divider {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 180px;
    }
  }
  &-button {
    position: absolute;
    bottom: 10rem;
    left: 50%;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    transition: .2s ease-in;
    &:hover {
      background: #f26659;
      color: #f0eff4;
      cursor: pointer;
    }
  }
  &-askForm {
    width: 15%;
    position: absolute;
    bottom: 0;
    left: 45%;
    padding: 8px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    transition: .8s all;
    &__tag {
      display: flex;
      align-items: center;
      justify-content: right;
      ::v-deep {
        button {
          width: 45%;
          padding-top: 5px;
          background: transparent;
          margin-left: 3.2rem;
          &:active {
            background: #f26659;
          }
        }
      }
      img {
        width: 30px;
      }
    }
    &_text {
      position: absolute;
      top: -11.5rem;
      right: 18%;
    }
    input {
      width: 90%;
      border: none;
      outline: none;
      background: transparent;
      border-bottom: 1px solid #000000;
      margin-bottom: 6%;
    }
    textarea {
      background: transparent;
      border: none;
      border-bottom: 1px solid #000000;
      outline: none;
      margin-bottom: 5%;
      width: 90%;
      min-height: 50px;
    }
    &_btn {
      margin-bottom: 10px;
      ::v-deep {
        button {
          padding: 3% 0;
          background: transparent;
          border: 2px solid #f26659;
          transition: .2s ease-in;
          &:hover {
            background: #f26659;
            color: #f0eff4;
          }
          &:active {
            background: linear-gradient(160deg, #8ca9d3, #f0eff4);
            border: none;
          }
        }
      }
    }
  }
  &-contact {
    position: absolute;
    right: 8%;
    bottom: 60px;
    width: 25%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 5px;
    img {
      width: 10%;
      margin: 0 10px;
      transition: .5s;
      &:hover {
        transform: perspective(500px) translate3d(0, -10px, 150px);
      }
    }
  }
}
</style>