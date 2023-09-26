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
        <section class="py-5 px-lg-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>{{ $t("Good Corporate Governance") }} </span>
            </h2>
            <div class="tab-nav row mt-5 mt-lg-0">
              <div class="col-lg-4">
                <button :class="isActive1 ? 'active' : 'inactive'" @click="visible(1)">{{ $t("Important Documents") }}</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive2 ? 'active' : 'inactive'"  @click="visible(2)">{{ $t("Board Charter") }}</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive3 ? 'active' : 'inactive'"  @click="visible(3)">{{ $t("Policies and guidelines") }}</button>
              </div>
            </div>
            <div class="result mt-5">
              <div class="overflow-auto table-responsive" v-if="isActive1">
                <a :href="($i18n.locale == 'en' && fiDoc.attributes.fileen.data) ? fiDoc.attributes.fileen.data.attributes.url : fiDoc.attributes.file.data.attributes.url"  target="_blank" class="d-flex w-100 justify-content-between"  v-for="(fiDoc, index) in importantDocument" :key="index">
                  {{ fiDoc.attributes.period }}
                  <span v-if="$i18n.locale=='en'">{{ fiDoc.attributes.nameen }}</span>
                  <span v-else>{{ fiDoc.attributes.nameth }}</span>
                  <span>{{ $t("Download") }}</span>
                </a>
              </div>
              <div class="docs" v-if="isActive2">
                <a :href="($i18n.locale == 'en' && fiDoc.attributes.fileen.data) ? fiDoc.attributes.fileen.data.attributes.url : fiDoc.attributes.file.data.attributes.url"  target="_blank" class="d-flex w-100 justify-content-between"  v-for="(fiDoc, index) in boardCharter" :key="index">
                  {{ fiDoc.attributes.period }}
                  <span v-if="$i18n.locale=='en'">{{ fiDoc.attributes.nameen }}</span>
                  <span v-else>{{ fiDoc.attributes.nameth }}</span>
                  <span>{{ $t("Download") }}</span>
                </a>
              </div>
              <div class="docs" v-if="isActive3">
                <a :href="($i18n.locale == 'en' && fiDoc.attributes.fileen.data) ? fiDoc.attributes.fileen.data.attributes.url : fiDoc.attributes.file.data.attributes.url" target="_blank" class="d-flex w-100 justify-content-between"  v-for="(fiDoc, index) in policies" :key="index">
                  <span v-if="$i18n.locale=='en'">{{ fiDoc.attributes.nameen }}</span>
                  <span v-else>{{ fiDoc.attributes.nameth }}</span>
                  <span>{{ $t("Download") }}</span>
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
        document: '',
        isActive1: true,
        isActive2: false,
        isActive3: false,
        importantDocument: [],
        boardCharter: [],
        policies: [],
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
      visible( data ){
        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = false
        if ( data === 1 ){
          this.isActive1 = true
        } if ( data === 2 ){
          this.isActive2 = true
        } if ( data === 3 ){
          this.isActive3 = true
        } 
      },
      async getDocument() {
        const { data } = await $fetch(`/api/documents?sort=seq:desc&filters[documenttype][$in][0]=Important Documents&filters[documenttype][$in][1]=Board Charter&filters[documenttype][$in][2]=Policies and guidelines&populate=*`);
        this.document = data;
        this.importantDocument = this.document.filter((a) => a.attributes.documenttype == 'Important Documents')
        this.boardCharter = this.document.filter((a) => a.attributes.documenttype == 'boardCharter')
        this.policies = this.document.filter((a) => a.attributes.documenttype == 'policies')
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
  