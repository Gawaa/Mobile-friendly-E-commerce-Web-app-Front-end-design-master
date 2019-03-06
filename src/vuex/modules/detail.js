import Util from '../../util/common'
import * as types from '../types'
import Vue from 'vue'

// 容器
const state = {
  productDatas:'',  
  colSelected:0,   
  sizeSelected:0,  
  count:0,    // the number of the items from the shopping cart 
  carList:'',      //shopping list from the shopping cart 
  fetchLoading:false,     //always Loading status 
  selectedList:'',         //selecting items list 
  unSelectedList:'',      // not selecting items list 
}





const mutations = {


//request the data 
  [types.SET_DATAS](state,res) {
    state.productDatas = res
  },

  //infrmation page colors selection 
  [types.CHANGE_COL_SELECTED](state,res) {
      state.colSelected = res;
  },

  //information page size selection 

  [types.CHANGE_SIZE_SELECTED] (state,res) {
      state.sizeSelected = res;
  },

  //  add the item from the shopping list 
  [types.ADD_PRODUCT] (state) {
    state.carList = Util.getLocal('carList');
  },

  //get the items nubmers from the shopping cart 
  [types.CHANGE_COUNT] (state) {
    state.count = Util.getLocal('count')
  },

// refresh and re-set the shopping cart 
  [types.RESET_CARLIST] (state) {
    state.carList = Util.getLocal('carList')
  },

// re-set and refresh the items numbers from the shopping cart 
  [types.RESET_COUNT] (state) {
    state.count = Util.getLocal('carList').length
  },

// loading
  [types.SET_LOADING] (state,res) {
    state.fetchLoading = res
  },
// the selecting items from the shopping art 
  ['SET_SELECTEDLIST'] (state,res) {
    state.selectedList = Util.getLocal('selectedList')
  },

//not seleting items from the shopping cart 

  ['SET_UNSELECTEDLIST'] (state) {
    state.unSelectedList = Util.getLocal('unSelectedList')
  }

}

let vm = new Vue({});


const actions = {

// request from the major componenet 
  setDatas({commit}) {
    vm.$api({
        method:'post',
        url:"/detail"
      }).then(response=>{
        commit('SET_DATAS',response.data);
      })
  },

// the items number from the shopping cart,true = increasing items ,false = decreasing items
  setLocalCount({commit},bool = true) {
    let count = Util.getLocal('count') || 0;
    if(bool) {
      Util.setLocal(++count,'count');
    }else {
        Util.setLocal(--count,'count');
    }
    commit(types.CHANGE_COUNT);
  },

  
  addCarList({commit},res) {
    Util.setLocal(res,'carList',true);
    commit(types.ADD_PRODUCT)
  },

  //unSelectedList

  resetCarList({commit,getters}) {
    const unSelectedList = Util.getLocal('unSelectedList');
    Util.setLocal(unSelectedList,'carList');
    commit(types.RESET_CARLIST)
  },


// reset Count
  resetCount({commit,getters}) {
    const count = Util.getLocal('unSelectedList').length;
    Util.setLocal(count,'count');
    commit(types.RESET_COUNT);
  },

// deleting the one of the item form the shopping cart 
  cutCarList({commit},res) {
    Util.setLocal(res,'carList');
    commit(types.RESET_CARLIST);
  },

// saveing the selecting items and not seleting items sepertely 
  setSelectedList({commit,getters}) {
    Util.setLocal(getters.selectedList,'selectedList');
    commit('SET_SELECTEDLIST');
    Util.setLocal(getters.unSelectedList,'unSelectedList');
    commit('SET_UNSELECTEDLIST');

  }

}

// process state
const getters = {

    selectedList(state) {
        // choseBool
       if(state.carList!=='') {
         let arr = state.carList.filter((ele)=>{
           return ele.choseBool == true
         });
         return arr
       }
    },

    unSelectedList(state) {
      if(state.carList !=='') {
        let arr = state.carList.filter((ele)=>{
          return ele.choseBool == false
        });
        return arr
      }
    }

}




export default {
  state,
  actions,
  getters,
  mutations
}
