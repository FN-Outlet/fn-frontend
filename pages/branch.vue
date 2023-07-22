<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/branch-bg.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">FOR<br>QUALITY OF LIFE</h2>
          </div>
        </section>
        <section class="text-center py-5">
          <div class="container">
            <h2 class="heading-text">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>BRANCH</span>
            </h2>
            <div class="row mx-lg-5 mt-5">
              <div class="col-lg-6 bg-primary p-4 md-w-100 address">
                <img src="/branch-hq-map.jpg" class="img-fluid" />
                <h2 class="text-white text-center mt-4">FN RAMA IX (สำนักงานกรุงเทพ)</h2>
                <p class="text-white text-start">Address : 991 อาคารเอฟเอ็น บิวดิ้ง ถนนพระราม 9 แขวงสวนหลวง เขตสวนหลวง, กทม. 10250</p>
                <p class="text-white text-start">
                โทร. 02-300-4951 แฟกซ์: 02-300-4681<br>
                E-mail : customerservice@fnoutlet.com</p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>PAK CHOR</span>
                </h2>
                <p class="text-start">Address : 991 FN Building Rama 9. Suan Luang,
                Bangkok 10250</p>
                <p class="text-start">
                Tel. 02-300-4951 Fax: 02-300-4681<br>
                Email : ustomerservice@fnoutlet.com</p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>PHETCHABURI</span>
                </h2>
                <p class="text-start">Address : 991 FN Building Rama 9. Suan Luang,
                Bangkok 10250</p>
                <p class="text-start">
                Tel. 02-300-4951 Fax: 02-300-4681<br>
                Email : ustomerservice@fnoutlet.com</p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>KANCHANABURI</span>
                </h2>
                <p class="text-start">Address : 991 FN Building Rama 9. Suan Luang,
                Bangkok 10250</p>
                <p class="text-start">
                Tel. 02-300-4951 Fax: 02-300-4681<br>
                Email : ustomerservice@fnoutlet.com</p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>PATTAYA</span>
                </h2>
                <p class="text-start">Address : 991 FN Building Rama 9. Suan Luang,
                Bangkok 10250</p>
                <p class="text-start">
                Tel. 02-300-4951 Fax: 02-300-4681<br>
                Email : ustomerservice@fnoutlet.com</p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>PAK CHOR</span>
                </h2>
                <p class="text-start">Address : 991 FN Building Rama 9. Suan Luang,
                Bangkok 10250</p>
                <p class="text-start">
                Tel. 02-300-4951 Fax: 02-300-4681<br>
                Email : ustomerservice@fnoutlet.com</p>
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

  .main-branch{
    img{
      height: 100%;
      object-fit: cover;
    }
  }

  .address{
    border-bottom: 2px solid #CD3832;
  }

  .heading-text.small{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
      height: 25px;
      @media (max-width: 578px) {
        height: 18px;
      }
    }
    span{
      font-size: 30px;
      @media (max-width: 578px) {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 578px) {
    .md-w-100{
      max-width: 100%;
    }
    .address{
      p{
        font-size: 12px;
      }
    }
  }
  
  .main{
    padding-left: 100px;
  }
  </style>
  
