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
          <h2 class="link-collapse text-white" :class="isHideAboutUs?'':'active'" @click="isHideAboutUs=!isHideAboutUs">{{ $t('nav.aboutus') }}</h2>
          <div class="my-4" v-show="!isHideAboutUs">
            <h3 class="link-collapse text-white" :class="isHideSub1?'':'active'"  @click="isHideSub1=!isHideSub1">ข้อมูลบริษัท</h3>
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
              <nuxt-link :to="localePath('structure')" class=" text-white">
                {{ $t("Business Structure") }}
              </nuxt-link>
              <nuxt-link :to="localePath('organization-chart')" class=" text-white">{{ $t("Organization Chart") }}</nuxt-link>
              <nuxt-link :to="localePath('directors')" class=" text-white">{{ $t("Board of Directors") }}</nuxt-link>
              <nuxt-link :to="localePath('sub-committee')" class="text-white">{{ $t("Sub-Committee") }}</nuxt-link>
              <nuxt-link :to="localePath('goodCorporateGovernance')" class=" text-white">{{ $t("Good Corporate Governance") }}</nuxt-link>
            </div>

            <h3 class="link-collapse text-white" :class="isHideSub2?'':'active'" @click="isHideSub2=!isHideSub2">นักลงทุนสัมพันธ์</h3>
            <div class="sub-menu mb-5" v-show="!isHideSub2">
              <nuxt-link :to="localePath('stockprice')" class="col-6 text-white">{{ $t("Stock Price") }}</nuxt-link>
              <nuxt-link :to="localePath('financial')" class="text-white">{{ $t("Financial Info") }}</nuxt-link>
              <nuxt-link :to="localePath('shareholder')" class="text-white">{{ $t("Shareholders") }}</nuxt-link>
              <nuxt-link :to="localePath('webcast')" class="text-white">{{ $t("Webcast") }}</nuxt-link>
              <nuxt-link :to="localePath('dividendpolicy')" class="text-white">{{ $t("Dividend Policy") }}</nuxt-link>
            </div>

            <h3 class="text-white"><nuxt-link :to="localePath('news')" class="text-white">ข่าวสารและกิจกรรม</nuxt-link></h3>
            <h3 class="text-white"><nuxt-link :to="localePath('career')" class="text-white">{{ $t("Careers") }}</nuxt-link></h3>
            <h3 class="text-white"><nuxt-link :to="localePath('contact')" class="text-white">{{ $t("Contact") }}</nuxt-link></h3>

            <div class="row">
              
              <nuxt-link :to="localePath('management-team')" class="col-6 text-white">{{ $t("Management Team") }}</nuxt-link>
              
              
              
            </div>

            <div class="row">
              <a target="_blank" href="https://www.set.or.th/th/market/product/stock/quote/FN/news" class="col-6 text-white">{{ $t("Announcement") }}</a>
              
              
            </div>
            <div class="row">
              

              <nuxt-link :to="localePath('public-documents')" class="col-6 text-white">{{ $t("Documents") }}</nuxt-link>
            
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
        <img src="/icon-menu.svg" class="img-fluid" />
      </a>
      <div class="links">
        <a 
          v-for="(online, index) in online" :key="index"
          target="_blank" 
          :href="online.attributes.link"
          class="mt-3 d-block"
        >
          <img :src="online.attributes.icon.data.attributes.url" class="img-fluid" />
        </a>
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
      online: '',
      isHideSub1: true,
      isHideSub2: true,
    };
  },
  mounted() {
    this.width = this.$refs.menu.offsetWidth
    console.log(this.$refs.submenu.offsetWidth)
    this.$emit('submenuWidth', this.$refs.submenu.offsetWidth)
    this.getOnline();
  },
  methods: {
    toggleMenu(){
      this.isOpen = !this.isOpen
      if( this.isOpen ){
        this.width = 0
        const bodyElement = document.querySelector('body')
        bodyElement.classList.add('mobile-open')
      } else {
        this.width = this.$refs.menu.offsetWidth
        const bodyElement = document.querySelector('body')
        bodyElement.classList.remove('mobile-open')
      }
    },
    async getOnline() {
      const { data } = await $fetch(`/api/onlines?filters[showsidebar][$eq]=true&sort=id:asc&populate=*`);
      this.online = data;
    }
  }

})
</script>

<style lang="scss" scoped>

.menu-button{
  border: 0;
  background: transparent;
  img{
    width: 30px;
  }
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
    .top{
      overflow-y: scroll;
    }
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
  min-width: 30vw;
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

.link-collapse{
  width: 100%;
  background: url('/arrow-white-down.svg') no-repeat center right;
  background-size: 6%;
  &.active{
    background-image: url('/arrow-white-up.svg');
  }
}

</style>