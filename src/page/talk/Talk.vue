<template>
	<div id="talk">
		<header>
			<a href="#"><img src="../../assets/talkimg/talk-left.png" /></a>    
			<div>
				<div class="second">
					<router-link to="/talk1">
						<div :class="['third', {talkColor: 0==colIndex}]" @click="colIndex=0" >问吧</div>
					</router-link>
					<router-link to="/talk2">
						<div :class="['third', {talkColor: 1==colIndex}]" @click="colIndex=1" >话题</div>
					</router-link>
					<router-link to="/talk3">
						<div :class="['third', {talkColor: 2==colIndex}]" @click="colIndex=2" >关注</div>
					</router-link>
				</div>
			</div>
			<a href="#"><img src="../../assets/talkimg/talk-right.png" /></a>
		</header>



		<div class="talk-talk">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Talk',
		data(){
			return{			
		        colIndex:0		        
			}
		}
	}
</script>

<style scoped>
	/*talk1.css*/
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