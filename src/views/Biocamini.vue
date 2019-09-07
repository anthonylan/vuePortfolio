<template>
  <div class="fairly">
      <div class="figure"></div>
      <div class="hero-wrapper">
           <h1 class="animated" v-bind:class="{fadeInUp: runNow}">Biocamini Store</h1>
            <p class="animated" v-bind:class="{fadeInUp: runNow}">A company, with attentive respect for the planet</p>
      </div>
      <div class="project-details">
          <div class="project-details__wrapper">
              <h1 data-aos="fade-up" data-aos-once="true">The Project</h1>
              <p data-aos="fade-up" data-aos-once="true">Biocamini is a young company, attentive to respect for the planet. This is not just a business but a mission, a green mission! Their products are environmentally friendly, complete your furnishing, heating it properly.</p>
               <a data-aos="fade-up" data-aos-once="true" href="https://www.biocaministore.it/" target="_blank" class="visit-web">
                Visit Website
               <img src="../assets/icons/transfer.svg" class="go">
            </a>
          </div>
      </div>

    <div class="design">
        <div class="wrapper-xl">
            <h3 class="tag__number"> 01<span class="leen"></span> <span class="text">Design System</span></h3>
            <div class="pro-images">
                <div class="img" data-aos="fade-in">
                    <img src="../assets/biocamini/Screenshot_18.png">
                </div>
                <div class="img" data-aos="fade-in">
                    <img src="../assets/biocamini/Screenshot_3.png">
                </div>
                <div class="img" data-aos="fade-in">
                    <img src="../assets/biocamini/Screenshot_2.png">
                </div>
                <div class="img" data-aos="fade-in">
                    <img src="../assets/biocamini/Screenshot_1.png">
                </div>
            </div>
        </div>
    </div>
        <div class="design white">
        <div class="wrapper-xl" data-aos="fade-up">
            <h3 class="tag__number"> 02<span class="leen"></span> <span class="text">Brand Colors</span></h3>
            <div class="brand">
                <div class="brand-colors" style="background: #d5a07f;"></div>
                <div class="brand-colors" style="background: black;"></div>
                <div class="brand-colors" style="background: #f0f0f5;"></div>
                <div class="brand-colors" style="background: #222222;"></div>
            </div>
        </div>
    </div>
       <router-link to="fairly" class="go-next-project lab">
        <div class="container" ref="gonext">
            <div class="wrapper">
                <div class="wrap">
                    <div class="left-contents">
                        <p>Next Project</p>
                        <h1>Fairly Stay</h1>
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
    background-image: url('../assets/biocamini/bg.jpg');
}

/* Top Section Hero
================================= */
.fairly{
  .hero-wrapper{
      @include heroWrapper();
    }
 }




.project-design{
  background: $white;
  padding: 4rem 0;
  margin-top: -5rem;
  &__wrapper{
    width: 50%;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
}


</style>