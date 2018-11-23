<template>
  <div style="width:749px;height:429px;margin-top:20px" id="backImg">
    <div id="bar" style="width:749px;height: 429px"></div>
    <section></section>
  </div>
</template>
<style scoped>
  #backImg{
    background-size: contain;
    background: url("../../static/image/myPie.svg");
    background-repeat: no-repeat;
    position: relative;
    z-index: 9;
    float:right;
    right: 50px;
    top:20px;
  }
  #backImg>section{
    width: 100%;
    height: 96%;
    z-index: -1;
    background-color:rgba(0,73,119,0.3) ;
    content: "";
    position: absolute;
    top: 4%;
  }
</style>
<script>
  export default {
    mounted: function () {
      var mybar = echarts.init(document.getElementById('bar'));
      mybar.setOption({
          title: {
            text: '年龄分布',

            x:'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['人数'],
            x : '20px',
            y : '20px',
          },
//          toolbox: {
//            show: true,
//            feature: {
//              mark: {show: true},
//              dataView: {show: true, readOnly: false},
//              magicType: {show: true, type: ['line', 'bar']},
//              restore: {show: true},
//              saveAsImage: {show: true}
//            }
//          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '人数',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            }
          ]
        }
      )

    }
  };
</script>
