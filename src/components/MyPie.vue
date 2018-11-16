<template>
  <div style="width:749px;height:429px" id="backImg">
    <!--<img src="../../static/image/myPie.svg"/>-->
    <div id="pie" style="width:749px;height: 429px"></div>
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
    float: right;
    right: 50px;
    top:20px;
  }
  /*#backImg>img{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*top:0;*/
    /*left: 0;*/
    /*z-index: 9;*/
  /*}*/
  #backImg>section{
    width: 100%;
    height: 96%;
    z-index: -1;
    background-color:rgba(0,73,119,0.3) ;
    content: "";
    position: absolute;
    top: 4%;
    float: right;
  }
</style>
<script>
  export default {
    mounted: function () {var mypie = echarts.init(document.getElementById('pie'));
      mypie.setOption( {
//        backgroundColor:'rgba(0,73,119,0.3)',
          title : {
//            backgroundColor:"rgba(0,73,119) ",
            text: '性别分布',
            z:99,
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient : 'vertical',
            x:'left',
            x : '20px',
            y : '20px',
            data:['男性','女性']
          },
//          toolbox: {
//            show : true,
//            feature : {
//              mark : {show: true},
//              dataView : {show: true, readOnly: false},
//              magicType : {
//                show: true,
//                type: ['pie', 'funnel'],
//                option: {
//                  funnel: {
//                    x: '25%',
//                    width: '50%',
//                    funnelAlign: 'left',
//                    max: 1548
//                  }
//                }
//              },
//              restore : {show: true},
//              saveAsImage : {show: true}
//            }
//          },
          calculable : true,
          series : [
            {
              name:'性别分布',
              type:'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'男性'},
                {value:310, name:'女性'}
              ]
            }
          ]
        }
      )

    }
  };
</script>
