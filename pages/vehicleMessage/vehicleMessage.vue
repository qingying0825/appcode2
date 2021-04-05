<template>
	<view>
		<input class="input" type="text" v-model="vehicleName" placeholder="请输入车辆名字" placeholder-class="placeholder" />
		<view class="view-ciler"></view>
		<button @click="getData">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				terminalId:'288633931807334400',
				imei:'867258051351183',
				vehicleName:''
				
			}
		},
		methods: {
			getData(){
				setTimeout(()=>{
					uni.switchTab({
						url: '/pages/tabbar/index/index',
					});	
				},2000)
					const res = this.$myRequest({
						url: '/AppApi/PostBindInfo',
						method: 'POST',
						data: {
							terminalId:this.terminalId,
							imei: this.imei,
							vehicleName:this.vehicleName
						}
					}).then(res => {
						
						if(res.data.Tag == 0 ){
							uni.showToast({
									title: res.data.Message,
									duration: 2000
								})
						}else if(res.data.Tag == 1){
							uni.showToast({
									title: '恭喜你，绑定成功！',
									duration: 2000
								})	
								setTimeout(()=>{
									uni.switchTab({
										url: '/pages/tabbar/index/index',
									});	
								},2000)
								
						}
					})
				}
			
			
		}
	}
</script>

<style>
	.view-ciler{
		width: 50rpx;
		height: 50rpx;
		background: #007AFF;
		
	}

</style>
