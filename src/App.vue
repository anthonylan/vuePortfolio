<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="logo-link"><img src="./assets/logo-white.png"></router-link>
      <a href="#" class="trigger" @click="callNav"><i class="icon ion-md-menu"></i></a>
      <ul class="lg-nav">
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/lab">Experiements</router-link></li>
         <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <div class="mobile-nav"  @click="closeNav">
      <a href="#" class="close-nav" @click="closeNav">Close</a>
      <ul>
        <li> <router-link to="/">Home</router-link> </li>
        <li> <router-link to="/about">About</router-link> </li>
        <li> <router-link to="/projects">Projects</router-link> </li>
        <li> <router-link to="/lab">Lab</router-link> </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>


<script>
import { TweenMax, TimelineLite, TimelineMax, Expo, Power1 } from 'gsap'
export default {
  

  methods:{
    callNav(e){
      e.preventDefault()
      TweenMax.to('.mobile-nav', .5, {x: 0, ease: Expo.easeOut})
    },
    closeNav(){
      TweenMax.to('.mobile-nav', .5, {x: -400, ease: Expo.easeOut})
    }
  }
}
</script>



<style lang="scss">
@import '@/assets/styles/_variables';
body{
  margin: 0;
  background: $brand-black;
  scroll-behavior: smooth;
  a{
    text-decoration: none;
  }
  h1{
    letter-spacing: -3px;
  }
  h2{
    letter-spacing: -1px;
  }
}

#app {
  font-family: $brand-font;
/*Glitch
===================*/
.glitch{
    position: relative;
    animation: glitch-skew 1s infinite linear alternate-reverse;
}

@keyframes noise-anim{
    $steps:20;
    @for $i from 0 through $steps{
      #{percentage($i*(1/$steps))}{
        clip:rect(random(100)+px,9999px,random(100)+px,0);
      }
    }
  }
  .glitch:after{
    content:attr(data-text);
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    text-shadow:-1px 0 red;
    top:0;
    color:white;
    background:transparent;
    overflow:hidden;
    clip:rect(0,900px,0,0); 
    animation:noise-anim 2s infinite linear alternate-reverse;
  }
  
  @keyframes noise-anim-2{
    $steps:20;
    @for $i from 0 through $steps{
      #{percentage($i*(1/$steps))}{
        clip:rect(random(100)+px,9999px,random(100)+px,0);
      }
    }
  }
  .glitch:before{
    content:attr(data-text);
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    text-shadow:1px 0 blue; 
    top:0;
    color:white;
    background:transparent;
    overflow:hidden;
    clip:rect(0,900px,0,0); 
    animation:noise-anim-2 3s infinite linear alternate-reverse;
  }


}
#nav {
  width: 100%;
  position: absolute;
  z-index: 10;
   top: 0;
  .logo-link{
    float: left;
    padding: 1rem 4rem;
    img{
      width: 60px;
    }
  }
  .trigger{
    float: right;
    padding-right: 1.5rem;
    padding-top: 1rem;
    .icon{
      color: $white;
      font-size: 2.8rem;
    }
    @media (min-width: 550px) {
      display: none;
    }
  }
  .lg-nav{
    float: right;
    margin-right: 4rem;
    li{
      display: inline-block;
      padding: 1.2rem;
      a{
        @include navStylesAndEffects();
         font-weight: bolder;
      }
    }
  }
  a {
    font-weight: bolder;
    color: $white;
    text-decoration: none;
    &.router-link-exact-active {
      color: $white;
    }
  }
  @media (max-width:550px) {
    .lg-nav{
      display: none;
    }
    .logo-link{
      padding: 1rem 2rem;
      img{
        width: 45px;
      }
    }
  }
}


/* Next Project
======================*/
.go-next-project{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
   .container{
       background: $premium-black;
       padding: 4rem 2rem;
   }
   .wrap{
       display: flex;
       justify-content: space-between;
       .left-contents{
           color: $white;
           h1{
               font-size: 4rem;
               margin: 0;
               line-height: 1.4;
           }
           p{
               font-size: 1.2rem;
           }
       }
       .turn{
        img{
            width: 80px;
            transform: translate(-2rem, 5rem);
            transition: all .2s ease-in-out;
        }
       }
   }
   &:hover .turn img{
       transform: translate(-1rem, 5rem);
   }
   @media (max-width:550px) {
       .container{
           padding: 2rem 1rem;
       }
      .wrap{
          .left-contents{
              h1{
                  font-size: 2rem;
              }
              p{
                  font-size: .9rem;
              }
          }
          .turn{
              img{
                  width: 40px;
                  transform: translate(-1rem, 3rem);
              }
          }
      }
   }
}

.brand{
  display: flex;
  justify-content: space-between;
  &-colors{
    flex-basis: 22%;
    @include borderEgg();
    height: 200px;
    width: 190px;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.33);
  }
  @media (max-width: 550px) {
    padding: 1rem 0;
    &-colors{
      height: 60px;
      width: 70px;
    }
  }
}



.mobile-nav{
 @media (min-width: 550px) {
   display: none
 }

 background: $premium-black;
 height: 100%;
 width: 100%;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 9999;
 transform: translateX(-100%);
.close-nav{
  float: right;
  color: $white;
  padding: 1.5rem;
  font-size: 1.3rem;
}
 ul{
   margin-top: 25%;
   margin-left: -5%;
   li{
     list-style: none;
     padding: 1rem;
     position: relative;
     a{
       color: $white;
       font-size: 4rem;
       font-weight: bolder;
     }
   }
 }
}

</style>
