<template>
    <div id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont icon-yingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    #footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 2px solid #ebe8e3;
        background: white;
    }
    ul{
        display: flex;
        text-align: center;
        align-items: center;
        li{
            flex: 1;
        }
    }
    #footer i{
        font-size: 20px;
    }
    #footer p{
        font-size: 12px;
    }
    #footer ul li.router-link-active{color: red;}
</style>
<script>
export default {
    name: 'TabBar'
}
</script>