<template>
  <div class="nav">
    <div class="nav-divider">
      <img src="../assets/icons/waves.svg" alt="img">
    </div>
    <div class="nav-link">
      <router-link to="woman">Woman</router-link>
      <router-link to="man">Man</router-link>
      <router-link to="boy">Boy</router-link>
      <router-link to="girl">Girl</router-link>
    </div>
    <div class="nav-icons">
      <div class="nav-icons_search">
        <div>
          <input type="text" placeholder=" " required>
        </div>
      </div>
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
$search-time: 800ms;
$reset-time: 150ms;
$color-pink: #f26659;
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
        color: $color-pink;
        border-bottom: 1px solid $color-pink;
      }
    }
  }
  &-icons {
    position: absolute;
    top: 0.5%;
    right: 15%;
    display: flex;
    align-items: center;
    :nth-child(n) {
      margin: 0 10%;
    }
    img {
      width: 35px;
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
          right: 0.5px;
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