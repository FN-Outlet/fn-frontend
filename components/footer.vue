<template>
    <footer class="bg-primary py-5 main-footer">
        <div class="container mt-5">
          <div class="d-lg-flex justify-content-between">
            <div class="w-100">
              <nuxt-link :to="localePath('/')">
                <img src="/logo-white.png" class="img-fluid" />
              </nuxt-link>
              <nav class="mt-5">
                <nuxt-link :to="localePath('online')" class="text-white d-block">
                  {{ $t('nav.online') }}
                </nuxt-link>
                
                <nuxt-link :to="localePath('products')" class="text-white d-block">
                  {{ $t('nav.productservice') }}
                </nuxt-link>
                <nuxt-link :to="localePath('branch')" class="text-white d-block">
                  {{ $t('nav.branch') }}
                </nuxt-link>
                

                <h2 class="link-collapse text-white" :class="isHideAboutUs?'':'active'" @click="isHideAboutUs=!isHideAboutUs">{{ $t('nav.aboutus') }}</h2>
                <div class="ms-4 my-4" v-show="!isHideAboutUs">

                <div class="row">
                  <h3 class="link-collapse text-white" :class="isHideSub1?'':'active'"  @click="isHideSub1=!isHideSub1">{{ $t('Company Info') }}</h3>
                  <div class="sub-menu mb-5" v-show="!isHideSub1">
                    <nuxt-link :to="localePath('history')" class=" text-white">
                      {{ $t("Company History") }}
                    </nuxt-link>
                    <nuxt-link :to="localePath('vision-mission')" class=" text-white">
                      {{ $t("Vision & Mission") }}
                    </nuxt-link>
                    <nuxt-link :to="localePath('message-chairman')" class=" text-white">
                      {{ $t("Message from Chairman") }}
                    </nuxt-link>
                    <!-- <nuxt-link :to="localePath('structure')" class=" text-white">
                      {{ $t("Business Structure") }}
                    </nuxt-link>
                    <nuxt-link :to="localePath('organization-chart')" class=" text-white">{{ $t("Organization Chart") }}</nuxt-link> -->
                    <nuxt-link :to="localePath('structure-organization-chart')" class=" text-white">{{ $t("Business Structure and Organization Chart") }}</nuxt-link>
                    <nuxt-link :to="localePath('directors')" class=" text-white">{{ $t("Board of Directors and Sub-Committee") }}</nuxt-link>
                    <!-- <nuxt-link :to="localePath('sub-committee')" class="text-white">{{ $t("Sub-Committee") }}</nuxt-link> -->
                    <nuxt-link :to="localePath('goodCorporateGovernance')" class=" text-white">{{ $t("Good Corporate Governance") }}</nuxt-link>
                  </div>

                  <h3 class="text-white"><nuxt-link :to="localePath('investor-relations')" class="text-white">{{ $t('Investor Relations') }}</nuxt-link></h3>
                  <!-- <div class="sub-menu mb-5" v-show="!isHideSub2">
                    <nuxt-link :to="localePath('stockprice')" class="col-6 text-white">{{ $t("Stock Price") }}</nuxt-link>
                    <nuxt-link :to="localePath('financial')" class="text-white">{{ $t("Financial Info") }}</nuxt-link>
                    <nuxt-link :to="localePath('investor-relations')" class="text-white">{{ $t("Shareholders") }}</nuxt-link>
                    <nuxt-link :to="localePath('webcast')" class="text-white">{{ $t("Webcast") }}</nuxt-link>
                    <nuxt-link :to="localePath('dividendpolicy')" class="text-white">{{ $t("Dividend Policy") }}</nuxt-link>
                  </div> -->

                  <h3 class="text-white"><nuxt-link :to="localePath('news')" class="text-white">{{ $t("News and Activities") }}</nuxt-link></h3>
                  <h3 class="text-white"><nuxt-link :to="localePath('career')" class="text-white">{{ $t("Careers") }}</nuxt-link></h3>
                  <h3 class="text-white"><nuxt-link :to="localePath('contact')" class="text-white">{{ $t("Contact") }}</nuxt-link></h3>

                  <!--<div class="row">
                    
                    <nuxt-link :to="localePath('management-team')" class=" text-white">{{ $t("Management Team") }}</nuxt-link>
                    
                    
                    
                  </div>-->

                  <div class="row">
                    <a target="_blank" href="https://www.set.or.th/th/market/product/stock/quote/FN/news" class="text-white">{{ $t("Announcement") }}</a>
                    
                    
                  </div>
                  <div class="row">
                    

                    <nuxt-link :to="localePath('public-documents')" class=" text-white">{{ $t("Documents") }}</nuxt-link>
                  
                  </div>
                </div>
          </div>
              </nav>
              <div class="social-links d-flex mt-5">

                <a 
                  v-for="(online, index) in online" :key="index"
                  target="_blank" 
                  :href="online.attributes.link" 
                  class="">
                  <img :src="online.attributes.icon.data.attributes.url" class="img-fluid" style="width:30px;"  />
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
          <img src="/live-chat.svg" class="img-fluid" id="plus">
        </button>
      </div> 
      <!--<CookieControl>
        <template #bar>
          <h3>Bar title</h3>
          <p>Bar description (you can use $cookies.text.barDescription)</p>
          <n-link>Go somewhere</n-link>
        </template>
        <template #modal>
          <h3>Modal title</h3>
          <p>Modal description</p>
        </template>
      </CookieControl>-->
      
</template>

<script>
import { defineComponent } from '@vue/composition-api'


export default defineComponent({
  data() {
    return {
      width: '50',
      isOpen: true,
      isHideAboutUs: true,
      isHideSub1: true,
      online: '',
    };
  },
  components: {

  },

  mounted() {
    //console.log( this.width )
    this.getOnline();
  },
  methods: {
    getWidth( submenuWidth) {
      this.width = submenuWidth
    },
    async getOnline() {
      const { data } = await $fetch(`/api/onlines?&sort=id:asc&populate=*`);
      this.online = data;
    }
  },
})
</script>
<style>
  .cookieControl__ControlButton {
    left: 100px;
  }
</style>
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
      display: flex;
      flex-wrap: wrap;
      margin: 0 -5px;
      width: 260px;
      > *{
        margin: 5px;
        flex: 0 30px;
        display: flex;
        align-items: center;
      }
      img{
        height: 25px;
        width: auto;
        object-fit: contain;
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
  width: 50px;
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

    /*.fab {
      background-color: darken($blue, 5);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    #plus {
      transform: rotateZ(135deg) translate(-1px, 3px);
    }*/

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
.menu-about{
    position: relative;
    &:after{
      content: '+';
      padding-left: 5px;
    }
    &.active:after{
      content: '-';
    }
  }

  .links{
  img{
    width: 30px;
  }
}

.link-collapse{
  width: auto;
  background: url('/arrow-white-down.svg') no-repeat center right;
  background-size: 16px;
  display: inline-block;
  padding-right: 45px;
  font-size: 16px;
  font-weight: normal;
  &.active{
    background-image: url('/arrow-white-up.svg');
  }
}

.sub-menu{
  display: inline-flex;
  flex-wrap: wrap;
  > *{
    flex: 30%;
    @media (max-width: 768px) {
      flex: 100%;
    }
  }
  
}

h3{
    font-size: 16px;
    font-weight: normal;
  }

</style>