<template>
    <div id="detail">
        <header>
            <a href="#" @click.stop='$router.go(-1)'>&lt;</a> 
        </header>
        
        <div class="details-main" v-for='n in res'> 
            <b>{{n.newsTitle}}</b>
            <img :src="n.newsImg" alt="">
            <p>{{ n.newsContent }}</p>
            <img :src="n.newsImg2" alt="">
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                key: this.$route.params.key,
                res:[]
            }
        },
        watch: {
			$route(newValue, oldValue) {
				this.res = [];
				this.key = this.$route.params.key;
				this.axios({
				method: 'get',
				url: '../../static/json/news.json'
				}).then(res =>{
					this.result = res.data.result;
					//筛选数据匹配当前路由对应数据
					for (let n of this.result) {
						if (n.key == this.key) {
							this.res.push(n);
						}
					}
				})
			}
        },
        methods: {

        },
        created() {
            this.axios({
				method: 'get',
				url: '../../static/json/news.json'
				}).then(res =>{
					this.result = res.data.result;
					//筛选数据匹配当前路由对应数据
					for (let n of this.result) {
						if (n.key == this.key) {
							this.res.push(n);
						}
					}
				})
        }
    }
    
</script>

<style>
#detail{
    width: 10rem;
    height: 100%;
}
header{
	width: 100%;
	height: 1.1733rem;
	background-color: #df3031;
	position: fixed;
	top: 0;
	left: 0;
}
header>a{
    font-family: '微软雅黑';
	display: block;
	width: 0.8rem;
	height: 0.8rem;
	border: 0.02rem solid #FFFFFF;
	border-radius: 50%;
	color: #FFFFFF;
	text-align: center;
	line-height: 0.8rem;
	font-size: 0.2rem;
	position: absolute;
	top: 0.16rem;
	left: 0.2666rem;
}
.details-main{
    display: block;
	margin-top: 1.1733rem;
	width: 8.5rem;
	height: 100%;
	margin-left: 0.75rem;
    padding-top: 0.5rem;
}
.details-main>img{
	width: 8.5rem;
}
.details-main>b{
	margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}
.details-main>p{
    text-indent: 2em;
	font-size: 0.4rem;
	line-height: 0.8rem;
}

</style>
