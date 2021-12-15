<template>
  <div class="nav">
    <div class="nav-divider">
      <img src="../assets/icons/footer.svg" alt="shop">
    </div>
    <div class="nav-askForm">
      <h2>Ask me</h2>
      <input type="email" placeholder="Example@example.com" v-model="form.email">
      <input type="text" placeholder="Name:" v-model="form.name">
      <textarea cols="30" rows="2" placeholder="type text..." v-model="form.desc"/>
      <my-button class="nav-askForm_btn">Send</my-button>
      <my-button class="nav-askForm_btn" @myButtonEvent="resetForm">Clear</my-button>
    </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  margin-top: 15%;
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
      height: 230px;
    }
  }
  &-askForm {
    width: 15%;
    position: absolute;
    bottom: 0;
    left: 45%;
    padding: 10px;
    input {
      width: 100%;
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
    }
    &_btn {
      margin-bottom: 10px;
      ::v-deep {
        button {
          background: #f26659;
          padding: 3% 0;
          color: black;
          &:hover {
            color: #f0eff4;
          }
          &:active {
            background: linear-gradient(160deg, #8ca9d3, #f0eff4);
          }
        }
      }
    }
  }
  &-contact {
    position: absolute;
    left: 8%;
    bottom: 70px;
    width: 23%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 20px;
    img {
      width: 40px;
      margin-right: 5%;
      transition: .5s;
      &:hover {
        transform: perspective(500px) translate3d(0, -10px, 150px);
      }
    }
  }
}
</style>