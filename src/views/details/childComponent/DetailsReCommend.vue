<template>
	<div id="recommend">
		<h5>-------------推荐------------</h5>
		<div class="recom-item">
			<div v-for="i in recommend" class="goods" 
			@click="toDetails(i.item_id)">
				<img  :src="i.image"  />
				<p>{{i.title}}</p>
				<span class="red"> {{i.discountPrice}}</span>
				<span>☆{{i.cfav}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {getDetails} from 'network/details'
	export default{
		
		
		props:{
			recommend:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		methods:{
			toDetails(id){
				this.$router.push('/details/'+id);
			}
		}
	}
</script>

<style scoped="scoped">
	#recommend{
		padding: 0 10px;
		text-align: center;
	}
	.recom-item{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.goods{
		width: 45%;
		border-radius: 5px;
		overflow: hidden;
	}
	.goods img{
		width: 100%;
	}
	.goods p{
		margin: 0;
		width: 98%;
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.red{
		display: inline-block;
		margin:0 10%;
		color: red;
	}
</style>
