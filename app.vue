<template>
  <nav class="bg-primary side-nav">
    <img src="/icon-plus.png" class="img-fluid" />
    <div class="links">
      <a href="#" class="icon-facebook ">
        <img src="/icon-facebook.png" class="img-fluid" />
      </a>
      <a href="#" class="mt-2 d-block">
        <img src="/icon-ig.png" class="img-fluid" />
      </a>
    </div>
  </nav>
  <div class="main">
    <header class="main-header">
      <div class="search-wrapper">
        <input type="text" placeholder="SEARCH">
      </div>
      <button>TH</button>
      <button>EN</button>
    </header>
    <div>
      <section class="bg-primary d-flex banner hp-banner">
        <img src="/banner_fn.png" class="main-logo" />
        <div class="col">
          <img src="/banner.png" class="img-fluid w-100" />
        </div>
        <div class="col d-flex align-items-center justify-content-center">
          <h2 class="text-white font-normal mb-0">FOR<br>QUALITY OF LIFE</h2>
        </div>
      </section>
      <section class="d-flex">
        <div class="col p-0 d-flex align-items-center justify-content-center">
          <div class="p-15 d-flex align-items-center justify-content-center">
            <img src="/hp-s2.png" class="img-fluid" />
          </div>
        </div>
        <div class="col" style="background: #E3E3E3;">
          <div class="p-15 d-flex align-items-center justify-content-center">
            <div class="frame-wrapper">
              <h2>PRODUCT</h2>
              <img src="/hp-s2-chair.png" class="img-fluid" />
              <a href="">READ MORE</a>
            </div>
          </div>
        </div>
      </section>
      <section class="d-flex">
        <div class="col p-0 d-flex align-items-center justify-content-center img-center">
          <img src="/hp-s3.png" class="img-fluid" />
        </div>
        <div class="col">
          <div class="p-15 bg-primary h-100 d-flex flex-column align-items-center justify-content-center">
            <h2 class="text-white text-center font-normal">FN MALL <br/>MARKETPLACE</h2>
            <img src="/hp-s3-text.png" class="img-fluid my-3" />
            <div class="d-flex align-items-center">
              <a href="" class="mx-2 d-block">
                <img src="/shopee.png" class="img-fluid" />
              </a>
              <a href="" class="mx-2 d-block">
                <img src="/lazada.png" class="img-fluid" />
              </a>
              <a href="" class="mx-2 d-block">
                <img src="/tiktok.png" class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="d-flex">
        <div class="col">
          <div class="p-15 h-100 d-flex align-items-center justify-content-center">
            <div class="frame-wrapper sofa">
              <h2>BRANCH</h2>
              <img src="/hp-s4-sofa.png" class="img-fluid" />
              <a href="">READ MORE</a>
            </div>
          </div>
        </div>
        <div class="col p-0 d-flex align-items-center justify-content-center img-center">
          <img src="/hp-s4.png" class="img-fluid" />
        </div>
      </section>
      <section>
        <img src="/hp-s5.png" class="img-fluid w-100" />
      </section>
      <section class="text-center border-red py-5">
        <div class="container">
          <img src="/logo.png" class="img-fluid mb-4" />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea comdignissim</p>
        </div>
      </section>

    </div>
    <footer class="bg-primary py-5 main-footer">
      <div class="container mt-5">
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
            <a href="#">
              <img src="/icon-ig.png" class="img-fluid" />
            </a>
            <a href="#" class="icon-facebook ms-2">
              <img src="/icon-facebook.png" class="img-fluid" />
            </a>
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <p class="text-white text-xs m-0">Copyright © 2023 First Engineering International Co., Ltd.</p>
          <div class="bottom-links">
            <a href="#" class="text-white text-xs">Privacy Policy</a>
            <a href="#" class="text-white text-xs">Cookies Policy</a>
          </div>
        </div>
      </div>

    </footer>
  </div>
</template>

<style lang="scss" scoped>

.main-header{
  position: absolute;
  z-index: 8;
  width: calc( 50% - 70px );
  left: calc( 50% + 70px );
  display: flex;
  padding-top: 40px;
  padding-left: 20px;
  margin: 0 -5px;
  > *{
    margin: 0 5px;
  }
  .search-wrapper{
    input{
      background: url('/icon-search.png') no-repeat center left;
      background-size: contain;
      border: 1px solid #fff;
      border-radius: 50px;
      font-size: 13px;
      color: #fff;
      padding: 4px 15px 4px 45px;
      &::placeholder{
        color: #fff;
      }
    }
  }
  button{
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    font-size: 13px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
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
.frame-wrapper{
  border: 2px solid #CD3832;
  position: relative;
  padding: 30px;
  &.sofa{
    padding: 30px 0;
    h2{
      background: #fff;
    }
    a{
      background: #fff;
    }
    img{
      max-width: 150%;
      width: 150%;
      margin-left: -25%;
    }
  }
  h2{
    background: #E3E3E3;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 15px;
  }
  a{
    text-decoration: none;
    display: block;
    background: #E3E3E3;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 15px;
  }
}

.border-red{
  border-top: 10px solid #CD3832
}

.img-center{
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.icon-facebook{
  border-radius: 50%;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-footer{
  a{
    text-decoration: none;
  }
  hr{
    border-color: #fff;
    margin: 30px 0;
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

.side-nav{
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 10;
  padding: 45px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main{
  padding-left: 100px;
}
</style>
