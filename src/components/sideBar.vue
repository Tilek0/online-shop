<template>
  <div class="sideBar">
    <div>
      <p
          v-for="(item,index) in GET_CATEGORY.clothes"
          :key="index"
          class="sideBar-active"
          @click="selectName(item,index)"
          :class="{activeName: nameIndex === index}"
      >{{ item.name | localize}}</p>
      <my-button @myButtonEvent="closeFilter">{{ 'clearFilter' | localize}}</my-button>
    </div>
    <div>
      <h2>{{'size' | localize}}</h2>
      <my-button @myButtonEvent="showSize">{{ 'selectSize' | localize}}</my-button>
            <div class="filter sizePosition" v-show="isFilterSize">
              <div
                  class="check"
                  v-for="(one,i) in allSize"
                  :key="i"
                  :style="{background: i === checkedSize ? '#f26659' : ''}"
              >
                <div
                    @click="takeSize(one,i)"
                    class="selected"
                >{{one}}</div>
              </div>
            </div>
    </div>
    <div>
      <h2>{{ 'price' | localize}}</h2>
      <input type="range">
    </div>
    <div>
      <h2>{{ 'color' | localize}}</h2>
      <my-button @myButtonEvent="showColor">{{ 'selectColor' | localize}}</my-button>
      <div class="filter colorPosition" v-show="isFilterColor">
        <div
            class="check"
            v-for="(color, i) in allColor"
            :key="i"
            :style="{background: i === checkedColor ? '#f26659' : ''}"
        >
          <div
              @click="takeColor(color,i)"
              class="selected"
              :style="{background: color}"
          ></div>
          <p class="check-p">{{ color }}</p>
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
      checkedColor: '',
      checkedSize: '',
      nameIndex: '',
      isFilterSize: false,
      isFilterColor: false,
      catalogRefresh: []
    }
  },
  mounted() {
    this.catalogRefresh = JSON.parse(JSON.stringify(this.GET_CATALOG));
  },
  computed: {
    ...mapGetters([
      'GET_CATEGORY',
      'GET_CATALOG',
    ]),
    allSize() {
      let uniqueArray = [];
      let allSize = [];
      let newArr = JSON.parse(JSON.stringify(this.GET_CATALOG))
      newArr.forEach(item => item.sizes.forEach(item => uniqueArray.push(item)));
      allSize = uniqueArray.filter((item, pos) => {
        return uniqueArray.indexOf(item) === pos;
      });
      return allSize
    },
    allColor() {
      let uniqueColor = [];
      this.GET_CATALOG.map(item => item.image.map(item => uniqueColor.push(item.color)));
      function unique (arr) {
        let result = [];
        arr.forEach(item => {
          if (!result.includes(item)) {
            result.push(item);
          }
        })
        return result;
      }
      return unique(uniqueColor);
    },
  },
  methods: {
    ...mapActions([
      'CATCH_CATALOG'
    ]),
    showSize() {
      this.isFilterSize = true;
    },
    showColor() {
      this.isFilterColor = true;
    },
    closeFilter() {
      this.CATCH_CATALOG(this.catalogRefresh);
      this.isFilterColor = false;
      this.isFilterSize = false;
      this.checkedSize = '';
      this.checkedColor = '';
      this.nameIndex = '';
    },
    takeSize(size, i) {
      this.checkedSize = i;
      let catalogSize = JSON.parse(JSON.stringify(this.GET_CATALOG));
      let filteredSize = catalogSize.filter(item => item.sizes.find(item => item === size));
      this.CATCH_CATALOG(filteredSize);
      this.isFilterSize = false;
    },
    takeColor(color,i) {
      this.checkedColor = i;
      let catalogColor = JSON.parse(JSON.stringify(this.GET_CATALOG));
      let filteredColor = catalogColor.filter(item => item.image.find(item => item.color === color));
      this.CATCH_CATALOG(filteredColor);
      this.isFilterColor = false;
    },
    selectName(i, index) {
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
        case 'outwear':
          this.CATCH_CATALOG(catalog.jacket)
          break;
      }
      this.nameIndex = index;
      this.checkedSize = '';
      this.checkedColor = '';
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
  width: 94%;
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
    border: 1px solid #f26659;
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
  .filter {
    padding: 3%;
    width: 400px;
    height: max-content;
    background: #ebc999;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .sizePosition {
    position: absolute;
    z-index: 3;
    top: 43%;
    left: 5%;
  }
  .colorPosition {
    position: absolute;
    z-index: 3;
    top: 78%;
    left: 5%;
  }
  .check {
    border-radius: 50%;
    margin: 0 5% 5%;
    width: 45px;
    height: 45px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .selected {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin: 5px 5px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-p {
      margin: 0;
    }
  }
}
@media (max-height: 750px) {
  .sideBar {
    p {
      font-size: 14px;
    }
    h2 {
      font-size: 16px;
    }
    ::v-deep {
      button {
        padding: 1% 0;
        background: transparent;
        border: 1px solid #f26659;
        width: 40%;
      }
    }
    .filter {
      padding: 3%;
      width: 200px;
      height: max-content;
    }
    .sizePosition {
      left: 10%;
    }
    .colorPosition {
      top: 73%;
      left: 10%;
    }
    .check {
      width: 40px;
      height: 40px;
      margin-bottom: 8%;
      .selected {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>