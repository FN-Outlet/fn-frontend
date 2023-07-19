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
            <h2 class="text-white font-normal mb-0">FINANCIAL<br>
HIGHLIGHTS</h2>
          </div>
        </section>
        <section class="py-5 px-lg-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>COMPANY MILES STONE </span>
            </h2>
            <div class="tab-nav row mt-5 mt-lg-0">
              <div class="col-lg-4">
                <button :class="isActive1 ? 'active' : 'inactive'" @click="visible(1)">FINANCIAL HIGHLIGHTS</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive2 ? 'active' : 'inactive'"  @click="visible(2)">FINANCIAL STATEMENTS</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive3 ? 'active' : 'inactive'"  @click="visible(3)">MD & A</button>
              </div>
            </div>
            <div class="result mt-5">
              <div class="overflow-auto table-responsive" v-if="isActive1">
                <table class="table">
                  <thead>
                    <tr class="main-table">
                      <th>PERIOD</th>
                      <th>2018</th>
                      <th>2019</th>
                      <th>2020</th>
                      <th>2021</th>
                      <th>2022</th>
                      <th>Q1/2023</th>
                    </tr>
                    <tr>
                      <th colspan="7" class="sub-table">FINANCIAL DATA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Assets</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                    </tr>
                    <tr>
                      <td>Liabilities</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                    </tr>
                    <tr>
                      <td>Equity</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                    </tr>
                    <tr>
                      <td>Paid-up Capital</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                    </tr>
                    <tr>
                      <td>Revenue</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                    </tr>
                    <tr>
                      <td>Net Profit</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                    </tr>
                    <tr>
                      <td>EPS (Baht)</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                      <td>1,778.85</td>
                    </tr>
                  </tbody>
                </table>
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
        isActive1: true,
        isActive2: false,
        isActive3: false,
      };
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


  </style>
  