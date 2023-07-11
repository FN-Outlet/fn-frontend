<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/service-banner.jpg" class="img-fluid w-100" />
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
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea comdignissim</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-6 offset-3 mt-5"><img src="/service-heading.jpg" class="img-fluid"></div>
            </div>
            <div class="row">
              <div class="col-6">

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
  
  .main-header{
    position: absolute;
    z-index: 8;
    width: calc( 50% - 70px );
    left: calc( 50% + 70px );
    display: flex;
    padding-top: 40px;
    padding-left: 20px;
    margin: 0 -5px;
    @media (max-width: 576px) {
      display: none;
    }
    > *{
      margin: 0 5px;
    }
    .search-wrapper{
      input{
        background: url('/icon-search.png') no-repeat center left;
        background-size: contain;
        border: 1px solid #fff;
        border-radius: 50px;
        font-size: 13px;
        color: #fff;
        padding: 4px 15px 4px 45px;
        &::placeholder{
          color: #fff;
        }
      }
    }
    button{
      background: transparent;
      border: 1px solid #fff;
      border-radius: 50%;
      color: #fff;
      font-size: 13px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
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
  .frame-wrapper{
    border: 2px solid #CD3832;
    position: relative;
    padding: 30px;
    &.sofa{
      padding: 30px 0;
      h2{
        background: #fff;
      }
      a{
        background: #fff;
      }
      img{
        max-width: 150%;
        width: 150%;
        margin-left: -25%;
      }
    }
    h2{
      background: #E3E3E3;
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      padding: 0 15px;
    }
    a{
      text-decoration: none;
      display: block;
      background: #E3E3E3;
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      padding: 0 15px;
    }
  }
  
  .border-red{
    border-top: 10px solid #CD3832
  }
  
  .img-center{
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  
  .icon-facebook{
    border-radius: 50%;
    border: 1px solid #fff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
 
  
  .main{
    padding-left: 100px;
    //width: calc( 100vw - 60px );
  }
  </style>
  