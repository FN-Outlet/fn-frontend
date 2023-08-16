<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`" v-if="!loading">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/director.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">{{ $t("BOARD OF") }}<br>{{ $t("DIRECTORS") }}</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>{{ $t("BOARD OF DIRECTORS") }}</span>
            </h2>
            <div class="row">
              <div class="col-lg-4 mt-5" v-for="(item, index) in data" :key="index">
                <div class="bod">
                  <div class="img" @click="item.showModal = true">
                    <img v-if="item.attributes.image.data" :src="item.attributes.image.data.attributes.url"  class="img-fluid"/>
                  </div>
                  <div v-if="$i18n.locale === 'en'">
                    <h3>{{ item.attributes.nameen }}</h3>
                    <p>{{ item.attributes.positionen }}</p>
                  </div>
                  <div v-else>
                    <h3>{{ item.attributes.nameth }}</h3>
                    <p>{{ item.attributes.positionth }}</p>
                  </div>
                </div>
                <div class="modal-overlay-custom" v-if="item.showModal" @click="item.showModal=false">
                  <div class="modal-custom" @click.stop>
                    <div class="img">
                      <img v-if="item.attributes.image.data" :src="item.attributes.image.data.attributes.url" class="img-fluid" />
                    </div>
                    <article>
                      <header class="heading">
                        <div v-if="$i18n.locale === 'en'">
                          <h3 class="line">{{ item.attributes.nameen }}</h3>
                          <p>{{ item.attributes.positionen }}</p>
                        </div>
                        <div v-else>
                          <h3 class="line">{{ item.attributes.nameth }}</h3>
                          <p>{{ item.attributes.positionth }}</p>
                        </div>
                      </header>
                      <div class="description">
                        <table class="toc-profile">
                          <tbody>
                            <tr>
                              <th>{{ $t("Qualification") }}</th>
                              <td>
                                <ul class="type-squre">
                                  <div v-if="$i18n.locale === 'en' && item.attributes.qualificationen" v-html="$mdRenderer.render(item.attributes.qualificationen)"></div>
                                  <div v-if="$i18n.locale === 'th' && item.attributes.qualificationth" v-html="$mdRenderer.render(item.attributes.qualificationth)"></div>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <th>{{ $t("Training") }}</th>
                              <td>
                                <ul class="type-squre">
                                  <div v-if="$i18n.locale === 'en' && item.attributes.trainingen" v-html="$mdRenderer.render(item.attributes.trainingen)"></div>
                                  <div v-if="$i18n.locale === 'th' && item.attributes.trainingth" v-html="$mdRenderer.render(item.attributes.trainingth)"></div>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <th>Work Experiences</th>
                              <td>
                                <ul class="type-squre">
                                  <div v-if="$i18n.locale === 'en' && item.attributes.workexperianceen" v-html="$mdRenderer.render(item.attributes.workexperianceen)"></div>
                                  <div v-if="$i18n.locale === 'th' && item.attributes.workexperianceth" v-html="$mdRenderer.render(item.attributes.workexperianceth)"></div>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </article>
                  </div>
                  <div class="close" @click="item.showModal=false">
                    <img class="close-img img-fluid" src="/close.svg" alt="" />
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
        loading: true,
        data: '',
      };
    },
    async mounted() {
      await this.getDirectors()
    },
    methods: {
      getWidth( submenuWidth) {
        this.width = submenuWidth
      },
      async getDirectors() {
        const { data } = await $fetch(`/api/directors?sort=sequence&filters[committeetype][$eq]=Director&populate=*`);
        this.data = data;
        this.data.forEach((elm)=>{
          elm.showModal = false
        });
        this.loading = false;
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

  .bod{
    text-align: center;
    border-bottom: 2px solid #CC3832;
    height: 100%;
    .img{
      background: #CC3832;
    }
    h3{
      margin-top: 15px;
      color: #555754;
      font-weight: normal;
    }
    p{
      color: #555754;
    }
  }

.modal-overlay-custom {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background:rgba(0,0,0,0.5);
  z-index: 99;
}

.modal-custom {
  text-align: center;
  background-color: white;
  height: 80vh;
  max-width: 80%;
  margin-top: 10%;
  border-radius: 20px;
  overflow: hidden;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.modal-custom{
  display: flex;
  > *{
    flex: 50%;
  }
  article{
    text-align: left;
    padding: 30px;
    .description{
      overflow: auto;
      border-top: 1px solid #000000;
      height: calc( 80vh - 150px );
    }
    
  }
}

  </style>
  