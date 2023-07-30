<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`" v-if="!loading">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/banner.png" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">VISION &<br>
            MISSION</h2>
          </div>
        </section>
        <section class="d-lg-flex"> 
          <div class="col" style="background: #E3E3E3;">
            <div class="p-15 d-flex align-items-center h-100 justify-content-center">
              <h2>VISION</h2>
            </div>
          </div>
          <div class="col p-0">
            <div class="p-5">
              <Collapse 
                :heading="'Design Outlet'"
                :text="'FN is the expert in having its one-of-a-kind design outlet which products are specially made and selected to serve our customers exclusively only at FN and to offer a fun and memorable experience to shoppers and travelers.'"
              />
              <Collapse 
                :heading="'Deliver Best Value'"
                :text="'FN excels in searching, selecting, and providing only the best value-for-money products and services from around the world for our customers.'"
              />
              <Collapse 
                :heading="'Delight all customers'"
                :text="'FN selectively expands its business locally and globally through creatively designed outlet, both regular and online stores, using its expertise in best-value selection.'"
              />
            </div>
          </div>
        </section>
        <section class="d-flex mobile-flex"> 
          <div class="col order-2 order-lg-1 p-0">
            <div class="p-5">
              <Collapse 
                :heading="'Inspire'"
                :text="'Inspire and offer greater choices of lifestyle, shopping and leisure for consumers.'"
              />
              <Collapse 
                :heading="'Source'"
                :text="'Source, select and serve best value-for-money products and services from around the world.'"
              />
              <Collapse 
                :heading="'Expand'"
                :text="'Expand the partnership network of FN family both domestically and internationally.'"
              />
              <Collapse 
                :heading="'Build'"
                :text="'Build greater value for investors through corporate responsibility and transparency.'"
              />
            </div>
          </div>
          <div class="col order-1 order-lg-2" style="background: #E3E3E3;">
            <div class="p-15 d-flex align-items-center h-100 justify-content-center">
              <h2>MISSION</h2>
            </div>
          </div>
          
        </section>
        <section class="d-lg-flex"> 
          <div class="col" style="background: #E3E3E3;">
            <div class="p-15 d-flex align-items-center h-100 justify-content-center">
              <h2>CORE VALUE</h2>
            </div>
          </div>
          <div class="col p-0">
            <div class="p-5">
              <Collapse 
                :heading="'Openess'"
                :text="'Open to change, open to diversity, open to new creativities, open to new opportunities.'"
              />
              <Collapse 
                :heading="'Uniqueness'"
                :text="'Be different, be exclusive.'"
              />
              <Collapse 
                :heading="'Teamwork'"
                :text="'Embrace differences and work towards the same goal.'"
              />
              <Collapse 
                :heading="'Learning'"
                :text="'Never stop learning new things'"
              />
              <Collapse 
                :heading="'Energy'"
                :text="'Eager to serve our customers'"
              />
              <Collapse 
                :heading="'Trust'"
                :text="'Build credibility and create customer loyalty'"
              />
            </div>
          </div>
        </section>
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
        activeIndex: 0,
        items_en: [],
        items_th: [],
        loading: true,
      };
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    computed: {
      items() {
        if (this.$i18n.locale === 'en'){
          return this.items_en
        }
        return this.items_th
      }
    },
    setup() {
      const swiper = useSwiper()
      
      return {
          modules: [Navigation, Pagination, Scrollbar, A11y],
          swiper,
        };
    },
    async mounted() {
      await this.getHistory()
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
      goto( index ){
        this.$refs.mySwiper.$el.swiper.slideTo( index )
        this.activeIndex = index
      },
      async getHistory() {
        const { data } = await $fetch(`/api/histories?sort=yearth:desc&populate=*`);
        this.data = data;
        this.data.forEach((data)=>{
          this.items_en.push(data.attributes.yearen)
          this.items_th.push(data.attributes.yearth)
        })
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
  
  .main{
    padding-left: 100px;
  }

  label{
    color: #fff;
    margin-top: 15px;
  }

  @media (max-width: 992px) {
    .mobile-flex{
      flex-wrap: wrap;
      .col{
        flex: 100%;
      }
    }
  }

  </style>
  