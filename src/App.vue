<template>
  <div id="app">
    
    <router-view></router-view>

    <ul class="footer">
      <router-link to="/news">
        <figure>  
          <div class="news-btn">      
          </div>
          <figcaption>新闻</figcaption>
        </figure>
      </router-link>

      <router-link to="/play">
        <figure>
          <div class="play-btn">  
          </div>
          <figcaption>直播</figcaption>
        </figure>
      </router-link>

      <router-link to="/talk">
        <figure>
          <div class="talk-btn">  
          </div>
          <figcaption>话题</figcaption>
        </figure>
      </router-link>

      <router-link to="/mine">
        <figure>
          <div class="mine-btn">  
          </div>
          <figcaption>我</figcaption>
        </figure>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      
    }
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.footer{
  height: 1.2933rem;
  width: 100%;
  background-color: #FFFFFF ;
  border-top: 0.0133rem solid #d9d9d9;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
}


.footer a{
  display: block;
  width: 25%;
  height: 1.16rem;
  padding-top: 0.1333rem;
}
.footer a figure{
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  margin: auto;
  
}

.footer a figure figcaption{
  text-align: center;

  width: 100%;
  color: #929292;
  font-size: 0.32rem;
}
.footer figure>div{
  width: 0.6rem;
  height: 0.6rem;
  margin: auto;
  
}
.isActive figure figcaption{
  color: red;
}
.news-btn{
  
  background: url(./assets/images/news-footer.png) no-repeat;
  background-size: 1.22rem;
}
.play-btn{
  background: url(./assets/images/play-footer.png) no-repeat;
  background-size: 1.22rem;
}
.talk-btn{
  background: url(./assets/images/talk-footer.png) no-repeat;
  background-size: 1.22rem;
}
.mine-btn{
  background: url(./assets/images/mine-footer.png) no-repeat;
  background-size: 1.22rem;
}
.isActive figure div{
  background-position: right top;
}



.play-main{
  width: 100%;
  height: 5.28rem;
  background: #fff;
  padding-top: 0.1px;
  position: relative;
}
.play-main>a>p{
  font-size: 0.4133rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 0.2666rem;
  margin-top: 0.36rem;
  margin-bottom: 0.3066rem;
}
.play-main>a>img{
  width: 9.4933rem;
  height: 3.1466rem;
  margin-left: 0.2666rem;
}
.play-main>a>i{
  font-style: normal;
  display: inline-block;
  color: #b5b5b5;
  font-size: 0.2933rem;
  position: absolute;
  left: 0.2666rem;
  bottom: 0.32rem;
}
.play-main>a>span{
  display: inline-block;
  padding: 0 0.1rem 0 0.1rem;
  border-radius: 20px;
  background: #f1f1f1;
  position: absolute;
  bottom: 0.32rem;
  right: 2.7rem;
  text-align: center;
  font-size: 0.2933rem;
}
.play-main>a>div{
  display: inline-block;
  padding: 0 0.1rem 0 0.1rem;
  border-radius: 5px;
  background: #ff780b;
  position: absolute;
  right: 0.8933rem;
  bottom: 0.32rem;
  color: #fff;
  text-align: center;
  font-size: 0.24rem;
}
.play-main>a>b>img{
  width: 0.44rem;
  position: absolute;
  bottom: 0.2666rem;
  right: 0.2666rem;
}


.swiper-slide>img{
  width: 10rem;
}
.router-link-active{
  display: none;
}


</style>
