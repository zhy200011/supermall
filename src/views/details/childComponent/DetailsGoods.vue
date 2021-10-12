<template>
	<div id="goodsimg">
		<div v-for="i in imgUrl">
			<img :src="i" @load="imgLoad" />
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				counter:0,
				imgLength:0,
			}	
		},
		props:{
			imgUrl:{
				type:Array,
				default(){return[]}
			}
		},
		methods:{
			imgLoad(){
				this.counter++;
				if(this.counter===this.imgUrl.length){
					this.$emit('imgLoad')
				}
			}
		},
		watch:{
			imgUrl(){
				this.imgLength=this.imgUrl.length
			}
		}
	}
</script>

<style scoped>
	#goodsimg{
		position: relative;
		width: 100%;
		
	}
	#goodsimg img{
		width: 100%;
	}
</style>
