<template>
	
	<div class="goods">
			<goods-list-item v-for="i in goods" 
			:goodsItem="i"></goods-list-item>
	</div>

</template>

<script>
	import GoodsListItem from 'components/content/Goods/GoodsListItem';
	
	export default{
		name:'GoodsList',
		props:{
			goods:{
				type:Array,
				default(){return[]}
			}
		},
		components:{
			GoodsListItem,
		},
		mounted() {
		
		},
		
	}
</script>

<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		}
	
</style>
