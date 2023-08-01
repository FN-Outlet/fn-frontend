<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/branch.jpg" class="img-fluid w-100" />
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
            <!--<div class="row mx-lg-5 mt-5" v-for="(branch,index) in data" :key="index">
              <div class="col-lg-6 bg-primary p-4 md-w-100 address">
                <iframe 
                  v-if="branch.attributes.iframegooglemap"
                  :src="branch.attributes.iframegooglemap" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-white text-center mt-4" v-if="$i18n.locale === 'en'">{{ branch.attributes.nameen }}</h2>
                <h2 class="text-white text-center mt-4" v-else>{{ branch.attributes.nameth }}</h2>
                <p class="text-white text-start" v-if="$i18n.locale === 'en'">{{ branch.attributes.addressen }}</p>
                <p class="text-white text-start" v-else>{{ branch.attributes.addressth }}</p>
                <p class="text-white text-start">
                  โทร. {{ branch.attributes.tel }} 
                  <span v-if="branch.attributes.fax">แฟกซ์: {{ branch.attributes.fax }}</span><br>
                  <span v-if="branch.attributes.email">E-mail : {{ branch.attributes.email }}</span></p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0" v-if="branch.attributes.image.data">
                <img :src="branch.attributes.image.data ? branch.attributes.image.data.attributes.url : ''"  class="img-fluid w-100" />
              </div>
            </div>-->
            <div class="row mx-lg-5 mt-5">
              <div class="col-lg-6 bg-primary p-4 md-w-100 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.804968245858!2d100.61338079839477!3d13.742049700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e289a280a4d%3A0x849fe0360dc9f4db!2sFN%20Building%20Rama9!5e0!3m2!1sth!2sth!4v1690301214930!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-white text-center mt-4">FN RAMA IX (สำนักงานกรุงเทพ)</h2>
                <p class="text-white text-start">ที่อยู่ : 991 อาคารเอฟเอ็น บิวดิ้ง ถนนพระราม 9 แขวงสวนหลวง เขตสวนหลวง, กทม. 10250</p>
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
                  <span>PHETCHABURI (สาขาเพชรบุรี)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 99/11 หมู่ 1 ต.ต้นมะพร้าว อ.เมือง จ.เพชรบุรี 76000</p>
                <p class="text-start">
                  โทร. 064-301-7101
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>KANCHANABURI (สาขากาญจนบุรี)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 33/3 หมู่3 ถ.แสงชูโต ต.ท่าล้อ อ.ท่าม่วง จ.กาญจนบุรี 71110</p>
                <p class="text-start">
                  โทร. 064-301-7102
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>PATTAYA (สาขาพัทยา)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 19/99 หมู่1 ต.นาเกลือ อ.บางละมุง จ.ชลบุรี 20260</p>
                <p class="text-start">
                  โทร. 064-301-7143
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>PAK CHONG (สาขาปากช่อง)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 99/9 ม. 9 ต.กลางดง อ.ปากช่อง จ.นครราชสีมา 30320</p>
                <p class="text-start">
                  โทร : 064-301-7104
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>SINGBURI (สาขาสิงห์บุรี)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 111/1 หมู่1 ต.น้ำตาล อ.อินทร์บุรี จ.สิงห์บุรี 16110</p>
                <p class="text-start">
                  โทร. 064-301-7105
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>HUA HIN (สาขาหัวหิน)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 1999/99 ถ.เพชรเกษม (ทรายใต้) อ.ชะอำ จ.เพชรบุรี 76120</p>
                <p class="text-start">
                  โทร. 064-301-7106
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>SRIRACHA (สาขาศรีราชา)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 111 หมู่ 8 ต.บางพระ อ.ศรีราชา จ.ชลบุรี 20110</p>
                <p class="text-start">
                  โทร. 064-301-7107
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>AYUDHAYA (สาขาอยุธยา)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 65/8 หมู่ 6 ต.บ้านหว้า อ.บางปะอิน จ.พระนครศรีอยุธยา 13160</p>
                <p class="text-start">
                  โทร. 064-301-7109
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>CHACHOENGSAO (สาขาฉะเชิงเทรา)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 3/33 หมู่ที่ 1 ต.ลาดขวาง อ.บ้านโพธิ์ จ.ฉะเชิงเทรา 24140</p>
                <p class="text-start">
                  โทร. 086-341-0392
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-6 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>RAYONG (สาขาระยอง)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 99/19 หมู่ที่ 5 ต.ทับมา อ.เมืองระยอง จ.ระยอง 24140</p>
                <p class="text-start">
                  โทร. 064-587-3347-9
                </p>
              </div>
            </div>
            <div class="row mx-lg-5">
              <div class="col-lg-8 p-4 address">
                <h2 class="heading-text small">
                  <img src="/logo.png" class="img-fluid" />
                  <span>X SINGER living space Jas Green Village</span>
                </h2>
                <p class="text-start">ที่อยู่ : ถนนคู้บอน แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510</p>
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
      };
    },
    mounted() {
      this.getBranch();
    },
    methods: {
      getWidth( submenuWidth) {
        this.width = submenuWidth
      },
      async getBranch() {
        const { data } = await $fetch(`/api/branches?sort=sequence&populate=*`);
        this.data = data;
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
  
