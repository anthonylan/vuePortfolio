<template>
    <div class="about">
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
        <div class="about-wrapper">
            <router-link to="/" class="go-back__home animated" v-bind:class="{fadeInDown: runNow}">Go back</router-link>
            <div class="top-section">
                <div class="left">

                </div>
                <div class="right">
                    <p class="animated" v-bind:class="{fadeInUp: runNow}">Hi! I am Anthony,  a Freelance Web Developer based in Italy, creating thoughtful experience for brands. When I'm not frolicking with code, I try to figure out why I use the mouse with my left hand when I'm right-handed.</p>
                 <p class="animated" v-bind:class="{fadeInUp: runNow}">I am available for a full-time position or freelance work.</p>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-wrapper">
                <ul data-aos="fade-up">
                    <li><a href="mailto:hianthonylan@gmail.com">Email</a></li>
                    <li><a href="https://www.instagram.com/anthony_lann/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/anthonycharles11" target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/anthonylan/" target="_blank">Github</a></li>
                </ul>
                </div>
            </div>
        </div>
        <Loader />
    </div>
</template>



<script>
// @ is an alias to /src
import { TweenMax, TimelineLite, Expo, Power1 } from 'gsap'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'
import Loader from '@/components/Loader.vue'

export default {
  components:{
    Loader
  },
  data() {
    return{
      runNow: false
    }
  },
  methods:{
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
  created(){
    AOS.init()
  },
  mounted(){
    this.$nextTick(this.loaded)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables';
@import "~animate.css/animate.css";


 
    .figure2{
        @include colorFigure();
        width: 300px;
        height: 260px;
        animation: floatingFigure 6s ease-in-out infinite;
        animation-duration: 7s;
        top: 10%;
        left: 0%;
        z-index: 3;
        fill: #222;
          @media (max-width: 550px) {
           width: 160px;
           height: 160px;
       }
      }
    .figure3{
        @include colorFigure();
        fill: #babab9;
        width: 500px;
        height: 500px;
        left: 10%;
        top: 28%;
        z-index: 30;
       @include floating();

       @media (max-width: 550px) {
           width: 200px;
           height: 200px;
           left: 30%;
           top: 10%;
       }
      }
    

  
  .go-back__home{
      position: absolute;
      right: 0;
      top: 0;
      z-index: 999;
      height: 90px;
      width: 50%;
      display: block;
      color: $premium-black;
      //background: #222;
      padding-top: 2rem;
      font-size: 1.4rem;
  }

.top-section{
    height: auto;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding-top: 20%;
    padding-bottom: 10%;
    div{
        flex-basis: 45%;
    }
    p{
        color: $premium-black;//#babab9;
        max-width: 70%;
        font-size: 2rem;
        line-height: 1.6;
    }
    @media (max-width: 550px) {
        display: block;
        padding-top: 75%;
        p{
            font-size: 1.5rem;
            padding-left: 1rem;
        }
    }
}

.bottom{
    height: 100%;
    width: 100%;
    background: $premium-black;
    &-wrapper{
        width: 95%;
        margin: 0 auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
        ul{
            li{
                list-style: none;
                a{
                    font-size: 5rem;
                    font-family: $LB;
                    color: $white;
                    font-weight: 400;
                    font-family: 'EB Garamond', serif;
                    line-height: 1.4;
                    transition: all .3s ease-in-out;
                    &:hover{
                        color: #babab9;
                    }
                }
                 @media (max-width: 550px) {
                    a{
                        font-size: 3rem;
                    }
               }
            }
        }
    }
}
</style>