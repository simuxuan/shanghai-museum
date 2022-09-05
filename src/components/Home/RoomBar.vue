<!-- 销量趋势图表 -->
<template>
  <div class="com-container">
    <div class="com-chart" ref="room_bar_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.room_bar_ref);
      const initOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          show: true,
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true,
          backgroundColor: 'transparent',
          borderWidth: 0.3
        },
        xAxis: {
          type: 'category',
          show:false
          // data: ['1', '2', '3', '4', '5', '6']
        },
        yAxis: {
          type: 'value'
        },
/*         series: [
          {
           data: [
              {
                value: 120,
                itemStyle: {
                  color: '#6778BF'
                }
              },
              {
                value: 200,
                itemStyle: {
                  color: '#6CC0B8'
                }
              },
              {
                value: 150,
                itemStyle: {
                  color: '#9967BF'
                }
              },
              {
                value: 80,
                itemStyle: {
                  color: '#BF6778'
                }
              },
              {
                value: 70,
                itemStyle: {
                  color: '#D0C62B'
                }
              },
              {
                value: 110,
                itemStyle: {
                  color: '#80BF67'
                }
              }
            ], 
            type: 'bar',
          } 
        ]*/
      };
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      // 获取服务器的数据, 对this.allData进行赋值之后, 调用updateChart方法更新图表
      this.updateChart();
    },
    updateChart() {
      // 处理图表需要的数据 200,150,80,70,110
      const data = [{name:"温度",value:140},{name:"湿度",value:200},{name:"光照",value:150},{name:"二氧化碳",value:70},{name:"二氧化硫",value:90},{name:"有机物",value:40}]
      const seriesData = data.map(item=>{
        return {
            name:item.name,
            data:[item.value],
            type:'bar'
        }
      })
      const legnedArr = data.map(item =>{
        return item.name
      })
      const dataOption = {
        legend: {
            data:legnedArr
        },
        series:seriesData
      };
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
</style>