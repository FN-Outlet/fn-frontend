<template>
    <sidenav ref="sidenav" @submenuWidth="getWidth"/>
    <div class="main" :style="`padding-left: ${width}px;`">
      <Header />
      <div class="w-100">
        <section class="bg-primary d-lg-flex banner hp-banner">
          <img src="/banner_fn.png" class="main-logo" />
          <div class="col">
            <img src="/contact.jpg" class="img-fluid w-100" />
          </div>
          <div class="col py-5 py-lg-0 d-flex align-items-center justify-content-center">
            <h2 class="text-white font-normal mb-0">CONTACT US /<br>
            ENQUIRY FROM</h2>
          </div>
        </section>
        <section class="py-5">
          <div class="container">
            <h2 class="heading-text text-center">
              <img src="/logo.png" class="img-fluid mb-4" />
              <span>{{ $t("CONTACT US") }}</span>
            </h2>
            <div class="text-center">{{ $t("Please fill in all the details, and then we will contact you.") }}</div>
            <div class="row bg-primary m-lg-5 p-4 mx-2 mt-4">
              <div class="col-12">
                <label>{{ $t("Name") }}</label>
                <input type="text" class="form-control"/>
              </div>
              <div class="col-lg-6">
                <label>{{ $t("Phone") }}</label>
                <input type="phone" class="form-control"/>
              </div>
              <div class="col-lg-6">
                <label>{{ $t("Email") }}</label>
                <input type="phone" class="form-control"/>
              </div>
              <div class="col-12">
                <label>{{ $t("Message") }}</label>
                <textarea class="form-control"></textarea>
              </div>
              <div class="col-12 text-center mt-4">
                <button class="btn btn-white">{{ $t("Send") }}</button>
              </div>
            </div>
            <h2 class="heading-text text-center">
              <span>{{ $t("Whistleblowing") }}</span>
            </h2>
            <div class="row">
              <div class="col-8 offset-2" v-if="$i18n.locale === 'th'">
                <p>บริษัทจัดให้มีช่องการแจ้งเบาะแสการกระทําความผิด หรือข้อร้องเรียน และการคุ้มครองผู้แจ้งเบาะแส หรือข้อร้องเรียน (Whistle blower) และสนับสนุนให้ผู้บริหาร พนักงาน ผู้ส่วนได้เสียแจ้งเบาะแสของเรื่องราว หรือพฤติกรรม ที่น่าสงสัยเกี่ยวกับการกระทําผิด หรือมีเหตุสงสัยว่าอาจว่ามีการกระทําความผิดเกิดขึ้น</p>

                <p>ผู้บริหาร พนักงาน และผู้ที่เกี่ยวข้องทุกท่าน สามารถแจ้งข้อมูลโดยระบุ ชื่อ-นามสกุล, E-mail, เบอร์ โทรศัพท์ของผู้แจ้งพร้อมรายละเอียด มาที่ :
                </p>

                <p class="text-center"><strong>นางเสาวนีย์  กมลบุตร</strong></p>
                <p class="text-center"><strong>กรรมการอิสระ / ประธานกรรมการตรวจสอบ</strong></p>
                <p class="text-center">E-mail : saowanee@fnoutlet.com</p>

                <p class="text-center"><strong>เลขานุการบริษัท</strong></p>
                <p class="text-center">E-mail : corporatesecretary@fnoutlet.com</p>

                ผู้แจ้งข้อมูล หรือเบาะแส หรือข้อร้องเรียน และผู้ที่ให้ความร่วมมือในการตรวจสอบ หรือสอบสวนได้รับความคุ้มครองโดยจะไม่เปิดเผยชื่อตัว ชื่อสกุล ที่อยู่ ภาพ หรือข้อมูลอื่นใดที่สามารถระบุตัวบุคคลนั้นได้ รวมทั้งการเก็บรักษาข้อมูลเป็นความลับ โดยคํานึงถึงความปลอดภัย และความเสียหายของผู้แจ้งข้อมูล หรือเบาะแส หรือผู้ร้องเรียน หรือผู้ที่ให้ความร่วมมือในการตรวจสอบ สอบสวนข้อเท็จจริง


              </div>
              <div class="col-8 offset-2" v-if="$i18n.locale === 'en'">
                <p class="text-center">The Company has established whistle blowing channels and whistleblower protection program as well as encourages executives, employees and stakeholders to report suspicious incidents or behaviors.</p>

                <p class="text-center">Executives, employees and stakeholders are encouraged to submit whistle blowing complaints which contain information about their names, e-mail addresses, and telephone numbers and details of such cases to:
                </p>

                <p class="text-center"><strong>Mrs. Saowanee Kamolbutr</strong></p> 
                <p class="text-center"><strong>Independent Director / Chairman of the Audit Committee</strong></p> 
                <p class="text-center">mail: saowanee@fnoutlet.com</p>

                <p class="text-center"><strong>Company Secretary</strong></p> 
                <p class="text-center">E-mail: corporatesecretary@fnoutlet.com</p>

                <p>Whistle blowers and persons assisting with the investigation and interrogation are protected. Their names, surnames, addresses and photos including other indications of their identity as well as information supplied will be treated with anonymity and confidentiality for the purposes of safety protection and harm prevention for them. 
                </p>
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
  </style>
  