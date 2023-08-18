<template>
  <nav class="bg-primary side-nav" :style="`left: -${width}px;`">
    <div class="hidden-menu" ref="menu">
      <div class="top">
        <nuxt-link :to="localePath('/')">
          <img src="/logo-white.png" class="img-fluid" />
        </nuxt-link>
        <nav class="mt-lg-5 mt-4">
          <h2 class="text-white">
            <nuxt-link :to="localePath('online')" class="col-6 text-white">
              {{ $t('nav.online') }}
            </nuxt-link>
          </h2>
          
          
          <h2 class="text-white" style="white-space: nowrap;">
            <nuxt-link :to="localePath('products')" class="col-6 text-white">
              {{ $t('nav.productservice') }}
            </nuxt-link>
          </h2>
          <h2 class="text-white">
            <nuxt-link :to="localePath('branch')" class="col-6 text-white">
              {{ $t('nav.branch') }}
            </nuxt-link>
          </h2>
          <h2 class="text-white" @click="isHideAboutUs=!isHideAboutUs">{{ $t('nav.aboutus') }}</h2>
          <div class="ms-lg-5 my-lg-5 my-4" v-show="!isHideAboutUs">
            <!--<div class="row">
              <a href="#" class="col-6 text-white">นักลงทุนสัมพันธ์</a>
            </div>-->
            <div class="row">
              <nuxt-link :to="localePath('history')" class="col-6 text-white">
                {{ $t("Company History") }}
              </nuxt-link>
              <!--<a href="#" class="col-6 text-white">การกำกับดูแลกิจการที่ดี</a>-->
              <nuxt-link :to="localePath('vision-mission')" class="col-6 text-white">
                {{ $t("Vision & Mission") }}
              </nuxt-link>
            </div>
            <div class="row">
              <!--<a href="#" class="col-6 text-white">การกำกับดูแลกิจการที่ดี</a>-->
              <nuxt-link :to="localePath('structure')" class="col-6 text-white">
                {{ $t("Business Structure") }}
              </nuxt-link>
              <nuxt-link :to="localePath('message-chairman')" class="col-6 text-white">
                {{ $t("Message from Chairman") }}
              </nuxt-link>
            </div>
            <div class="row">
              <nuxt-link :to="localePath('organization-chart')" class="col-6 text-white">{{ $t("Organization Chart") }}</nuxt-link>
              <nuxt-link :to="localePath('directors')" class="col-6 text-white">{{ $t("Board of Directors") }}</nuxt-link>
              
              
            </div>
            <div class="row">
              <nuxt-link :to="localePath('sub-committee')" class="col-6 text-white">{{ $t("Sub-Committee") }}</nuxt-link>
              <nuxt-link :to="localePath('management-team')" class="col-6 text-white">{{ $t("Management Team") }}</nuxt-link>
              
              
            </div>
            <div class="row">
              <nuxt-link :to="localePath('stockprice')" class="col-6 text-white">{{ $t("Stock Price") }}</nuxt-link>
              <nuxt-link :to="localePath('financial')" class="col-6 text-white">{{ $t("Financial Info") }}</nuxt-link>
              
            </div>
            <div class="row">
              <a target="_blank" href="https://www.set.or.th/th/market/product/stock/quote/FN/major-shareholders" class="col-6 text-white">{{ $t("Shareholders") }}</a>
              <a target="_blank" href="https://www.set.or.th/th/market/product/stock/quote/FN/news" class="col-6 text-white">{{ $t("Announcement") }}</a>
              
            </div>
            <div class="row">
              <nuxt-link :to="localePath('contact')" class="col-6 text-white">{{ $t("Contact") }}</nuxt-link>
              <nuxt-link :to="localePath('news')" class="col-6 text-white">{{ $t("FN News") }}</nuxt-link>
              
            
            </div>
            
            <div class="row">
              <a href="#" class="col-6 text-white">{{ $t("Documents") }}</a>
              <nuxt-link :to="localePath('career')" class="col-6 text-white">{{ $t("Careers") }}</nuxt-link>
            </div>
          </div>
        </nav>
      </div>
      <div class="d-lg-flex">
        <div class="d-flex mt-2 mt-lg-0 lang-btns">
          <NuxtLink :to="switchLocalePath('th')"><button class="mx-lg-2" :class="$i18n.locale === 'th'?'active':''">TH</button></NuxtLink>
          <NuxtLink :to="switchLocalePath('en')"><button class="ms-2 ms-lg-0" :class="$i18n.locale === 'en'?'active':''">EN</button></NuxtLink>
        </div>
      </div>
    </div>
    <div class="main" ref="submenu">
      <a class="menu-button" @click="toggleMenu">
        <img src="/icon-plus.png" class="img-fluid" />
      </a>
      <div class="links">
        <a target="_blank" href="https://www.fnmallonline.com/" class="mt-3 d-block">
          <img src="/icon_fn_web.png" class="img-fluid" />
        </a>
        <a target="_blank" href="https://www.facebook.com/FN.Factory.Outlet" class="mt-3 d-block">
          <img src="/facebook-1.svg" class="img-fluid" />
        </a>
        <a href="https://www.tiktok.com/@fn_officialth" class="mt-3 d-block" target="_blank">
          <img src="/tiktok.svg" class="img-fluid" />
        </a>
        <a href="https://www.lazada.co.th/tag/fn-outlet/?spm=a2o4m.searchlist.search.2.7a0f7f6aebcak3&q=fn%20outlet&_keyori=ss&clickTrackInfo=textId--5049057020637672817__abId--329751__Score--1.796195651684857__pvid--1832af9a-6dd1-44f0-97c6-355738f49c0e__matchType--1__matchList--1-2__srcQuery--fn%20outlet__spellQuery--fn%20outlet__ctrScore--0.7764797806739807__cvrScore--0.007095813751220703&from=suggest_normal&sugg=fn%20outlet_0_1&catalog_redirect_tag=true" class="mt-3 d-block" target="_blank">
          <img src="/laz.svg" class="img-fluid" />
        </a>
        <a href="https://shopee.co.th/fnoutlet" class="mt-3 d-block" target="_blank">
          <img src="/shopee.svg" class="img-fluid" />
        </a>
        <!--<a target="_blank" href="https://www.youtube.com/channel/UCTGvDZvpTrKsDq-48L8pJ4g" class="mt-2 d-block">
          <img src="/youtube.svg" class="img-fluid" />
        </a>
        <a target="_blank" href="https://www.facebook.com/FN.Factory.Outlet" class="icon-facebook">
          <img src="/facebook-1.svg" class="img-fluid" />
        </a>
        <a target="_blank" href="https://www.instagram.com/fnoutlet/" class="mt-2 d-block">
          <img src="/instagram.svg" class="img-fluid" />
        </a>-->
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      width: '0',
      isOpen: false,
      isHideAboutUs: true,
    };
  },
  mounted() {
    this.width = this.$refs.menu.offsetWidth
    console.log(this.$refs.submenu.offsetWidth)
    this.$emit('submenuWidth', this.$refs.submenu.offsetWidth)
  },
  methods: {
    toggleMenu(){
      this.isOpen = !this.isOpen
      if( this.isOpen ){
        this.width = 0
      } else {
        this.width = this.$refs.menu.offsetWidth
      }
    }
  }

})
</script>

