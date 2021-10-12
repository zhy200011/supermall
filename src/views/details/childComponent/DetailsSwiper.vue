<template>
	<div class="deswiper">
		<main-swiper :key="imgUrl.length">
			<div  class="swiper-slide" v-for="i in imgUrl">
				<img :src="i" />
			</div>
		</main-swiper>
	</div>
</template>

<script>
	import MainSwiper from 'components/common/MainSwiper/MainSwiper'
	
	export default{
		data(){
			return{
			
			}
		},
		props:{
			imgUrl:{
				type:Array,
				default(){return[]}
			}
		},
		components:{
			MainSwiper,
		},
		
	}
</script>

<style scoped >
	.deswiper {
		height: 300px;
		overflow: hidden;
	}
	.swiper-slide{
	height: 300px;
	}
	.swiper-slide img{
		width: 100%;
	}
</style>
