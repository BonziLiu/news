<template>
	<div id="nav">
		<div v-for="m of res">
			<template  v-if="m.bigImg">
				<div class="play-main">
					<router-link :to="{name:'detail',params:{key:m.key}}" >
						<p>{{ m.newsTitle }}</p>
						<img :src="m.newsImg" />
						<i>时事热点</i>
						<span>{{ m.attention }}参与</span>
						<div>热门</div>			
					</router-link>
				</div>
			</template>

			<template v-else>
				<router-link :to="{name:'detail',params:{key:m.key}}" >
					<div  class="news-main1">
						<img :src="m.newsImg" />
						<div>
							<p>{{ m.newsTitle }}</p>
							<span>{{ m.newsContent }}</span>
						</div>
					</div>			
				</router-link>
			</template>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				id: this.$route.params.id,
				result: '',
				res:[]
			}
			
		},
		watch: {
			$route(newValue, oldValue) {
				this.res = [];
				this.id = this.$route.params.id;
				this.axios({
				method: 'get',
				url: '../../static/json/news.json'
				}).then(res =>{
					this.result = res.data.result;
					//筛选数据匹配当前路由对应数据
					for (let n of this.result) {
						if (n.id == this.id) {
							this.res.push(n);
						}
					}
				})
			}
		},	
		created () {
			this.axios({
				method: 'get',
				url: '../../static/json/news.json'
			}).then(res =>{
				this.result = res.data.result;
				//筛选数据
				for (let n of this.result) {
					if (n.id == this.id) {
						this.res.push(n);
					}
				}
			})
		}

		
	}
	
</script>

<style >
.news-news{
	width: 100%;
	background: #eef1f5;
	position: absolute;
	top: 1.1733rem;
	left: 0;
	bottom: 1.2933rem;
	overflow: auto;
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

.news-main1{
	width: 100%;
	height: 2.4666rem;
	background-color: #FFFFFF;
	margin-top: 0.0266rem;
	padding: 0.2266rem;
	display: flex;
}
.news-main1>img{
	width: 2.6666rem;
	height: 100%;
}
.news-main1>img[data-img='0']{
	display: none;
}
.news-main1>div{
	width: 6.4933rem;
	height: 2.0133rem;
	background-color: #fff;
	margin-left: 0.3066rem;
}
.news-main1>div>p{
	font-size: 0.4266rem;
	color:#333;
}
.news-main1>div>span{
	display: block;
	margin-bottom: 0.5rem;
	width:6.3rem;
	height: 0.5rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 0.2933rem;
	color: #9c9c9c;
}
.router-link-exact-active figure div{
  background-position: right top;
}
.router-link-exact-active figure figcaption{
  color:red;
}
.play-main{
	width: 10rem;
	background: #fff;
	padding-top: 0.1px;
	position: relative;
}
.play-main>a>p{
	font-size: 0.4133rem;
	color:#333;
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
	color:#333;
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


  

</style>
