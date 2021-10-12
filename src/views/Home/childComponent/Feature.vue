<template>
	<div class="feature">
		<a href="https://act.mogujie.com/zzix67">
		<img src="~assets/img/swiperimg/timg1.jpg" alt="暂未加载" />
		</a>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// 获取地址通过require('地址')
				imgsrc:require('assets/img/swiperimg/timg1.jpg')
			}
		}
	}
</script>

<style>
	.feature{
	
		border-top: 15px solid #ddd;
		width: 100%;
		height: 150px;
	}
	.feature img{
		width: 100%;
		height: 100%;
	}
</style>
