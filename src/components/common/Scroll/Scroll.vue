<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default{
		data(){
			return{
					scroll:null,
			}
		},
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			// 滚动到指定位置方法
			scrollTo(x,y,time=200){
				this.scroll.scrollTo(x,y,time);
			},
			// 调用此方法结束此次上拉事件
			finish(){
				
				this.scroll.finishPullUp();
			},
			// 获取滚动高度放法
			getScrollY(){
				return this.scroll?this.scroll.y:0
			},
			// 强制刷新方法
			refresh(){
				this.scroll.refresh();
			}
			
		},
		mounted() {
			this.scroll=new BScroll(this.$refs.wrapper,{
				// 设置监听时机
				probeType:this.probeType,
				// 设置上啦监听
				pullUpLoad:this.pullUpLoad,
				// 设置内部可点击
				click:true});
				// 持续生效,监听scrol位置
				this.scroll.on('scroll',position=>{
					// console.log(position)
					// 发送事件和参数
				this.$emit('scroll',position)
				});
				this.scroll.on('pullingUp',()=>{
					this.$emit('pullingUp');
				});
		},
	}
</script>

<style scoped>
	.wrapper{
		height: 100%;
		
		margin-bottom: 49px;
		overflow: hidden;
	}
	
</style>
