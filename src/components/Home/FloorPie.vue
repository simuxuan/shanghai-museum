<!-- 楼层文物状态统计-->
<template>
  <div class="com-container">
    <div class="com-chart" ref="floor_pie_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.floor_pie_ref,'walden');
      const initOption = {
        tooltip: {
          trigger: "item",
          // series.name  data.name data.value  %
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          top: "2%",
          left: "center",
          data: ["优", "良", "中", "差"],
        },
        series: [
          {
            name: "一展厅",
            type: "pie",
            data: [
              { value: 1048, name: "优" },
              { value: 735, name: "良" },
              { value: 580, name: "中" },
              { value: 484, name: "差" },
            ],
            radius: ["20%", "40%"],
            center: ["20%", "30%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%", //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 10,
                  fontWeight: "bolder",
                },
              },
            },
            labelLine: {
              show: false,
            },
          },
          {
            name: "二展厅",
            type: "pie",
            data: [
              { value: 1048, name: "优" },
              { value: 735, name: "良" },
              { value: 580, name: "中" },
              { value: 484, name: "差" },
            ],
            radius: ["20%", "40%"],
            center: ["80%", "30%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%",
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 10,
                  fontWeight: "bolder",
                },
              },
            },
            labelLine: {
              show: false,
            },
          },
          {
            name: "三展厅",
            type: "pie",
            data: [
              { value: 1048, name: "优" },
              { value: 735, name: "良" },
              { value: 580, name: "中" },
              { value: 484, name: "差" },
            ],
            radius: ["20%", "40%"],
            center: ["20%", "80%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%",
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 10,
                  fontWeight: "bolder",
                },
              },
            },
            labelLine: {
              show: false,
            },
          },
          {
            name: "四展厅",
            type: "pie",
            data: [
              { value: 1048, name: "优" },
              { value: 735, name: "良" },
              { value: 580, name: "中" },
              { value: 484, name: "差" },
            ],
            radius: ["20%", "40%"],
            center: ["80%", "80%"],
            avoidLabelOverlap: false,
             label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%",
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 10,
                  fontWeight: "bolder",
                },
              },
            },
            labelLine: {
              show: false,
            },
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
      const adapterOption = {

      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
  },
};
</script>
<style lang="less" scoped>

</style>
