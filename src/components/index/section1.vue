<template lang="html">
  <section class="section1">
    <h1 class="section1-title">
      section1
    </h1>
    <ul class="section1-list">
      <li v-for="k in list" :key="k.id">
        <router-link :to="{name:'Information'}">
          <img v-lazy="k.imgPath" alt="">
        </router-link>
      </li>
    </ul>
  <router-link :to="{ name: 'Information'}"  class="section1-banner">
    <img v-lazy="banner">
  </router-link>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';

export default {
  props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}

</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section1 {
  .pt();
  .section1-title {
    .bt();
    background-color: #ffffff;
    text-align: center;
    padding: 4vw 0;
    .fz(font-size, 40);
    color: #333;
    position: relative;
  }

  .section1-list {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 0 2vw 4vw 2vw;
    li {
      width: 50%;
      padding: 1vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      a,
      img {
        // width: 100%;
        width: 150px;
        height: 150px;
        display: block;
      }
    }
  }

  .section1-banner {
    display: block;
    width: 100vw;
    img {
      width: 100%;
      height: 24vw;
    }
  }
}
</style>
