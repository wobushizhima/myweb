<template>
  <div style="height: 100%" >
    <div style="width:100%; height:100%;position:absolute; z-index:1" id="map"></div>
      <div id="header">
        <!--远程康复大数据平台-->
        demo
      </div>

        <div class="time num"><p style="color:#7b7100;font-size:24px;margin-bottom: 0"><b>今日新增人数</b></p>
          <p style="color: #237ab1;font-size:18px;margin-top: 185px;margin-left: 175px"><b>2018-08-26 16:23</b></p>
        </div>
        <div  class="num" style="position: absolute;z-index:2;margin-top:209px;">
          <MyCounter :increase="increase"></MyCounter>
        </div>
        <div class="num" style="position: absolute;z-index:2;margin-top:295px">
          <p style="background-color:transparent;color :#237ab1;font-weight:bold;font-size:18px;">昨日新增人数:&nbsp;&nbsp;&nbsp;&nbsp;243人</p>
        </div>
        <div id="people">
          <div style="position: relative;margin-top: 20px;margin-left: 10px;width: 370px;height: 200px;background-color: red">
            <el-table
              :data="tableData" :row-style="getRowClass" :header-row-style="getRowClass" :header-cell-style="getRowClass" height="200px">
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="age"
                label="年龄">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="op"
                label="操作">
              </el-table-column>
            </el-table>
          </div>
          <div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="100"
              layout="total, prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      <MyPie></MyPie>
      <div style="clear:both"></div>
      <MyBar></MyBar>
  </div>

</template>
<script>
  import MyMap from '../components/MyMap.vue';
  import MyPie from '../components/MyPie.vue';
  import MyBar from '../components/MyBar.vue';
  import MyCounter from '../components/MyCounter.vue';
  export default{
    data() {
      return {

        increase:13,
        tableData: [{
          name: '钱俊民',
          sex: '男',
          age:'18',
          op: '操作'
        }, {
          name: '钱俊民2',
          sex: '男',
          age:'18',
          op: '操作'
        }, {
          name: '钱俊民3',
          sex: '男',
          age:'18',
          op: '操作'
        }, {
          name: '钱俊民4',
          sex: '男',
          age:'18',
          op: '操作'
        }]
      }
    },
    components:{MyMap,MyPie,MyBar,MyCounter},
    mounted:function () {
      setInterval(function () {
        this.increase=this.increase+1;
      }.bind(this), 1000);

      var myChart = echarts.init(document.getElementById('map'));
      myChart.setOption({
        bmap: {
          center: [120.763549, 30.750974],
          zoom: 12,
          roam: true,
          mapStyle: {
          }
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [ [120, 30, 1] ]
        }]


      });

      var bmap = myChart.getModel().getComponent('bmap').getBMap();
      bmap.addControl(new BMap.MapTypeControl());
    },
    methods:{
      getRowClass({ row, column, rowIndex, columnIndex }) {
        return "background:transparent";
      },
    }
  };
</script>
<style>
  #header {
    background-color: #0d6daa;
    opacity: 0.8;
    filter:Alpha(opacity=80);
    width: 735px;
    height: 99px;
    line-height:99px;
    color: white;
    text-align:center;
    position: absolute;
    z-index: 2;
    float: left;
    margin-top:50px;
    font-size: 36px;
  }

  .time>p {
    float: left;
    position: absolute;
    z-index: 2;
    margin-top:179px;
  }
  .num {
    margin-left: 60px;
  }

  #people {
    margin-left: 60px;
    float: left;
    position: absolute;
    z-index: 2;
    background: url("../../static/image/myList.svg");
    background-repeat: no-repeat;
    background-size: contain;
    height: 262px;
    width:749px;
    margin-top: 633px;
  }

  .tebale_card {
    background-color: transparent;
  }
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
  }

</style>
