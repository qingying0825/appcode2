// 二次封装请求接口
const BASE_URL = 'http://ecvv.f3322.net:5003'

export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			header: options.method == 'GET' ? {
				'X-Requested-With': 'XMLHttpRequest',
				'ApiToken':uni.getStorageSync('token'),
				"Accept": "application/json",
				"Content-Type": "application/json; charset=UTF-8"
			} : {
				'X-Requested-With': 'XMLHttpRequest',
				'ApiToken':uni.getStorageSync('token'),
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			dataType: 'json',
			data: options.data || {},
			success: (res) => {
				resolve(res)
				// if (res.data.Tag == 1) {
					
				// }else if(res.data.Tag == 0){
				// 	return uni.showToast({
				// 		title: res.data.Message,
				// 		duration: 2000
				// 	})
				// }
					
				
			},
			fail: (err) => {
				return uni.showToast({
					title: '请求接口失败',
					duration: 2000
				})
				reject(err)
			}
		})
	})
}
