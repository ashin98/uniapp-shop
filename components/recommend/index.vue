// 推荐商品封装
<template>
	<view class="recommend bg-color">
	
		<view class="recommend-item">
			<image class="img-big" src="../../static/recommend-img/Furnishing.jpg" mode=""></image>
			<view class="img-small">
				<image class="item-img" src="../../static/recommend-img/Furnishing2.jpg" mode=""></image>
				<image class="item-img" src="../../static/recommend-img/Furnishing2.jpg" mode=""></image>
				<image class="item-img" src="../../static/recommend-img/Furnishing2.jpg" mode=""></image>
			</view>
		</view>
		
		<view class="recommend-item">
			<image class="img-big" src="../../static/recommend-img/Furnishing.jpg" mode=""></image>
			<view class="img-small">
				<image class="item-img" src="../../static/recommend-img/Furnishing2.jpg" mode=""></image>
				<image class="item-img" src="../../static/recommend-img/Furnishing1.jpg" mode=""></image>
				<image class="item-img" src="../../static/recommend-img/Furnishing3.jpg" mode=""></image>
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
