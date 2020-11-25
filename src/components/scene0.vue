<template>
  <div class="container flex-container">
    <div class="scene0-loading">
      <div class="scene0-loading-slide" :style="`width:${percent}%`"></div>
      <p class="scene0-loading-text">{{percent}} %</p>
    </div>
  </div>
</template>
<script type="text/javascript">
  import resouce from '../store/resouces';

  const len = resouce.length - 1;
  export default {
    name: 'preload',
    data: ()=>({
      index: 0,
    }),
    computed:{
      percent(){
        const p = (this.index / len * 100).toFixed(0);

        return p > 100 ? 100: p;
      }
    },
    watch: {
      percent(val) {
        if(val === 100){
          this.$router.push({ path:`/scene1` });
        }
      }
    },
    mounted(){
      resouce.forEach((src)=>{
        var p = new Image();
        p.onload = () => {
          this.index ++;
        }
        p.src = src
      });
    },

  }
</script>
<style type="text/css">
  .flex-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scene0-loading{
    position: relative;
    width: 80%;
    border: 5px solid #fff;
    height: 50px;
    box-sizing: border-box;
  }
  .scene0-loading-slide{
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    background: linear-gradient(45deg,
                  #fb3 25%, #58a 0, #58a 50%,
                  #fb3 0, #fb3 75%, #58a 0);
    background-size: 30px 30px;
  }

  .scene0-loading-text{
    position: absolute;
    margin: 0;
    padding: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    line-height: 40px;
    text-align: center;
  }
</style>
