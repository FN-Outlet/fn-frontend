<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/businessstructure.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0" v-if="$i18n.locale=='en'">BUSINESS
            <br>
            STRUCTURE</h2>
            <h2 class="text-white font-normal mb-0" v-else>โครงสร้างธุรกิจ</h2>
          </div>
        </section>
        <section class="py-5 px-lg-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>{{ $t('structure.header') }}</span>
            </h2>
          </div>
        </section>
        <section class="d-lg-flex banner hp-banner">
          <div class="col bg-primary p-0 d-flex align-items-center justify-content-center img-center">
            <img src="/fn-structure-1.png" class="main-logo d-none d-lg-inline" />
            <div class="px-lg-5 p-4">
              <h2 class="heading-text text-white" v-if="$i18n.locale=='en'">
                <img src="/logo-white.png" class="img-fluid mb-4" />
                <span class="text-white">Factory Outlet </span>
              </h2>
              <h2 class="heading-text text-white"  v-else>
                <span class="text-white" style="margin-left: 0px">เอฟเอ็น แฟคตอรี่<br>เอ๊าท์เลท (FN)</span>
              </h2>
              <h2 class="text-white font-thin mb-5">{{ $t("structure.publicCompanyLimited") }}</h2>
              <p class="text-white">{{ $t("structure.registeredCapital") }}:<br>
                {{ $t("structure.baht500") }}</p>
            </div>
          </div>
          <div class="col">
            <div class="p-15 h-100 d-flex flex-column align-items-center justify-content-center">
              <div class="px-lg-4 p-4">
              <h2 class="text-black mb-4">{{ $t("structure.fNBUSINESSOUTLINE") }}</h2>
              <p>
                {{ $t("structure.content1") }}</p>
            </div>
            </div>
          </div>
        </section>
        <section class="d-flex banner hp-banner flex-wrap">
          <div class="col order-2 order-lg-1 p-0 d-flex align-items-center justify-content-center img-center">
            <img src="/fn-structure-2.png" class="main-logo d-none d-lg-inline" />
            <div class="p-lg-5 p-4 col-9">
              <h2 class="text-black mb-4">{{ $t("structure.sLBUSINESSOUTLINE") }}</h2>
              <p>{{ $t("structure.content2") }}</p>
            </div>
          </div>
          <div class="col order-1 order-lg-2">
            <div class="p-15 bg-primary h-100 d-flex flex-column align-items-center justify-content-center">
              <div class="px-lg-4 p-4">
                <h2 class="heading-text text-white">{{ $t("structure.saveLifeInternationalCompanyLimited") }}
                </h2>
                <p class="text-white">{{ $t("structure.registeredCapital") }}:<br>
                  {{ $t("structure.baht10") }}</p>
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
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { useSwiper } from 'swiper/vue'

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  export default defineComponent({
    data() {
      return {
        width: '50',
        activeIndex: 0,
        items: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]
      };
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const swiper = useSwiper()
      
      return {
          modules: [Navigation, Pagination, Scrollbar, A11y],
          swiper,
        };
    },
    mounted() {
      console.log( this.width )
    },
    methods: {
      getWidth( submenuWidth) {
        this.width = submenuWidth
      },
      nextSlide(){
        this.$refs.mySwiper.$el.swiper.slideNext()
      },
      prevSlide(){
        this.$refs.mySwiper.$el.swiper.slidePrev()
      },
      goto( index ){
        this.$refs.mySwiper.$el.swiper.slideTo( index )
        this.activeIndex = index
      }
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
  @media (max-width: 992px) {
    padding: 0;
  }
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
      //flex-wrap: wrap;
      img{
        height: 30px;
      }
      span{
        font-size: 30px;
        @media (max-width: 992px) {
          //display: block;
          line-height: 1;
          //font-size: 22px;
        }
      }
    }
  }

  label{
    color: #fff;
    margin-top: 15px;
  }

  .slider-wrapper{
    position: relative;
    button{
      position: absolute;
      background: transparent;
      border: 0;
      top: 50%;
      z-index: 9;
      transform: translateY(-50%);
    }

    .btn-slider-prev{
      left: 2.5%;
    }
    .btn-slider-next{
      right: 2.5%;
    }
  }

  .news-thumbnail{
    text-decoration: none;
    margin-top: 60px;
    display: block;
    border-bottom: 2px solid #CC3832;
    h3{
      color: #111111;
      margin: 15px 0;
    }
    p{
      color: #555754;
    }
    .footer{
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      align-items: center;
      > *{
        flex: 1;
      }
      a{
        background: #CC3832;
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        padding: 5px;
        text-align: center;
      }
    }
  }

  .slider-nav{
    border-top: 1px solid #CC3832;
    border-bottom: 1px solid #CC3832;
    display: flex;
    justify-content: space-between;
    @media (max-width: 992px) {
      overflow-x: auto;
      margin-top: 35px;
      button{
        white-space: nowrap;
      }
    }
    button{
      background: none;
      border: 0;
      padding: 5px 15px;
      &.active{
        border-bottom: 2px solid #CC3832;
      }
    }
  }

  .slide-main{
    ul{
      list-style: none;
      padding: 0;
      li{
        position: relative;
        padding-left: 45px;
        margin-bottom: 15px;
        &:before{
          content: '';
          width: 11px;
          height: 11px;
          display: block;
          position: absolute;
          left: 0;
          top: 10px;
          background: #CD3832;
        }
      }
    }
  }

  </style>
  