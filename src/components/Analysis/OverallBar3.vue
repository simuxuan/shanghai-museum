<template>
  <div class="com-container">
    <div class="com-chart" ref="overall_bar3_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.overall_bar3_ref);
      const initOption = {
        grid: {
          top: 0,
          left: '35%',
          width: 380
        },
        tooltip: {},
        xAxis: {
          type: 'value',
          axisLabel: {
            color: '#332f6c',
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
            lineHeight: 21
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#332f6c'
            }
          },
          interval: 0.05
        },
        yAxis: {
          type: 'category',
          data: ['书法馆检测数据', '绘画馆检测数据', '中国历代漆器艺术展', '2019熠熠千年', '青铜库房数据', '库房监测', '图书馆', '2020宝历风物黑石号展', '工艺库房数据', '书画库房数据'],
          axisLabel: {
            color: '#332f6c',
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
            lineHeight: 24
          },
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          }
        },
        series: {
          type: 'bar',
          data: [0.1, 0.1, 0.2, 0.15, 0.1, 0.15, 0.05, 0.1, 0.05, 0.1],
          itemStyle: {
            color: '#FF7E00',
            borderColor: '#FFFFFF',
            borderWidth: 1
          },
          barWidth: '60%',
          label: {
            show: true,
            position: 'right',
            color: '#332f6c'
          }
        }
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