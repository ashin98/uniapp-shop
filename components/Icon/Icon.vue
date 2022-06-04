<template>
	<view class="icon">
		
		<view class="icon-item" v-for="(item,index) in dataList" :key="index">
			<image class="icon-img" :src="item.imgUrl" mode=""></image>
			<text class="name">{{item.name}}</text>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			dataList:Array
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
