<template>
  <div class="collapse-wrapper">
    <h3 class="heading" :class="isOpen == true? 'active':''" @click="isOpen = !isOpen">{{ heading }}</h3>
    <div class="text" :class="isOpen == true? 'active':''">
      <p>{{ text }}</p>
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
    text: {
      type: String,
    },
  },
  data() {
    return {
      isOpen: false,
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
