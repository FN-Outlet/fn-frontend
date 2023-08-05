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
            <div class="row mx-lg-5 mt-5 address-wrapper" v-for="(branch,index) in data" :key="index">
              <div class="col-lg-6 p-4 md-w-100 address" @click="activeBranch(index)">
                <iframe 
                  v-if="branch.attributes.iframegooglemap && branch.isActive"
                  :src="branch.attributes.iframegooglemap" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2 class="text-center mt-4" v-if="$i18n.locale === 'en'">{{ branch.attributes.nameen }}</h2>
                <h2 class="text-center mt-4" v-else>{{ branch.attributes.nameth }}</h2>
                <p class="text-start" v-if="$i18n.locale === 'en'">{{ branch.attributes.addressen }}</p>
                <p class="text-start" v-else>{{ branch.attributes.addressth }}</p>
                <p class="text-start">
                  โทร. {{ branch.attributes.tel }} 
                  <span v-if="branch.attributes.fax">แฟกซ์: {{ branch.attributes.fax }}</span><br>
                  <span v-if="branch.attributes.email">E-mail : {{ branch.attributes.email }}</span></p>
              </div>
              <div class="col-lg-6 main-branch md-w-100 px-0" v-if="branch.attributes.image.data && branch.isActive">
                <img :src="branch.attributes.image.data ? branch.attributes.image.data.attributes.url : ''"  class="img-fluid w-100" />
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
      activeBranch(index) {
        this.data.forEach((elm)=>{
          elm.isActive = false
        });
        this.data[index].isActive = true;
      },
      async getBranch() {
        const { data } = await $fetch(`/api/branches?sort=sequence&populate=*`);
        this.data = data;
        this.data.forEach((elm)=>{
          elm.isActive = false
        });
        this.data[0].isActive = true
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
  
