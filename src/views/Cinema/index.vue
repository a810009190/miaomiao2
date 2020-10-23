<template>
  <div id="main">
    <Header title="喵喵影院"/>
    <div id="content">
        <div class="cinema_menu">
            <router-link tag="div" to="/cinema/alltown" class="city_switch">
                全城 <i class="iconfont icon-xiasanjiaoxing"></i>
            </router-link>
            <div class="brand_swtich">
                品牌 <i class="iconfont icon-xiasanjiaoxing"></i>
            </div>
            <div class="feature_switch">
                特色 <i class="iconfont icon-xiasanjiaoxing"></i>
            </div>
            
        </div>
        <router-view/>
    </div>
    <TabBar/>
  </div>
</template>
<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name: 'Cinema',
  components: {
    Header,
    TabBar
  }
}
</script>
<style lang="scss" scoped>
    .icon-xiasanjiaoxing{font-size: 10px;}
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white; margin-top: 50px; position: fixed; top: 0;}

</style>
