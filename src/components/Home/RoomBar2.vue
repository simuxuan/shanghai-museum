<template>
  <div class="com-container">
    <div class="com-chart" ref="roombar2_ref"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.roombar2_ref);
      const initOption = {
        // 提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        // 这个grid组件可以设置其偏移
        grid: {
          show: true,
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true,
          backgroundColor: 'transparent',
          borderWidth: 0.3
        },

        xAxis: [
          {
            type: 'category',
            data: ['优', '良', '中', '差'],
            // 使坐标轴刻度与标签对齐
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            max: 100
          },
          {
            type: 'value',
            show: false
          },
          {
            type: 'value',
            show: false
          },
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            name: '优',
            type: 'bar',
            barWidth: '10%',
            data: [78, 78, 78, 78, 78, 78],
            color: 'LimeGreen'
          },
          {
            name: '良',
            type: 'bar',
            barWidth: '10%',
            data: [63, 63, 63, 63, 63, 63],
            color: 'Gold'
          },
          {
            name: '中',
            type: 'bar',
            barWidth: '10%',
            data: [22, 22, 22, 22, 22, 22],
            color: 'Orange'
          },
          {
            name: '差',
            type: 'bar',
            barWidth: '10%',
            data: [11, 11, 11, 11, 11, 11],
            color: 'OrangeRed'
          }
        ]
      };
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      // 获取服务器的数据, 对this.allData进行赋值之后, 调用updateChart方法更新图表
      this.updateChart();
    },
    updateChart() {
      // 处理图表需要的数据
      const dataOption = {};
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      // 常用 变化的图表的宽度，去调整字体大小
      // const titleFontSize = (this.$refs.rank_ref.offsetWidth / 100) * 3.6;
      const adapterOption = {};
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
  },
};
</script>
<style lang="less" scoped>
</style>