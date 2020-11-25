<template>
  <div class="container sceneA bg-center"
    :style="`background-image: url(${require('../assets/scene1/bg.jpg')});`" v-on:touchstart="touchstartHandler" v-on:touchend="touchendHandler">
    <transition name="fadeIn">
        <div class="letter-bg"  v-if="sceneA"
            :style="`background-image: url(${require('../assets/scene1/letter.png')});`">
            <div class="letter-content"
                style="padding: 0 50px;" v-html="resolveContent(scene1Content.p)"></div>
            <div class="bg-image letter-button t-b"
                @click="$router.push({path:'/scene2'})"
                :style="`background-image: url(${require('../assets/scene1/button.png')});`">
                <span>{{scene1Content.button}}</span>    
            </div>
        </div>
    </transition>
    
    <transition name="fadeIn">
      <router-link tag="a" to="/scene2" v-if="sceneA" class="bg-center sceneA-btn"
      :style="`background-image: url(${require('../assets/arrow.png')});`"></router-link >
    </transition>
  </div>
</template>
<script type="text/javascript">
import { contents } from '../i18n';

  export default {
    name: 'sceneA',
    data: () => ({
      'sceneA': false,
      startY: undefined,
      scene1Content: contents[window.locale].scene1,
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
          this.$router.push({path: '/scene2'})
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
  .sceneA.bg-center{
    background-size: 100% auto;
  }
  .sceneA > .sceneA-btn{
    display: block;
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    background-size: 100% auto;
    transition: .6s all 1.6s;
  }
</style>
