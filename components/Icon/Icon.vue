<template>
	<view class="icon">
		
		<view class="icon-item">
			<image class="icon-img" src="../../static/sportIcon-img/icons1.png" mode=""></image>
			<text class="name">运动户外</text>
		</view>
		<view class="icon-item">
			<image class="icon-img" src="../../static/sportIcon-img/icons2.png" mode=""></image>
			<text class="name">运动户外</text>
		</view>
		<view class="icon-item">
			<image class="icon-img" src="../../static/sportIcon-img/icons3.png" mode=""></image>
			<text class="name">运动户外</text>
		</view>
		<view class="icon-item">
			<image class="icon-img" src="../../static/sportIcon-img/icons4.png" mode=""></image>
			<text class="name">运动户外</text>
		</view>
		<view class="icon-item">
			<image class="icon-img" src="../../static/sportIcon-img/icons5.png" mode=""></image>
			<text class="name">运动户外</text>
		</view>
		<view class="icon-item">
			<image class="icon-img" src="../../static/sportIcon-img/icons6.png" mode=""></image>
			<text class="name">运动户外</text>
		</view>
		<view class="icon-item">
			<image class="icon-img" src="../../static/sportIcon-img/icons7.png" mode=""></image>
			<text class="name">运动户外</text>
		</view>
		<view class="icon-item">
			<image class="icon-img" src="../../static/sportIcon-img/icons8.png" mode=""></image>
			<text class="name">运动户外</text>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scpoed>
.icon{
	display: flex;
	width: 100%;
	flex-wrap: wrap;
}
.icon-item{
	display: flex;
	flex-direction: column;
	width: 25%;
	justify-content: center;
	align-items: center;
	padding-top: 20rpx;
}
.icon-img{
	width: 110rpx;
	height: 110rpx;
	border-radius: 10rpx;
	
}
.name{
	color: #636263;
}
</style>
