<template>
  <div class="home">
    <div class="showcase" @wheel="handleScroll">
      <div class="showcase-container">
        <div class="showcase-container__gap">
          <h1 class="animated" v-bind:class="{fadeInUp: runNow}">
            <span class="glitch" data-text="Creative">Creative</span>&nbsp;<span class="glitch" data-text="Developer">Developer</span>
            <span class="mobile-showcase__text"> <span class="pull-text">Creative</span> Developer</span>
            </h1>
          <p class="animated" v-bind:class="{fadeInUp: runNow}">Creating thoughtful experience for brands</p>
          <router-link to="/about" class="btn-global"> <span>About me</span> </router-link>
        </div>
           <div class="social-pro">
             <a href="https://www.instagram.com/anthony_lann/"><i class="fab fa-instagram"></i></a>
             <a href="https://www.linkedin.com/in/anthonycharles11"><i class="fab fa-linkedin-in"></i></a>
             <a href="https://github.com/anthonylan/"><i class="fab fa-github"></i></a>
          </div>
      </div>
      <div class="go-project" ref="showcase">
        <span class="show-work__text">
          <span class="scroll-text">Scroll</span> <span class="tap-text">Tap</span> 
        </span>
        <div class="show-work"></div>
      </div>
     <div class="figure1">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
     </div>
      <div class="figure2">
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
      </div>
      <div class="figure3">
         <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
      </div>
    </div>

    <Loader />

  </div>
</template>

<script>
// @ is an alias to /src
import Loader from '@/components/Loader.vue'
import { TweenMax, TimelineLite, Expo } from 'gsap'
import { setTimeout } from 'timers';




export default {
  name: 'home',
  components: {
    Loader
  },
  data(){
    return{
        runNow: false
    }
  },
  mounted(){
    const {showcase} = this.$refs
    if("ontouchstart" in window){
      showcase.addEventListener('touchstart', () => {
        this.$router.push('projects')
      })
    }
    this.$nextTick(this.loaded)
  },
  methods:{
    handleScroll(e) {
       setTimeout(() => { this.$router.push('projects') }, 200)
    },
    loaded(){
      TweenMax.from('.loader h3', .5, {y: 100})
      setTimeout(() => {
         TweenMax.to('.loader', .5, {y: -1000, delay: .5})
          setTimeout(() => {
          this.runNow = true
        }, 300)
      }, 2000)
    }
  },
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/_variables';
@import "~animate.css/animate.css";

//Emergency Mixins
@mixin arrow {
    background-image: url('../assets/icons/transfer.svg');
    @include extentArrow();
}

.home{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}


 .figure1{
    @include colorFigure();
    fill: #1e1b23;
    @media (min-width: 550px) {
      width: 540px;
      height: 400px;
      left: 70%;
      top: -10%;
      z-index: -50;
    }
}

 @media (min-width: 550px) {
      .figure2{
        @include colorFigure();
        width: 300px;
        height: 260px;
        animation: floatingFigure 6s ease-in-out infinite;
        animation-duration: 7s;
        top: 90%;
        left: -5%;
        fill: #1e1b23;
      }
      .figure3{
        @include colorFigure();
        fill: #f06449;
        width: 100px;
        height: 100px;
        left: 90%;
        top: 28%;
        z-index: 30;
        animation: floatingFigure 6s ease-in-out infinite;
      }
    }
.showcase{
  background-image: url('../assets/line-home.svg');
  color: $white;
  height: 100vh;
  width: 100%;
  display: table;
  .showcase-container{ 
    display: table-cell;
    vertical-align: middle;
    &__gap{
      width: 80%;
      margin: 0 auto;
      .btn-global{
        @include btnGlobal();
        background: $linear-orange;
        &::after{
          @include arrow();
        }
      }
    }
      h1{
        font-size: 5.5rem;
        font-family: $brand-font;
        font-weight: bolder;
        letter-spacing: -5px;
        margin: 0;
      }
      p{
        color: $para-color;
        font-family: $LB;
        font-size: 1.4rem;
        line-height: 1.8;
        font-style: italic;
      }
  }
  .social-pro{
    position: absolute;
    right: 0;
    top: 50%;
    transform: rotate(-90deg);
    .fab{
      color: $white;
      font-size: 1.5rem;
      padding: 0 .8rem;
      float: right;
      &:hover{
        color: $super-blue;
      }
    }
  }
  .show-work__text{
    transform: translateY(-3rem);
    font-family: $LB;
    display: block;
    .tap-text{
      display: none;
    }
    @media (max-width: 550px) {
      .scroll-text{
        display: none;
      }
      .tap-text{
        display: inline-block;
      }
    }
  }
  .show-work{
      @include showWork();
      bottom: 0;
      width: 2px;
      height: 60px;
      margin: 0 auto;
      display: block;
      background: $white;
      animation: scroll 2s infinite;
    
    @keyframes scroll {
      0%, 20%, 80%, 100%{
        height: 60px;
      }
      40%{
        height: 40px;
      }
      60%{
        height: 30px;
      }
    }
  }
 @media (max-width:550px) {
   .show-work__text{
      bottom: 10%;
   }
     .social-pro{
       display: none;
     }
   .showcase-container{
        h1{
        font-size: 2.5rem;
        letter-spacing: -1px;
        .glitch{
          display: none;
        }
        .pull-text{
          margin-left: -4%;
        }
      }
      p{
          font-size: 1.3rem;
          margin: .4rem 0;
          line-height: 1.2;
          margin-right: 1rem;
        }
   }
 }
 @media (min-width: 550px) {
   .mobile-showcase__text{
     display: none;
   }
 }
 .go-project{
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    height: auto;
    padding: 1rem;
  }
}




</style>