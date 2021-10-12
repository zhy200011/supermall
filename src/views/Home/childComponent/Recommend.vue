<template>
	<div class="recommend">
		<div v-for="i in recommend" class="recommend-item">
			<img :src='i.image' />
			<span>{{i.title}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			recommend:{
				type:Array,
				default(){
					return[]
				}
			}
			
		}
		
	}
</script>

<style>
	.recommend{
		display: flex;
		width: 98%;
		padding: 1%;
		
	}
	.recommend-item{
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
	}
	.recommend-item img{
		width: 65px;
		height: 65px;
	}
	.recommend-item span{
		padding-top: 7px;
	}
</style>
