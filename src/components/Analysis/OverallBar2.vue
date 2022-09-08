<template>
  <div class="com-container">
    <div class="com-chart" ref="overall_bar2_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.overall_bar2_ref);
      const initOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var tar = params[1]
            var ele = params[0]
            return tar.name + '<br/>' + '湿度：' + ele.value + '%' + '~' + (ele.value + tar.value) + '%'
          }
        },
        grid: {
          width: 300,
          top: 0,
          left: '35%'
        },
        xAxis: {
          type: 'value',
          scale: true,
          axisLabel: {
            interval: 5,
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
          //横轴尺度间隔
          interval: 5
        },
        yAxis: {
          // boundaryGap:true,
          type: 'category',
          data: ['书法馆检测数据', '绘画馆检测数据', '中国历代漆器艺术展', '中国货币史中的白银', '青铜库房数据', '库房监测', '图书馆', '宝历风物黑石号展', '工艺库房数据', '书画库房数据'],
          axisLabel: {
            color: '#332f6c',
            fontSize: 15,
            fontFamily: 'Microsoft YaHei',
            lineHeight: 24,
            margin: 30
          },
          axisLine: {
            lineStyle: {
              color: '#332f6c'
            },
            show: true
          }
        },
        series: [
          {
            name: '辅助',
            type: 'bar',
            stack: '温度',
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            },
            // data: [18, 19, 18, 18, 19, 19, 17, 18, 17, 17],
            data: [40, 40, 45, 45, 50, 40, 45, 45, 35, 35],
            barWidth: '60%',
            label: {
              show: true,
              position: 'insideRight',
              color: '#332f6c',
              formatter: function (params) {
                return params.value
              }
            }
          },
          {
            name: '温度',
            type: 'bar',
            stack: '温度',
            // data: [1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
            data: [5, 10, 10, 5, 15, 5, 5, 20, 15, 10],
            itemStyle: {
              color: 'rgba(34, 199, 104, 1)',
              borderColor: '#FFFFFF',
              borderWidth: 1
            },
            borderWidth: '60%',
            label: {
              show: true,
              position: 'right',
              color: '#332f6c',
              formatter: function (params) {
                return params.value
              }
            }
          }
        ]
      }
      var series = initOption.series
      var fun = function (params) {
        var datavalue = 0
        for (var i = 0; i < series.length; i++) {
          datavalue += series[i].data[params.dataIndex]
        }
        return datavalue
      }
      if (series[series.length - 1]) {
        series[series.length - 1].label.formatter = fun
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