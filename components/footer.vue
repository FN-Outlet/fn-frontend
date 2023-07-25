<template>
    <footer class="bg-primary py-5 main-footer">
        <div class="container mt-5">
          <div class="d-lg-flex justify-content-between">
            <div>
              <nuxt-link :to="localePath('/')">
                <img src="/logo-white.png" class="img-fluid" />
              </nuxt-link>
              <nav class="mt-5">
                <a href="#" class="text-white d-block">{{ $t('nav.aboutus') }}</a>
                <nuxt-link :to="localePath('products-services')" class="text-white d-block">
                  {{ $t('nav.productservice') }}
                </nuxt-link>
                <nuxt-link :to="localePath('branch')" class="text-white d-block">
                  {{ $t('nav.branch') }}
                </nuxt-link>
                <nuxt-link :to="localePath('online')" class="text-white d-block">
                  {{ $t('nav.online') }}
                </nuxt-link>
              </nav>
              <div class="social-links d-flex mt-5">
                <a href="https://www.instagram.com/fnoutlet/" target="_blank">
                  <img src="/icon-ig.png" class="img-fluid" />
                </a>
                <a href="https://www.facebook.com/FN.Factory.Outlet" class="icon-facebook ms-2" target="_blank">
                  <img src="/icon-facebook.png" class="img-fluid" />
                </a>
              </div>
            </div>
            <div class="right">
              <a class="up" href="#"><img src="/icon-up.png" class="img-fluid"></a>
              <div class="app-links d-flex">
                <a href="https://play.google.com/store/apps/details?id=com.fnoutlet.mobile"><img src="/download-google.png" class="img-fluid" /></a>
                <a href="https://apps.apple.com/us/app/fn-outlet/id1500781664" class="ms-3"><img src="/download-ios.png" class="img-fluid" /></a>
              </div>
            </div>
          </div>
          <hr>
          <div class="d-lg-flex justify-content-between align-items-center">
            <p class="text-white text-xs m-0">Copyright © 2023 FN Factory Outlet Public Company Limited.</p>
            <div class="bottom-links">
              <a href="#" class="text-white text-xs">Privacy Policy</a>
              <a href="#" class="text-white text-xs">Cookies Policy</a>
            </div>
          </div>
        </div>
  
      </footer>
      <div class="radial" @click="isOpen=!isOpen" :class="isOpen?'open':''">
        <a href="https://lin.ee/kUuVSkB" target="_blank" class="fa fa-paper-plane fa-3x" id="fa-1">
          <img src="/line.svg" class="img-fluid">
        </a>
        <a href="tel:02-4910900" class="fa fa-home fa-3x" id="fa-2">
          <img src="/telephone.svg" class="img-fluid">
        </a>
        <a href="http://m.me/fn.factory.outlet" target="_blank" class="fa fa-search fa-3x" id="fa-3">
          <img src="/messenger.svg" class="img-fluid">
        </a>
        <button class="fab">
          <img src="/plus.svg" class="img-fluid" id="plus">
        </button>
      </div> 
</template>

<script>
import { defineComponent } from '@vue/composition-api'


export default defineComponent({
  data() {
    return {
      width: '50',
      isOpen: false,
    };
  },
  components: {

  },

  mounted() {
    console.log( this.width )
  },
  methods: {
    getWidth( submenuWidth) {
      this.width = submenuWidth
    },
  },
})
</script>

<style lang="scss" scoped>
 .main-footer{
    a{
      text-decoration: none;
    }
    hr{
      border-color: #fff;
      margin: 30px 0;
    }
  
    .right{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      img{
        width: 140px;
      }
    }
    .right .up{
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      img{
        display: block;
        width: 80px;
        height: 80px;
      }
    }
    
  }
  
  .text-xs{
    font-size: 10px;
  }
  
  .bottom-links{
    a + a{
      position: relative;
      padding-left: 10px;
      &::before{
        content: '|';
        margin-right: 10px;
      }
    }
  }
  
  $red: #fff;
  $blue: #fff;

.disable-focus:focus {
  outline: 0;
}

.radial {
  width: 80px;
  height: 80px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  // background: $red;
  background: transparent;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 20;
}

.fab {
  // opacity: .5;
  border: none;
  color: white;
  // background-color: #ff4081;
  background-color: $blue;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  transition: all 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: darken($blue, 1);
  }
}

#plus {
  transition: all 0.2s ease-in-out;
  margin-top: 3px;
  width: 30px;
}

#fa-1,
#fa-2,
#fa-3 {
  position: absolute;
  background: transparent;
  border: none;
  right: 10px;
  bottom: 10px;
  transition: all 0.15s ease-in-out;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: $red;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 25px;
  }

  &:hover {
    tansition-delay: 0s;
    color: lighten($red, 15);
  }
}

.radial {
  &.open {
    // height: 300px;
    // width: 300px;
    // right: -95px;
    // bottom: -95px;

    .fab {
      background-color: darken($blue, 5);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    #plus {
      transform: rotateZ(135deg) translate(-1px, 3px);
    }

    #fa-1 {
      transition-delay: 0.1s;
      transform: translate(-100px, 0px);
    }

    #fa-2 {
      transition-delay: 0.1s;
      transform: translate(-65px, -65px);
    }

    #fa-3 {
      transition-delay: 0.1s;
      transform: translate(0px, -100px);
    }
  }
}

</style>