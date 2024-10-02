<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`" v-if="!loading">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/news-banner.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">NEWS</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>NEWS</span>
            </h2>
            <div class="slider-wrapper">
            <swiper 
                ref="mySwiper"
                :modules="modules"
                :slides-per-view="1"
                :spaceBetween="30"
                :loop="true"
                :effect="'creative'"
                :pagination="{ clickable: true }"
                >
                <swiper-slide v-for="(newsHightlight,item) in dataHightlight" :key="item">
                  <div class="mt-5" >
                    <nuxt-link :to="localePath({ name: 'article', query: { id: newsHightlight.id } })" style="text-decoration: none;">
                      <div class="slider-wrapper text-center">
                        <img v-if="newsHightlight && newsHightlight.attributes.image.data" :src="newsHightlight.attributes.image.data.attributes.url"  class="img-fluid" />
                      </div>
                      <div class="row mt-5" v-if="newsHightlight">
                        <div class="col-lg-8 offset-lg-2 text-center" v-if="$i18n.locale == 'en'">
                          <h3>{{ newsHightlight.attributes.headlineen }}</h3>
                          <p>{{ newsHightlight.attributes.topicen }}</p>
                        </div>
                        <div class="col-lg-8 offset-lg-2 text-center" v-else>
                          <h3>{{ newsHightlight.attributes.headlineth }}</h3>
                          <p>{{ newsHightlight.attributes.topicth }}</p>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
              </swiper-slide>
          </swiper>
          <button @click="nextSlide" class="btn-slider-next">
                <img src="/slider-next.svg" class="img-fluid" />
              </button>
              <button @click="prevSlide" class="btn-slider-prev">
                <img src="/slider-prev.svg" class="img-fluid" />
              </button>
            </div>
            <div class="row">
              <div class="col-lg-4" v-for="(news,item) in data" :key="item">
                <div href="#" class="news-thumbnail">
                  <div>
                    <img v-if="news.attributes.image.data" :src="news.attributes.image.data.attributes.url"  class="img-fluid" />
                    <h3 v-if="$i18n.locale == 'en'">{{ news.attributes.headlineen }}</h3>
                    <h3 v-else>{{ news.attributes.headlineth }}</h3>
                    <p v-if="$i18n.locale == 'en'">{{ news.attributes.topicen }}</p>
                    <p v-else>{{ news.attributes.topicth }}</p>
                  </div>
                  <div class="footer">
                    <date></date>
                    <nuxt-link :to="localePath({ name: 'article', query: { id: news.id } })">Read more</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                <div class="pagination mt-5 mb-5">
                  <a
                    v-for="(pageCount, index) in newsMeta.pageCount" 
                    :key="index"
                    @click="changePageNews(pageCount)"
                  >
                    {{ pageCount }}
                  </a>
                </div>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import { defineComponent } from '@vue/composition-api'
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { useSwiper } from 'swiper/vue'

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  export default defineComponent({
    data() {
      return {
        width: '50',
        loading: true,
        data: '',
        dataHightlight: '',
        newsPage: 1,
        pageSize: 10,
        newsMeta: '',
      };
    },
    components: {
    Swiper,
    SwiperSlide,
    },
    setup() {
      const swiper = useSwiper()
      
      return {
          modules: [Navigation, Pagination, Scrollbar, A11y],
          swiper,
        };
    },
    async mounted() {
      const config = useRuntimeConfig()
      this.pageSize = config.public.pageSize
      const newsPage = Number(this.$route.query.newsPage) > 0 ? this.$route.query.newsPage : this.newsPage

      await this.getNews(newsPage, this.pageSize)
      await this.getNewsHightlight()
      
    },
    methods: {
      getWidth( submenuWidth) {
        this.width = submenuWidth
      },
      nextSlide(){
        this.$refs.mySwiper.$el.swiper.slideNext()
      },
      prevSlide(){
        this.$refs.mySwiper.$el.swiper.slidePrev()
      },
      async getNews(page, pageSize) {
        const data = await $fetch(`/api/newss?sort=newsdate:desc&filters[Highlight][$eq]=false&filters[newstype][$eq]=news&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
        this.data = data.data;
        this.newsMeta = data.meta.pagination;
        this.loading = false;
      },
      async getNewsHightlight() {
        const { data } = await $fetch(`/api/newss?sort=newsdate:desc&filters[Highlight][$eq]=true&filters[newstype][$eq]=news&populate=*`);
        this.dataHightlight = data;
        this.loading = false;
      },
      async changePageNews(page) {
        const currUrl = this.$route.path;
        console.log(currUrl)
        history.pushState(
          {},
          null,
          decodeURI(currUrl) + '?newsPage='+page
        )
        await this.getNews(page, this.pageSize)
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

.pagination{
    display: flex;
    justify-content: center;
    a{
      margin: 0 15px;
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
        font-size: 40px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid #CC3832;
    height: 100%;
    > div:first-child{
      margin-top: 60px;
    }
    img{
      height: 183px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
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

  .news-cover{
    position: relative;
    h2{
      position: absolute;
      right: 30px;
      bottom: 15px;
      align-items: center;
      img{
        height: 40px;
      }
      span{
        color: #fff;
        font-weight: bold;
      }
    }
  }

  </style>
  