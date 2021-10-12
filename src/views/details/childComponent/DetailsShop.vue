<template>
	<div id="shop">
		<div class="shop-name">
			<div class="logo">
				<img :src="shop.logo" />
			</div>
			<span>{{shop.name}}</span>
		</div>
		<div class="shop-data">
			<div class="shop-sell">
				<div>
					<p>{{shop.csell}}</p>
					<span>总销量</span>
				</div>
				<div >
					<p>{{shop.cgoods}}</p>
					<span>全部宝贝</span>
				</div>
			</div>
			<div class="shop-score">
				<div v-for="item in shop.score">
					<span>{{item.name}}</span>&nbsp;
					<span class="score">{{item.score}}</span>
					<span class="isbetter">{{item.isBetter?"高":"低"}}</span>
				</div>
			</div>
		</div>
		<div class="go-shop">
			<a :href="shop.shopUrl">
				<button>进店逛逛</button>
			</a>
		</div>
	</div>
	
</template>
<script>
	 export default{
		 props:{
			 shop:{
				 type:Object,
				 default(){}
			 }
		 }
	 }
</script>
<style scoped>
	#shop{
		position: relative;
		z-index: 10;
		background-color: #fff;
	}
	.shop-name{
		display: flex;
		height: 90px;
		padding:0 15px;
		align-items: center;
		font-size: 16px;
		font-weight: bold;
	}
	.logo img{
		width:50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 10px;
		box-shadow: 1px 1px 2px rgba(192, 226, 255, 1.0);
	}
	.shop-data{
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		align-items: center;
	}
	.shop-sell{
		display: flex;
		flex: 1;
		align-items: center;
		padding: 10px 5px;
		
			border-right: 2px solid #ccc;
	
	}
	.shop-sell div{
		display: flex;
		width: 50%;
		flex-direction: column;
		align-items: center;
		line-height: 1px;
		
	}
	
	.shop-score{
		flex: 1;
		padding: 5px 10px;
	
	}
	.shop-score .score{
		color:red;
	}
	.shop-score .isbetter{
		display: inline-block;
		width: 16px;
		height: 16px;
		position: absolute;
		right: 10px;
		background-color: red;
		color: #fff;
	} 
	.go-shop{
		width: 50%;
		margin: 20px auto;
		border-radius: 8px;
		overflow: hidden;
	}
	.go-shop button{
		
		width: 100%;
		background-color: #e2e2e2;
		border: 0;
		color:#a8a8a8 ;
		
	}
</style>