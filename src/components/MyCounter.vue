<template>
  <div class="counter">
    <p>{{p6}}</p>
    <p>{{p5}}</p>
    <p>{{p4}}</p>
    <p>{{p3}}</p>
    <p>{{p2}}</p>
    <p>{{p1}}</p>
    <!--<p>{{increase}}</p>-->
    <!--<p>{{myNum | test}}</p>-->
    <p style="background-color: transparent;color: #237ab1;font-weight:bold;">人</p>
    <div style="clear:both"></div>
  </div>
</template>
<style scoped>
  /*.counter {*/
    /*display: flex;*/
  /*}*/
  .counter>p {
    float: left;
    background-color: #0d6daa;
    opacity: 0.9;
    color: white;
    height: 88px;
    width: 56px;
    font-size: 60px;
    line-height: 88px;
    font-weight:bold;
    margin:4px;
    text-align:center;
  }
</style>
<script>
  export default{
    data() {
      return {
          p1:0,
          p2:0,
          p3:0,
          p4:0,
          p5:0,
          p6:0
      }
    },
    props:{
      increase:''
    },
    watch:{
      increase:function(){
          let str=this.increase+"";
          if(str.length-1>=0){
              this.p1=str.charAt(str.length-1)
          }
          if(str.length-2>=0){
              this.p2=str.charAt(str.length-2)
          }
          if(str.length-3>=0){
              this.p3=str.charAt(str.length-3)
          }
          if(str.length-4>=0){
              this.p4=str.charAt(str.length-4)
          }
          if(str.length-5>=0){
              this.p5=str.charAt(str.length-5)
          }
          if(str.length-6>=0){
              this.p6=str.charAt(str.length-6)
          }
      }
    },
    mounted:function () {
      let str=this.increase+"";
      if(str.length-1>=0){
        this.p1=str.charAt(str.length-1)
      }
      if(str.length-2>=0){
        this.p2=str.charAt(str.length-2)
      }
      if(str.length-3>=0){
        this.p3=str.charAt(str.length-3)
      }
      if(str.length-4>=0){
        this.p4=str.charAt(str.length-4)
      }
      if(str.length-5>=0){
        this.p5=str.charAt(str.length-5)
      }
      if(str.length-6>=0){
        this.p6=str.charAt(str.length-6)
      }
      },
    methods:{}
  }
</script>
