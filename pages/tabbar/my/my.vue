<template>
	<view>
		<span>{{RealName}}</span>
		<button @click="outLogin">退出</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				RealName:''
			}
		},
		onLoad: function() {
			this.RealName = uni.getStorageSync('RealName')
			
			//console.log(uni.getStorageSync('RealName'))
		},
		methods: {
			outLogin(){
				uni.removeStorageSync('token')
				uni.removeStorageSync('isLogin')
				uni.removeStorageSync('RealName')
				this.RealName = uni.getStorageSync('RealName')
				uni.navigateTo({
					url: '/pages/reg/reg',
				});
			}
			
		}
	}
</script>

<style>

</style>
