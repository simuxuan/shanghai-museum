<template>
  <div class="com-container">
    <div class="com-chart" ref="room_line_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.room_line_ref);
      const initOption = {
        xAxis: {
          type: "category",
          data: ["9:10", "9:20", "9:30", "9:40", "9:50", "10:00"],
          // boundaryGap:false
        },
        yAxis: {
          type: "value",
          scale: true,
        },
        tooltip: {
          type: "axis",
        },
        legend: {
          data: ["温度", "湿度", "二氧化碳", "光照", "有机物", "紫外线"],
          right: "3%",
          top: "3%",
        },
        grid: {
          show: true,
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true,
          backgroundColor: "transparent",
          borderWidth: 0.2,
        },
        series: [
          {
            name: "温度",
            type: "line",
            data: [102, 130, 102, 93, 108, 133],
            smooth: true,
          },
          {
            name: "湿度",
            type: "line",
            data: [120, 121, 101, 118, 90, 230],
            smooth: true,
          },
          {
            name: "二氧化碳",
            type: "line",
            data: [112, 132, 101, 134, 98, 230],
            smooth: true,
          },
          {
            name: "光照",
            type: "line",
            data: [117, 112, 87, 123, 110, 120],
            smooth: true,
          },
          {
            name: "有机物",
            type: "line",
            data: [90, 109, 101, 90, 90, 230],
            smooth: true,
          },
          {
            name: "紫外线",
            type: "line",
            data: [101, 132, 90, 121, 90, 230],
            smooth: true,
          },
        ],
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
<style lang="less" scoped></style>
