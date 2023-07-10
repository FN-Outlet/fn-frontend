<template>
    <footer class="bg-primary py-5 main-footer">
        <div class="container mt-5">
          <div class="d-lg-flex justify-content-between">
            <div>
              <img src="/logo-white.png" class="img-fluid" />
              <nav class="mt-5">
                <a href="#" class="text-white d-block">ABOUT US</a>
                <a href="#" class="text-white d-block">FN PRODUCT & SERVICE</a>
                <a href="#" class="text-white d-block">BRANCH</a>
                <a href="#" class="text-white d-block">FN ONLINE</a>
                <a href="#" class="text-white d-block">CHAT SHOP</a>
              </nav>
              <div class="social-links d-flex mt-5">
                <a href="https://www.instagram.com/fnoutlet/" target="_blank">
                  <img src="/icon-ig.png" class="img-fluid" />
                </a>
                <a href="https://www.facebook.com/FN.Factory.Outlet" class="icon-facebook ms-2" target="_blank">
                  <img src="/icon-facebook.png" class="img-fluid" />
                </a>
              </div>
            </div>
            <div class="right">
              <a class="up" href="#"><img src="/icon-up.png" class="img-fluid"></a>
              <div class="app-links d-flex">
                <a href="https://play.google.com/store/apps/details?id=com.fnoutlet.mobile"><img src="/download-google.png" class="img-fluid" /></a>
                <a href="https://apps.apple.com/us/app/fn-outlet/id1500781664" class="ms-3"><img src="/download-ios.png" class="img-fluid" /></a>
              </div>
            </div>
          </div>
          <hr>
          <div class="d-lg-flex justify-content-between align-items-center">
            <p class="text-white text-xs m-0">Copyright © 2023 First Engineering International Co., Ltd.</p>
            <div class="bottom-links">
              <a href="#" class="text-white text-xs">Privacy Policy</a>
              <a href="#" class="text-white text-xs">Cookies Policy</a>
            </div>
          </div>
        </div>
  
      </footer>
</template>

<style lang="scss" scoped>
 .main-footer{
    a{
      text-decoration: none;
    }
    hr{
      border-color: #fff;
      margin: 30px 0;
    }
  
    .right{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      img{
        width: 140px;
      }
    }
    .right .up{
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      img{
        display: block;
        width: 80px;
        height: 80px;
      }
    }
    
  }
  
  .text-xs{
    font-size: 10px;
  }
  
  .bottom-links{
    a + a{
      position: relative;
      padding-left: 10px;
      &::before{
        content: '|';
        margin-right: 10px;
      }
    }
  }
  
</style>