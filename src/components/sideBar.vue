<template>
  <div class="sideBar">
    <div @click="closeFilter">
      <p
          v-for="(item,i) in wears"
          :key="item.name"
          class="sideBar-active"
          @click="selectName(i)"
          :class="{activeName: item.selected === true}"
      >{{item.name}}</p>
      <my-button>Clear Filter</my-button>
    </div>
    <div>
      <h2>Size</h2>
      <my-button @myButtonEvent="showSize">Select size</my-button>
      <div class="filter" v-show="filter">
        <div class="check" v-for="(one,i) in size" :key="i">
          <input type="checkbox" @click="filter = !filter">
          <p class="check-p">{{one.name}}</p>
          <p>({{one.quant}})</p>
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
        <div class="check" v-for="(color, index) in colours" :key="index">
          <input type="checkbox" @click="filterColor = !filterColor">
          <p class="check-p">{{color.name}}</p>
          <p>({{color.quant}})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from "./myButton";
export default {
  name: "sideBar",
  components: {
    myButton
  },
  data() {
    return {
      filter: false,
      filterColor: false,
      wears: [
        {name:'Coat',selected: false},
        {name:'Shirts',selected: false},
        {name:'Shoes',selected: false},
        {name:'Trousers',selected: false},
      ],
      size: [
        {name: 'XS', quant: '2'},
        {name: 'S', quant: '3'},
        {name: 'M', quant: '4'},
        {name: 'L', quant: '5'},
        {name: 'XXL', quant: '9'},
        {name: 'XL', quant: '7'},
        {name: 'XXS', quant: '3'},
        {name: 'XXXL', quant: '2'},
      ],
      colours: [
        {name: 'red', quant: '1'},
        {name: 'black', quant: '3'},
        {name: 'white', quant: '7'},
        {name: 'green', quant: '2'},
        {name: 'yellow', quant: '8'},
        {name: 'blue', quant: '6'},
      ]
    }
  },
  methods: {
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
    selectName(i) {
      this.wears.forEach(item => item.selected = false);
      this.wears.find((item,index) =>
          index === i
      ).selected = true;
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