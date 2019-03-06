<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">Sign In</h1>
    </v-header>
    <section>
      <mt-field
       label="Account"
        placeholder="Please enter account"
        type = "text"
        v-model = "account"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        ></mt-field>
      <mt-field
       label="Password"
       placeholder="Please enter password"
       type="password"
       v-model="password"
       :readonly='!toggle'
       :disableClear = '!toggle'
        ></mt-field>
      <!-- <p class="tip">Tip : Everything does work</p> -->
    </section>
    <mt-button
     plain
     size="large"
     @click="login"
     v-if='toggle'>Login</mt-button>
    <!-- <mt-button
     plain
     size="large"
     @click="logout"
     v-else>logout</mt-button> -->

  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      account:'',
      password:'',
      toggle:!this.$store.state.login.token
    }
  },
  methods:{
    // 登录按钮
    login(){
      if(this.account!=="" && this.password!=="") {
        Toast('Login Successful');
        this.toggle = false;
        this.$store.commit('CHANGE_TOKEN',1);
      }else {
        Toast('Password cannot be empty');
      }

      setTimeout(()=>{
        this.$router.replace({
          path: 'user'
        })
      },1000);
      
    },

   

    // }
  }
}

</script>

<style lang="less" scoped>
.login {
  >section {
    .tip {
      padding: 6vw 3vw;
      color:rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
</style>
