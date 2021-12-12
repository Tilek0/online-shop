<template>
  <div class="home">
    <section class="home-section">
      <div class="home-section_link">
        <router-link to="/man">MAN</router-link>
        <router-link to="/woman">WOMAN</router-link>
      </div>
      <img src="../assets/man&woman.jpg" alt="img" class="home-section_imgAdult">
    </section>
    <section class="home-section">
      <div class="home-section_link">
        <router-link to="boy">BOY</router-link>
        <router-link to="girl">GIRL</router-link>
      </div>
      <img src="../assets/junior.jpg" alt="img" class="home-section_img">
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding: 0;
  margin: 0;
  &-section {
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0;
    margin: 0;
    &_img {
      width: 100%;
    }
    &_imgAdult {
      height: 100vh;
      width: 100%;
    }
    &_link {
      position: absolute;
      width: 100%;
      height: 100%;
      :nth-child(1) {
        position: absolute;
        top: 50%;
        left: 25%;
        font-size: 70px;
        padding: 1%;
        :hover {
          color: black;
        }
        &::after{
          content: "";
          background: #8ca9d3;
          mix-blend-mode: exclusion;
          width: calc(100% + 20px);
          height: 0;
          position: absolute;
          bottom: -4px;
          left: -10px;
          transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }

        &:hover::after{
          height: calc(100% + 8px)
        }
      }
      :nth-child(2) {
        position: absolute;
        top: 50%;
        right: 25%;
        font-size: 70px;
        padding: 1%;
        &::after{
          content: "";
          background: #f26659;
          mix-blend-mode: exclusion;
          width: calc(100% + 20px);
          height: 0;
          position: absolute;
          bottom: -4px;
          left: -10px;
          transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }

        &:hover::after{
          height: calc(100% + 8px);
        }
      }
    }
  }
}
</style>
