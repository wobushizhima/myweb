<template>
  <div style="height: 100%">
    <div id="left">
      <div id="header">
        <h1 >这是标题</h1>
      </div>
      <div class="num">
        <div class="time"><p style="color:#7b7100;font-size:24px;margin-bottom: 0"><b>今日新增人数</b></p>
          <p style="color: #237ab1;font-size:18px;margin-top: 30px;margin-left: 75px"><b>2018-08-26 16:23</b></p>
          <div style="clear:both"></div>
        </div>
        <MyCounter :increase="increase"></MyCounter>
        <div>
          <p style="background-color: white;color :#237ab1;font-weight:bold;font-size:18px;">昨日新增人数:&nbsp;&nbsp;&nbsp;&nbsp;243人</p>
        </div>
        <div>
        <MyMap></MyMap>
        </div>
        <div id="people">
          <!--<div >-->
          <el-table
            :data="tableData">
            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        <!--</div>-->
        </div>
      </div>
      <!--<div id="main"></div>-->
    </div>
    <div id="right" style="height: 100%">
      <MyPie></MyPie>
      <div style="clear:both"></div>
      <MyBar></MyBar>
    </div>
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components:{MyMap,MyPie,MyBar,MyCounter},
    mounted:function () {
      setInterval(function () {
        this.increase=this.increase+1;
      }.bind(this), 1000);
    }
//    data(){},
//    mounted:function () {
//
//      },
//    methods:{},
  };
</script>
<style>
  #header {
    background-color: #0d6daa;
    opacity: 0.8;
    filter:Alpha(opacity=80);
    width: 735px;
    height: 99px;
    color: white;
    text-align:center;
    line-height:99px;
  }

  #left {
    /*background-color: red;*/
    height: 100%;
    float: left;
    width: 50%;
  }

  #right {
    height: 100%;
    float: left;
    width: 50%;
  }

  .time>p {
    float: left;
  }
  .num {
    margin-left: 60px;
  }

  #people {
    /*background: url("../../static/image/myList.svg");*/
    /*background-repeat: no-repeat;*/
    /*height: 262px;*/
    /*width:749px;*/
    /*height: 524px;*/
    /*width:1498px;*/
    /*background-size: contain;*/
    /*background-color: red;*/
  }

  #pie {
    height: 50%;
  }

  #bar {
    height: 50%;
  }
  #map {
    height: 30vh;
    width: 70%;
  }
</style>
