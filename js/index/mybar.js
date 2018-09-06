/**
 * Created by superz on 2018/9/5.
 */
var mybar = echarts.init(document.getElementById('bar'));
mybar.setOption({
    title : {
        text: '年龄分布',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['人数']
    },
    toolbox: {
        show : true,
            feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
        xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
        yAxis : [
        {
            type : 'value'
        }
    ],
        series : [
        {
            name:'人数',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
}

)
