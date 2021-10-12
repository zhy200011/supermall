<template>
	<div v-if="Object.keys(goods).length!==0" class="base-info">
		<div class="base-title">
				<p>{{goods.title}}</p>
		</div>
		<div class="base-price">
			<span class="newLowPrice">{{goods.newprice}}</span>
			<span class="oldPrice">{{goods.ollprice}}</span>
			<span  v-if="goods.discount" class="price-type">{{goods.discount}}</span>
		</div>
		<div class="base-data">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		props:{
			goods:{
				type:Object,
				default(){return{}}
			}
		}
		
	}
</script>

<style>
	.base-info{
		padding: 0 5px;
	}
	.base-title{
		font-weight: bold;
	}
	.newLowPrice{
		padding:0 5px 0 0 ; 
		font-size: 20px;
		color:#aa3750;
	}
	.oldPrice{
		font-size: 12px;
		text-decoration: line-through;
		color: #ddd;
	}
	.price-type{
		display: inline-block;
		height: 14px;
		padding: 2px;
		font-size: 12px;
		text-align: center;
		border-radius: 10px;
		background-color:#aa3750 ;
		color: #fff;
	}
	.base-data{
		display: flex;
		margin-top: 10px;
		font-size: 14px;
		justify-content: space-between;
		color: #bbb;
		border-bottom: 2px solid #eaeaea;
	}
</style>
