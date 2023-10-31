<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/marketplace.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">{{ $t("MARKETPLACE") }}</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <h1 class="heading-custom text-center font-thin text-gray my-0">
              <span><span class="fn-logo-text">FN</span> {{ $t("MARKETPLACE") }}</span>
            </h1>
            <div class="d-flex flex-wrap align-items-center malls my-lg-5 mt-4 text-center">

              <a 
                v-for="(online, index) in online" :key="index"
                target="_blank" 
                :href="online.attributes.link" 
                class="">
                <img :src="online.attributes.icon.data.attributes.url" class="img-fluid" /> 
              </a>

            </div>
          
            <h1 class="heading-custom text-center font-thin text-gray my-0">
              <span><span class="fn-logo-text">FN</span> {{ $t("MALL") }}</span>
            </h1>
            <div class="row my-5">
              <div class="col-lg-8 offset-lg-2">
                <a href="https://www.fnmallonline.com/" target="_blank">
                  <img src="/fn-ad.jpg" class="img-fluid" />
                </a>
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
        online: '',
      };
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
        const { data } = await $fetch(`/api/onlines?sort=id:asc&populate=*`);
        this.online = data;
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
    flex-wrap: wrap;
    max-width: 70%;
    margin: 0 auto 15px;
    @media (max-width: 1200px) {
      max-width: 90%;
    }
    a{
      display: flex;
      align-items: center;
      margin: 5px;
      justify-content: center;
      background: #CC3832;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      @media (max-width: 992px) {
        width: 50px;
        height: 50px;
        img{
          width: 15px;
          height: 15px;
        }
      }
      img{
        width: 50px;
        height: 50px;
        object-fit: contain;
        @media (max-width: 992px) {
          width: 25px;
          height: 25px;
        }
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
  