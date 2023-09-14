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
            <h2 class="text-white font-normal mb-0">Stock
            <br>
            Price</h2>
          </div>
        </section>
        <section class="py-5 px-lg-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>Stock Price</span>
            </h2>
            <div class="tab-nav row my-5">
              <div class="col-lg-4">
                <button :class="isActive1 ? 'active' : 'inactive'" @click="visible(1)">ข้อมูลผู้ถือหุ้น</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive2 ? 'active' : 'inactive'"  @click="visible(2)">การประชุมผู้ถือหุ้น</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive3 ? 'active' : 'inactive'"  @click="visible(3)">แบบแสดงรายการข้อมูลประจำปี/รายงานประจำปี</button>
              </div>
            </div>
            <div class="result mt-5">
              <div v-if="isActive1">
                <ul>
                  <li>
                    <a href="#">link a</a>
                  </li>
                  <li>
                    <a href="#">link b</a>
                  </li>
                  <li>
                    <a href="#">link c</a>
                  </li>
                  <li>
                    <a href="#">link d</a>
                  </li>
                </ul>
              </div>
              <div class="docs" v-if="isActive2">
                <a href="#" target="_blank" class="d-flex w-100 justify-content-between" >
                  <span>Doc name</span>
                  <span>{{ $t("Download") }}</span>
                </a>
              </div>
              <div class="docs" v-if="isActive3">
                <a href="#" target="_blank" class="d-flex w-100 justify-content-between" >
                  <span>dd/mm/yyyy</span>
                  <span>Doc name</span>
                  <span>{{ $t("Download") }}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-8 offset-2">
                <div class="row text-center">
                  <div class="col-sm-6">
                    <h2 class="text-black mb-4">กราฟภาพรวมตลาด</h2>
                    <iframe frameborder=0 scrolling=no width="200" height="260" src="https://weblink.settrade.com/banner/banner3.jsp"></iframe>
                  </div>
                  <div class="col-sm-6 mt-3 mt-sm-0">
                    <h2 class="text-black mb-4">ราคาหลักทรัพย์</h2>
                    <iframe v-if="$i18n.locale === 'en'" frameborder=0 scrolling=no width="200" height="200" src="https://weblink.settrade.com/IRPage/irpage.jsp?txtSymbol=FN&language=en&key=14356"></iframe>
                    <iframe v-else frameborder=0 scrolling=no width="200" height="200" src="https://weblink.settrade.com/IRPage/irpage.jsp?txtSymbol=FN&language=th&key=14356"></iframe>
                  </div>
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
        activeIndex: 0,
        isActive1: true,
        isActive2: false,
        isActive3: false,
        items: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]
      };
    },
    components: {

    },

    mounted() {
      console.log( this.width )
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

  </style>
  