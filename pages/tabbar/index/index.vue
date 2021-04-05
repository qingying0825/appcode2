<template>
	<view class="content">
		<view>
			<button @click="getVehicle">绑定车辆</button>
			<button @click="getExperience">虚拟体验</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我的小迪',
				
			}
		},
		onLoad() {
			console.log(111)
			uni.getSystemInfo({
				success(res){
					console.log('successs',res)
				},
				fail(err) {
					console.log('fail',err)
				},
				complete(res) {
					console.log('ddd')
				}
			})
		},
		//tabbar 点击触发
		onTabItemTap(e){
			console.log((e))
		},
		methods: {
			getVehicle(){
				uni.navigateTo({
					url: '/pages/vehicle/vehicle',
				});	
				
			},
			getExperience(){
				uni.navigateTo({
					url: '/pages/experience/experience',
				});	
			},

		}
	}
</script>
<style lang="scss">
	
</style>
