<template>
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
    
  </div>
</template>

<style lang="scss" scoped>

.main-header{
  position: absolute;
  z-index: 8;
  width: 50%;
  left: 50%;
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

.img-center{
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
