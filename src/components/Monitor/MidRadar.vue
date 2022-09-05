<template>
  <div class="com-container">
    <div class="com-chart" ref="mid_radar"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radarValue: [0.95, 0.91, 0.9, 0.99, 0.92, 0.9],
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
      this.chartInstance = this.$echarts.init(this.$refs.mid_radar);
      const initOption = {
        tooltip: {
          position: ['35%', '20%']
        },
        radar: {
          shape: 'polygon', // 雷达图形状
          splitNumber: 6, // 雷达图圈数设置
          radius: 85,
          // 坐标轴在 grid 区域中的分隔线
          splitLine: {
            lineStyle: {
              color: ['RGBA(124, 78, 110, 1)', 'RGBA(124, 78, 110, 1)', 'RGBA(35, 67, 104, 1)', 'RGBA(41, 65, 87, 1)', 'RGBA(41, 65, 87, 1)', 'RGBA(153, 170, 196, 1)', '#61D8FF']
            }
          },
          axisLine: {
            lineStyle: {
              color: 'RGB(101, 92, 92);'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['RGBA(124, 78, 110, 1)', 'RGBA(124, 78, 110, 1)', 'RGBA(35, 67, 104, 1)', 'RGBA(41, 65, 87, 1)', 'RGBA(153, 170, 196, 1)', 'RGBA(0, 14, 32, 1)']
            }
          },
          center: ['50%', '50%'],
          indicator: [
            { name: '温度', max: 1 },
            { name: '湿度', max: 1 },
            { name: '光照', max: 1},
            { name: '霜点', max: 1},
            { name: '二氧化硫', max: 1 },
            { name: '有机挥发物', max: 1 }
          ]
        },
        series: [
          {
            name: '青铜鼎',
            type: 'radar',
            data: [
              {
                value: this.radarValue
              }
            ]
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