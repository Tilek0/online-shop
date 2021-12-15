<template>
  <div class="home">
    <section class="home-section">
      <div class="home-section_link">
        <router-link to="Categories" v-for="adult in adults" :key="adult">{{ adult }}</router-link>
      </div>
      <img src="../assets/man&woman.jpg" alt="img" class="home-section_imgAdult">
    </section>
    <section class="home-section">
      <div class="home-section_link">
        <router-link to="Categories" v-for="jun in juniors" :key="jun">{{ jun }}</router-link>
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
  data() {
    return {
      adults: ['Man','Woman'],
      juniors: ['Boy','Girl']
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding: 0;
  margin: 0;
  overflow: hidden;
  &-section {
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0;
    margin: 0;
    transition: .7s ease;
    &:hover {
      transform: scale(1.2);
    }
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
        left: 33%;
        font-size: 70px;
        padding: .5% 2%;
        :hover {
          color: black;
        }
        &::after{
          content: "";
          background: #8ca9d3;
          width: calc(100% + 20px);
          height: 0;
          position: absolute;
          bottom: -4px;
          left: -10px;
          transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          opacity: .4;
          border-radius: 20px;
        }

        &:hover::after{
          height: calc(100% + 8px)
        }
      }
      :nth-child(2) {
        position: absolute;
        top: 50%;
        right: 30%;
        font-size: 70px;
        padding: .5% 2%;
        &::after{
          content: "";
          background: #f26659;
          width: calc(100% + 20px);
          height: 0;
          position: absolute;
          bottom: -4px;
          left: -10px;
          transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          opacity: .4;
          border-radius: 20px;
        }

        &:hover::after{
          height: calc(100% + 8px);
        }
      }
    }
  }
}
</style>
