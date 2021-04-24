<template>
	<div id='tab-item' @click="clickItem">
		<div class="img" v-if="!isActive"><slot name="item-icon"></slot></div>
		<div class="img" v-else><slot name='item-icon-active'></slot></div>
	<div class="text" :style="activeStyle"><slot name="item-text"></slot> </div>
	</div>
</template>

<script>
	 export default {
		 data(){
			 return{
				 
			 }
		 },
		 props:{
			 path:String,
			 activeColor:{
				 type:String,
				 default:'red'
			 }
			 
		 },
		 computed:{
			 isActive(){
				// a.indexof(b),判断a中是否有b,有返回-1,没有不返回-1
				 return this.$route.path.indexOf(this.path)!==-1
			 },
			 //返回style类型
			 activeStyle(){
				 return this.isActive?{color:this.activeColor}:{}
			 }
		 },
		 methods:{
			 clickItem(){
				 this.$router.replace(this.path)
			 }
		 }
	 }
</script>

<style>
	#tab-item{
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		height: 49px;
		font-size: 12px;
	}
		#tab-item .img{
			height: 29px;
			margin-bottom: 3px;
		}
	#tab-item img{
		height: 29px;
		width: 29px;
		margin-top: 3px;
		
	},

	.active{
		color: red;
	}
	
</style>
