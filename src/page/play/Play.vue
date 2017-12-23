<template>
	<div id="play">
		<header>
			<span>直播</span>
		</header>

		<div class="play-play">
			<div class="play-banner">
				<div>  
					<swiper :options="swiperOption"  ref="mySwiper">  
						<!-- 这部分放你要渲染的那些内容 -->  
						<swiper-slide v-for="item in live_review" :key="item.index">							
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<img :src="item.image" alt="">
										<div class="play-banner-tip">			
											<span>{{ item.roomName }}</span>
											<a href="javascript:;">直播预告</a>
										</div>
									</div>		        
								</div>		  
							</div>
						</swiper-slide>  
						<!-- 这是轮播的小圆点 -->  
						<div class="swiper-pagination" slot="pagination"></div>  
					</swiper>  
				</div>  
			</div>
		</div>

		<nav>
			<h3>直播预告</h3>
			<i><span>39</span>场<img src="../../assets/playimg/night_arrow.png" /></i>
			<p><span>今10：00 /</span>【波士堂】 牛文文：得屌丝者得天下</p>
		</nav>

		<div class="play-main" v-for="(d,index) in live_review" :key="index">
			<a href="javascript:;">
				<p>{{ d.roomName }}</p>
				<img :src="d.image" />
				<i>原创</i>
				<span>2376.7参与</span>
				<div>正在直播</div>
				<b><img src="../../assets/playimg/movie_red.png" /></b>
			</a>
		</div>
	</div>

	
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	export default{
		name: 'Play',
		components: {  
            swiper,  
            swiperSlide  
		},
		 data() {  
            return {  
				live_review:[],
                swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
					notNextTick: false,  
					autoplay: 1000,
					pagination: '.swiper-pagination',  
					slidesPerView: 'auto',  
					centeredSlides: true,  
					paginationClickable: true,  
					spaceBetween: 30,  
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }  
                }  
            }  
		},
		//定义这个sweiper对象  
        computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
			this.swiper.slideTo(4, 0, true);  
			
		},
		created () {
			this.axios({
				method: 'get',
				url: '../../static/json/play1.json'
			}).then(res =>{
				this.live_review = res.data.live_review;
			})
		}
	}
</script>

<style scoped>
header{
width: 100%;
height: 1.1733rem;
line-height: 1.1733rem;
background: #df3031;
text-align: center;
position: absolute;
top: 0;
left: 0;
}
header>span{
	color: #ffffff;
	font-size: 0.44rem;
	margin: auto 0;
}
.play-play{
	width: 10rem;
	background: #eef1f5;
	position: absolute;
	top: 1.1733rem;
	left: 0;
	bottom: 1.2933rem;
	overflow: auto;

}
.play-banner{
	width: 100%;
	height: 4.9333rem;
	position: relative;
	/*margin-bottom: 0.1333rem;*/
}
.play-banner-tip{
	position: absolute;
	bottom: 0.16rem;
	left: 0;
	right: 0;
	width: 100%;
	height: 0.8rem;
	line-height: 0.8rem;
	background: rgba(0,0,0,0.5);
	color: #ffffff;
	font-size: 0.4rem;
	z-index: 2;
}
.swiper-container{
	width: 100%;
	height: 100%;
	z-index: 1;
}
.play-banner-tip>span{
	margin-left: 0.4933rem;
}
.play-banner-tip>a{
	opacity: 0.8;
	height: 0.36rem;
	line-height: 0.36rem;
	padding: 0 0.1333rem 0.04rem 0.1333rem;
	background: #94999f;
	color: #ffffff;
	border-radius: 5px;
	font-size: 0.28rem;
	margin-left: 0.1333rem;
	vertical-align: middle;
	text-align: center;
}
.swiper-slide img{
	height: 4rem;
}
nav{
	width: 100%;
	height: 2.0533rem;
	background: #ffffff;
	position: relative;
	padding-top: 0.1px;
	margin-bottom: 0.1333rem;
	margin-top: 5.4rem;
}
nav>h3{
	margin-top: 0.4533rem;
	margin-left: 0.2666rem;
	font-size: 0.3733rem;
}
nav>i{
	font-style: normal;
	display: inline-block;
	position: absolute;
	top: 0.4533rem;
	right: 0.24rem;
	font-size: 0.3466rem;
}
nav>i>span{
	color: #df3131;
}
nav>i>img{
	vertical-align: middle;
	height: 0.3466rem;
}
nav>p{
	margin-top: 0.1866rem;
	margin-left: 0.2666rem;
	font-size: 0.44rem;
}
nav>p>span{
	color: #417cc7;
	font-size: 0.3733rem;
}
.play-main a{
	color: #333;
}
</style>