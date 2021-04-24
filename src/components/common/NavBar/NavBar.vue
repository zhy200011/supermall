<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.nav-bar{
		position: fixed;
		width: 100%;
		display: flex;
		z-index: 1;
		justify-content:space-between ;
		align-items: center;
		height:44px;
		top:0;
		box-shadow: 0px 1px 1px rgba(100,100,100,1);
		
		text-align: center;
		
	}
	.left{
		align-items:center;
		order: 1;
		flex: 1;
	}
	.center{
		align-items:center;
		order: 2;
		flex: 3;
	}
	.right{
		order: 3;
		flex: 1;
	}
</style>
