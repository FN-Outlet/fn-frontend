<template>
  <div class="position" :class="isOpen == true? 'active':''" @click="isOpen = !isOpen">
    <span>{{ heading }}</span>
    <span>{{ position }} POSITION</span>
  </div>
  <div class="card" :class="isOpen == true? 'active':''">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    heading: {
      type: String,
    },
    position: {
      type: Number,
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

.position{
    background: #E9E9E9;
    padding: 15px 45px;
    display: flex;
    justify-content: space-between;
    color: #CC3832;
    margin-block: 15px;
    @media (max-width: 991px) {
      justify-content: center;
      flex-wrap: wrap;
    }
  }

.card{
  height: 0;
    opacity: 0;
    
    transition: all 0.3s ease-out;
    &.active{
      height: auto;
      padding: 30px;
      opacity: 1;
    }
}
</style>
