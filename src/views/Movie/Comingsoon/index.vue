<template>
  <div id="content">
    <ul>
      <li>
        <div class="pic_show">
          <img src="@/assets/images/movie_1.jpg" />
        </div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person"> 113445 </span>人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">预售</div>
      </li>
      
    </ul>
  </div>
</template>
<style lang="scss" scoped>
    ul{
        margin: 0 12px;
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
            .person{
            font-size: 13px;
            line-height: 22px;
            white-space: nowrap;
            }
        }
        }
    }
    .btn_pre{
        width: 47px;
        height: 27px;
        line-height: 28px;
        background-color: #3c9fe6;
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