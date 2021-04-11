<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	#tabbar{
		display: flex;
		position: fixed;
		background-color: #f2f2f2;
		flex: 1;
		/* 保证整个宽度完全沾满 */
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0px -2px 1px #ccc ;
	}
	
</style>