<style lang="scss" scoped>

.menu-button{
  border: 0;
  background: transparent;
}


.side-nav{
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 10;
  display: flex;
  transition: all .8s ease;
  @media (max-width: 576px) {
    //width: calc( 50% + 60px );
    width: 100vw;
    overflow: hidden;
  }
  .main{
    padding: 45px 30px;
    @media (max-width: 576px) {
      padding: 45px 15px;
      width: 60px;
      .menu-button{
        width: 30px;
        height: 30px;
        img{
          width: 30px;
          height: auto;
        }
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}

.lang-btns{

  a{
    text-decoration: none;
  }
  button.active{
    background: #fff;
    color: #cd3832;
  }
}

.hidden-menu{
  padding: 45px 30px;
  border-right: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 576px) {
    width: calc( 70% + 60px );
  }
  nav a{
    text-decoration: none;
    white-space: nowrap;
    display: block;
    flex: 1;
    @media (max-width: 576px) {
      flex: 100%;
      white-space: unset;
    }
  }
  .search-wrapper{
    input{
      background: url('/icon-search.png') no-repeat center left;
      background-size: contain;
      border: 1px solid #fff;
      border-radius: 50px;
      font-size: 13px;
      color: #fff;
      padding: 4px 15px 4px 45px;
      &::placeholder{
        color: #fff;
      }
    }
  }
  button{
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    font-size: 13px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.links{
  img{
    width: 30px;
  }
}

</style>