<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/online-bg.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">MARKETPLACE</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>MARKETPLACE</span>
            </h2>
            <div class="d-lg-flex align-items-center malls my-5 text-center">
              <a href="https://shopee.co.th/fnoutlet" class="mx-2" target="_blank">
                <img src="/shopee.svg" class="img-fluid" />
              </a>
              <a href="https://www.lazada.co.th/tag/fn-outlet/?spm=a2o4m.searchlist.search.2.7a0f7f6aebcak3&q=fn%20outlet&_keyori=ss&clickTrackInfo=textId--5049057020637672817__abId--329751__Score--1.796195651684857__pvid--1832af9a-6dd1-44f0-97c6-355738f49c0e__matchType--1__matchList--1-2__srcQuery--fn%20outlet__spellQuery--fn%20outlet__ctrScore--0.7764797806739807__cvrScore--0.007095813751220703&from=suggest_normal&sugg=fn%20outlet_0_1&catalog_redirect_tag=true" class="mx-2 my-2 my-lg-0" target="_blank">
                <img src="/laz.svg" class="img-fluid" />
              </a>
              <a href="" class="mx-2">
                <img src="/tiktok.svg" class="img-fluid" />
              </a>
            </div>
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>MALL</span>
            </h2>
            <div class="row my-5">
              <div class="col-lg-8 offset-lg-2">
                <img src="/online-ad.jpg" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import { defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
    data() {
      return {
        width: '50',
      };
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
.hp-banner{
  position: relative;
  .main-logo{
    position: absolute;
    width: 150px;
    left: 50%;
    top: 50%;
    margin-left: 7px;
    transform: translate(-50%,-50%);
  }
}

.p-15{
  padding: 75px;
}

  .border-bottom-red{
    border-bottom: 2px solid #CD3832;
  }

  .text-img{
    height: 25px;
    width: auto;
  }

  .malls{
    justify-content: center;
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      background: #CC3832;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      @media (max-width: 992px) {
        margin: 15px auto !important;
      }
    }
  }

  
  .main{
    padding-left: 100px;
  }

  .heading-text{
    @media (max-width: 992px) {
      flex-wrap: wrap;
      img{
        height: 30px;
      }
      span{
        font-size: 30px;
        @media (max-width: 992px) {
          display: block;
          line-height: 1;
          //font-size: 22px;
        }
      }
    }
  }
  </style>
  