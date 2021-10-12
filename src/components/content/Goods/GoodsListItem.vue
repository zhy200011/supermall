<template>
	
	<div class="goodsitem" @click="toDetails" >
		
		<img :src="goodsItem.show.img"
		 :alt="goodsItem.props[0]"/>
		<div class="goods-text">
			<p :title="goodsItem.props[0]">{{goodsItem.props[0]}}</p>
			<div class="goodsitem-text">
				<div class="goodsprice">
					<span>￥{{goodsItem.price}}</span>
				</div>
				<div class="star">
					<span>★{{goodsItem.cfav}}</span>
				</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		props:{
			goodsItem:{
				type:Object,
				default(){return {}}
			}
		},
		methods:{
			toDetails(){
				this.$router.push('/details/'+this.goodsItem.iid);
			
			}
		}
	}
</script>

<style>
	.goodsitem{
		width: 48%;
		padding: 0 1%;
		margin-top: 15px;
		overflow: hidden;
		font-size: 16px;
	}
	.goodsitem img{
		width: 100%;
		border-radius: 5px;
	}
	.goodsitem a{
		text-decoration: none;
		color: #000;
	}
	.goods-text p{
		margin: 0;
		width: 98%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	
	.goodsitem-text{
		display: flex;
		justify-content: space-evenly;
	}
	.star{
		color: red;
	}
</style>
