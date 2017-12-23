<template>
	<div id="news">
		<header>
			<div>
				<a href="/play"><img src="../../assets/newsimg/news_left.png"/></a>	
				<a href="/news-search"><img src="../../assets/newsimg/news_right.png"/></a>
			</div>
		</header>

		<div class="news-news">
			<nav>
				<div>
					<div v-for= "(relation,index) in relations" v-bind:id="relation.id"  @click="relationClick(index)">
						<router-link class="news-font" :to="{name:'nav',params:{id:`${relation.id}`}}" tag="a">{{relation.text}}</router-link>
					</div>			
					<span>+</span>
				</div>				
			</nav>
			
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	export default{
		name: 'News',
		data () {
			return {
				relations: [  
		          {text:'头条',id:'headlines'},  
		          {text:'军事',id:'military'},  
		          {text:'科技',id:'science'},  
		          {text:'娱乐',id:'entertainment'},  
		          {text:'时尚',id:'fashion'},  
		          {text:'体育',id:'sport'},
		          {text:'其他',id:'others'}  
		        ],
		        isRed : -1
		        
			}
		},
		methods: {
			relationClick: function (index) {  
	          
	          this.isRed = index; 
	        }  
		}
	}
</script>

<style >
	
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
header>div{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
}
header>div a img:nth-child(1){
	height: 1.1733rem;
}
header>div img:nth-child(2){
	width: 1.2rem;
	height: 0.5466rem;
	margin: auto;
}
header>div a img:nth-child(3){
	height: 1.1733rem;
}

.news-news{
	width: 100%;
	background: #eef1f5;
	position: absolute;
	top: 1.1733rem;
	left: 0;
	bottom: 1.2933rem;
	overflow: auto;
}
nav{
	width: 100%;
	height: 1.12rem;
	background-color: #fdfdfd;
	overflow: auto;	
}
nav>div{
	display: flex;
	width: 14.666rem;
}
nav>div>div>a:nth-child(10){
	margin-right: 1.82rem;	
}

.news-font{
	display: block;
	width: 1.4666rem;
	height:1.12rem;
	line-height: 1.12rem;
	text-align: center;
	font-size: 0.36rem;
	color: #333;
}
nav>div>span{
	width: 1.12rem;
	height: 1.12rem;
	background-color: #fdfdfd;
	color: #9d9d9d;
	font-size: 0.8rem;
	line-height: 1.12rem;
	text-align: center;
	position: absolute;
	left: 8.88rem;
	box-shadow:  -0.5rem -0.333rem 0.5rem 0.2rem #fdfdfd;
}



.newsColor{
	font-size: 0.4533rem;
	color: #df3031;
}
.checked{  
       background: #eff4f7;  
   } 


</style>
