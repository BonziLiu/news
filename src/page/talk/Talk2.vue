<template>
	<div id="talk2">
		<div class="talk-talk2">
			<h4>#&nbsp; 易起约会吧  &nbsp;#</h4>
			<div class="talk2-img">
				<img />
				<img />
				<img />
			</div>
			<i><span>生活</span>&nbsp; | &nbsp; <span>2942</span> 关注 &nbsp; | &nbsp; <span>452</span>讨论</i>
			<a href="javascript:;">＋关注</a>
			
		</div>
		<div class="talk-talk2">
			<h4>#&nbsp; 落井儿童已经找到  &nbsp;#</h4>
			<div class="talk2-msg">
				<p>
					<img /><span>“</span> 冷不冷 <span>”</span>
				</p>
				<p>
					<img /><span>“</span> 好可惜哦 <span>”</span>
				</p>
				
			</div>
			<i><span>生活</span>&nbsp; | &nbsp; <span>2942</span> 关注 &nbsp; | &nbsp; <span>452</span>讨论</i>
			<a href="javascript:;">＋关注</a>
			
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Talk2'
	}
</script>

<style>
	/*talk2.css*/
#talk2 a {
	color: #fff;
}
.talk-talk2{
	width: 100%;
	height: 6.1333rem;
	background: #fff;
	margin-bottom: 0.2666rem;
	position: relative;
}
.talk-talk2>h4{
	display: block;
	width: 9.44rem;
	height: 1.2266rem;
	line-height: 1.2266rem;
	font-size: 0.4133rem;
	margin-left: 0.2666rem;
	border-bottom: 1px dashed #d1d1d1;
}
.talk2-img{
	width: 94.94%;
	height: 3.6rem;
	margin-left: 0.2666rem;
	background: blanchedalmond;
	display: flex;
	justify-content: space-between;
}
.talk2-img>img{
	width: 3rem;
}
.talk-talk2>i{
	font-style: normal;
	font-size: 0.32rem;
	color: #959595;
	position: absolute;
	bottom: 0.4666rem;
	left: 0.2666rem;
}
.talk-talk2>i>span:nth-child(1){
	color: #417cc7;
}
.talk-talk2>a{
	width: 1.8133rem;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	border-radius: 20px;
	background: #df3031;
	font-size: 0.3466rem;
	color: #fff;
	position: absolute;
	bottom: 0.2666rem;
	right: 0.2666rem;
}
.talk2-msg{
	width: 9.4666rem;
	height: 2.9333rem;
}
.talk2-msg>p{
	width: 9.4666rem;
	height: 1.3333rem;
	line-height: 1.3333rem;
	margin-left: 0.2666rem;
	font-size: 0.4133rem;
	/*background: red;*/
	position: relative;
}
.talk2-msg>p>img{
	display: inline-block;
	width: 0.6666rem;
	height: 0.6666rem;
	border-radius: 50%;
	vertical-align: middle;
}
.talk2-msg>p>span:nth-child(3){
	position: absolute;
	top: 0;
	right: 0;
}

</style>