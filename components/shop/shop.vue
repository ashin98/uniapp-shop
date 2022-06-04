<template>
	<view class="shop">
		<view class="shop-item" v-for="(item,index) in dataList" :key="index">
			<view class="shop-big">
				<image class="shop-big" :src="item.bigUrl" mode=""></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :dataList="item.data" itemW="200rpx" itemH="200rpx" wrap='nowrap' nameSize="20rpx" clamp="1"></Commodity>
				</view>
				
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import Commodity from '../Commodity-List/commodity/commodity.vue'
	export default {
		data() {
			return {
				
			}
		},
		props:{
			dataList:Array
		},
		components:{
			Commodity
		},
		
		
	}
</script>

<style scoped>
.shop-big{
	width: 100%;
	height: 350rpx;
}
.scroll-content{
	width: 100%;
	/* white-space: nowrap; */
	
}
.scroll-item{
	display: inline-block;
	
}
</style>
