<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/apparel-banner.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">FOR<br>QUALITY OF LIFE</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>APPAREL</span>
            </h2>
            <div class="highlight mb-3" v-for="(pro, index) in productHighlight" :key="index">
              <div class="main-img">
                <img :src="pro.attributes.image.data.attributes.url" class="img-fluid" />
              </div>
              <div class="bg-primary">
                <div class="tag">New</div>
                <div v-if="pro.attributes.discountprice">
                  <div class="text-white old"><span class="del">{{ pro.attributes.fullprice.toLocaleString() }}</span> Baht</div>
                  <div class="d-flex text-white align-items-center">
                    <h1 class="text-white mb-0 me-3">{{ pro.attributes.discountprice.toLocaleString() }}</h1>{{ $t("Baht") }}
                  </div>
                </div>
                <div v-else>
                  <div class="d-flex text-white align-items-center" v-if="pro.attributes.fullprice">
                    <h1 class="text-white mb-0 me-3" >{{ pro.attributes.fullprice.toLocaleString() }}</h1>{{ $t("Baht") }}
                  </div>
                </div>
                <div v-if="$i18n.locale === 'en'">
                  <h3 class="text-white">{{ pro.attributes.nameen }}</h3>
                  <p class="text-white">{{ pro.attributes.descriptionen }}</p>
                  <div class="size my-5 text-white"><small>{{ pro.attributes.attributeen }}</small></div>
                </div>
                <div v-else>
                  <h3 class="text-white">{{ pro.attributes.nameth }}</h3>
                  <p class="text-white">{{ pro.attributes.descriptionth }}</p>
                  <div class="size my-5 text-white"><small>{{ pro.attributes.attributeth }}</small></div>
                </div>
                <a :href="pro.attributes.link" target="_blank" class="btn btn-white">{{ $t("shop now") }}</a>
              </div>
            </div>
            <div class="slider-wrapper mt-4">
              <swiper 
                ref="mySwiper"
                :modules="modules"
                :slides-per-view="3"
                :spaceBetween="30"
                :loop="true"
                :effect="'creative'"
                :breakpoints="{
                  '320': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  '992': {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }"
                :pagination="{ clickable: true }"
                :autoplay="{
                  delay: 8000,
                  disableOnInteraction: true,
                }"
                :creative-effect="{
                  prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                  },
                  next: {
                    translate: ['100%', 0, 0],
                  },
              }">
                <swiper-slide>
                  <a href="#" class="news-thumbnail">
                  <img src="/sleep-1.jpg" class="img-fluid" />
                  <div class="tag">New</div>
                  <h3>{{ $t("PRIM bubble blanket รุ่น Classic ขนาด 6 ฟุต") }}</h3>
                  <p>{{ $t("ผ้าห่ม Micifine ขนาด 60x80 นิ้ว ที่ให้สัมผัสนุ่มกว่าเส้นใยอื่นๆ เพราะขนาดของเส้นใยที่เล็กและทอละเอียดช่วยป้องกันไรฝุ่น ลวดลายเป็นเอกลักษณ์เฉพาะ เนื้อผ้าภายนอกตุ่มนูน ช่วยให้ไม่รู้สึกอึดอัดเมื่ออากาศร้อนและอุ่นสบายเมื่ออากาศนาว") }}</p>
                  <div class="size mt-5"><small>50x50 cm</small></div>
                  <div class="d-flex align-items-center">
                    <h2 class="text-primary me-3 m-0">999</h2>
                    baht
                  </div>
                </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#" class="news-thumbnail">
                  <img src="/sleep-2.jpg" class="img-fluid" />
                  <div class="tag">New</div>
                  <h3>{{ $t("PRIM ไส้ผ้านวมขนเป็ด หนา นุ่ม อบอุ่น หลับสบาย") }}</h3>
                  <p>{{ $t("ผ้านวมขนเป็ดชนิดนุ่มพิเศษ เสมือนนอนในโรงแรม 5 ดาว ด้วยวัสดุจากธรรมชาติ 100% ประกอบด้วยขนเป็ดสีขาว 75% และขนเป็ดช่วงหน้าอก 25% ซึ่งเป็นขนอ่อนชนิดพิเศษ ใช้ขนเป็ดตามมาตรฐานอเมริกา (FTC) พร้อมดับเบิ้ลล็อค 14 ห่วง") }}</p>
                  <div class="size mt-5"><small>50x50 cm</small></div>
                  <div class="d-flex align-items-center">
                    <h2 class="text-primary me-3 m-0">999</h2>
                    baht
                  </div>
                </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#" class="news-thumbnail">
                  <img src="/sleep-3.jpg" class="img-fluid" />
                  <div class="tag">New</div>
                  <h3>{{ $t("PRIM หมอนขนเป็ดเพื่อสุขภาพ สัมผัสความนุ่ม นอนสบายประดุจโรงแรม 6 ดาว") }}</h3>
                  <p>{{ $t("\"เสน่ห์ขนเป็ด แบบนุ่มธรรมชาติ\" ด้วยคุณสมบัติอันเป็นเอกลักษณ์เฉพาะตัว ของก้านขนห่านและขนอกเป็ด หุ้มด้วยผ้าไมซิไฟน์เนื้อเนียน ทำให้ได้สัมผัสนุ่มนวล เพิ่มความคลาสสิคด้วยขอบกุ๊นริบบิ้นซาติน มีระดับและดูดี รองรับได้กับทุกท่านอน") }}</p>
                  <div class="size mt-5"><small>50x50 cm</small></div>
                  <div class="d-flex align-items-center">
                    <h2 class="text-primary me-3 m-0">999</h2>
                    baht
                  </div>
                </a>
                </swiper-slide>
              </swiper>
              <button @click="nextSlide" class="btn-slider-next">
                <img src="/slider-next.svg" class="img-fluid" />
              </button>
              <button @click="prevSlide" class="btn-slider-prev">
                <img src="/slider-prev.svg" class="img-fluid" />
              </button>
            </div>
            <div class="text-center mt-5">
              <a href="https://www.fnmallonline.com/" target="_blank" class="btn btn-primary">{{ $t("shop now") }}</a>
            </div>
          </div>
        </section>
        <section class="d-lg-flex">
        <div class="col p-0 bg-primary">
          <img src="/service-footer.jpg" class="img-fluid" />
          <p class="text-white p-5">{{ $t("สไตล์ของคุณสามารถสร้างขึ้นเองได้ที่นี่ อิสระของการแต่งตัวที่ผสมผสานความเรียบง่ายและทันสมัยเข้าด้วยกัน ด้วยความชำนาญของ FN ในด้านการตัดเย็บด้วยความใส่ใจรายละเอียด เพื่อเสื้อผ้าที่ความสวยงาม และคงทน มีทั้งเสื้อผ้า รองเท้า กระเป๋า พร้อมให้คุณได้เลือกดูตามคอลเลกชั่น ยกระดับการแต่งกายของคุณให้ดูดีขึ้นกับ FN APPARAL") }}</p>
        </div>
        <div class="col d-flex align-items-center justify-content-center ">
          <div class="p-15 d-flex align-items-center justify-content-center">
            <img src="/apparel-text.png" class="img-fluid" />
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
        product: '',
        productHighlight: '',
        productNotHighlight: '',
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
      //console.log( this.swiper )
      this.getProduct()
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
      async getProduct() {
        const { data } = await $fetch(`/api/products?filters[type][$eq]=apparel&sort=id:asc&populate=*`);
        this.product = data;
        this.productNotHighlight = data.filter(d => d.attributes.highlight == false);
        this.productHighlight = data.filter(d => d.attributes.highlight == true);
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
        font-size: 40px;
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
      display: none;
      left: 2.5%;
    }
    .btn-slider-next{
      right: 2.5%;
    }
  }

  .highlight{
    display: flex;
    @media (max-width: 992px) {
      display: block;
    }
    > *{
      flex: 50%;
    }
    .bg-primary{
      padding: 45px;
    }
    .tag{
      background: #fff;
      color: #CC3832;
      text-transform: uppercase;
      text-decoration: none;
      padding: 5px 45px;
      text-align: center;
      display: inline-block;
      font-size: 10px;
      position: relative;
      top: -4px;
    }

    .old{
      font-size: 15px;
    }

    h1{
      font-size: 65px;
      @media (max-width: 992px) {
        font-size: 35px;
      }
    }

    .btn{
      text-transform: uppercase;
      &:hover, &:active, &:focus{
        color: #CC3832;
      }
    }

    .del {
      position: relative;
      font-size: 35px;
      @media (max-width: 992px) {
        font-size: 18px;
      }
    }
    .del:before {
      position: absolute;
      content: "";
      left: 0;
      top: 50%;
      right: 0;
      border-top: 1px solid;
      border-color: inherit;
      
      -webkit-transform:rotate(-5deg);
      -moz-transform:rotate(-5deg);
      -ms-transform:rotate(-5deg);
      -o-transform:rotate(-5deg);
      transform:rotate(-5deg);
    }

    .main-img{
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .swiper-wrapper {
    align-content: stretch;
  }

  .swiper-slide {
    height: auto;
  }

  .news-thumbnail{
    text-decoration: none;
    //margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid #CC3832;
    margin-bottom: 60px;
    height: 100%;
    img{
      height: 314px;
      width: 100%;
      object-fit: cover;
    }
    h3{
      color: #111111;
      margin: 15px 0;
    }
    .size{
      color: #555754;
    }
    p{
      color: #555754;
    }
    .tag{
      background: #CC3832;
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      padding: 5px 45px;
      text-align: center;
      display: inline-block;
      font-size: 10px;
      position: relative;
      top: -2px;
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

  .news-cover{
    position: relative;
    h2{
      position: absolute;
      right: 30px;
      bottom: 15px;
      align-items: center;
      img{
        height: 40px;
      }
      span{
        color: #fff;
        font-weight: bold;
      }
    }
  }

  </style>
  