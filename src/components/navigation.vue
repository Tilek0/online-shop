<template>
  <div class="nav">
    <div class="nav-divider">
      <img src="../assets/icons/waves.svg" alt="img">
    </div>
    <div class="nav-link">
      <router-link to="woman">Woman</router-link>
      <router-link to="man">Man</router-link>
      <router-link to="junior">Boy</router-link>
      <router-link to="junior">Girl</router-link>
    </div>
    <div class="nav-icons">
      <input type="search"><img src="../assets/icons/search.png" alt="img">
      <router-link to="/admin"><img src="../assets/icons/admin.png" alt="img"></router-link>
      <router-link to="/bag"><img src="../assets/icons/bag.png" alt="img"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation"
}
</script>

<style lang="scss" scoped>
.nav {
  &-divider {
    position: relative;
    img {
      width: 100%;
      height: 70px;
    }
  }
  &-link {
    position: absolute;
    top: 0.5%;
    left: 6%;
    a {
      color: black;
      margin: 15%;
      font-size: 18px;
      &:hover {
        color: #f26659;
        border-bottom: 1px solid #f26659;
      }
    }
  }
  &-icons {
    position: absolute;
    top: 0.5%;
    right: 10%;
    display: flex;
    align-items: center;
    :nth-child(n) {
      margin: 0 10%;
      width: 30px;
    }
    :nth-child(1) {
      margin: 0;
    }
    input {
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px black solid;
      width: 70px;
    }
  }
}
</style>