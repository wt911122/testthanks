<template>
  <div class="container sceneA bg-center"
    :style="`background-image: url(${require('../assets/scene2/bg.jpg')});`" v-on:touchstart="touchstartHandler" v-on:touchend="touchendHandler">
    <transition name="fadeIn">
        <div class="letter-bg"  v-if="sceneA"
            :style="`background-image: url(${require('../assets/scene2/letter.png')});`">
            <div class="letter-content" style="padding: 0 80px;" v-html="resolveContent(scene1Content.p(ceaterole_date.year,ceaterole_date.month,ceaterole_date.day,role_num,game_day))"></div>
        </div>
    </transition>
    
    <transition name="fadeIn">
      <router-link tag="a" to="/scene3" v-if="sceneA" class="bg-center sceneA-btn"
      :style="`background-image: url(${require('../assets/arrow.png')});`"></router-link >
    </transition>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex';
import { contents } from '../i18n';

  export default {
    name: 'sceneA',
    data: () => ({
      'sceneA': false,
      startY: undefined,
      scene1Content: contents[window.locale].scene2,
    }),
    computed: mapState({
        ceaterole_date: state => {
            const userInfo = state.userInfo;
            const year = Math.floor(userInfo.ceaterole_date / 10000);
            const month = Math.floor((userInfo.ceaterole_date -  year * 10000) / 100);
            const day = userInfo.ceaterole_date -  year * 10000 - month * 100;
            console.log(userInfo.ceaterole_date, year, month, day)
            return {
                year, month, day
            }
        },
        role_num: state => state.userInfo.role_num,
        game_day: state => state.userInfo.game_day,
    }),
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
         this.$router.push({path: '/scene3'})
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
