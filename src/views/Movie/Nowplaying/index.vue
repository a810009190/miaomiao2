<template>
  <div id="content">
    <ul>
      <li>
        <div class="pic_show">
          <img src="@/assets/images/movie_1.jpg" />
        </div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p>观众评<span class="grade"> 9.3</span></p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>今天56家影院放映443场</p>
        </div>
        <div class="btn_mall">购票</div>
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