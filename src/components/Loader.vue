<template>
    <div class="lo">
    <div class="loader">
        <h3>Making toast...</h3>
        </div>
    </div>
</template>


<script>
import { TweenMax, TimelineLite, Expo, Power1 } from 'gsap'
export default {
    name: 'loader'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables';
@import "~animate.css/animate.css";


/* Loader...
=========================== */
.loader{
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: $premium-black;
  z-index: 999;
h3{
  @include loaderEl();
  font-family: $LB;
  margin-right: -1rem;
  margin-top: -.5rem;
  color: $white;
  font-size: 2rem;
}

}


</style>