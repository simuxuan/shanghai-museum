<template>
  <div class="com-container">
    <div class="com-chart" ref="room_bar_ref"></div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      chartInstance: null,
      allData: null,
      // local: '第一展览厅',
      date1: ['2022-08-30','2022-08-31','2022-09-01','2022-09-02','2022-09-03','2022-09-04','2022-09-05'],
      data1: [22.0,22.1,22.2,22.0,21.8,22.1,22.0],
      date2: ['2022-08-30','2022-08-31','2022-09-01','2022-09-02','2022-09-03','2022-09-04','2022-09-05'],
      data2: [22.2,22.4,21.6,22.0,21.8,22.3,22.1],
      data: [], // 默认
      date: [], // 默认
    };
  },
  computed:{
    ...mapState({
      local:(state)=> state.home.local
    })
  },
  watch:{
    local(newvalue,oldvalue) {
      this.updateChart(); // local 改变就重新绘图
    }
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
      // 关联地图 哪个展厅
/*       if(this.local=='第一展览厅') {
            this.data=this.data1;
            this.date=this.date1;
             // console.log("local=",_this.local)
          } else{
            this.data=this.data2;
            this.date=this.date2;
            // console.log("local=",_this.local)
          } */
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
          axisLabel: {
            show: true,
            interval: 'auto'
          },
          data: this.date // 可能 _this
        },
        yAxis: {
          scale: true,
          min: 18,
          max: 25,
          type: 'value'
        },
        series: [
          {
            type: 'bar'
          },
          {
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
            if(this.local=='第一展览厅') {
            this.data=this.data1;
            this.date=this.date1;
             // console.log("local=",_this.local)
          } else{
            this.data=this.data2;
            this.date=this.date2;
            // console.log("local=",_this.local)
          }
      const dataOption = {
                series: [
          {
            data: this.data, // 可能 _this
            type: 'bar'
          },
          {
            data: this.data,
            type: 'line'
          }
        ]
      };
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