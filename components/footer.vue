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
                <nuxt-link :to="localePath('products')" class="text-white d-block">
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
                <a target="_blank" href="https://www.fnmallonline.com/" class="ms-2">
                  <img src="/icon-website.png" class="img-fluid" style="width:30px; margin-right:15px;"/>
                </a>
                <a href="https://www.facebook.com/FN.Factory.Outlet" class="icon-facebook ms-2" target="_blank">
                  <img src="/icon-facebook.png" class="img-fluid" style="margin-right:15px;"/>
                </a>
                <a href="https://www.tiktok.com/@fn_officialth" class="ms-2" style="width:25px; margin-right:15px;" target="_blank">
                  <img src="/tiktok.svg" class="img-fluid" />
                </a>
                <a href="https://www.lazada.co.th/tag/fn-outlet/?spm=a2o4m.searchlist.search.2.7a0f7f6aebcak3&q=fn%20outlet&_keyori=ss&clickTrackInfo=textId--5049057020637672817__abId--329751__Score--1.796195651684857__pvid--1832af9a-6dd1-44f0-97c6-355738f49c0e__matchType--1__matchList--1-2__srcQuery--fn%20outlet__spellQuery--fn%20outlet__ctrScore--0.7764797806739807__cvrScore--0.007095813751220703&from=suggest_normal&sugg=fn%20outlet_0_1&catalog_redirect_tag=true" class="" style="width:40px; margin-right:5px;" target="_blank">
                  <img src="/laz.svg" class="img-fluid" />
                </a>
              </div>
              <div class="social-links d-flex mt-4">
                <a href="https://shopee.co.th/fnoutlet" class="ms-2" target="_blank">
                  <img src="/shopee.svg" class="img-fluid" style="width:25px; margin-right:10px;" />
                </a>
                <a href="https://www.youtube.com/channel/UCTGvDZvpTrKsDq-48L8pJ4g" class="ms-2 mt-2" style="width:30px; margin-right:5px;" target="_blank">
                  <img src="/youtube.svg" class="img-fluid" />
                </a>
                <a href="https://www.instagram.com/fnoutlet/" target="_blank">
                  <img src="/icon-ig.png" class="img-fluid" style="margin-left:10px; margin-right:10px;"/>
                </a>
                <a target="_blank" href="https://page.line.me/wgy7774r?openQrModal=true" class="ms-2">
                  <img src="/icon-line.png" class="img-fluid" style="width:30px; margin-right:5px;"/>
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
              <a v-if="$i18n.locale === 'en'" href="/Privacy Policy FN(En).pdf" target="_blank" class="text-white text-xs">Privacy Policy</a>
              <a v-if="$i18n.locale === 'th'" href="/Privacy Policy FN(En).pdf" target="_blank" class="text-white text-xs">Privacy Policy</a>
              <a href="/cookies-policy.pdf" target="_blank" class="text-white text-xs">Cookies Policy</a>
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

    .social-links{
      align-items: center;
      img{
        height: 25px;
        width: auto;
      }
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