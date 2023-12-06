<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`" v-if="!loading">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/career.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">{{ $t("CAREER") }}</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>{{ $t("CAREER") }}</span>
            </h2>
            <div class="row">
              <div class="col-lg-10 offset-lg-1 text-center">
                <div v-if="$i18n.locale === 'en'">
                  <p>How to Apply : Please contact FN Factory Outlet Public Company Limited</p>
                  <p>Human Resource Department 991 Rama 9 Rd. Suan Luang, Bangkok 10250 Thailand.</p>

                  <p class="mt-5">Tel: 0643017134 , 02 300 4951 - 1101,1110 Email: <a href="mailto:recruit@fnoutlet.com">recruit@fnoutlet.com</a> Website: <a href="https://fnthailand.com" target="_blank">fnthailand.com</a><br>linkedin: <a href="https://www.linkedin.com/company/fn-outlet" target="_blank">www.linkedin.com/company/fn-outlet</a></p>
                </div>
                <div v-else>
                  <p>กรุณาติดต่อฝ่ายบริหารทรัพยากรบุคคล บริษัท เอฟเอ็น แฟคตอรี่ เอ๊าท์เลท จำกัด (มหาชน)</p>
                  <p>991 อาคารเอฟเอ็น บิวดิ้ง ถนนพระราม 9 แขวงสวนหลวง เขตสวนหลวง, กทม. 10250</p>

                  <p class="mt-5">โทร: 0643017134 , 02 300 4951 - 1101,1110 อีเมล: <a href="mailto:recruit@fnoutlet.com">recruit@fnoutlet.com</a> เว็บไซต์: <a href="https://fnthailand.com" target="_blank">fnthailand.com</a><br>linkedin: <a href="https://www.linkedin.com/company/fn-outlet" target="_blank">www.linkedin.com/company/fn-outlet</a></p>
                </div>
                <!--<button class="btn btn-primary mt-4">DOWNLOAD APPLICATION</button>-->
                <hr style="border-color:#CC3832" class="my-5">
                
                <div v-for="(career, item) in data" :key="item">
                  <collapse-job :heading="$i18n.locale=='en' ? career.attributes.positionen : career.attributes.positionth" :position="1">
                    <h3 class="card-title">
                        หน้าที่รับผิดชอบ (Job Summary)
                      </h3>
                      <div class="card-body" style="text-align:left" v-if="$i18n.locale=='en'">
                        <p class="text-left" v-if="career.attributes.jobsummaryen" v-html="$mdRenderer.render(career.attributes.jobsummaryen)"></p>
                      </div>

                      <div class="card-body" style="text-align:left" v-else>
                        <p class="text-left" v-if="career.attributes.jobsummaryth" v-html="$mdRenderer.render(career.attributes.jobsummaryth)"></p>
                      </div>
       
                      <h3 class="card-title">
                        คุณสมบัติประจำตำแหน่ง (Job Specifications)
                      </h3>
                      <div class="card-body" style="text-align:left" v-if="$i18n.locale=='en'">
                        <span v-if="career.attributes.jobspecificationen" v-html="$mdRenderer.render(career.attributes.jobspecificationen)"></span>
                      </div>
                      <div class="card-body" style="text-align:left" v-else>
                        <span v-if="career.attributes.jobspecificationth" v-html="$mdRenderer.render(career.attributes.jobspecificationth)"></span>
                      </div>
                  </collapse-job>
                </div>
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
        data: '',
        loading: true,
      };
    },
    async mounted() {
      await this.getCareer()
    },
    methods: {
      getWidth( submenuWidth) {
        this.width = submenuWidth
      },
      async getCareer() {
        const { data } = await $fetch(`/api/careers?populate=*`);
        this.data = data;
        this.loading = false;
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

  label{
    color: #fff;
    margin-top: 15px;
  }

  .form-control{
    border-radius: 0;
  }

  .btn-white{
    border-radius: 0;
  }

  
  </style>
  