// 卡片封装
<template>
	<view class="card">
		<view>-</view>
		<view class="card-name">{{cardTitle}}</view>
		<view>-</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			cardTitle:String
		}
		
	}
</script>

<style scoped>
.card{
	padding: 40rpx 0;
	display: flex;
	justify-content: center;
	font-weight: bold;
}
.card-name{
	padding: 0 20rpx;
}
</style>
