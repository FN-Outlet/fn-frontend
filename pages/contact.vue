<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/contact.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">CONTACT US /<br>
            ENQUIRY FROM</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>CONTACT US</span>
            </h2>
            <div class="row bg-primary m-lg-5 p-4 mx-2 mt-4">
              <div class="col-12">
                <label>Name</label>
                <input type="text" class="form-control"/>
              </div>
              <div class="col-lg-6">
                <label>Phone</label>
                <input type="phone" class="form-control"/>
              </div>
              <div class="col-lg-6">
                <label>Email</label>
                <input type="phone" class="form-control"/>
              </div>
              <div class="col-12">
                <label>Message</label>
                <textarea class="form-control"></textarea>
              </div>
              <div class="col-12 text-center mt-4">
                <button class="btn btn-white">Send</button>
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
  