<!-- 销量趋势图表 -->
<template>
  <div class="com-container">
    <div class="com-chart" ref="item_bar_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.item_bar_ref);
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
        legend: {
          data: ['优', '良', '中', '差'],
          right: '5%',
          top: '7%'
        },
        xAxis: [
          {
            type: 'category',
            data: ['青铜器', '铁器', '丝织品', '漆木器', '纸质', '馆藏壁画'],
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
      }
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
<style lang="less" scoped></style>
