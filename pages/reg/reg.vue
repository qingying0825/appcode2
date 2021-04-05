<template>
	<view>
		<input class="input" type="number" v-model="mobile" placeholder="请输入手机号码" placeholder-class="placeholder" />
		<input class="input" type="number" v-model="code" placeholder="请输入验证码" placeholder-class="placeholder" />
		<button @click="getData">发送验证码1</button>
		<button @click="getData1">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: '',
			}
		},
		methods: {
			getData() {
				const res = this.$myRequest({
					url: '/User/SendLoginSmsCode',
					method: 'POST',
					data: {
						mobile: this.mobile,
					}
				}).then(res => {
					console.log(res.data)
				})

			},
			getData1() {
				const res = this.$myRequest({
					url: '/User/LoginBySMSCode',
					method: 'POST',
					data: {
						mobile: this.mobile,
						code: this.code
					}
				}).then(res => {
					if (res.data.Tag == 0) {
						uni.setStorageSync('token',res.data.Data.ApiToken)
						uni.navigateTo({
							url: '/pages/editreg/editreg',
						});
					}else if(res.data.Tag == 1){
						uni.setStorageSync('token',res.data.Data.ApiToken)
						uni.setStorageSync('isLogin',true)
						uni.setStorageSync('RealName',res.data.Data.RealName)
						uni.switchTab({
							url: '/pages/tabbar/index/index',
						});	
					}
				})

			},


		}
	}
</script>

<style>

</style>
