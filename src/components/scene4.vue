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
            <div class="bg-image greeting-block"
                :style="`background-image: url(${require('../assets/scene4/greet-bg.png')});`">
                <span>{{sceneContent.greeting[Math.floor(Math.random() * sceneContent.greeting.length)]}}</span>    
            </div>
            <div>
                <img class="image-ato" :src="require('../assets/scene4/pic.png')"/>
            </div>
            <div class="letter-content" style="padding: 0 40px;" v-html="resolveContent(sceneContent.p)"></div>
            <div style="margin-top: 20px">
                <img class="image-ato" :src="require('../assets/scene4/spliterpng.png')"/>
            </div>
            <div class="letter-bottom">
                <div class="bg-image letter-button-g t-b"
                    @click="$router.push({path:'/scene5'})"
                    :style="`background-image: url(${require('../assets/scene4/button.png')});`">
                    {{sceneContent.bt1}}
                </div>
                <div class="bg-image letter-button-g t-b"
                    v-on:touchend="toshare"
                    :style="`background-image: url(${require('../assets/scene4/button.png')});`">
                    {{sceneContent.bt2}}
                </div>
            </div>
            <div v-if="sharemodal" class="share-modal"
                :style="`background-image: url(${require('../assets/scene4/bg.jpg')});`">
                <a class="share-btn share-btn-branded share-btn-twitter"
                    :href="`https://twitter.com/share?url=${currentUrl}`"
                    title="Share on Twitter">
                        <span class="share-btn-icon"></span>
                        <span class="share-btn-text">Twitter</span>
                </a>

                <!-- Icon-only Branded Facebook button -->
                <a class="share-btn share-btn-branded share-btn-facebook"
                    :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
                    title="Share on Facebook">
                        <span class="share-btn-icon"></span>
                        <span class="share-btn-text">Facebook</span>
                </a>

                <a class="share-btn share-btn-branded share-btn-line"
                    :href="`https://social-plugins.line.me/lineit/share?url=${currentUrl}`">
                    <span class="share-btn-icon"></span>
                    <span class="share-btn-text">Line</span>
                </a>
            </div>
        </div>
    </transition>
    
    <transition name="fadeIn">
      <router-link tag="a" to="/scene5" v-if="sceneA" class="bg-center sceneA-btn"
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
      sceneContent: contents[window.locale].scene4,
      sharemodal: false,
    }),
    computed: {
        currentUrl(){
            const query = this.$route.query;
            const q = Object.keys(query).map(k => `${k}=${query[k]}`).join('&')
            return window.encodeURIComponent(`${window.location.protocol}//${window.location.host}/#/?${q}`);
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
         this.$router.push({path: '/scene5'})
        }
      },
      toshare(){
          console.log('toshare')
        this.sharemodal = true;
      }
    }
  }
</script>
<style type="text/css">
.greeting-block{
        width: 100%;
    height: 14vw;
    line-height: 13vw;
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
.share-modal{
    position: absolute;
    bottom: 42vh;
    left: 10vw;
    width: 80vw;
    height: 16vh;
    background-size: 100% auto;
    z-index: 9999;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.share-modal > a + a{ 
    margin-left: 10px;
}
</style>
