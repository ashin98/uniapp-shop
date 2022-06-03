<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-big">
				<image class="shop-big" src="../../static/shop-img/shop.jpg" mode=""></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :dataList="shopList" itemW="200rpx" itemH="200rpx" wrap='nowrap' nameSize="20rpx" clamp="1"></Commodity>
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
				shopList:[
					{
						id:1,
						imageUrl:'/static/shop-img/shop1.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					},
					{
						id:2,
						imageUrl:'/static/shop-img/shop2.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					},
					{
						id:3,
						imageUrl:'/static/shop-img/shop3.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					},
					{
						id:4,
						imageUrl:'/static/shop-img/shop4.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					},
					{
						id:5,
						imageUrl:'/static/shop-img/shop5.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					}
				]
			}
		},
		components:{
			Commodity
		},
		methods: {
			
		}
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
