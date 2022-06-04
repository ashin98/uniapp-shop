// 推荐商品封装
<template>
	<view class="recommend bg-color">
	
		<view class="recommend-item" v-for="(item,index) in dataList" :key="index">
			<image class="img-big" :src="item.bigUrl" mode=""></image>
			<view class="img-small">
				<block v-for="(k,i) in item.data" :key="i">
				<image class="item-img" :src="k.imgUrl" mode=""></image>
				</block>
			</view>
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

<style scoped>
	.recommend{
		padding: 20rpx;
	}
	.recommend-item{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2px solid #ccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.img-big{
		width: 100%;
		height: 300rpx;
	}
	.img-small{
		width: 100%;
		height: 240rpx;
		
	}
	.img-small .item-img{
		width: 33.3333%;
		height: 240rpx;
	}
</style>
