<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="left"></div>
			<div slot="center">购物街</div>
			<div slot="right"></div>
		</nav-bar>
		<Scroll ref="scroll" 
		@scroll="getPos"
		@pullingUp="pullUpLoad"
		:pull-up-load="true"
		:probe-type="3">
			<main-swiper  :banner="banner"></main-swiper>
			<Recommend :recommend="recommend"></Recommend>
			<Feature ></Feature>
			<tab-control
			 @tabClick="tabClick"
			 :titles="['流行','精品','新款']"></tab-control>
		
			<goods-list :goods="showData" ></goods-list>
		</Scroll>
		<back-top 
		v-if="isBack"
		 @click.native='topClick'></back-top>
	</div>
</template>

<script>
	
	import NavBar from 'components/common/NavBar/NavBar';
    import MainSwiper from 'components/common/MainSwiper/MainSwiper';
	import Scroll from 'components/common/Scroll/Scroll'
	
	import TabControl from 'components/content/tabControl/TabControl';
	import GoodsList from 'components/content/Goods/GoodsList';
		
	import Recommend from 'views/Home/childComponent/Recommend';
	import Feature from 'views/Home/childComponent/Feature';
	import BackTop from 'views/Home/childComponent/BackTop';
	

	import {getHomeData,
	getHomeGoods
	} from 'network/home';
	
	export default{
		data(){
			return{
				imgUrl:null,
				banner:[],
				recommend:[],
			
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				currenttype:'pop',
				isBack:false,
			}
		},
		components:{
			NavBar,
			MainSwiper,
			Scroll,
			
			TabControl,
			GoodsList,
			
			Recommend,
			Feature,
			BackTop,
			
			
		},
			
		methods:{
			// 网络请求
			getHomeData(){
				getHomeData().then(res=>{
					this.imgUrl=res
					this.banner=res.data.banner.list;
					this.recommend=res.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1;
				getHomeGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list);
					console.log(res.data.list);
					// 调用此事件重新计算better-scroll的内容高度
					this.$refs.scroll.scroll.refresh()
				})
			},
		
			// 事件监听
			// 选择类型
			tabClick(index){
				switch(index){
					case 0:
					this.currenttype='pop'
					break;
					case 1:
					this.currenttype='new'
					break;
					case 2:
					this.currenttype='sell'
					break;
				}
			},
			// 回到顶部
			topClick(){
				// console.log(1)
				// 调用scroll组件的scrollTo方法
				this.$refs.scroll.scrollTo(0,-49,300);
			},
			// 上拉加载事件
			pullUpLoad(){
				this.getHomeGoods(this.currenttype);
			// 调用finish结束本次上拉加载事件
				this.$refs.scroll.finish();
				
			},
			
			//事件主线，获取滚动栏的位置信息
			getPos(position){
				if(position.y<-1000){
					this.isBack=true
				}
				else this.isBack=false
				// this.isBack=i;
				// console.log(position);
			},
			
		},
		computed:{
			showData(){
				return	this.goods[this.currenttype].list
			},
			// 是否出现返回顶部按钮
			// isBack(){
			// 	let isback= this.$refs.scroll.scrollIsBack(-1000);
			// 	return isback
			// }
		},
		created() {
			this.getHomeData();
			this.getHomeGoods('pop');
			this.getHomeGoods('new');
			this.getHomeGoods('sell');
		},
		mounted() {
		
		},
	

	}
</script>

<style>
	#home{
		height: 100vh;
	}
	.home-nav{
		width: 100%;
		
		background-color: rgba(245, 114, 116, 1);
		color: #fff;
	}
</style>
