<template lang="html">

  <div class="service">
    <ul>
      <li><i class="icon-ok"></i><span>Best Quality</span></li>
      <li><i class="icon-ok"></i><span>Lowest Price</span></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .service {
    .bd();
    ul {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-around;

      li {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        align-items: center;
        padding: 3.3vw 0;
        span {
          .fz(font-size,28);
          padding-left: 1vw;
        }
        i {
          .fz(font-size,36);
        }
      }
    }
  }

</style>
