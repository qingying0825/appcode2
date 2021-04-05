<template>
	<view>
		<input class="input" type="text" v-model="imei" placeholder="请输入imei" placeholder-class="placeholder" />
		<button @click="getData">绑定设备</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imei:''
			}
		},
		methods: {
			getData(){
				const res = this.$myRequest({
					url: '/AppApi/GetBindInfo',
					method: 'GET',
					data: {
						imei: this.imei,
					}
				}).then(res => {
					if(res.data.Tag == 0 || res.data.Tag == -1){
						uni.showToast({
								title: res.data.Message,
								duration: 2000
							})
					}else if(res.data.Tag == 1){
							uni.navigateTo({
								url: '/pages/vehicleMessage/vehicleMessage',
							});	
					}else if(res.data.Tag == 2){
						uni.showToast({
								title: '该车辆已绑定，无需重复绑定',
								duration: 2000
							},()=>{
								uni.switchTab({
									url: '/pages/tabbar/index/index',
								});	
							})
						
					}
					//console.log(res.data)
				})
			}
		}
	}
</script>

<style>

</style>
