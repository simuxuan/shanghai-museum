<template>
  <div class="com-container">
    <div class="com-chart" ref="overall_line_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.overall_line_ref);
      const initOption = {
        color: ['rgba(231, 188, 244, 1)', 'rgba(0, 161, 228, 1)', 'rgba(255, 126, 0, 1)'],
        legend: {
          orient: 'vertical',
          right: 0,
          top: 40,
          data: ['书法馆检测数据', '绘画馆检测数据', '中国历代漆器艺术展'],
          textStyle: {
            color: '#332f6c',
            fontSize: 15
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: 'rgba(42, 110, 189, 1'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['12-1', '12-2', '12-3', '12-4', '12-5', '12-6', '12-7', '12-8', '12-9', '12-10', '12-11', '12-12', '12-13', '12-14', '12-15', '12-16', '12-17', '12-18', '12-19', '12-20', '12-21', '12-22', '12-23', '12-24', '12-25', '12-26', '12-27', '12-28', '12-29', '12-30'],
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#152FSB',
              width: 1
            }
          },
          axisLabel: {
            color: '#332f6c',
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
            lineHeight: 21
          },
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#152FSB',
              width: 1
            }
          }
        },
        yAxis: {
          scale: true,
          type: 'value',
          name: '℃',
          nameTextStyle: {
            color: '#61D8FF',
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
            lineHeight: 21
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#152F5B',
              width: 1
            }
          },
          axisLabel: {
            color: '#332f6c',
            fontSize: 14,
            fontFamily: 'Microsoft Yahei',
            lineHeight: 21
          },
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#152F5B',
              width: 1
            }
          }
        },
        series: [
          {
            type: 'line',
            name: '书法馆检测数据',
            data: [18, 19, 20, 18, 18, 20, 19, 19, 20, 20, 18, 19, 19, 20, 19, 19, 18, 19, 20, 20, 18, 20, 19, 19, 20, 18, 18, 18, 19],
            lineStyle: {
              color: '#48da8b',
              width: 1
            }
          },
          {
            type: 'line',
            name: '绘画馆检测数据',
            data: [18, 17, 18, 19, 19, 20, 19, 18, 18, 20, 18, 20, 20, 17, 18, 20, 19, 19, 19, 17, 19, 20, 18, 18, 18, 20, 20, 18, 20],
            lineStyle: {
              color: 'rgba(0, 161, 228, 1)',
              width: 1
            }
          },
          {
            type: 'line',
            name: '中国历代漆器艺术展',
            data: [20, 18, 19, 19, 20, 20, 18, 18, 19, 19, 20, 18, 18, 18, 20, 19, 18, 18, 19, 19, 20, 20, 18, 17, 18, 18, 19, 19, 20],
            lineStyle: {
              color: 'rgba(255, 126, 0, 1)',
              width: 1
            }
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