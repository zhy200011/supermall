<template>
	<nav-bar class="nav-bar">
		<div slot="left" @click="back"><</div>
		<div 
		 @click="setcurrentIndex(index)"
		 slot="center" v-for="(i,index) in title"
		 :class="[currentIndex==index?'active':'']"
		 >{{i}}</div>
	</nav-bar>
</template>

<script>
		import NavBar from 'components/common/NavBar/NavBar'
		export default{
			data(){
				return{	
					title:["商品","参数","评论","推荐"],
					currentIndex:0,
					}
			},
			components:{
				NavBar
				
			},
			methods:{
				setcurrentIndex(index){
					this.currentIndex=index
				},
				back(){
					this.$router.back(-1)
				},
				
			}
		}
</script>

<style scoped>
	.active{
		color: red;
	}
	.nav-bar{
		z-index: 15;
		background-color: #fff;
	}
</style>
