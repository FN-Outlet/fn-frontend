<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/msg-chairman-2019-02.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">{{ $t("MESSAGE") }}<br>
{{ $t("FROM CHAIRMAN") }}</h2>
          </div>
        </section>
        <section class="py-5 px-5">
          <div class="container" v-if="$i18n.locale=='en'">
            <p><strong>Dear Shareholders,</strong></p>

            <p>FN Factory Outlet Public Company Limited (“the Company”) has operated the outlet business for more than 20 years. The Company primarily sells merchandise under its own house brands ranging from consumer goods, bedding, leather goods, furniture, clothes and other household items as well as offers products of other domestic and international brands.</p>

            <p>The Company was listed on the Stock Exchange of Thailand on 14 November 2016 and has consistently implemented the plans announced to its shareholders. In 2018, the Company opened 2 new branches, namely the Rayong Branch on 1 November 2018 and the Diana (Hat Yai) Branch on 7 December 2018, increasing the total number of branches to 12 in provinces along major routes to Thailand’s top tourist destinations.</p>

            <p>With regard to the Company’s financial performance in 2018, the Company’s total revenue was Baht 1,105 million with a net profit of Baht 29 million. The Company is committed to pursuing growth through the continuous improvement of good quality products, service excellence and innovative propositions with an aspiration to make our customers satisfied and happy with our products and services including impressive experiences through the Company’s omni channels that are developed in line with Thailand’s developments towards becoming a digital society. These goals have been translated into the Company’s actionable strategies and plans which are anchored around the aim of optimizing customer satisfaction in all dimensions.</p>

            <p>Driven by the aim of fostering solid growth and prosperity through transparent business operations in accordance with the good corporate governance principles, the Company revisits its vision, strategies and policies annually. This strong determination has led to the Company’s achievement of the “Excellent” rating under the corporate governance assessment by the Thai Institute of Directors Association (IOD). In addition, the Company attaches importance to fair and appropriate management of stakeholders’ interests in parallel with responsibility towards communities, society and environment in support of sustainable growth.</p>

            <p>On behalf of the Board of Directors, executives, and employees, we would like to express our appreciation and gratitude to our shareholders, customers, business partners, public sector, society and all stakeholders for their continued trust and support. In 2019, the Company will continue to pursue its business philosophy of “Selective Life” for the best benefits of our shareholders and stakeholders.</p>

            <div class="text-center mt-5">
              <p><strong>Mr.Pricha Songwatana</strong></p>
              <p>Chairman of the Board of Directors</p>
            </div>
          </div>
          <div class="container" v-else>
            <p><strong>เรียน ท่านผู้ถือหุ้น</strong></p>

            <p>บริษัท เอฟเอ็น แฟคตอรี่ เอ๊าท์เลท จำกัด (มหาชน) (“บริษัท”) ดำเนินธุรกิจศูนย์จัดจำหน่ายสินค้ามากว่า 20 ปี โดยจัดจำหน่ายสินค้าภายใต้ตราสินค้าของบริษัทเองเป็นหลัก ได้แก่ สินค้าอุปโภค ประเภทเครื่องนอน เครื่องหนัง เฟอร์นิเจอร์ เสื้อผ้า และของใช้ภายในบ้านและตราสินค้าอื่นทั้งในและต่างประเทศ</p>

            <p>บริษัทได้เข้าจดทะเบียนและซื้อขายในตลาดหลักทรัพย์แห่งประเทศไทยเมื่อวันที่ 14 พฤศจิกายน 2559 ตลอดช่วงที่ผ่านมา บริษัทได้ดำเนินการตามแผนที่แจ้งให้กับท่านผู้ถือหุ้นมาตลอด โดยในปี 2561 บริษัทได้ขยายสาขา เพิ่มเติม 2 สาขา ได้แก่ สาขาระยอง ซึ่งเปิดดำเนินการในวันที่ 1 พฤศจิกายน 2561 และสาขาไดอาน่า (หาดใหญ่) ซึ่งเปิดดำเนินการในวันที่ 7 ธันวาคม 2561 ทำให้ปัจจุบันบริษัทมีสาขาทั้งสิ้น 12 สาขาในจังหวัดที่เป็นเส้นทางสายหลัก สำหรับการท่องเที่ยวของประเทศ</p>

            <p>ในส่วนผลการดำเนินงานของปี 2561 บริษัทมีรายได้รวมจำนวน 1,105 ล้านบาทและมีกำไรสุทธิจำนวน 29 ล้าน บาท อย่างไรก็ดี บริษัทมีความมุ่งมั่นตั้งใจในการดำเนินธุรกิจให้เจริญก้าวหน้า โดยไม่หยุดพัฒนาสินค้าที่มีคุณภาพ การให้บริการที่มีประสิทธิภาพ และมองหานวัตกรรมใหม่อย่างต่อเนื่อง เพื่อมุ่งเน้นการสร้างประสบการณ์ที่น่าประทับ ใจและรอยยิ้ม ผ่านสินค้าและบริการที่ลูกค้าจะได้รับทุกช่องทางเพื่อรองรับการก้าวเข้าสู่สังคมดิจิทัลของประเทศ ซึ่งเป้าหมายดังกล่าวได้ถูกสะท้อนผ่านแผนยุทธศาสตร์และกำหนดแผนปฏิบัติการอย่างเป็นขั้นตอน เพื่อการสร้าง ความพึงพอใจให้ลูกค้าอย่างรอบด้าน</p>

            <p>บริษัทตระหนักถึงการดำเนินธุรกิจให้เจริญก้าวหน้าและมั่งคง โปร่งใสตามหลักการกำกับดูแลกิจการที่ดี ซึ่งบริษัท คำนึงถึงการดำเนินธุรกิจอย่างยั่งยืน จึงได้มีการทบทวนวิสัยทัศน์ กลยุทธ์ และนโยบายต่างๆ เป็นประจำทุกปี โดยในปีที่ผ่านมาบริษัทได้รับการประเมินเป็นบริษัทที่มีการกำกับดูแลกิจการในระดับ “ดีมาก” จากสมาคมส่งเสริม สถาบันกรรมการบริษัทไทย (IOD) นอกจากนี้บริษัทยังให้ความสำคัญกับการดูแลบริหารจัดการประโยชน์ต่อผู้มี ส่วนได้เสียอย่างเหมาะสม เป็นธรรมควบคู่ไปกับการดูแลชุมชน สังคม และสิ่งแวดล้อมเพื่อการเติบโตอย่างยั่งยืน</p>

            <p>ในนามของคณะกรรมการ ผู้บริหาร และพนักงานบริษัท ขอขอบพระคุณท่านผู้ถือหุ้น ลูกค้า พันธมิตรทางการ ค้า ภาครัฐ สังคม ตลอดจนผู้มีส่วนได้ส่วนเสียโดยรวมที่ให้การไว้วางใจบริษัทอย่างต่อเนื่องตลอดมาและในปี 2562 บริษัทจะยังมุ่งมั่นในแนวคิดที่ยึดถือมาโดยตลอดว่า “คัดสรร เพื่อชีวิตที่ใช่” เพื่อมุ่งประโยชน์สูงสุดต่อผู้ถือหุ้นและ ผู้มีส่วนได้เสีย</p>

            <p>
              ในนามของคณะกรรมการ ผู้บริหารและพนักงานบริษัท ขอขอบพระคุณท่านผู้ถือหุ้น ลูกค้า คู่ค้า นักลงทุน พันธมิตรทางธุรกิจ สถาบันการเงินและผู้เกี่ยวข้องทุกท่าน สำหรับความเชื่อมั่นไว้วางใจและสนับสนุนธุรกิจของบริษัท ด้วยดีเสมอมา บริษัทจะดำเนินธุรกิจด้วยความชื่อสัตย์ โปร่งใส ระมัดระวัง ภายใต้หลักการกำกับดูแลกิจการที่ดี ควบคู่กับการมีส่วนร่วมในการพัฒนาสังคม ชุมชน และสิ่งแวดล้อม เพื่อร่วมผลักดันให้ทุกภาคส่วนเติบโตไปด้วยกันอย่าง มั่นคงและยั่งยืน
            </p>

            <p><b>“คัดสรร เพื่อชีวิตที่ใช่”</b></p>

            <div class="text-center mt-5">
              <p><strong>นายปรีชา ส่งวัฒนา</strong></p>
              <p>ประธานกรรมการ</p>
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
  border-bottom: 5px solid #CD3832;
  .main-logo{
    position: absolute;
    width: 150px;
    left: 50%;
    top: 50%;
    margin-left: 7px;
    transform: translate(-50%,-50%);
  }
}

.banner{
  border-bottom: 2x solid #CD3832;
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
  