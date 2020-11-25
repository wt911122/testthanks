<template>
  <div class="container sceneA bg-center"
    :style="`background-image: url(${require('../assets/scene4/bg.jpg')});`" v-on:touchstart="touchstartHandler" v-on:touchend="touchendHandler">
    <transition name="fadeIn">
        <div class="letter-bg"  v-if="sceneA"
            :style="`background-image: url(${require('../assets/scene4/letter.png')});`">
            <div class="bg-image letter-button t-b"
                :style="`background-image: url(${require('../assets/scene4/title.png')});`">
                <span>{{sceneContent.t1}}</span>    
            </div>
            <div style="margin: 10px 0" class="letter-content">{{sceneContent.time}}</div>
            <div>
                <img class="image-ato" :src="require('../assets/scene4/pic.png')"/>
            </div>
            <div class="letter-content" style="padding: 0 40px;" v-html="resolveContent(sceneContent.p)"></div>
            <div style="margin-top: 20px">
                <img class="image-ato" :src="require('../assets/scene4/spliterpng.png')"/>
            </div>
            <div class="letter-bottom">
                <div class="bg-image letter-button-g t-b"
                    :style="`background-image: url(${require('../assets/scene4/button.png')});`"
                    @click="toDownload">
                    {{sceneContent.bt1}}
                </div>
                <!-- <div class="bg-image letter-button-g t-b"
                    :style="`background-image: url(${require('../assets/scene4/button.png')});`">
                    {{sceneContent.bt2}}
                </div> -->
            </div>
        </div>
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
      sceneContent: contents[window.locale].scene5,
    }),
    mounted() {
      this['sceneA'] = true;
    },
    methods: {
      touchstartHandler() {
      },
      touchendHandler(){
      },
      toDownload() {
        window.open('https://url.163.com/dwrj');
      }
    }
  }
</script>
<style type="text/css">
.greeting-block{
        width: 100%;
    height: 14vw;
    line-height: 11vw;
    margin: 20px;
}
.greeting-block > span{
    display: inline-block;
    transform: translate(-0px, 3vw);
}

  .image-ato{
      width: 100%;
      height: auto;
  }
.letter-bottom{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.letter-button-g{
    width: 36vw;
    height: 20vw;
    line-height: 20vw;
}
.letter-button-g + .letter-button-g{
    margin-left: 10px;
}
</style>
