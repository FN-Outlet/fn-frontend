<template>
  <sidenav ref="sidenav" @submenuWidth="getWidth"/>
  <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/product-main.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">FOR<br>QUALITY OF LIFE</h2>
          </div>
        </section>
        <section class="text-center py-5">
          <div class="container">
            <img src="/logo.png" class="img-fluid mb-4" />
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <p>{{ $t("\"เพื่อชีวิตที่ดีกว่า\”  FN ให้ความสำคัญกับการใช้ชีวิตประจำวันที่ดีขึ้นและความลงตัว เรารังสรรสินค้าที่มีคุณภาพจากแหล่งที่น่าเชื่อถือเพื่อให้ลูกค้าได้สิ่งที่ดีที่สุด และเลือกสรรได้ตามใจต้องการ") }}</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-lg-8 offset-lg-2 mt-5">
                <h2 class="heading-text">
                  <img src="/logo.png" class="img-fluid" />
                  <span>PRODUCTS</span>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mt-5">
                <nuxt-link :to="localePath('fnsleep')">
                  <div class="border-bottom-red">
                    <img src="/fn-sleep.jpg" class="img-fluid" />
                    <img src="/service-text-01.jpg" class="img-fluid  my-3 text-img" />
                  </div>
                </nuxt-link>
              </div>
              <div class="col-lg-6 mt-5">
                <nuxt-link :to="localePath('fnapparel')">
                  <div class="border-bottom-red">
                    <img src="/fn-apparel.jpg" class="img-fluid" />
                    <img src="/service-text-02.jpg" class="img-fluid  my-3 text-img" />
                  </div>
                </nuxt-link>
              </div>
              <div class="col-lg-6 mt-5">
                <nuxt-link :to="localePath('fnhome')">
                  <div class="border-bottom-red">
                    <img src="/fn-home.jpg" class="img-fluid" />
                    <img src="/service-text-03.jpg" class="img-fluid  my-3 text-img" />
                  </div>
                </nuxt-link>
              </div>
              <div class="col-lg-6 mt-5">
                <!--<nuxt-link :to="localePath('fncare')">-->
                  <div class="border-bottom-red">
                    <img src="/fn-care.jpg" class="img-fluid" />
                    <img src="/service-text-04.jpg" class="img-fluid  my-3 text-img" />
                  </div>
                <!--</nuxt-link>-->
              </div>
              <div class="col-lg-6 mt-5">
                <!--<nuxt-link :to="localePath('fntravel')">-->
                  <div class="border-bottom-red">
                    <img src="/fn-travel-2.jpg" class="img-fluid" />
                    <img src="/service-text-05.jpg" class="img-fluid  my-3 text-img" />
                  </div>
                <!--</nuxt-link>-->
              </div>
              <div class="col-lg-6 mt-5">
                <!--<nuxt-link :to="localePath('fnsport')">-->
                  <div class="border-bottom-red">
                    <img src="/fn-sport.jpg" class="img-fluid" />
                    <img src="/service-text-06.jpg" class="img-fluid  my-3 text-img" />
                  </div>
                <!--</nuxt-link>-->
              </div>
              <div class="col-lg-6 mt-5">
                <!--<nuxt-link :to="localePath('fneat')">-->
                  <div class="border-bottom-red">
                    <img src="/fn-eat-3.jpg" class="img-fluid" />
                    <img src="/service-text-07.jpg" class="img-fluid  my-3 text-img" />
                  </div>
                <!--</nuxt-link>-->
              </div>
            </div>
          </div>
        </section>
        <section class="d-lg-flex">
        <div class="col p-0 bg-primary">
          <img src="/product-footer.jpg" class="img-fluid" />
          <p class="text-white p-5">{{ $t("FN มีสินค้าหลายหมวดหมู่ประเภท ทั้งเสื้อผ้าสำหรับทุกเพศทุกวัย เฟอร์นิเจอร์หลากหลายที่ตอบโจทย์ทุกความต้องการ ชุดเครื่องนอนคุณภาพสูง สินค้าเพื่อการเดินทางดีไซน์ทันสมัยเลือกได้ตามไลฟ์สไตล์ สินค้าช่วยเหลือชุมชน ขนมทาน เครื่องดื่ม ของว่าง และอีกมากมาย ที่พร้อมจะให้คุณเลือกซื้อได้อย่างตามใจชอบ และทุกอย่างครบจบได้ที่ FN") }}</p>
        </div>
        <div class="col d-flex align-items-center justify-content-center ">
          <div class="p-15 d-flex align-items-center justify-content-center">
            <img src="/service-footer-text.jpg" class="img-fluid" />
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
            width: "50",
        };
    },
    mounted() {
        //console.log(this.width);
    },
    methods: {
        getWidth(submenuWidth) {
            this.width = submenuWidth;
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

  .heading-text{
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 992px) {
      flex-wrap: wrap;
    }
    img{
      height: 30px;
    }
    span{
      font-size: 38px;
      @media (max-width: 992px) {
        display: block;
        line-height: 1;
        //font-size: 22px;
      }
    }
  }
  
  .main{
    padding-left: 100px;
  }
  </style>
  