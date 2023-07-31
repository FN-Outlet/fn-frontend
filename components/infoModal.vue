<template>
    <div class="modal-overlay-custom" @click="onClickClose">
      <div class="modal-custom"  @click.stop>
        <h6>Saved!</h6>
        <slot></slot>
        <button>Go Home</button>
      </div>
      <div class="close" @click="onClickClose">
        <img class="close-img img-fluid" src="/close.svg" alt="" />
      </div>
    </div>
  </template>
  
  <script>
    import { defineComponent } from '@vue/composition-api'
    export default {
        methods: {
            onClickClose( event ){
                this.$emit('clicked', false)
            }
        }
    }
  </script>

<style scoped>

.modal-overlay-custom {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background:rgba(0,0,0,0.2);
  z-index: 9;
}

.modal-custom {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>