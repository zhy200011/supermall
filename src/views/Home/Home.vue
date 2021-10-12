<template>
	
	<div id="home" >
		<nav-bar class="home-nav">
			<div slot="left"></div>
			<div slot="center">购物街</div>
			<div slot="right"></div>
		</nav-bar>
		<tab-control
		 @tabClick="tabClick"
		 :titles="['流行','精品','新款']"
		:class="{isfixed:isTabFixed}"
		 v-if="isTabFixed"
		  ></tab-control>
		<Scroll ref="scroll" 
		@scroll="getPos"
		@pullingUp="pullUpLoad"
		:pull-up-load="true"
		:probe-type="3">
			<main-swiper :key='banner.length' >
				<div class="swiper-slide" v-for="i in banner">
					<a :href="i.link">
						<img :src="i.image" :title="i.title" />
					</a>
				</div>
			</main-swiper>
			<Recommend :recommend="recommend"></Recommend>
			<Feature ></Feature>
			<tab-control ref="tabcontrol"
			 @tabClick="tabClick"
			 v-show="!isTabFixed"
			 :titles="['流行','精品','新款']"
			:class="{isfixed:isTabFixed}"
			 ></tab-control>
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
				bannerImg:[],
				bannerTit:[],
				bannerLink:[],
				recommend:[],
			
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				currenttype:'pop',
				isBack:false,
				offesettop:456,
				// 默认不吸顶
				isTabFixed:false,
				saveY:0,
				
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
					this.banner=res.data.banner.list
					this.recommend=res.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1;
				getHomeGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list);
					// console.log(res.data.list);
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
				this.$refs.scroll.scrollTo(0,0,300);
			},
			// 上拉加载事件
			pullUpLoad(){
					this.getHomeGoods(this.currenttype);
					// 调用finish结束本次上拉加载事件
						this.$refs.scroll.finish();
			
			},
			
			//事件主线，监听滚动栏的位置信息
			getPos(position){
				if(position.y<-1000){
					this.isBack=true
				}
				else this.isBack=false;
				if(-position.y>=this.offesettop){
					this.isTabFixed=true
				}
				else this.isTabFixed=false;
				return position
			},
			//获取距离顶部的高度
			getTop(){
				this.offesettop=this.$refs.tabcontrol.$el.offsetTop;
				console.log(this.$refs.tabcontrol.$el.offsetTop)
			}
		},
		computed:{
			showData(){
				return	this.goods[this.currenttype].list
			},
			
		},
		created() {
		
			this.getHomeGoods('pop');
			this.getHomeGoods('new');
			this.getHomeGoods('sell');
		
			
		},
		mounted() {
				this.getHomeData();
		setTimeout(()=>this.getTop(),2000)
		
		},
		//keep alive激活时，离开时
		activated(){
			this.$refs.scroll.scrollTo(0,this.saveY,0.1)
			this.$refs.scroll.scroll.refresh()
		},
		deactivated(){
		this.saveY=	this.$refs.scroll.getScrollY();
		},
	

	}
</script>

<style scoped>
	#home{
		height: 100vh;
	}
	.home-nav{
		width: 100%;
		background-color: rgba(245, 114, 116, 1);
		color: #fff;
	}
	.isfixed{
		position: fixed;
		z-index: 3;
		top: 44px;
		left: 0;
		right: 0;
	}
	.swiper-slide img{
		height: 200px;
	}
</style>
