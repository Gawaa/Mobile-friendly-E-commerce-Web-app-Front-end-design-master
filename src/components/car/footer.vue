<template lang="html">
  <footer class="footer">

    <div class="footer-result">
      <p>qty:{{count}} order total：</p>
      <p><span>${{allpay}} </span></p>
    </div>
    <router-link :to="{ name: 'CategoryPage'}" class="footer-goon" >
      Shopping
    </router-link>
    <a class="footer-pay" @click="goPay">
      Checkout
    </a>
  </footer>

</template>

<script>

export default {
  computed: {
    // the number of selecting the shopping items 
    count () {
      // if user did not slecting the shopping items, return to 0
      if (this.$store.getters.selectedList == undefined) {
        return 0
      } else {
        return this.$store.getters.selectedList.length
      }
    },

    // total price of selecting items 
    allpay () {
      let all = 0;
      // calculate the total price of selecting items 
      if (this.$store.getters.selectedList != undefined) {

        for (let i = 0; i < this.$store.getters.selectedList.length; i++) {

          all += this.$store.getters.selectedList[i].price;

        }

      }
      // return 0, if there not show the selecting items
      return all
    }
  },

  methods: {
    //click and move to the payment page
    goPay () {

      // just condition on slecting items
      if (this.$store.getters.selectedList.length) {
        // save the selectedList and waiting for Checkout
        this.$store.dispatch('setSelectedList')
        this.$router.push({ name: 'Payment' })

      } else {

        alert('No items in the shopping cart')

      }

    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";

.footer {
  width: 100%;
  height: 16vw;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  .footer-result,
  a {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
  }

  .footer-result {
    p {
      .fz(font-size,24);
      color: #999;
    }

    p:last-of-type {
      padding: 1vw 0 0 1vw;
      span {
        color: @cl;
        .fz(font-size,42);
      }
    }
  }

  .footer-goon {
    background-color: #f4f4f4;
    line-height: 16vw;
  }

  .footer-pay {
    background-color: @cl;
    line-height: 16vw;
    color: #fff;
  }
}
</style>
