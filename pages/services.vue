<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <header class="main-header">
        <div class="search-wrapper">
          <input type="text" placeholder="SEARCH">
        </div>
        <button>TH</button>
        <button>EN</button>
      </header>
     
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
  