<!--
 * @Author: ZhaoQiaoLi
 * @Date: 2021-06-18 10:50:14
 * @LastEditTime: 2021-06-26 15:40:11
 * @LastEditors: ZhaoQiaoLi
 * @FilePath: \sell\src\components\star\star.vue
 * @Description: ''
-->
<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
      starType() {
          return 'star-' + this.size;
      },
      itemClasses() {
          let result = [];
          let score = Math.floor(this.score * 2) / 2;
          let hasDecimal = score % 1 !== 0;
          let integer = Math.floor(score);
          for (let i = 0; i < integer; i++) {
              result.push(CLS_ON);              
          }
          if (hasDecimal) {
              result.push(CLS_HALF);
          }
          while (result.length < LENGTH) {
              result.push(CLS_OFF);
          }
          return result;
      }
  },
  // 定义属性
  data() {
    return {};
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin.styl';
.star
    font-size: 0
    .star-item
        display: inline-block
        background-repeat: no-repeat
    &.star-48
       .star-item 
            width: 20px
            height: 20px
            margin-right:22px
            background-size:20px 20px
            &:last-child
                margin-right: 0
            &.on
                bg-image('star48_on')
            &.half
                bg-image('star48_half')
            &.off
                bg-image('star48_off')
    &.star-36
       .star-item 
            width: 15px
            height: 15px
            margin-right:6px
            background-size:15px 15px
            &:last-child
                margin-right: 0
            &.on
                bg-image('star36_on')
            &.half
                bg-image('star36_half')
            &.off
                bg-image('star36_off')
    &.star-24
       .star-item 
            width: 10px
            height: 10px
            margin-right:3px
            background-size:10px 10px
            &:last-child
                margin-right: 0
            &.on
                bg-image('star24_on')
            &.half
                bg-image('star24_half')
            &.off
                bg-image('star24_off')

</style>