<template>
  <div class="collapse-wrapper">
    <h3 class="heading" :class="isOpen == true? 'active':''" @click="isOpen = !isOpen">{{ heading }}</h3>
    <div class="text" :class="isOpen == true? 'active':''">
      <a href="#" target="_blank" class="d-flex w-100 justify-content-between"  v-for="(fiDoc, index) in financialStatement" :key="index">
        <span>{{ fiDoc.name }}</span>
        <span>{{ $t("Download") }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    heading: {
      type: String,
    },
  },
  data() {
    return {
      isOpen: false,
      financialStatement: [
        {
          name: 'งบการเงินไตรมาส1/4'
        },
        {
          name: 'งบการเงินไตรมาส2/4'
        },
        {
          name: 'งบการเงินไตรมาส3/4'
        },
        {
          name: 'งบการเงินไตรมาส4/4'
        },
      ]
    }
  }


})
</script>

<style lang="scss" scoped>

  .collapse-wrapper{
    overflow: hidden;
  }
  .heading{
    padding: 15px 0;
    text-transform: uppercase;
    color: #cd3832;
    border-bottom: 1px solid #cd3832;
    position: relative;
    padding-right: 30px;
    width: 100%;
    cursor: pointer;
    &:before{
      content: '';
      position: absolute;
      background: url('/down-arrow.svg') no-repeat center center;
      background-size: contain;
      right: 0;
      top: 0;
      height: 100%;
      width: 30px;
    }
    &.active{
      &:before{
        background-image: url('/up-arrow.svg');
      }
    }
  }
  .text{
    height: 0;
    //opacity: 0;
    
    transition: all 0.3s ease-out;
    &.active{
      height: auto;
      padding: 15px 0;
    }
  }
</style>
