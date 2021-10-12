<template>
	<div class='tabcontrol'>
		<div v-for="(item,index) in titles" 
		class="tabcontrol-item"
		@click="change(index)"
		:class="[currentIndex==index?'active':'']">
			 <span >{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			titles:{
				type:Array,
				default(){return[]}
			},
		},
		data(){
			return{
				currentIndex:0,
			}
		},
		methods:{
			change(index){
				this.currentIndex=index;
				this.$emit('tabClick',index);
			}
		}
	}
</script>

<style>
	.tabcontrol{
		z-index: 1;
		display: flex;
		justify-content: space-around;
		font-size: 15px;
		background-color: #fff;
	}
	.tabcontrol-item{
		width: 60px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	.active{
		color: hotpink;
		border-bottom: 3px solid #cc7e7f;
	}
</style>
