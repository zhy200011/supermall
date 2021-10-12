<template>
	<div id="details">
		<details-nav-bar></details-nav-bar>
		<Scroll
		ref="scroll"
		:probeType="3"
		 class="wrapper">
		<details-swiper :imgUrl="topImg"></details-swiper>
		<details-base-info :goods="goods"></details-base-info>
		<details-shop :shop="shop"></details-shop>
		<detail-goods :imgUrl="goodsimg" 
		@imgLoad="imgLoad"></detail-goods>
		<details-params :goodsParams="goodsParams"></details-params>
		<details-commend :commend="Commend"></details-commend>
		<details-re-commend :recommend="reCommend"></details-re-commend>
		</Scroll>
	</div>
</template>

<script >
	import DetailsNavBar from 'views/details/childComponent/DetailsNavBar.vue'
	import DetailsSwiper from 'views/details/childComponent/DetailsSwiper.vue'
	import DetailsBaseInfo from 'views/details/childComponent/DetailsBaseInfo.vue'
	import DetailsShop from 'views/details/childComponent/DetailsShop.vue'
	import DetailGoods from 'views/details/childComponent/DetailsGoods'
	import DetailsParams from 'views/details/childComponent/DetailsParams'
	import DetailsCommend from 'views/details/childComponent/DetailsCommend'
	import DetailsReCommend from 'views/details/childComponent/DetailsReCommend'
	
	 
	import Scroll from 'components/common/Scroll/Scroll';
	
	import {getDetails,Goods,Shop,
	GoodsImg,GoodsParams,reCommend} from 'network/details'
	export default {
		name:'Details',//方便keep-alive排除此组件
		data(){
			return{
				id:null,
				topImg:[],
				goods:{},
				shop:{},
				goodsimg:[],
				goodsParams:{
					tables:[],
					set:[]},
				Commend:{},
				reCommend:[],
				
			}
		},
		methods:{
			//根据id获取数据
			getDetails(id){
				getDetails(id).then(res=>{
					this.topImg=res.result.itemInfo.topImages;
					const data=res.result
					// 商品图片和描述
					this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
					// 商家信息
					this.shop=new Shop(data.shopInfo)
					//穿戴效果
					this.goodsimg=new GoodsImg(data.detailInfo).imgUrl
					//商品参数
					this.goodsParams=new GoodsParams(data.itemParams.info,data.itemParams.rule)
					//商品评论
					if(data.rate.cRate!==0){
						this.Commend=data.rate.list[0];
					}
					//推荐商品数据
				reCommend().then(res=>{
					this.reCommend=res.data.list
				})
				
				})
			},
			// 监听商品图片加载完成
			imgLoad(){	
				this.$refs.scroll.refresh();
				// 打印加载完成之后的高度
				// console.log(this.$refs.scroll.scroll.scrollerHeight)
				// console.log(this.$refs.scroll)
				// console.log(this.goodsimg.length)
			}
			
		
		},
		components:{
			DetailsNavBar,
			DetailsSwiper,
			DetailsBaseInfo,
			DetailsShop,
			DetailGoods,
			DetailsParams,
			DetailsCommend,
			DetailsReCommend,
			
			Scroll,
		},
		mounted() {
			
		},
		created() {
			this.id=this.$route.params.id
			this.getDetails(this.id)
		},
	
		
	}
</script>

<style scoped>
	#details{
		position: relative;
		height: 100vh;
		background-color: #fff;
	}
	.wrapper{
		position: relative;
		height: calc(100% - 44px);
		z-index: 10;
	}
</style>
