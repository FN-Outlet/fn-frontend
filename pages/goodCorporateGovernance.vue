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
            <h2 class="text-white font-normal mb-0" v-if="$i18n.locale === 'en'">Good Corporate<br>Governance</h2>
            <h2 class="text-white font-normal mb-0" v-else>การกำกับดูแล<br>กิจการที่ดี</h2>
          </div>
        </section>
        <section class="py-5 px-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>{{ $t("Good Corporate Governance") }} </span>
            </h2>
            <div class="docs mt-4">
                <a 
                  v-for="(doc,index) in document" :key="index"
                  :href="($i18n.locale == 'en' && doc.attributes.fileen.data) ? doc.attributes.fileen.data.attributes.url : doc.attributes.file.data.attributes.url" 
                  class="d-flex w-100 justify-content-between"  
                  target="_blank"
                > 
                  <span class="d-block" v-if="$i18n.locale=='en'">{{ doc.attributes.nameen }}</span>
                  <span class="d-block" v-else>{{ doc.attributes.nameth }}</span>
                  <span class="">{{ $t("Download") }}</span>
                </a>
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
        document: '',
      };
    },
    mounted() {
      //console.log( this.width )
      this.getDocument()
    },
    methods: {
      getWidth( submenuWidth) {
        this.width = submenuWidth
      },
      async getDocument() {
        const { data } = await $fetch(`/api/documents?sort=sequence&filters[documenttype][$eq]=Good Corporate Governance&populate=*`);
        this.document = data;
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
        height: 20px;
      }
      span{
        font-size: 20px;
        @media (max-width: 992px) {
          display: block;
          line-height: 1;
          //font-size: 22px;
        }
      }
    }
  }

  .tab-nav{
    button{
      display: block;
      width: 100%;
      border: 0;
      padding: 15px;
      height: 100%;
      @media (max-width: 992px) {
        border-bottom: 2px solid #fff;
        padding: 15px 10px;
      }
      &.active{
        background: #CC3832;
        color: #fff;
      }
    }
  }

  .main-table th{
    background: #CC3832;
    border: 1px solid #fff;
    color: #fff;
  }

  .sub-table{
    background: #F0F0F0;
  }

  .docs{
    a{
      padding: 10px 0;
    }
  }


  </style>
  