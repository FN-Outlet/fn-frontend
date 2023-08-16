<script setup>
  const switchLocalePath = useSwitchLocalePath()
</script>
<template>
    <header class="main-header">
      <div class="search-wrapper">
        <input type="text" placeholder="SEARCH">
      </div>
      <NuxtLink :to="switchLocalePath('th')"><button :class="$i18n.locale === 'th'?'active':''">TH</button></NuxtLink>
      <NuxtLink :to="switchLocalePath('en')"><button :class="$i18n.locale === 'en'?'active':''">EN</button></NuxtLink>
    </header>
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
  @media (max-width: 576px) {
    display: none;
  }
  a{
    text-decoration: none;
  }
  button.active{
    background: #fff;
    color: #cd3832;
  }
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
</style>