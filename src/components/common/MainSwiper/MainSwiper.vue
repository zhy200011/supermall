<template>

		 <div class="swiper-container " ref="swipercontainer">
		    <div class="swiper-wrapper">
				<slot></slot>
			</div>
			<!-- 分页器 -->
			<div class="swiper-pagination"></div>
		  </div>


</template>

<script>
	import Swiper from "swiper/swiper-bundle.min.js"
	import 'swiper/swiper-bundle.css';
	import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	
	SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
	export default{
		mounted() {
			let mainSwiper=new Swiper(this.$refs.swipercontainer,{
				loop:true,//循环
				centeredSlides:true,
				pagination:{
					el:'.swiper-pagination',
					clickable:true
				},
				autoplay:{
					delay:2000,
					disableOnInteraction:false
				}
			})
		},
	}
</script>
		
<style scoped>
	
	
</style>
