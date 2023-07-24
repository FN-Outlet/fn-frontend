<template>
  <nav class="bg-primary side-nav" :style="`left: -${width}px;`">
    <div class="hidden-menu" ref="menu">
      <div class="top">
        <nuxt-link :to="localePath('/')">
          <img src="/logo-white.png" class="img-fluid" />
        </nuxt-link>
        <nav class="mt-lg-5 mt-4">
          <h2 class="text-white">{{ $t('nav.aboutus') }}</h2>
          <div class="ms-lg-5 my-lg-5 my-4">
            <div class="row">
              <a href="#" class="col-6 text-white">นักลงทุนสัมพันธ์</a>
            </div>
            <div class="row">
              <nuxt-link :to="localePath('history')" class="col-6 text-white">
                ประวัติความเป็นมา
              </nuxt-link>
              <a href="#" class="col-6 text-white">การกำกับดูแลกิจการที่ดี</a>
            </div>
            <div class="row">
              <nuxt-link :to="localePath('structure')" class="col-6 text-white">
                โครงสร้างธุรกิจ
              </nuxt-link>
              <nuxt-link :to="localePath('news')" class="col-6 text-white">ห้องข่าว</nuxt-link>
            </div>
            <div class="row">
              <nuxt-link :to="localePath('financial')" class="col-6 text-white">ข้อมูลทางการเงิน</nuxt-link>
              <a href="#" class="col-6 text-white">เอกสารเผยแพร่</a>
            </div>
            <div class="row">
              <nuxt-link :to="localePath('stockprice')" class="col-6 text-white">ข้อมูลราคาหลักทรัพย์</nuxt-link>
              <a href="#" class="col-6 text-white">สอบถามข้อมูลนักลงทุน</a>
            </div>
            <div class="row">
              <a target="_blank" href="https://www.set.or.th/th/market/product/stock/quote/FN/major-shareholders" class="col-6 text-white">ข้อมูลผู้ถือหุ้น</a>
              <a target="_blank" href="https://www.set.or.th/th/market/product/stock/quote/FN/news" class="col-6 text-white">ข่าวแจ้งตลาดหลักทรัพย์</a>
            </div>
            <div class="row">
              <nuxt-link :to="localePath('directors')" class="col-6 text-white">คณะกรรมการบริษัท</nuxt-link>
            </div>
          </div>
          <h2 class="text-white">
            <nuxt-link :to="localePath('products-services')" class="col-6 text-white">
              {{ $t('nav.productservice') }}
            </nuxt-link>
          </h2>
          <h2 class="text-white">
            <nuxt-link :to="localePath('branch')" class="col-6 text-white">
              {{ $t('nav.branch') }}
            </nuxt-link>
          </h2>
          <h2 class="text-white">
            <nuxt-link :to="localePath('online')" class="col-6 text-white">
              {{ $t('nav.online') }}
            </nuxt-link>
          </h2>
        </nav>
      </div>
      <div class="d-lg-flex">
        <div class="search-wrapper">
          <input type="text" placeholder="SEARCH">
        </div>
        <div class="d-flex mt-2 mt-lg-0">
          <NuxtLink :to="switchLocalePath('th')"><button class="mx-lg-2">TH</button></NuxtLink>
          <NuxtLink :to="switchLocalePath('en')"><button class="ms-2 ms-lg-0">EN</button></NuxtLink>
        </div>
      </div>
    </div>
    <div class="main" ref="submenu">
      <a class="menu-button" @click="toggleMenu">
        <img src="/icon-plus.png" class="img-fluid" />
      </a>
      <div class="links">
        <a target="_blank" href="https://www.youtube.com/channel/UCTGvDZvpTrKsDq-48L8pJ4g" class="mt-2 d-block">
          <img src="/youtube.svg" class="img-fluid" />
        </a>
        <a target="_blank" href="https://www.facebook.com/FN.Factory.Outlet" class="icon-facebook">
          <img src="/facebook-1.svg" class="img-fluid" />
        </a>
        <a target="_blank" href="https://www.instagram.com/fnoutlet/" class="mt-2 d-block">
          <img src="/instagram.svg" class="img-fluid" />
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