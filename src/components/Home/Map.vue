<template>
  <div class="mid">
    <div class="top">
      <div id="museum1" class="map1"></div>
      <div id="museum2" class="map2"></div>
    </div>
    <div class="bottom">
      <div id="museum3" class="map3"></div>
      <div id="museum4" class="map4"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      chartInstance1: null,
      chartInstance2: null,
      chartInstance3: null,
      chartInstance4: null,
    };
  },
  mounted() {
    this.initMuseum1();
    this.initMuseum2();
    this.initMuseum3();
    this.initMuseum4();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      local: (state) => state.home.local,
    }),
  },
  methods: {
    // 博物馆图绘制
    async initMuseum1() {
      var chartDom = document.getElementById("museum1");
      this.chartInstance1 = this.$echarts.init(chartDom);
      var option;
      const _this = this;
      const { data: res } = await this.$http.get(
        // 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
        // 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
        // "http://live.lstblog.com/museum1_450_440.svg"
        "/static/svg/museum4.svg"
      );
      // console.log(res);

      // 加一个判断svg的
      if (res != undefined) {
        console.log("===2===");
        this.$echarts.registerMap("Museum", {
          svg: res,
        });
      }

      // 在option中配置所需项目
      option = {
        geo: {
          map: "Museum",
        },

        tooltip: {
          show: true,
        }, // 默认配置提示框

        series: [
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            data: [
              // SVG local coords.
              [127.28125000000003, 123.62500000000003], // 第一展览厅
              // [320.78125000000006, 158.56250000000003], // 中国古代青铜馆
              [138.03125000000003, 243.21875000000006], // 中国古代雕塑馆
            ],
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
            itemStyle: {
              color: "green",
            },
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            data: [
              // SVG local coords.
              // [127.28125000000003, 123.62500000000003], // 第一展览厅
              // [320.78125000000006, 158.56250000000003], // 中国古代青铜馆
              // [138.03125000000003, 243.21875000000006], // 中国古代雕塑馆
              {
                value: [320.78125000000006, 158.56250000000003],
                name: "中国古代青铜馆",
              },
            ],
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
            itemStyle: {
              // color: 'red', // 风险：优良中差 <--> 颜色：绿黄橙红
              color: "orange",
              // color: 'yellow',
            },
            symbolSize: 15, // 报警信号尺寸
          },
          {
            name: "文物风险状况", // 起个名字
            type: "map", // 设置为地图类型
            map: "Museum", // 使用这个地图

            label: {
              show: true,
              fontWeight: "lighter",
              fontFamily: "Microsoft YaHei",
            },

            // roam: true, // 鼠标缩放，平移功能

            // 高亮状态下的多边形和标签样式。
            /* 这里是高亮情况下的一些设置，属性较多，后面可能需要实验
                        不设置即默认
                        后续还需要解决：放置在上面背景颜色的更改
                        另外，这里取消掉，悬浮鼠标时会显示图标名称*/

            emphasis: {
              label: {
                // 图标名字显示（这个可以要）
                /* 这里应该不需要 */
                show: true, // 是否显示标签
                color: "#000",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
              },
              // 高亮设置（这个需要）
              /* itemStyle指的是 */
              itemStyle: {
                areaColor: "#eaeaea", // 地图区域的颜色(高亮时的颜色)且只对未定义颜色的区域有用
                color: "#0000ff", // ???图形的颜色(如下)（这里修改不了）
                borderColor: "#000", // 每个小块图形的轮廓颜色
                opacity: 1, // 透明度设置，这个地方改变了高亮时的颜色
              },
            },

            // 选中模式，表示是否支持多个选中-且会显示相应标签（这个不需要）
            selectedMode: false,

            // 给对应的块赋值
            /*
                        地图系列的数据内容数组，数组项可以为单个数值
                        如果需要在数据中加入其它维度给 visualMap 组件用来映射到颜色等其它图形属性。每个数据项也可以是数组
                        这时候可以将每项数组中的第二个值指定给 visualMap 组件。
                        更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象。

                        name 数据所对应的地图区域的名称
                        number 该区域的数据值
                        selected 该区域是否选中
                        ** itemStyle 该数据所在区域的多边形样式设置

                        ** label 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                        ** emphasis 该数据所在区域的多边形高亮状态
                        ** select 该数据所在区域的多边形选中状态
                        * tooltip 本系列每个数据项中特定的 tooltip 设定。
                         */
            data: [
              {
                name: "第一展览厅",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  color: "black",
                  opacity: 0.5,
                },
                label: {
                  position: ["13%", "20%"],
                },
                selected: false,
              },
              {
                name: "中国古代雕塑馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  color: "black",
                  opacity: 0.5,
                },
                label: {
                  position: ["1%", "75%"],
                },
                selected: false,
              },
              {
                name: "中国古代青铜馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(1)镶红铜  良<br/>(2)铜铁复合兵器  中", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  color: "black",
                  opacity: 0.5,
                },
                label: {
                  position: ["5%", "15%"],
                },
                selected: false,
              },
            ],
          },
        ],
      };

      this.chartInstance1.setOption(option);

      this.chartInstance1.on("click", function (params) {
        // console.log(params);
        // 判断你点击位置是地图还是散点
        if (params.componentSubType == "map") {
          _this.$store.commit("home/UPDATELOCAL", params.name);
          // _this.local = params.name;
          console.log(_this.local);
        } else if (params.componentSubType == "effectScatter") {
          // 点击到博物馆地图上的相应展厅报警信号，跳转到溯源与决策页面，此处后面应该关联展厅
          // _this.local = params.data.name;
          _this.$store.commit("home/UPDATELOCAL", params.data.name);
          _this.$root.indexName = params.data.name; // 到决策页面的对应展厅
          console.log("_this.indexName=", _this.$root.indexName);
          _this.$router.push({
            path: "/decision",
          });
        }
      });
    },
    // 2
    async initMuseum2() {
      var chartDom = document.getElementById("museum2");
      this.chartInstance2 = this.$echarts.init(chartDom);
      var option;
      const _this = this;

      const { data: res } = await this.$http.get(
        // 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
        // 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
        "/static/svg/museum2.svg"
      );
      // console.log(res);

      // 加一个判断svg的
      if (res != undefined) {
        console.log("===2===");
        this.$echarts.registerMap("Museum", {
          svg: res,
        });
      }

      // 在option中配置所需项目
      option = {
        geo: {
          map: "Museum",
        },

        tooltip: {
          show: true,
        },

        series: [
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            data: [
              // SVG local coords.
              [61.43749999999998, 341.25], // 第二展览厅
              [347.5625, 207.375], // 中国古代陶瓷馆
            ],
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
            itemStyle: {
              color: "green",
            },
          },

          {
            name: "文物风险状况",
            type: "map",
            map: "Museum",

            label: {
              show: true,
              fontWeight: "lighter",
              fontFamily: "Microsoft YaHei",
            },

            emphasis: {
              label: {
                show: true, // 是否显示标签
                color: "#000",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
              },
              itemStyle: {
                areaColor: "#eaeaea",
                color: "#0000ff",
                borderColor: "#000",
                opacity: 1,
              },
            },

            selectedMode: false,

            data: [
              {
                name: "第二展览厅",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)",
                },
                itemStyle: {
                  color: "black",
                  opacity: 0.5,
                },
                selected: false,
              },
              {
                name: "中国古代陶瓷馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)",
                },
                label: {
                  position: ["45%", "80%"],
                },
                itemStyle: {
                  color: "black",
                  opacity: 0.5,
                },
                selected: false,
              },
            ],
          },
        ],
      };
      this.chartInstance2.setOption(option);
      this.chartInstance2.on("click", function (params) {
        // console.log(params);
        // 判断你点击位置是地图还是散点
        if (params.componentSubType == "map") {
          _this.$store.commit("home/UPDATELOCAL", params.name);
          // _this.local = params.name;
          console.log(_this.local);
        } else if (params.componentSubType == "effectScatter") {
          // 点击到博物馆地图上的相应展厅报警信号，跳转到溯源与决策页面，此处后面应该关联展厅
          // _this.local = params.data.name;
          _this.$store.commit("home/UPDATELOCAL", params.data.name);
          _this.$root.indexName = params.data.name; // 到决策页面的对应展厅
          console.log("_this.indexName=", _this.$root.indexName);
          _this.$router.push({
            path: "/decision",
          });
        }
      });
    },
    // 3
    async initMuseum3() {
      var chartDom = document.getElementById("museum3");
      this.chartInstance3 = this.$echarts.init(chartDom);
      var option;
      const _this = this;

      const { data: res } = await this.$http.get(
        // 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
        // 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
        "/static/svg/museum3.svg"
      );
      // console.log(res);

      // 加一个判断svg的
      if (res != undefined) {
        console.log("===2===");
        this.$echarts.registerMap("Museum", {
          svg: res,
        });
      }

      // 在option中配置所需项目
      option = {
        geo: {
          map: "Museum",
        },

        tooltip: {
          show: true,
        },

        series: [
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            data: [
              // SVG local coords.
              [65.46875000000003, 240.53125000000006], // 中国历代书法馆
              [229.40625000000006, 86.00000000000003], // 中国历代绘画馆
              [198.50000000000006, 385.65625000000006], // 中国历代印章馆
            ],
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
            itemStyle: {
              color: "green",
            },
          },

          {
            name: "文物风险状况",
            type: "map",
            map: "Museum",

            label: {
              show: true,
              fontWeight: "lighter",
              fontFamily: "Microsoft YaHei",
            },

            emphasis: {
              label: {
                show: true, // 是否显示标签
                color: "#000",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
              },
              itemStyle: {
                areaColor: "#eaeaea",
                color: "#0000ff",
                borderColor: "#000",
                opacity: 1,
              },
            },
            selectedMode: false,
            data: [
              {
                name: "中国历代绘画馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  // areaColor: color1,
                  color: "black",
                  opacity: 0.5,
                },
                label: {
                  position: ["25%", "5%"],
                },

                selected: false,

                emphasis: {
                  itemStyle: {
                    // areaColor: color1
                  },
                },
              },
              {
                name: "中国历代印章馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  // areaColor: color1,
                  color: "black",
                  opacity: 0.5,
                },
                label: {
                  position: ["7%", "25%"],
                },

                selected: false,

                emphasis: {
                  itemStyle: {
                    // areaColor: color1
                  },
                },
              },
              {
                name: "中国历代书法馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  // areaColor: color1,
                  color: "black",
                  opacity: 0.5,
                },
                label: {
                  position: ["-5%", "25%"],
                },
                selected: false,

                emphasis: {
                  itemStyle: {
                    // areaColor: 'red'
                  },
                },
              },
            ],
          },
        ],
      };

      this.chartInstance3.setOption(option);
        this.chartInstance3.on("click", function (params) {
        // console.log(params);
        // 判断你点击位置是地图还是散点
        if (params.componentSubType == "map") {
          _this.$store.commit("home/UPDATELOCAL", params.name);
          // _this.local = params.name;
        } else if (params.componentSubType == "effectScatter") {
          // 点击到博物馆地图上的相应展厅报警信号，跳转到溯源与决策页面，此处后面应该关联展厅
          // _this.local = params.data.name;
          _this.$store.commit("home/UPDATELOCAL", params.data.name);
          _this.$root.indexName = params.data.name; // 到决策页面的对应展厅
          console.log("_this.indexName=", _this.$root.indexName);
          _this.$router.push({
            path: "/decision",
          });
        }
      });
    },
    // 4
    async initMuseum4() {
      var chartDom = document.getElementById("museum4");
      this.chartInstance4 = this.$echarts.init(chartDom);
      var option;
      const _this = this;

      const { data: res } = await this.$http.get(
        // 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/Beef_cuts_France.svg'
        // 'http://101.132.96.7:8080/shanghaimuseum/img/Beef_cuts_France.svg'
        "/static/svg/museum1.svg"
      );
      // console.log(res);

      // 加一个判断svg的
      if (res != undefined) {
        console.log("===2===");
        this.$echarts.registerMap("Museum", {
          svg: res,
        });
      }

      // 在option中配置所需项目
      option = {
        geo: {
          map: "Museum",
        },
        tooltip: {
          show: true,
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            data: [
              // SVG local coords.
              [80.62500000000003, 210.37500000000006], // 中国历代钱币馆
              [190.62500000000006, 379.50000000000006], // 中国明清家具馆
              [259.3750000000001, 97.62500000000003], // 中国少数民族工艺馆
              [368.0000000000001, 246.12500000000006], // 中国古代玉器馆
              [341.8750000000001, 365.75000000000006], // 第三展览厅
            ],
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
            itemStyle: {
              color: "green",
            },
          },
          {
            name: "文物风险状况",
            type: "map",
            map: "Museum",

            label: {
              show: true,
              fontWeight: "lighter",
              fontFamily: "Microsoft YaHei",
            },

            emphasis: {
              label: {
                show: true, // 是否显示标签
                color: "#000",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bolder",
              },
              itemStyle: {
                areaColor: "#eaeaea",
                color: "#0000ff",
                borderColor: "#000",
                opacity: 1,
              },
            },
            selectedMode: false,
            data: [
              // 以下这些名字是绘图时候确定的各个展厅的名字，以下可以对应赋值
              {
                name: "中国历代钱币馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  // 该数据所在区域的多边形样式设置
                  // areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
                  color: "black", // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
                  opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
                },
                label: {
                  position: ["-5%", "40%"],
                },
                selected: false, // 该区域是否选中，没看到具体作用（应该是没有使用到）
              },
              {
                name: "中国少数民族工艺馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  // 该数据所在区域的多边形样式设置
                  // areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
                  color: "black", // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
                  opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
                },
                label: {
                  position: ["15%", "25%"],
                },
                selected: false, // 该区域是否选中，没看到具体作用（应该是没有使用到）
                emphasis: {
                  // 该数据所在区域的多边形高亮状态
                  itemStyle: {
                    /* 这里高亮时候设置颜色，解决方案有以下：
                                     1.找到方案不改变颜色
                                     2.设定变量获取本身的颜色*/
                    // areaColor: color1
                  },
                },
              },
              {
                name: "中国古代玉器馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  // 该数据所在区域的多边形样式设置
                  // areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
                  color: "black", // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
                  opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
                },
                label: {
                  position: ["-10%", "25%"],
                },
                selected: false, // 该区域是否选中，没看到具体作用（应该是没有使用到）
                emphasis: {
                  // 该数据所在区域的多边形高亮状态
                  itemStyle: {
                    /* 这里高亮时候设置颜色，解决方案有以下：
                                     1.找到方案不改变颜色
                                     2.设定变量获取本身的颜色*/
                    // areaColor: color1
                  },
                },
              },
              {
                name: "第三展览厅",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  // 该数据所在区域的多边形样式设置
                  // areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
                  color: "black", // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
                  opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
                },
                label: {
                  position: ["25%", "5%"],
                },
                selected: false, // 该区域是否选中，没看到具体作用（应该是没有使用到）
                emphasis: {
                  // 该数据所在区域的多边形高亮状态
                  itemStyle: {
                    /* 这里高亮时候设置颜色，解决方案有以下：
                                     1.找到方案不改变颜色
                                     2.设定变量获取本身的颜色*/
                    // areaColor: color1
                  },
                },
              },
              {
                name: "中国明清家具馆",
                value: 15,
                tooltip: {
                  formatter: "{a}<br/>(暂无)", //{a}=seriesname文物风险情况 {b}=数据name第一层展厅 {c}=value值15
                },
                itemStyle: {
                  // 该数据所在区域的多边形样式设置
                  // areaColor: color1, // 可以通过这个来设置小块地图区域的颜色
                  color: "black", // 这个颜色暂时是干什么的还不知道(对tooltip提示框的颜色有所影响)
                  opacity: 0.5, // 透明度，对区域有影响（可以更改颜色的度，后面有用）
                },
                label: {
                  position: ["30%", "15%"],
                },
                selected: false, // 该区域是否选中，没看到具体作用（应该是没有使用到）
                emphasis: {
                  // 该数据所在区域的多边形高亮状态
                  itemStyle: {
                    /* 这里高亮时候设置颜色，解决方案有以下：
                                     1.找到方案不改变颜色
                                     2.设定变量获取本身的颜色*/
                    // areaColor: color1
                  },
                },
              },
            ],
          },
        ],
      };

      this.chartInstance4.setOption(option);
      this.chartInstance4.on("click", function (params) {
        // console.log(params);
        // 判断你点击位置是地图还是散点
        if (params.componentSubType == "map") {
          _this.$store.commit("home/UPDATELOCAL", params.name);
          // _this.local = params.name;
          console.log(_this.local);
        } else if (params.componentSubType == "effectScatter") {
          // 点击到博物馆地图上的相应展厅报警信号，跳转到溯源与决策页面，此处后面应该关联展厅
          // _this.local = params.data.name;
          _this.$store.commit("home/UPDATELOCAL", params.data.name);
          _this.$root.indexName = params.data.name; // 到决策页面的对应展厅
          console.log("_this.indexName=", _this.$root.indexName);
          _this.$router.push({
            path: "/decision",
          });
        }
      });
    },
    screenAdapter() {
      // const adapterOption = {};
      // this.chartInstance.setOption(adapterOption);
      this.chartInstance1.resize();
      this.chartInstance2.resize();
      this.chartInstance3.resize();
      this.chartInstance4.resize();
    },
  },
};
</script>

<style lang="less" scoped>
.map1,
#museum2,
#museum3,
#museum4 {
  display: inline-block;
  padding-top: 0.4125rem;
  width: 5.725rem !important;
  height: 5.25rem !important;
}

#museum1,
#museum2 {
  padding-top: 0.5625rem;
}

#museum3,
#museum4 {
  padding-top: 0.4875rem;
}
.mid {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

  .top {
    width: 10.975rem;
    height: 5.725rem;
    margin-bottom: 0.6rem;
  }

  .bottom {
    width: 10.975rem;
    height: 5.4875rem;
  }
}
</style>
