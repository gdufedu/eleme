<!--
 * @Author: ZhaoQiaoLi
 * @Date: 2021-06-23 12:27:00
 * @LastEditTime: 2021-06-25 15:52:02
 * @LastEditors: ZhaoQiaoLi
 * @FilePath: \sell\src\components\cartcontrol\cartcontrol.vue
 * @Description: ''
-->
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div  class="cart-decrease" v-show="food.count > 0" @click.stop.prevent="decreaseCart">
        <span  class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  props: {
    food: {
      type: Object
    }
  },
  components: {},
  // 定义属性
  data() {
    return {};
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      this.$emit('increment', event.target);
    },
    decreaseCart(event) {
      if (!event._constructed) {
        return;
      }
      if (this.food.count) {
        this.food.count--;
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>

<style lang='stylus' scoped>
  .cartcontrol
    font-size:0
    .cart-decrease
      display:inline-block
      padding: 6px
      opacity:1      
      .inner
        display:inline-block
        line-height: 24px
        font-size:24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-to
        opacity:0
        transform: translate3d(24px, 0, 0)
        .inner
          transform:rotate(180deg)
    .cart-count
      display:inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size:10px
      color: rgb(147,153,159)
    .cart-add
      display:inline-block
      padding: 6px
      line-height: 24px
      font-size:24px
      color: rgb(0, 160, 220)
</style>