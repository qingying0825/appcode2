<template>
	<view>
		 <input class="uni-input" v-model="userName"  placeholder="请输入账号" />
		  <input class="uni-input" v-model="password" password type="text" placeholder="请输入密码" />
		<button @click="getData">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:'',
				password:''
				
			}
		},
		methods: {
			
         getData(){
				const res = this.$myRequest({
					url: '/User/Login',
					method:'POST',
					data:{
						userName:this.userName,
						password:this.password
					}
				}).then(res => {
					if(res.data.Tag == 1){
						uni.setStorageSync('token',res.data.Data.ApiToken)
						uni.setStorageSync('isLogin',true)
						uni.setStorageSync('RealName',res.data.Data.RealName)
						uni.navigateTo({
							url: '/pages/editreg/editreg',
						});						
						uni.showToast({
								title: res.data.Message,
								duration: 2000
							})
					}else{
						uni.showToast({
								title: res.data.Message,
								duration: 2000
							})
					}
					
			})
				
			}
			}
	}
</script>

<style>

</style>
