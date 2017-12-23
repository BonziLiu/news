<template>
	<div id="talk1">
		<div :class="['talk-top', {'active':isShowall}]">
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/fl.png" />
						<figcaption>法律</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/jk_2.png" />
						<figcaption>健康</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/qc.png" />
						<figcaption>汽车</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/cj.png" />
						<figcaption>财经</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/ls.png" />
						<figcaption>历史</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/sz.png" />
						<figcaption>时政</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/ty.png" />
						<figcaption>体育</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/js.png" />
						<figcaption>军事</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/ly.png" />
						<figcaption>旅游</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/fc.png" />
						<figcaption>房产</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/kj.png" />
						<figcaption>科技</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/jy.png" />
						<figcaption>教育</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/yl.png" />
						<figcaption>娱乐</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/sh.png" />
						<figcaption>生活</figcaption>
					</figure>
				</a>
			</div>
			<div>
				<a href="javascrip:;">
					<figure>
						<img src="../../assets/talk1img/ss.png" />
						<figcaption>时尚</figcaption>
					</figure>
				</a>
			</div>
		</div>
		<div class="talk-top-list" @click="talkClick()">
			<a href="javascript:;"><img :class="['talk-a', {'rows':isShowall}]" src="../../assets/talk1img/talk-down.png" /></a>
		</div>
		<div class="talk-main" v-for="t in result">
			<div class="talk-main-news">
				<div class="talk-main-head"><img :src="t.head" /></div>
				<h5>
					{{t.title}}
				</h5>
				<img :src="t.img" />
				<p>
					{{t.text}}
				</p>
				<i><span>{{t.type}}</span>&nbsp; | &nbsp; <span>{{t.attention}}</span> 关注 &nbsp; | &nbsp; <span>{{t.question}}</span>提问</i>
				<a href="javascript:;">＋关注</a>
			</div>
		</div>
	</div>
</template>

<script>

	export default{
		name: 'Talk1',
		data(){
			return{
				result:[],
				isShowall:false
			}
		},
		methods:{
			//点击展开全部话题，再点击隐藏部分话题
			talkClick:function(){
				this.isShowall = !this.isShowall; 
				if(this.isShowall){
					this.isShowall = true; 
				}else{
					this.isShowall = false;
				};

			}
		},
		mounted(){
			this.axios.get("../../static/json/talk.json").then(res =>{
				this.result = res.data.result;
				console.log(this.result)
			})
		}
	
	}
</script>

<style>
	.talk-top div a {
		color: #666;
	}
	.talk-main-news a{
		color: #fff;
	}
	#talk header{
	width: 100%;
	height: 1.1733rem;
	display: flex;
	background: #df3031;
}
#talk header>a{
	width: 10%;
}
header>a>img{
	width: 0.5333rem;
	display: block;
	margin: 0.32rem auto;
}
#talk header>div{
	width: 80%;
}
#talk header>div>div{	
	width: 5.2rem;
	height: 0.7466rem;
	display: flex;
	border: 1px solid rgba(255,255,255,0.5);
	border-radius: 20px;
	margin: 0.2133rem auto;
}
.third{
	width: 1.7333rem;
	height: 0.7466rem;
	line-height: 0.7466rem;
	font-size: 0.3466rem;
	color: #fff;	
	text-align: center;
	border-radius: 20px;
}
.talkColor{
	color: #df3031;
	background: #fff;
	transition:0.5s;
}
.talk-talk{
	width: 100%;
	background: #eef1f5;
	position: absolute;
	left: 0;
	top: 1.1733rem;
	bottom: 1.2933rem;
	overflow: auto;
}
.talk-top{
	width: 100%;
	height: 2.4rem;
	background: #fff;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	transition: height 0.6s;
}
.talk-top.active{
	height: 7.2rem;
}
.talk-top>div{
	width: 20%;
}
.talk-top>div>a{
	width: 100%;
}
.talk-top>div>a>figure{
	display: block;
	width: 100%;
	margin: 0.3733rem auto 0.32rem;
}
.talk-top>div>a>figure>img{
	display: block;
	width: 1.12rem;
	margin: 0 auto 0.24rem;
}
.talk-top>div>a>figure>figcaption{
	font-size: 0.3066rem;
	text-align: center;
}
.talk-top-list{
	width: 100%;
	height: 0.52rem;
	background: #fff;
}
.talk-a{
	display: block;
	margin: 0 auto;
	width: 0.4rem;
	transition:  0.6s;
}
.talk-a.rows{
	transform: rotateZ(180deg);
	transition:  0.6s;
}
.talk-main{
	/*margin-top: 0.2666rem;*/
	width: 100%;
	padding-top: 0.1px;
}
.talk-main-news{	
	background: #fff;
	width: 100%;
	height: 8.7333rem;
	margin-top: 0.2666rem;
	position: relative;
}
.talk-main-head{
	width: 1.19rem;
	height: 1.19rem;
	background: #fff;
	border-radius: 50%;
	padding: 0.0666rem;
	position: absolute;
	left: 0.36rem;
	top: 0.36rem;
	z-index: 99;
	
}
.talk-main-head>img{
	display: block;
	width: 1.0666rem;
	height: 1.0666rem;
	border-radius: 50%;
	position: relative;
	
}
.talk-main-news>h5{
	font-size: 0.32rem;
	position: absolute;
	top: 0.4333rem;
	left: 1.7333rem;
}
.talk-main-news>h5>span{
	color: #959595;
}
.talk-main-news>img{
	width: 100%;
	height: 4.6666rem;
	position: absolute;
	top: 1.0666rem;
	left: 0;
}
.talk-main-news>p{
	width: 9.2rem;
	position: absolute;
	top: 6.1333rem;
	font-size: 0.4133rem;
	margin-left: 0.4rem;
}
.talk-main-news>i{
	font-style: normal;
	font-size: 0.3066rem;
	color: #959595;
	position: absolute;
	top: 7.7733rem;
	left: 0.4rem;
}
.talk-main-news>i>span:nth-child(1){
	color: #417cc7;
}
.talk-main-news>a{
	width: 1.8133rem;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	border-radius: 20px;
	background: #df3031;
	font-size: 0.3466rem;
	color: #fff;
	position: absolute;
	bottom: 0.4rem;
	right: 0.4rem;
}
</style>