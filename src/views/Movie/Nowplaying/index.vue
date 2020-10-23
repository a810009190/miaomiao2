<template>
  <div id="content">
    <ul>
      <li v-for="(data,key) in dataList" :key="data.filmId">
        <div class="pic_show">
          <img :src="data.poster" />
        </div>
        <div class="info_list">
          <h2>{{data.name}}</h2>
          <br>
          <p>主演: {{data.actors | actorfilter}}</p>
          <p>{{data.nation}} | {{data.item.name}}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      
    </ul>
  </div>
</template>
<script>
    import Vue from 'vue'
    // 将明星数组转成逗号分隔的字符串
    Vue.filter("actorfilter", (data)=>{
        let newList = data.map(item=>item.name)
        return newList.join(",")
    })
    export default{
        name: "Nowplaying",
        data(){
            return{
                dataList: []
            }
        },
        mounted(){
            let id = localStorage.getItem("cityId");
            this.axios({
                url: `https://m.maizuo.com/gateway?cityId=${id}&pageNum=1&pageSize=10&type=1&k=7043687`,
                headers:{
                    'X-Client-Info' : '{"a":"3000","ch":"1002","v":"5.0.4","e":"1602843160199217763057665","bc":"310100"}',
                    'X-Host' : 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                var msg = res.data.msg;
                if(msg === 'ok'){
                    // console.log(res.data);
                    // 将获取到的信息存入dataList
                    this.dataList = res.data.data.films;
                }
                
            })
        }
    }
</script>
<style lang="scss" scoped>  
#content .movie_body{ flex:1; overflow:auto;}
ul{
    
    margin: 96px 12px 0px 12px;
    overflow: hidden;
    li{
        display: flex;
        align-items: center;
        margin-top: 12px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e6e6e6;
        p{
            font-size: 13px;
            color: #666;
            line-height: 22px;
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .grade{
                font-weight: 700;
                font-size: 15px;
                color: #faaf00;
            }
        }
    }
}
.btn_mall{
    width: 47px;
    height: 27px;
    line-height: 28px;
    background-color: #f03d37;
    color: white;
    text-align: center;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}
.pic_show{
    width: 64px;
    height: 90px
}
.pic_show img{
    width: 100%;
}
.info_list{
    flex: 1;
    margin-left: 10px;
}
h2{
    font-size: 17px;
    line-height: 24px;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>