import {request} from 'network/request'
export function getDetails(iid){
	return request({
		url:"/detail/",
		params:{
			iid
		}
	})
}
// 商品描述
export class Goods{
	constructor(itemInfo,columns,services) {
	    this.title=itemInfo.title;
		this.desc=itemInfo.desc;
		this.newprice=itemInfo.price;
		this.ollprice=itemInfo.oldPrice;
		this.discount=itemInfo.discountDesc;
		this.columns=columns;
		this.services=services;
		this.reaPrice=itemInfo.lowNowPrice;
	}
}
//商家信息
export class Shop{
	constructor(shopInfo) {
	    this.name=shopInfo.name;
		this.logo=shopInfo.shopLogo;
		this.csell=shopInfo.cSells;
		this.cgoods=shopInfo.cGoods;
		this.score=shopInfo.score;
		this.shopUrl=shopInfo.shopUrl;
		
	}
}
// 商品图片
export class GoodsImg{
	constructor(datailsinfo) {
	    this.imgUrl=datailsinfo.detailImage[0].list
	}
}
//商品参数
export class GoodsParams{
	constructor(info,rule){
		this.set=info.set;
		this.tables=rule.tables;
	}
}
//推荐数据
export function reCommend(){
	return request({
		url:"/recommend",
		})
	}
	