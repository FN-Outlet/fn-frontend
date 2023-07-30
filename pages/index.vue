<template>
  <sidenav ref="sidenav" @submenuWidth="getWidth"/>
  <div class="main" :style="`padding-left: ${width}px;`">
    <Header />
    <div class="w-100">
      <section class="bg-primary d-lg-flex banner hp-banner">
        <img src="/banner_fn.png" class="main-logo" />
        <div class="col">
          <img src="/banner.png" class="img-fluid w-100" />
        </div>
        <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
          <h2 class="text-white font-normal mb-0">FOR<br>QUALITY OF LIFE</h2>
        </div>
      </section>
      <section class="d-lg-flex">
        <div class="col p-0 d-flex align-items-center justify-content-center">
          <div class="p-15 d-flex align-items-center justify-content-center">
            <img src="/hp-s2.png" class="img-fluid" />
          </div>
        </div>
        <div class="col" style="background: #E3E3E3;">
          <div class="p-15 d-flex align-items-center justify-content-center">
            <nuxt-link :to="localePath('products-services')">
              <div class="frame-wrapper">
                <h2>PRODUCT</h2>
                <img src="/hp-s2-chair.png" class="img-fluid" />
                <a href="">READ MORE</a>
              </div>
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="d-lg-flex">
        <div class="col p-0 d-flex align-items-center justify-content-center img-center">
          <img src="/hp-s3.png" class="img-fluid" />
        </div>
        <div class="col">
          <div class="p-15 bg-primary h-100 d-flex flex-column align-items-center justify-content-center">
            <h2 class="text-white text-center font-normal">FN MALL <br/>MARKETPLACE</h2>
            <img src="/hp-s3-text.png" class="img-fluid my-3" />
            <div class="d-lg-flex align-items-center flex-wrap malls">
              <a href="https://shopee.co.th/fnoutlet" class="mx-2 d-block" target="_blank">
                <img src="/shopee.png" class="img-fluid" />
              </a>
              <a href="https://www.lazada.co.th/tag/fn-outlet/?spm=a2o4m.searchlist.search.2.7a0f7f6aebcak3&q=fn%20outlet&_keyori=ss&clickTrackInfo=textId--5049057020637672817__abId--329751__Score--1.796195651684857__pvid--1832af9a-6dd1-44f0-97c6-355738f49c0e__matchType--1__matchList--1-2__srcQuery--fn%20outlet__spellQuery--fn%20outlet__ctrScore--0.7764797806739807__cvrScore--0.007095813751220703&from=suggest_normal&sugg=fn%20outlet_0_1&catalog_redirect_tag=true" class="mx-2 d-block my-2 my-lg-0" target="_blank">
                <img src="/lazada.png" class="img-fluid" />
              </a>
              <a href="https://www.tiktok.com/@fn_officialth" class="mx-2 d-block" target="_blank">
                <img src="/tiktok.png" class="img-fluid" />
              </a>
              <a href="https://www.youtube.com/channel/UCTGvDZvpTrKsDq-48L8pJ4g" class="mx-2 new" target="_blank">
                <img src="/youtube.svg" class="img-fluid" /> Youtube
              </a>
              <a target="_blank" href="https://www.facebook.com/FN.Factory.Outlet" class="mx-2 new">
                <img src="/facebook-1.svg" class="img-fluid" /> Facebook
              </a>
              <a target="_blank" href="https://www.instagram.com/fnoutlet/" class="mx-2 new">
                <img src="/instagram.svg" class="img-fluid" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="d-lg-flex">
        <div class="col">
          <div class="p-15 h-100 d-flex align-items-center justify-content-center">
            <nuxt-link :to="localePath('branch')">
              <div class="frame-wrapper sofa">
                <h2>BRANCH</h2>
                <img src="/hp-s4-sofa.png" class="img-fluid" />
                <a href="">READ MORE</a>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col p-0 d-flex align-items-center justify-content-center img-center">
          <img src="/hp-s4.png" class="img-fluid" />
        </div>
      </section>
      <section class="">
        <img src="/hp-s5.png" class="img-fluid w-100" />
      </section>
      <section class="text-center border-red py-5">
        <div class="container">
          <img src="/logo.png" class="img-fluid mb-4" />
          <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <p>{{ $t("home.content") }}</p>
              </div>
            </div>
          </div>
      </section>

    </div>
    <Footer />
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
    if (window.location.href === "https://fnoutlet.com/" || window.location.href === "https://www.fnoutlet.com/") {
      window.location.href = 'https://fnthailand.com/'; 
    } 
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
.frame-wrapper{
  border: 2px solid #CD3832;
  position: relative;
  padding: 30px;
  &.sofa{
    padding: 30px 0;
    h2{
      background: #fff;
    }
    a{
      background: #fff;
    }
    img{
      max-width: 150%;
      width: 150%;
      margin-left: -25%;
    }
  }
  h2{
    background: #E3E3E3;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 15px;
  }
  a{
    text-decoration: none;
    display: block;
    background: #E3E3E3;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 15px;
  }
}

.border-red{
  border-top: 10px solid #CD3832
}

.img-center{
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.icon-facebook{
  border-radius: 50%;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.main{
  padding-left: 100px;
}

.malls{
  justify-content: center;
  a{
    margin: 5px !important;
  }
  .new{
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    img{
      height: 20px;
      width: auto;
      object-fit: contain;
    }
  }
}
</style>
