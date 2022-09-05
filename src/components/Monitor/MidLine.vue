<template>
  <div class="com-container">
    <div class="com-chart" ref="mid_line"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.mid_line);
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
            data: ['11-19', '11-20', '11-21', '11-22', '11-23', '11-24', '11-25'],
            // 使坐标轴刻度与标签对齐
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: ['差', '中', '良', '优'],
            // 使坐标轴刻度与标签对齐
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        series: [
          {
            data: ['优', '良', '良', '优', '差', '中', '中'],
            type: 'line'
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
      const adapterOption = {};
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
  },
};
</script>
<style lang="less" scoped>
.com_container {
    // height: 5rem;
}
</style>