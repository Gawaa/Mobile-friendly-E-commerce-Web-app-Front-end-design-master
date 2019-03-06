<template lang="html">

    <div class="car">
    
      <v-header>
        <h1 slot="title">Shopping Car</h1>
      </v-header>
      
      <v-something v-if="count"/>
      <v-nothing v-else/>
      <v-footer/>
    </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Nothing from '@/components/car/nothing.vue'
import Something from '@/components/car/something.vue'
import Footer from '@/components/car/footer.vue'

export default {
  components:{
    'v-header':Header,
    'v-nothing':Nothing,
    'v-something':Something,
    'v-footer':Footer
  },

  computed:{
    count(){
      return this.$store.state.detail.count
    }
  },
  mounted(){
    // Prevent refresh page data being empty 
    if (this.$store.state.detail.count=="") {
      this.$store.commit('RESET_COUNT')
    }
  }

}
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  padding-bottom: 14vw;
}
</style>
