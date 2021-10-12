<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.nav-bar{
		position: relative;
		display: flex;
		width: 100%;
		height:44px;

		z-index: 10;
		justify-content:space-between ;
		align-items: center;
		
		box-shadow: 0px 1px 1px rgba(100,100,100,1);
		text-align: center;
		
	}
	.left{
		align-items:center;
		order: 1;
		flex: 1;
	}
	.center{
		display: flex;
		justify-content: space-around;
		align-items:center;
		order: 2;
		flex: 3;
	}
	.right{
		order: 3;
		flex: 1;
	}
</style>
