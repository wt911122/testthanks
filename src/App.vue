<template>
  <div id="app" class="bg-center bgp">
    <!-- <div style="display: none">
      <img :src="`${require('./assets/share.png')}`">
      <h1>能给自己江湖中的“脸”打几分？</h1>
      <p>千人千面，镜里容颜，万万没想到这居然是我的江湖脸！</p>
    </div> -->
    
    <transition :name="transitionName" apear>
      <router-view class="slides"></router-view>
    </transition>
    <div class="fixed-header">
        <img class="logoImage" :src="require('./assets/logo.png')" />
        <div class="flexauto" v-html="resolveContent(headerContent.content)">
        </div>
        <button class="button-download" @click="toDownload">
            {{ headerContent.download }}
        </button>
    </div>
  </div>
</template>

<script>
import { contents } from './i18n';

// import UserDataSource from './stores/userDataStore';
// const fid = "96";
// const userData = new UserDataSource(fid);
export default {
  name: 'app',
  data: ()=>{
    return {
      transitionName: 'slide-down',
      //userData: userData.data,
      //fid: fid,
      userUploadedFile: undefined,

      headerContent: contents[window.locale].header,
    }
  },
  watch: {
    '$route': function(to, from){
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-down';
      }else{
        this.transitionName = 'slide-up';
      }
    }
  },
  created() {
      this.$store.dispatch('getUserInfo', this.$route.query);
  },
  methods: {
      toDownload() {
        window.open('https://url.163.com/dwrj');
      }

  }
}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
#app[locale='ja']{
    font-size: ;
}
.slides{
  transition: all .8s ease;
}
.slide-up-enter,
.slide-down-leave-active{
  transform: translate(0, 100%);
}
.slide-down-enter,
.slide-up-leave-active {
  transform: translate(0, -100%);
}
.bgp{
  background-size: 100% auto!important;
}

.fixed-header{
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    background-color: rgb(0, 0, 0, 0.702);
}
.fixed-header > * + * {
    margin-left: 10px;
}
.fixed-header p{
    color: #fff;
}
.flexauto{
    flex: 1;
}
image{
    object-fit: contain;
}
.fixed-header .logoImage{
    width: 50px;
    height: 50px;
    object-fit: contain;
}
</style>
