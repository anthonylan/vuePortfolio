<template>
  <div class="lab">
      <div class="figure"></div>
      <div class="hero-wrapper">
           <h1 class="animated" v-bind:class="{fadeInUp: runNow}">Code Lab</h1>
            <p class="animated" v-bind:class="{fadeInUp: runNow}">Explore some crazy experiements</p>
      </div>
     <div class="design lab">
        <div class="wrapper-xl">
        <h3 class="tag__number"> 01<span class="leen"></span> <span class="text">Passion + Curiosity</span></h3>
        <div class="lab-contents">
            <div class="lab-ex">
                <a href="https://protocss.netlify.com/" target="_blank">
                    <img src="../assets/lab/Screenshot_1.png">
                    <p>CSS boilerplate</p>
                </a>
            </div>
            <div class="lab-ex">
                <a href="https://github.com/anthonylan/spotify-clone" target="_blank">
                    <img src="../assets/lab/Screenshot_2.png">
                    <p>Spotify Clone</p>
                </a>
            </div>
        </div>
        <div class="lab-contents">
                <div class="lab-ex">
                    <a href="https://anthonylan.github.io/Uncaughtcss/index.html" target="_blank">
                        <img src="../assets/lab/Screenshot_3.png">
                        <p>Lightweight CSS Framework</p>
                    </a>
                </div>
                <div class="lab-ex">
                    <a href="https://github.com/anthonylan/meteo" target="_blank">
                        <img src="../assets/lab/Screenshot_5.png">
                        <p>Meteo</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
        <router-link to="khorakhane" class="go-next-project lab">
        <div class="container" ref="gonext">
            <div class="wrapper">
                <div class="wrap">
                    <div class="left-contents">
                        <p>Next Project</p>
                        <h1>Khorakhané</h1>
                    </div>
                    <div class="turn">
                        <img src="../assets/icons/arrow.svg">
                    </div>
                </div>
            </div>
        </div>
        </router-link>
      <footer class="footer-project">
          <div class="footer-project__logo">
            <img src="../assets/logo-white.png">
            <div class="extra-footer__figure"></div>
            <div class="footer-social">
               <a href="https://www.instagram.com/anthony_lann/"><i class="fab fa-instagram"></i></a>
               <a href="https://www.linkedin.com/in/anthonycharles11"><i class="fab fa-linkedin-in"></i></a>
               <a href="https://github.com/anthonylan/"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <div class="footer-contact__details">
              <h3>+393 51 037 8070</h3>
              <h3>hianthonylan@gmail.com</h3>
                 <div class="footer-nav" ref="ftnav">
                  <ul>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/lab">Experiements</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
            </div>
            <p>Copyright © {{new Date().getFullYear()}} Anthonylan | Made with Vue.Js</p>
          </div>
        </footer> 
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
    },
    goTop(){
       const {ftnav, gonext} = this.$refs
       ftnav.addEventListener('click', (e) => { this.goWrapper() })
       gonext.addEventListener('click', (e) => { this.goWrapper() })
   },
   goWrapper(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
  },
  created(){
    AOS.init()
  },
  mounted(){
    this.goTop()
    this.$nextTick(this.loaded)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables';
@import "~animate.css/animate.css";


/* Figure | Bg
=============================== */
.figure{
    @include figureIsHero();
    background-image: url('../assets/lab/lab.jpg');
}

/* Top Section Hero
================================= */
.lab{
  .hero-wrapper{
    @include heroWrapper();
  }

  
  /* Lab
  ============================*/
  .lab{
      background: $premium-black;
      padding: 2rem 0;
      .tag__number{
          color: $white;
          .leen{
              background: $white;
          }
      }
      .lab-contents{
          display: flex;
          justify-content: space-between;
          .lab-ex{
              flex-basis: 48%;
              @include borderEgg();
              img{
                  width: 100%;
              }
              p{
                  color: $white;
              }
          }
      }
      @media (max-width:550px) {
          .lab-contents{
            flex-direction: column;
          }
      }
  }
}




/* Footer
======================= */
.footer-project{
  margin-top: 0;

  @media (max-width: 550px) {
    padding: 2rem 0;
    .footer-contact__details{
      margin-top: 3%;
    }
  }
}
</style>