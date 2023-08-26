<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/financial.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0" v-if="$i18n.locale=='en'">FINANCIAL<br>HIGHLIGHTS</h2>
            <h2 class="text-white font-normal mb-0" v-else>บัญชีทางการเงินที่สำคัญ</h2>
          </div>
        </section>
        <section class="py-5 px-lg-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>{{ $t("COMPANY FINANCIAL") }} </span>
            </h2>
            <div class="tab-nav row mt-5 mt-lg-0">
              <div class="col-lg-4">
                <button :class="isActive1 ? 'active' : 'inactive'" @click="visible(1)">{{ $t("FINANCIAL HIGHLIGHTS") }}</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive2 ? 'active' : 'inactive'"  @click="visible(2)">{{ $t("FINANCIAL STATEMENTS") }}</button>
              </div>
              <div class="col-lg-4">
                <button :class="isActive3 ? 'active' : 'inactive'"  @click="visible(3)">{{ $t("MD & A") }}</button>
              </div>
            </div>
            <div class="result mt-5">
              <div class="overflow-auto table-responsive" v-if="isActive1">
                <table class="table">
                  <thead>
                    <tr class="main-table">
                      <th>{{ $t("PERIOD") }}</th>
                      <th v-for="(period, index) in this.period" :key="index">{{ period }}</th>
                    </tr>
                    <tr>
                      <th colspan="7" class="sub-table">{{ $t("FINANCIAL DATA") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ $t("Assets") }}</td>
                      <td v-for="(assets, index) in this.assets" :key="index">{{ assets.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</td>
                    </tr>
                    <tr>
                      <td>{{ $t("Liabilities") }}</td>
                      <td v-for="(liabilities, index) in this.liabilities" :key="index">{{ liabilities.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</td>
                    </tr>
                    <tr>
                      <td>{{ $t("Equity") }}</td>
                      <td v-for="(equity, index) in this.equity" :key="index">{{ equity.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</td>
                    </tr>
                    <tr>
                      <td>{{ $t("Paid-up Capital") }}</td>
                      <td v-for="(paidup, index) in this.paidup" :key="index">{{ paidup.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</td>
                    </tr>
                    <tr>
                      <td>{{ $t("Revenue") }}</td>
                      <td v-for="(revenue, index) in this.revenue" :key="index">{{ revenue.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</td>
                    </tr>
                    <tr>
                      <td>{{ $t("Net Profit") }}</td>
                      <td v-for="(netProfit, index) in this.netProfit" :key="index">{{ netProfit.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</td>
                    </tr>
                    <tr>
                      <td>{{ $t("EPS (Baht)") }}</td>
                      <td v-for="(eps, index) in this.eps" :key="index">{{ eps.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="docs" v-if="isActive2">
                <a :href="fiDoc.attributes.file.data.attributes.url" target="_blank" class="d-flex w-100 justify-content-between"  v-for="(fiDoc, index) in financialStatement" :key="index">
                  {{ fiDoc.attributes.period }}
                  <span v-if="$i18n.locales=='en'">{{ fiDoc.attributes.nameen }}</span>
                  <span v-else>{{ fiDoc.attributes.nameth }}</span>
                  <span>{{ $t("Download") }}</span>
                </a>
              </div>
              <div class="docs" v-if="isActive3">
                <a :href="fiDoc.attributes.file.data.attributes.url" target="_blank" class="d-flex w-100 justify-content-between"  v-for="(fiDoc, index) in mda" :key="index">
                  <span v-if="$i18n.locales=='en'">{{ fiDoc.attributes.nameen }}</span>
                  <span v-else>{{ fiDoc.attributes.nameth }}</span>
                  <span>{{ $t("Download") }}</span>
                </a>
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
        assets: [],
        liabilities: [],
        equity: [],
        paidup: [],
        revenue: [],
        netProfit: [],
        eps: [],
        period: [],
        limit: 6,
        document: [],
        financialStatement: [],
        mda: []
      };
    },
    mounted() {
      //console.log( this.width )
      this.getFinancialData()
      this.getDocument()
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
      },
      async getFinancialData() {
        let seq = this.limit - 1
        const { data } = await $fetch(`/api/financial-datas?sort=id:desc&populate=*&pagination[start]=0&pagination[limit]=${this.limit}`);
        this.finData = data;
        this.finData.forEach((d)=>{
          this.assets[seq] = d.attributes.assets
          this.liabilities[seq] = d.attributes.liabilities
          this.equity[seq] = d.attributes.equity
          this.paidup[seq] = d.attributes.paidup
          this.revenue[seq] = d.attributes.revenue
          this.netProfit[seq] = d.attributes.netprofit
          this.eps[seq] = d.attributes.eps
          this.period[seq] = d.attributes.period
          seq--;
        })
      },
      async getDocument() {
        const { data } = await $fetch(`/api/documents?sort=sequence&filters[documenttype][$in][0]=Financial Statement&filters[documenttype][$in][1]=Management Discussion and Analysis&populate=*`);
        this.document = data;
        this.financialStatement = this.document.filter((a) => a.attributes.documenttype == 'Financial Statement')
        this.mda = this.document.filter((a) => a.attributes.documenttype == 'Management Discussion and Analysis')
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

  .docs{
    a{
      padding: 10px 0;
    }
  }


  </style>
  