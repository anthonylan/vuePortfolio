<template>
  <div class="projects-section">
       <div class="big-guy animated" v-bind:class="{fadeInUp: runNow}">
         <h1>Projects</h1>
       </div>


 <router-link to="/khorakhane" class="works">
    <div class="recent-works work1"></div>
       <div class="recent-works__cover" ref="gonext">
          <h2>Khorakhane</h2>
            <div class="tilt-line"></div>
          <h4>01</h4>
      </div>
 </router-link>

 <div class="twin-work" ref="gonext1">
    <router-link to="/biocamini" class="works">
    <div class="recent-works work2"></div>
       <div class="recent-works__cover">
          <h2>Biocamini Store</h2>
            <div class="tilt-line"></div>
          <h4>02</h4>
      </div>
 </router-link>
  <router-link to="/fairly" class="works">
    <div class="recent-works work3"></div>
       <div class="recent-works__cover">
          <h2>Fairly Stay</h2>
            <div class="tilt-line"></div>
          <h4>03</h4>
      </div>
 </router-link>
 </div>
   
 

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
import Loader from '@/components/Loader'
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
    goTop(){
       const {ftnav, gonext, gonext1} = this.$refs
       ftnav.addEventListener('click', (e) => { this.goWrapper() })
       gonext.addEventListener('click', (e) => { this.goWrapper() })
       gonext1.addEventListener('click', (e) => { this.goWrapper() })
   },
   goWrapper(){
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
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
  mounted(){
    this.goTop()
    this.$nextTick(this.loaded)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables';
@import "~animate.css/animate.css";
 


.works{
  position: relative;
  display: block;
   width: 400px;
   height: 460px;
   margin: 0 auto;
   @include floating();
   .recent-works__cover{
      position: absolute;
      top: 60%;
      right: 50%;
       transform: translateX(-15%);
            h2{
                color: $white;
                margin: 0;
                font-size: 2.5rem;
            }
            .tilt-line{
                height: 4px;
                width: 140px;
                background: $white;
                margin: 1rem 0;
            }
            h4{
                color: #988e9f;
                margin: 0;
                font-family: 'PT Mono', monospace;;
            }
            @media (max-width:550px){
              transform: translate(-5%, -90%);
              h2{font-size: 1.3rem;}
            }
    }
}
 .recent-works{
   width: 400px;
   height: 460px;
   margin: 0 auto;
   mask: url('../assets/icons/blobs.svg') no-repeat 50% 50%;
   mask-size: cover;
   @media (max-width: 550px) {
     width: 240px;
     height: 260px;
   }
 }
 .work1{
    background: url('../assets/kharokhane/art2.jpg');
    @include workBg();
 }
  .work2{
   background: url('../assets/biocamini/bg.jpg');
    @include workBg();
 }
  .work3{
    background-image: url('../assets/fairly/bg.jpg');
    @include workBg();
 }




  

.projects-section{
  //background: $brand-black;
  z-index: 40;
  @media (max-width: 550px) {
    padding-top: 20%;
    overflow-x: hidden;
  }
    .big-guy{
      position: absolute;
      top: -5%;
      right: 10%;
      overflow: hidden;
      z-index: -100;
      h1{
        font-size: 15rem;
        color: $white;
        opacity: .03;
      }
      @media (max-width: 550px) {
        display: none;
      }
    }

  .twin-work{
      width: 80%;
      margin: 0 auto 10% auto;
      display: flex;
      justify-content: space-between;
      .works{
          flex-basis: 40%;
          &:nth-child(2){
              margin-top: 10%;
          }
      }
      @media (max-width:550px) {
        flex-direction: column;
        transform: translate(-16%, -30%);
        .works{
          .recent-works__cover{
            top: 100%;
          }
        }
      }
  }

    .tilt-one{
       background-image: url('../assets/kharokhane/art2.jpg');
    }
    .tilt-two{
       background-image: url('../assets/biocamini/bg.jpg');
    }
    .tilt-three{
       background-image: url('../assets/fairly/bg.jpg');
    }
  
}


</style>