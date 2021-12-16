<template>
  <div class="nav">
    <div class="nav-divider">
      <img src="../assets/icons/waves.svg" alt="img">
    </div>
    <div class="nav-link">
      <router-link :to="val.to" v-for="val in values" :key="val.name">{{ val.name }}</router-link>
    </div>
    <div class="nav-icons">
      <div class="nav-icons_search">
        <div>
          <input type="text" placeholder=" " @blur="clearText" v-model="searchText">
        </div>
      </div>
      <router-link to="/admin"><img src="../assets/icons/admin.png" alt="img"></router-link>
      <router-link to="/Bag"><img src="../assets/icons/bag.png" alt="img"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      searchText: '',
      values: [
          {name: 'Man', to:'Categories'},
          {name: 'Woman', to:'Categories'},
          {name: 'Boy', to:'Categories'},
          {name: 'Girl', to:'Categories'},
          {name: 'Home', to:'/'},
      ]
    }
  },
  methods: {
    clearText() {
      this.searchText = ''
    }
  }
}
</script>

<style lang="scss" scoped>
$search-time: 800ms;
$reset-time: 150ms;
$color-pink: #f26659;
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  &-divider {
    position: relative;
    img {
      width: 100%;
      height: 70px;
    }
  }
  &-link {
    position: absolute;
    top: 8%;
    left: 4%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    width: 25%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
      color: black;
      font-size: 18px;
      &:hover {
        color: $color-pink;
        border-bottom: 1px solid $color-pink;
      }
    }
  }
  &-icons {
    position: absolute;
    top: 8%;
    right: 15%;
    display: flex;
    align-items: center;
    :nth-child(n) {
      margin: 0 9%;
    }
    img {
      width: 27px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(2px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-right-color: rgba(255, 255, 255, 0.3);
      border-bottom-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
      padding: 13px;
      border-radius: 20px;
      transition: .5s;
      &:hover {
        transform: perspective(500px) translate3d(0, 10px, 150px);
      }
    }
    &_search {
      div {
        display: inline-block;
        position: relative;
        &:after {
          content: "";
          background: black;
          width: 3px;
          height: 15px;
          position: absolute;
          top: 25px;
          right: -10%;
          transform: rotate(135deg);
        }
        input {
          color: black;
          font-size: 16px;
          background: transparent;
          width: 12px;
          height: 12px;
          padding: 7px;
          border: solid 3px black;
          outline: none;
          border-radius: 35px;
          transition: width 0.5s;
          &:focus,:not(:placeholder-shown) {
            width: 250px;
          }
        }
      }
    }
  }
}
</style>