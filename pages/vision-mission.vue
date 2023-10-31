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
            <h2 class="text-white font-normal mb-0">{{ $t("VISION") }} &<br>
              {{ $t("MISSION") }}</h2>
          </div>
        </section>
        <section class="d-lg-flex"> 
          <div class="col" style="background: #CD3732;">
            <div class="d-flex align-items-center h-100 justify-content-center">
              <img src="/vision.jpg" style="min-width: 100%; min-height: auto;"/>
            </div>
          </div>
          <div class="col p-0">
            <div class="p-3 d-flex align-items-center justify-content-center">
              <h2>{{ $t("vision-mission.vision") }}</h2>
            </div>
            <div class="p-5">
              <Collapse 
                :heading="$t('vision-mission.designOutletHeading')"
                :text="$t('vision-mission.designOutletText')"
              />
              <Collapse 
                :heading="$t('vision-mission.deliverBestValueHeading')"
                :text="$t('vision-mission.deliverBestValueText')"
              />
              <Collapse 
                :heading="$t('vision-mission.delightAllCustomersHeading')"
                :text="$t('vision-mission.delightAllCustomersText')"
              />
            </div>
          </div>
        </section>
        <section class="d-flex mobile-flex"> 
          <div class="col order-2 order-lg-1 p-0">
            <div class="p-3 d-flex align-items-center justify-content-center">
              <h2>{{ $t("vision-mission.mission") }}</h2>
            </div>
            <div class="p-5">
              <Collapse 
                :heading="$t('vision-mission.inspireHeading')"
                :text="$t('vision-mission.inspireText')"
              />
              <Collapse 
                :heading="$t('vision-mission.sourceHeading')"
                :text="$t('vision-mission.sourceText')"
              />
              <Collapse 
                :heading="$t('vision-mission.expandHeading')"
                :text="$t('vision-mission.expandText')"
              />
              <Collapse 
                :heading="$t('vision-mission.buildHeading')"
                :text="$t('vision-mission.buildText')"
              />
            </div>
          </div>
          <div class="col order-1 order-lg-2" style="background: #CD3732;">
            <div class="d-flex align-items-center h-100 justify-content-center">
              <img src="/mission.jpg" style="min-width: 100%; min-height: auto;"/>
            </div>
          </div>
          
        </section>
        <section class="d-lg-flex"> 
          <div class="col" style="background: #CD3732;">
            <div class="d-flex align-items-center h-100 justify-content-center">
              <img src="/core-values.jpg" style="min-width: 100%; min-height: auto;"/>
            </div>
          </div>
          <div class="col p-0">
            <div class="p-3 d-flex align-items-center justify-content-center">
              <h2>{{ $t("vision-mission.coreValue") }}</h2>
            </div>
            <div class="" style="padding-left: 3rem; padding-right: 3rem;">
              <Collapse 
                :heading="$t('vision-mission.openessHeading')"
                :text="$t('vision-mission.openessText')"
              />
              <Collapse 
                :heading="$t('vision-mission.uniquenessHeading')"
                :text="$t('vision-mission.uniquenessText')"
              />
              <Collapse 
                :heading="$t('vision-mission.teamworkHeading')"
                :text="$t('vision-mission.teamworkText')"
              />
              <Collapse 
                :heading="$t('vision-mission.learningHeading')"
                :text="$t('vision-mission.learningText')"
              />
              <Collapse 
                :heading="$t('vision-mission.energyHeading')"
                :text="$t('vision-mission.energyText')"
              />
              <Collapse 
              :heading="$t('vision-mission.trustHeading')"
                :text="$t('vision-mission.trustText')"
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
  