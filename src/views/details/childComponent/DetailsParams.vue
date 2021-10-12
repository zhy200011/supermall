<template>
	<div class="details-params" >
		<div class="table">
			<div v-for="item in goodsParams.tables[0]"  class="table-head">
				<div v-for="i in item" class="table-head-name">{{i}}</div>
			</div>
		</div>
		<div class="set">
			<div class="table-head" v-for="item in goodsParams.set">
				<div >{{item.key}}</div>
				<div  class="value" >{{item.value}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			goodsParams:{
				type:Object,
				default(){return
					{
				
					}
				},
			}
		}
	}
</script>

<style scoped="scoped">
	.details-params{
		padding: 0 10px;
		background-color: #fff;
	}
	.table-head{
		display: flex;
		height: 25px;
		align-items: center;
		border-bottom: 2px solid #cbcbcb;
	}
	.table-head-name:first-child{
		flex: 3;
	}
	.table-head div{
		flex: 1;
	}
	.set .table-head  .value{
		flex: 3;
	}
	.set .value{
		color: #cb7c6e;
	}
	
</style>
