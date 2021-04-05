<template>
	<view>
		 <input class="uni-input" v-model="password" password type="text" placeholder="请输入密码" />
	<input class="uni-input" v-model="email"  placeholder="请输入邮箱" />
	<input class="uni-input" v-model="realName"  placeholder="请输入昵称" />
	<button @click="editMessage">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:'',
				password:'',
				realName:''
			}
		},
		methods: {
			editMessage(){
				const res = this.$myRequest({
					url: '/User/UpdateUserBaseInfo',
					method: 'POST',
					data: {
						email:this.email,
						password:this.password,
						realName:this.realName
					}
				}).then(res => {
					console.log(res.data)
				})
			}
			
		}
	}
</script>

<style>

</style>
