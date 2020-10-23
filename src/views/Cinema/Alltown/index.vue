<template>
    <div class="cinema_body">
        <ul>
            <li v-for="data in cinemaList" :key="data.cinemaId">
                <div>
                    <span>{{data.name}}</span>
                    <span class="q"><span class="price">{{data.lowPrice / 100}}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{data.address}}</span>
                    <span>{{data.Distance.toFixed(2)}}km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>
export default {
    name: "Alltown",
    data(){
        return{
            cinemaList: []
        }
    },
    mounted(){
        let id = localStorage.getItem("cityId");
        this.axios({
            url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=1358505`,
            headers: {
                'X-Client-Info' : '{"a":"3000","ch":"1002","v":"5.0.4","e":"1602843160199217763057665","bc":"310100"}',
                'X-Host' : 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            this.cinemaList = res.data.data.cinemas
        })
    }
}
</script>

<style lang="scss" scoped>
.cinema_body ul{ padding:20px; margin-top: 96px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666; text-overflow: ellipsis; overflow: hidden;}
.cinema_body .address span:nth-of-type(1){ display: block; width: 260px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>