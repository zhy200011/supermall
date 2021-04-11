<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<h2>首页</h2>
	</div>
</template>

<script>
	import NavBar from 'components/common/NavBar/NavBar'
	
	export default{
		components:{
			NavBar,
		}
	}
</script>

<style>
	.home-nav{
		background-color: rgba(245, 114, 116, 0.8);
		color: #fff;
	}
</style>
