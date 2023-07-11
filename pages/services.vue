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
              <div class="col-lg-6 mt-5">
                <div class="border-bottom-red">
                  <img src="/service-01.jpg" class="img-fluid" />
                  <img src="/service-text-01.jpg" class="img-fluid  my-3 text-img" />
                </div>
              </div>
              <div class="col-lg-6 mt-5">
                <div class="border-bottom-red">
                  <img src="/service-02.jpg" class="img-fluid" />
                  <img src="/service-text-02.jpg" class="img-fluid  my-3 text-img" />
                </div>
              </div>
              <div class="col-lg-6 mt-5">
                <div class="border-bottom-red">
                  <img src="/service-03.jpg" class="img-fluid" />
                  <img src="/service-text-03.jpg" class="img-fluid  my-3 text-img" />
                </div>
              </div>
              <div class="col-lg-6 mt-5">
                <div class="border-bottom-red">
                  <img src="/service-04.jpg" class="img-fluid" />
                  <img src="/service-text-04.jpg" class="img-fluid  my-3 text-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="d-lg-flex">
        <div class="col p-0 bg-primary">
          <img src="/service-footer.jpg" class="img-fluid" />
          <p class="text-white p-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea comdignissim </p>
        </div>
        <div class="col d-flex align-items-center justify-content-center ">
          <div class="p-15 d-flex align-items-center justify-content-center">
            <img src="/service-footer-text.jpg" class="img-fluid" />
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

  
  .main{
    padding-left: 100px;
  }
  </style>
  