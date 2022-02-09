<template>
  <div class="sideBar">
    <div @click="closeFilter">
      <p
          v-for="(item,index) in GET_CATEGORY.clothes"
          :key="item.name"
          class="sideBar-active"
          @click="selectName(item,index)"
          :class="{activeName: nameIndex === index}"
      >{{item.name}}</p>
      <my-button>Clear Filter</my-button>
    </div>
    <div>
      <h2>Size</h2>
      <my-button @myButtonEvent="showSize">Select size</my-button>
      <div class="filter" v-show="filter">
        <div class="check" v-for="(one,i) in allSize" :key="i">
          <input type="checkbox" @click="filter = !filter">
          <p class="check-p">{{one}}</p>
<!--          <p>({{one.left}})</p>-->
        </div>
      </div>
    </div>
    <div>
      <h2>Price</h2>
      <input type="range">
    </div>
    <div>
      <h2>Colour</h2>
      <my-button @myButtonEvent="showColor">Select color</my-button>
      <div class="filterSize" v-show="filterColor">
        <div class="check" v-for="(item, index) in GET_CATALOG" :key="index">
          <input type="checkbox" @click="catchColor(item)">
          <p class="check-p">{{item.color}}</p>
          <p>({{item.left}})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "sideBar",
  components: {
    myButton
  },
  data() {
    return {
      nameIndex: '',
      filter: false,
      filterColor: false,
    }
  },
  computed: {
    ...mapGetters([
      'GET_CATEGORY',
      'GET_CATALOG',
    ]),
    allSize() {
      let uniqueArray = [];
      let allSize = [];
      this.GET_CATALOG.forEach(item => item.size.map(item => uniqueArray.push(item)));
      allSize = uniqueArray.filter(function(item, pos) {
        return uniqueArray.indexOf(item) === pos;
      });
      return allSize
    }
  },
  methods: {
    ...mapActions([
      'CATCH_CATALOG'
    ]),
    showSize() {
      this.filter = true;
    },
    showColor() {
      this.filterColor = true;
    },
    closeFilter() {
      this.filter = false;
      this.filterColor = false;
    },
    catchColor(i) {
      let color = this.GET_CATALOG.filter(item => item.color === i.color)
      this.CATCH_CATALOG(color)
    },
    selectName(i,index) {
      let catalog = this.GET_CATEGORY.clothes.find(item => item.name === i.name);
      switch (i.name) {
        case 'trousers':
          this.CATCH_CATALOG(catalog.trousers)
          break;
        case 'coat':
          this.CATCH_CATALOG(catalog.coat)
          break;
        case 'shirts':
          this.CATCH_CATALOG(catalog.shirts)
          break;
        case 'shoes':
          this.CATCH_CATALOG(catalog.shoes)
          break;
      }
      this.nameIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
.sideBar {
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.3);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 2%;
  width: 100%;
  height: 73%;
  display: flex;
  flex-direction: column;
  &-active {
    border-radius: 15px;
    padding: 1% 0;
    margin: 1.5%;
    cursor: pointer;
  }
  .activeName {
    border: 2px solid #f26659;
  }
  ::v-deep {
    button {
      padding: 2% 0;
      background: transparent;
      border: 2px solid #f26659;
      transition: .2s ease-in;
      width: 60%;
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
  h2 {
    border-bottom: 1px solid #000000;
  }
  .check {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &-p {
      margin-left: 3%;
    }
  }
  .filter {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 5%;
    width: 400px;
    height: 160px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: #ebc999;
    border-radius: 20px;
  }
  .filterSize {
    position: absolute;
    z-index: 3;
    top: 85%;
    left: 5%;
    width: 400px;
    height: 160px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: #ebc999;
    border-radius: 20px;
  }
}
</style>