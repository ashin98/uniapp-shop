// 单个商品 封装
<template>
	<view class="commodity" :style="'flex-wrap:'+wrap+';'">
		<!-- 单个商品组件 -->
		<view class="commodity-item" v-for="(item,index) in dataList" :key="item.id" :style="'width:'+itemW+';'">
				<image class="commodity-img" :src="item.imageUrl" mode="" :style="'width:'+itemW+';' +'height:'+itemH+';'"></image>
			<view class="commodity-content">
				<text class="commodity-name" :style="'font-size:'+nameSize+';'+'-webkit-line-clamp:'+clamp+';'">{{item.name}}</text>
				<view class="price">
					<text class="pprice">￥{{item.pprice}}</text>
					<text class="oprice">￥{{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			dataList:Array,
			// 图片宽度
			itemW:{
				type:String,
				default:"375rpx"
			},
			//图片高度
			itemH:{
				type:String,
				default:"375rpx"
			},
			//是否换行
			wrap:{
				type:String,
				default:'wrap'
			},
			//商品文字大小
			nameSize:{
				type:String,
				default:'26rpx'
			},
			// 商品文字显示多少行
			clamp:{
				type:String,
				default:"2"
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.commodity{
	display: flex;
	/* flex-wrap: wrap; */
}
.commodity-item{
	/* width: 375rpx; */
	padding-bottom: 20rpx;
	
}
.commodity-img{
	width: 100%;
	/* height: 375rpx; */
}
.commodity-content{
	text-align: center;
}
.commodity-name{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	/* -webkit-line-clamp: 1; */
	-webkit-box-orient: vertical;
	color: #333;
	word-break: break-all;
	padding: 6rpx 20rpx;
}
.oprice{
	text-decoration: line-through;
	font-size: 24rpx;
	color: #999;
}
.discount{
	border-radius: 4rpx;
	border: 1px solid #ff3333;
	padding: 2rpx 10rpx;
	font-size: 20rpx;
	color: #ff3333;
}
</style>
