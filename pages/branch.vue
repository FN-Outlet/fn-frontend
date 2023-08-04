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
            <div class="row mx-lg-5 mt-5 address-wrapper">
              <div class="col-lg-6 p-4 md-w-100 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.804968245858!2d100.61338079839477!3d13.742049700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e289a280a4d%3A0x849fe0360dc9f4db!2sFN%20Building%20Rama9!5e0!3m2!1sth!2sth!4v1690301214930!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> RAMA IX (สำนักงานกรุงเทพ)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 991 อาคารเอฟเอ็น บิวดิ้ง ถนนพระราม 9 แขวงสวนหลวง เขตสวนหลวง, กทม. 10250</p>
                <p class="text-start">
                โทร. 02-300-4951 แฟกซ์: 02-300-4681<br>
                E-mail : customerservice@fnoutlet.com</p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248900.99890740792!2d99.74024889250249!3d12.902698955406809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fcd84cbbab404b%3A0x81cd43dd3bfc7c1a!2sFN%20Outlet%20Petchaburi!5e0!3m2!1sth!2sth!4v1691140605823!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> PHETCHABURI (สาขาเพชรบุรี)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 99/11 หมู่ 1 ต.ต้นมะพร้าว อ.เมือง จ.เพชรบุรี 76000</p>
                <p class="text-start">
                  โทร. 064-301-7101
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.630342980342!2d99.58511457509445!3d13.98059518643559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e30c8accce4ad7%3A0x53a8bf49fef7da3!2sFN%20Outlet%20Kanchanaburi!5e0!3m2!1sth!2sth!4v1691141605198!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> KANCHANABURI (สาขากาญจนบุรี)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 33/3 หมู่3 ถ.แสงชูโต ต.ท่าล้อ อ.ท่าม่วง จ.กาญจนบุรี 71110</p>
                <p class="text-start">
                  โทร. 064-301-7102
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.797144978715!2d100.91805557507662!3d12.984822687331741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102be5cda76364f%3A0x59b2a30b0f4c2516!2sFN%20Outlet%20Pattaya!5e0!3m2!1sth!2sth!4v1691142324146!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> PATTAYA (สาขาพัทยา)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 19/99 หมู่1 ต.นาเกลือ อ.บางละมุง จ.ชลบุรี 20260</p>
                <p class="text-start">
                  โทร. 064-301-7143
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2802761087264!2d101.2719763756633!3d14.640025085850972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311dd3eaa94449e7%3A0x5ce98ef358638b5a!2zRk4g4LmA4Lit4Liy4LiX4LmM4LmA4Lil4LmH4LiXIOC4m-C4suC4geC4iuC5iOC4reC4hy3guYDguILguLLguYPguKvguI3guYg!5e0!3m2!1sth!2sth!4v1691157713799!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> PAK CHONG (สาขาปากช่อง)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 99/9 ม. 9 ต.กลางดง อ.ปากช่อง จ.นครราชสีมา 30320</p>
                <p class="text-start">
                  โทร : 064-301-7104
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.0634368224382!2d100.35233687511383!3d14.98918338554458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e1ee06c8475ead%3A0x71e3f0243f27e11c!2sFN%20Factory%20Outlet%20Singburi!5e0!3m2!1sth!2sth!4v1691157761792!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> SINGBURI (สาขาสิงห์บุรี)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 111/1 หมู่1 ต.น้ำตาล อ.อินทร์บุรี จ.สิงห์บุรี 16110</p>
                <p class="text-start">
                  โทร. 064-301-7105
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.720142624334!2d99.94942507507125!3d12.666345587621592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fd01021fd225c1%3A0x7b52d6a7caad2994!2sFN%20Outlet%20HuaHin!5e0!3m2!1sth!2sth!4v1691157795796!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> HUA HIN (สาขาหัวหิน)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 1999/99 ถ.เพชรเกษม (ทรายใต้) อ.ชะอำ จ.เพชรบุรี 76120</p>
                <p class="text-start">
                  โทร. 064-301-7106
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.5316812188435!2d100.99561227508029!3d13.191901487144085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b7a1d307acd9%3A0x26c04b613cf96c6b!2sFN%20Outlet%20Siracha!5e0!3m2!1sth!2sth!4v1691157825329!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> SRIRACHA (สาขาศรีราชา)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 111 หมู่ 8 ต.บางพระ อ.ศรีราชา จ.ชลบุรี 20110</p>
                <p class="text-start">
                  โทร. 064-301-7107
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.1223932485855!2d100.61158407509944!3d14.246081786199365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2777538046383%3A0xd75818ebe674de22!2sFN%20Outlet%20Ayutthaya!5e0!3m2!1sth!2sth!4v1691157856039!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> AYUDHAYA (สาขาอยุธยา)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 65/8 หมู่ 6 ต.บ้านหว้า อ.บางปะอิน จ.พระนครศรีอยุธยา 13160</p>
                <p class="text-start">
                  โทร. 064-301-7109
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.919590793373!2d101.01789367508748!3d13.601723086774706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3f18cee23d57%3A0x8b34f90b425176f!2sFN%20Outlet%20Chachoengsao!5e0!3m2!1sth!2sth!4v1691157896767!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> CHACHOENGSAO (สาขาฉะเชิงเทรา)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 3/33 หมู่ที่ 1 ต.ลาดขวาง อ.บ้านโพธิ์ จ.ฉะเชิงเทรา 24140</p>
                <p class="text-start">
                  โทร. 086-341-0392
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.767053378936!2d101.19815983860468!3d12.743787846887793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102fb3e84f698fb%3A0xad4145a8ef8e8203!2sFN%20Outlet%20Rayong!5e0!3m2!1sth!2sth!4v1691157929945!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> RAYONG (สาขาระยอง)</span>
                </h2>
                <p class="text-start">ที่อยู่ : 99/19 หมู่ที่ 5 ต.ทับมา อ.เมืองระยอง จ.ระยอง 24140</p>
                <p class="text-start">
                  โทร. 064-587-3347-9
                </p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
              </div>
            </div>
            <div class="row mx-lg-5 address-wrapper">
              <div class="col-lg-6 p-4 address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.7076985740728!2d100.67813907509216!3d13.856576286546305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6397d01a0c4b%3A0xc5c007610abc7c38!2sSINGER%20FN%20Living%20Space!5e0!3m2!1sth!2sth!4v1691157967132!5m2!1sth!2sth" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4 heading-custom font-thin text-gray">
                  <span><span class="fn-logo-text">FN</span> X SINGER living space Jas Green Village</span>
                </h2>
                <p class="text-start">ที่อยู่ : ถนนคู้บอน แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510</p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0">
                <img src="/branch-hq.jpg" class="img-fluid w-100" />
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

  .active{
    background: #CD3832;
  }

  .address-wrapper{
    background: #fff;
    transition: 0.3s;
    img{
      opacity: 0;
      transition: 0.3s;
    }
    &:hover, &:active, &:focus{
      background: #CD3832;
      img{
        opacity: 1;
      }
      p{
        color: #fff;
      }
      h2{
        color: #fff !important;
      }
      .fn-logo-text{
        color: #fff !important;
      }
    }
  }
  
  </style>
  
