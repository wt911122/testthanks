<template>
  <div class="container sceneA bg-center"
    :style="`background-image: url(${require('../assets/scene3/bg.jpg')});`" v-on:touchstart="touchstartHandler" v-on:touchend="touchendHandler">
    <transition name="fadeIn">
        <div class="letter-bg"  v-if="sceneA"
            :style="`background-image: url(${require('../assets/scene3/letter.png')});`">
            <div class="letter-content" style="padding: 0 40px;" v-html="resolveContent(scene3Content.p1(friends_num))"></div>
            <div class="bg-image player-image" 
                :style="`background-image: url(${require('../assets/scene3/pic-bg.png')});`">
                <img class="player-image-center" :src="imageurl"/>
                <div class="bg-image player-image bg-image-ping" 
                :style="`background-image: url(${require('../assets/scene3/pic-ping.png')});`"></div>
            </div>
            <div class="letter-content" style="padding: 0 40px;" v-html="resolveContent(scene3Content.p2(friends_num, friends_day,friends_chat,friends_leave))"></div>
        </div>
    </transition>
    
    <transition name="fadeIn">
      <router-link tag="a" to="/scene4" v-if="sceneA" class="bg-center sceneA-btn"
      :style="`background-image: url(${require('../assets/arrow.png')});`"></router-link >
    </transition>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex';
import { contents } from '../i18n';
import { userimages } from '../store/resouces';

  export default {
    name: 'sceneA',
    data: () => ({
      'sceneA': false,
      startY: undefined,
      scene3Content: contents[window.locale].scene3,
    }),
    computed: {
        ...mapState({
            friends_num: state => state.userInfo.friends_num,
            friends_day: state => state.userInfo.friends_day,
            friends_battle: state => state.userInfo.friends_battle,
            friends_rate: state => state.userInfo.friends_rate,
            friends_chat: state => state.userInfo.friends_chat,
            friends_leave: state => state.userInfo.friends_leave,
        }),
        imageurl() {
            return userimages[Math.floor(Math.random() * 6 + 1)]
        }
    },
    mounted() {
      this['sceneA'] = true;
    },
    methods: {
      touchstartHandler(e) {
        console.log(e);
        this.startY = e.changedTouches[0].pageY;
      },
      touchendHandler(e){
        let endY = e.changedTouches[0].pageY
        if(this.startY - endY > 50){
          this.$router.push({path: '/scene4'})
        }
      }
    }
  }
</script>
<style type="text/css">
.bg-image {
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
}
.letter-bg{
    width: 100%;
    height: 100%;
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.player-image{
    position: relative;
    width: 100%;
    height: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.player-image-center{
    height: 24vw;
    width: auto;
    transform: rotate(1deg);
}
.bg-image-ping{
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
}
.letter-button{
    width: 100%;
    height: 11vw;
    line-height: 11vw;
    margin-top: 20px;
}
.letter-button > span{
    transform: translate(1em, 0px);
    display: inline-block;
}
</style>
