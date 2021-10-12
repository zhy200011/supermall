<template>
	<div id="commend">
		<div class="head">
			<span>用户评价</span>
			<span>更多</span>
		</div>
		<div class="user">
			<img :rc="commend.user.avatar" />
			<h3>{{commend.user.uname}}</h3>
		</div>
		<div class="content">
			<div class="commend-content"><p>
			{{commend.content}}
			</p></div>
			<div class="details-commend">
				<span> {{date}}</span>
				<span> {{commend.style}}</span>
			</div>
			<div class="commend-img"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				date:null
			}
		},
		props:{
			commend:{
				type:Object,
				default(){return{}}
			}
		},
		computed:{
			
		},
		watch:{
			commend(){
				let date =new Date(this.commend.created*1000)
				let year=date.getFullYear()
				let month=date.getMonth()+1;
				if(month<10){
					month='0'+month
				}
				
				let day =date.getDay();
				if(day<10){
					day='0'+day
				}
				this.date=year+'-'+month+'-'+day
			}
		},
		
	}
</script>

<style scoped="scoped">
	#commend{
		padding: 0 10px;
		margin-top: 5px;
		border-top: 5px solid #D1D1D1;
		background-color: #fff;
		
	}
	.head{
		display: flex;
		height: 50px;
		
		justify-content: space-between;
		align-items: center;
		border-bottom:1px solid #d1d1d1;
		
	}
	.user{
		display: flex;
		align-items: center;
		height:50px ;
		padding: 5px;
		
	
	}
	.user img{
		margin-right: 5px;
		height: 30px;
		width: 30px;
		
		border-radius: 50%;
	}
	.details-commend{
		color:rgb( 193, 193, 193);
	}
</style>
