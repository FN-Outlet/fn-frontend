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
            <h2 class="text-white font-normal mb-0">{{ $t("SUB COMMITTEE") }}</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <div class="tab-nav row mt-5 mt-lg-0">
              <div class="col-lg-4">
                <button :class="isActive1 ? 'active' : 'inactive'" @click="visible(1)">{{ $t("Audit Committee") }}</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive2 ? 'active' : 'inactive'"  @click="visible(2)">{{ $t("Nomination Remuneration") }}<br>{{ $t("and Good Corporate Governance Committee") }}</button>
              </div>
              <!--<div class="col-lg-4">
                <button :class="isActive3 ? 'active' : 'inactive'"  @click="visible(3)">Risk Management Committee</button>
              </div>-->
              <div class="col-lg-4">
                <button :class="isActive4 ? 'active' : 'inactive'"  @click="visible(4)">{{ $t("Executive Committee") }}</button>
              </div>
            </div>
            <div class="row" >
              <div class="col-lg-4 mt-5" v-for="(item, index) in data" :key="index">
                <div class="bod">
                  <!--<div class="img" @click="showModal = true">-->
                  <div class="img" @click="item.showModal = true">
                    <img v-if="item.attributes.image.data" :src="item.attributes.image.data.attributes.url" class="img-fluid" />
                    <!--<info-modal 
                      v-if="showModal" 
                      @clicked="closeModal(false)"
                    >
                    </info-modal>-->
                    
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
        isActive1: true,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        allCommittee: '',
        data: '',
      };
    },
    compatConfig: { MODE: 3 },
    async mounted() {
      await this.getDirectors()
    },
    methods: {
      getWidth( submenuWidth) {
        this.width = submenuWidth
      },
      closeModal(){
        this.showModal = false
        console.log( this.showModal )
      },
      async getDirectors() {
        const { data } = await $fetch(`/api/directors?sort=sequence&filters[committeetype][$in][0]=Audit&filters[committeetype][$in][1]=Nomination-Remuneration-Good-Corporate-Governance&filters[committeetype][$in][2]=Risk-Manament&filters[committeetype][$in][3]=Executive&populate=*`);
        this.allCommittee = data;
        this.allCommittee.forEach((elm)=>{
          elm.showModal = false
        });
        this.data = this.allCommittee.filter(d => d.attributes.committeetype == 'Audit');
        this.loading = false;
      },
      visible( data ){
        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = false
        this.isActive4 = false
        if ( data === 1 ){
          this.isActive1 = true
          this.data = this.allCommittee.filter(d => d.attributes.committeetype == 'Audit');
        } if ( data === 2 ){
          this.isActive2 = true
          this.data = this.allCommittee.filter(d => d.attributes.committeetype == 'Nomination-Remuneration-Good-Corporate-Governance');
        } if ( data === 3 ){
          this.isActive3 = true
          this.data = this.allCommittee.filter(d => d.attributes.committeetype == 'Risk-Manament');
        } if ( data === 4 ){
          this.isActive4 = true
          this.data = this.allCommittee.filter(d => d.attributes.committeetype == 'Executive');
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
    
    .img-bkk{
      background: #CC3832;
      position: relative;
      cursor: pointer;
      &:before{
        content: '';
        background: url('/zoom.svg') no-repeat center center;
        background-size: contain;
        position: absolute;
        left: 15px;
        top: 15px;
        width: 30px;
        height: 30px;
        z-index: 8;
      }
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


  .tab-nav{
    > *{
      margin-bottom: 20px;
    }
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
    table{
      font-size: 12px;
      td{
        border-left: 1px solid #999;
      }
      th{
        padding-right: 15px;
      }
    }
    
  }
}
  </style>
  