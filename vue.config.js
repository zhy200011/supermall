module.exports={
	configureWebpack:{
		resolve:{
			alias:{
				'assets':'@/assets',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views',
				
			}
		},
	
	},
	// 配置设置接口
	// devServer:{
	// 	proxy:{
	// 		// '/setapi':{
	// 		// 	target:'http://image.baidu.com:8081/channel/listjson',		//请求的第三方接口，
	// 		// 	changeOrigin:true,//表示允许跨域，并创建一个虚拟服务器
	// 		// 	pathRewrite:{//路径重写
	// 		// 		'^setapi':'',//将含有setapi的路径替换为target的路径
	// 		// 	}
				
	// 		// }
	// 	}
	// }
}