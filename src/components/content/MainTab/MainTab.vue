<template>
	<div>
		
	<tabbar>
		<tabbaritem path="/home" >
			<img slot="item-icon" src="~assets/img/tabbar/biaoqiankuozhan_zixun-199.svg" />
			<img slot="item-icon-active" src="~assets/img/tabbar/biaoqiankuozhan_zixun-1991.svg" />
			<div slot="item-text">首页</div>
		</tabbaritem>
		<tabbaritem path="/chart">
			<img slot="item-icon" src="~assets/img/tabbar/fenlei1.svg" />
			<img slot="item-icon-active" src="~assets/img/tabbar/fenlei2.svg" />
			<div slot="item-text">详情</div>
		</tabbaritem>
		<tabbaritem path="/aboute">
			<img slot="item-icon" src="~assets/img/tabbar/icon_huabanfuben.svg" />
			<img slot="item-icon-active" src="~assets/img/tabbar/icon_huabanfuben1.svg" />
			<div slot="item-text">关于</div>
		</tabbaritem>
		<tabbaritem path="/profiles">
			<img slot="item-icon" src="~assets/img/tabbar/wodedangxuan.svg" />
			<img slot="item-icon-active" src="~assets/img/tabbar/wodedangxuan1.svg" />
			<div slot="item-text">我的</div>
		</tabbaritem>			
	</tabbar>

	</div>
</template>

<script>
	import tabbar from 'components/common/TabBar/tabbar.vue'
	import tabbaritem from 'components/common/TabBar/tabbarItem.vue'
	import {getHomeData} from 'network/home.js'
	export default{
		components:{
			tabbar,
			tabbaritem,
		
		},
		mounted() {
			getHomeData()
		}
	}
</script>

<style>
</style>
