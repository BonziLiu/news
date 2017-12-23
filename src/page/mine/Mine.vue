<template>
	<div id ="mine">
		<div class="mine-mine">
			<div class="mine-top">
				<a href='Mine/mine-set'><img src="../../assets/mineimg/set.png" /> 设置</a>
				<!--<b><img src="../assets/mineimg/mine-mine.png" /></b>
				<p>点击设置昵称</p>
				<span>跟帖局科员</span>-->
		        <p href='Mine/login'>登陆</p>
				<span><a href='Mine/register'>新用户点击注册..&gt;</a></span>
				<div>今日阅读<span>13</span>篇新闻&nbsp;超过了<span>21</span>%的网友&gt;</div>
				
			</div>
			<div class="mine-history">
				<a href="#">
					<figure>
						<img src="../../assets/mineimg/mine-history.png" />
						<figcaption>历史<span>1</span></figcaption>
					</figure>
				</a>
				<a href="#">
					<figure>
						<img src="../../assets/mineimg/mine-save.png" />
						<figcaption>收藏<span>0</span></figcaption>
					</figure>
				</a>
				<a href="#">
					<figure>
						<img src="../../assets/mineimg/mine-pencil.png" />
						<figcaption>跟帖<span>0</span></figcaption>
					</figure>
				</a>
				<a href="#">
					<figure>
						<img src="../../assets/mineimg/mine-money.png" />
						<figcaption>金币<span>5</span></figcaption>
					</figure>
				</a>
			</div>
			<a href="#" class="mine-message">
				<div>		
					<span><img src="../../assets/mineimg/mine-message.png" /> 我的消息</span>
					<i>一个未读消息 <img src="../../assets/mineimg/night_arrow.png" /></i>		
				</div>
			</a>
			<a href="#" class="mine-message">
				<div>		
					<span><img src="../../assets/mineimg/mine-doller.png" /> 金币商城</span>
					<i>携手海澜之家捐爱心冬衣 <img src="../../assets/mineimg/night_arrow.png" /></i>		
				</div>
			</a>
			<a href="#" class="mine-message">
				<div>		
					<span><img src="../../assets/mineimg/mine-task.png" /> 金币任务</span>
					<i>8个任务未完成 <img src="../../assets/mineimg/night_arrow.png" /></i>		
				</div>
			</a>
			<a href="#" class="mine-message">
				<div>		
					<span><img src="../../assets/mineimg/mine-volite.png" /> 我的钱包</span>
					<i> <img src="../../assets/mineimg/night_arrow.png" /></i>		
				</div>
			</a>
			<a href="javascript:;" class="mine-message mine-mgtop">
				<div>		
					<span><img src="../../assets/mineimg/mine-night.png" /> 夜间模式</span>
					<i> </i>		
				</div>
			</a>
			<a href="#" class="mine-message">
				<div>		
					<span><img src="../../assets/mineimg/mine-read.png" /> 离线阅读</span>
					<i> <img src="../../assets/mineimg/night_arrow.png" /></i>		
				</div>
			</a>
			<a href="#" class="mine-message">
				<div>		
					<span><img src="../../assets/mineimg/mine-squire.png" /> 活动广场</span>
					<i>火星网友原创歌词征集 <img src="../../assets/mineimg/night_arrow.png" /></i>		
				</div>
			</a>
			<a href="#" class="mine-message">
				<div>		
					<span><img src="../../assets/mineimg/mine-email.png" /> 我的邮箱</span>
					<i> <img src="../../assets/mineimg/night_arrow.png" /></i>		
				</div>
			</a>
			<a href="#" class="mine-message">
				<div>		
					<span><img src="../../assets/mineimg/mine-yijian.png" /> 意见反馈</span>
					<i> <img src="../../assets/mineimg/night_arrow.png" /></i>		
				</div>
			</a>	
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Mine'
	}
</script>

<style scoped>
::-webkit-scrollbar{width:0px}
/*隐藏滚动条  只有webkit内核起效*/
#mine a{
	color: #666;
}
.mine-mine{
	width: 100%;
	background: #eef1f5;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 1.2933rem;
	
	overflow: auto;
	
}
.mine-top{
	width: 100%;
	height: 6.2666rem;
	position: relative;
	background: url(../../assets/mineimg/mine_background_02.png) no-repeat;
	background-size: 100%;
}
.mine-top>a>img{
	width: 0.4666rem;
	vertical-align: middle;
}
.mine-top>a{
	font-size: 0.32rem;
	position: absolute;
	top: 0.2933rem;
	right: 0.52rem;
	color: #fff;
}
.mine-top>b{
	position: absolute;
	top: 0.6666rem;
	left: 4rem;
}
.mine-top>b>img{
	width: 2.0133rem;
}
.mine-top>p{
	border: 1px solid #999;
	background: #fff;
	padding: 0.2rem 0.7rem;
	border-radius: 0.3rem;
	color: #999;
	font-size: 0.4rem;
	position: absolute;
	top: 3.2rem;
	left: 1.7333rem;
}
.mine-top>span{
	padding: 0.05rem 0.1rem 0.05rem 0.1rem;
	font-size: 0.2933rem;
	border-radius: 20px;
	/*border: 1px solid #ffc45f;*/
	color: #ffc45f;
	text-align: center;
	position: absolute;
	top: 3.68rem;
	left: 4.3933rem;
}
.mine-top>div{
	font-size: 0.32rem;
	color: #ebb3b4;
	position: absolute;
	left: 2.1333rem;
	top: 4.96rem;
}
.mine-top>div>span{
	font-size: 0.3733rem;
}
.mine-history{
	width: 100%;
	height: 2.2666rem;
	background: #fff;
	
	display: flex;
	margin-bottom: 0.1333rem;
}
.mine-history>a{
	width: 25%;
	border-right: 1px solid #edeff3;
}
.mine-history>a>figure{
	display: block;
	width: 100%;
	height: 1.7333rem;
	margin:0.5333rem auto 0;
}
.mine-history>a>figure>img{
	display: block;
	width: 0.6666rem;
	margin:0 auto 0.3333rem;
}
.mine-history>a>figure>figcaption{
	font-size: 0.2666rem;
	text-align: center;
}
.mine-message{	
	width: 100%;
}
.mine-message>div{
	background: #fff;
	width: 100%;
	height: 1.2rem;
	line-height: 1.2rem;
	font-size: 0.3466rem;
	/*margin-top: 0.0533rem;*/
	position: relative;
}
.mine-message>div>span{
	margin-left: 0.2666rem;
}
.mine-message>div>span>img{
	width: 0.5333rem;
	vertical-align: middle;
}
.mine-message>div>i{
	font-style: normal;
	position: absolute;
	top: 0;
	right: 0.2133rem;
	color: #909090;
}
.mine-message>div>i>img{
	height: 0.3066rem;
	vertical-align: middle;
}
.mine-mgtop{
	margin-top: 0.1333rem;
	display: block;
}	
</style>