<template>
  <div class="com-container">
    <div class="com-chart" ref="right_bar"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.right_bar);
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
            data: ['青铜器', '铁器', '丝织品', '漆木器', '纸质', '馆藏壁画'],
            // 使坐标轴刻度与标签对齐
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: '27%',
            data: [
              {
                value: 30,
                itemStyle: {
                  color: '#6D7FCC'
                }
              },
              {
                value: 50,
                itemStyle: {
                  color: '#73C7C0'
                }
              },
              {
                value: 5,
                itemStyle: {
                  color: '#C56F82'
                }
              },
              {
                value: 20,
                itemStyle: {
                  color: '#89C06A'
                }
              },
              {
                value: 10,
                itemStyle: {
                  color: '#A069C7'
                }
              },
              {
                value: 15,
                itemStyle: {
                  color: '#D5C83D'
                }
              }
            ],
            color: 'LimeGreen',
            markPonit:{
              data:[
                {
                  type:'max'
                },
                {
                  type:'min'
                }
              ]
            },
            markLine: { // 标记线
            data: [
              {
                type: 'average'
              }
            ]
          },
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