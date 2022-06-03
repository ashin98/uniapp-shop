<template>
	<view class="index">
		<!-- #ifdef MP-WEIXIN -->
			<!-- <view class="wx-nav">
				<view class="iconfont icon-Magnifier"></view>
				<text>阿信商城</text>
				<view class="iconfont icon-xiaoxi"></view>
			</view> -->
		<!-- #endif -->
		
		<!-- <IndexSwiper></IndexSwiper>
		<Commend></Commend>
		<Card cardTitle="猜你喜欢"></Card>
		<Card cardTitle="品牌推荐"></Card>
		<Card cardTitle="1111"></Card>
		<CommodityList></CommodityList> -->
		<!-- <Banner></Banner>
		<Icon></Icon>
		<Card cardTitle="热销爆品"></Card>
		<Hot></Hot>
		<Card cardTitle="推荐店铺"></Card>
		<Shop></Shop> -->
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scroIntoIndex">
			<view class="scroll-item" v-for="(item,index) in topBar" :key="index" :id="'top'+index">
				<text :class="topBarIndex===index?'f-active-color':''" @tap="onChangeIndex(index)">{{item.name}}</text>
			</view>
		</scroll-view>
		
		<swiper @change="changeTab" :current="topBarIndex" :style="`height:${clineHeight}px`">
			<swiper-item v-for="(item,index) in topBar">
				<view class="home-data">
					<IndexSwiper></IndexSwiper>
					<Card cardTitle="猜你喜欢"></Card>
					<CommodityList></CommodityList>
					<Banner></Banner>
					<Icon></Icon>
					<Card cardTitle="热销爆品"></Card>
					<Hot></Hot>
					<Card cardTitle="推荐店铺"></Card>
					<Shop></Shop> 
				</view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	import IndexSwiper from '@/components/indexSwiper/indexSwiper.vue'
	import Commend from '@/components/recommend/index.vue'
	import Card from '@/components/Card/index.vue'
	import CommodityList from '@/components/Commodity-List/commodityList/commodityList.vue'
	import Banner from '@/components/banner/banner.vue'
	import Icon from '@/components/Icon/Icon.vue'
	import Hot from '@/components/Hot/Hot.vue'
	import Shop from '../../components/shop/shop.vue'
	export default {
		components:{
			IndexSwiper,
			Commend,
			Card,
			CommodityList,
			Banner,
			Icon,
			Hot,
			Shop
		},
		data(){
			return{
				// 选中的索引
				topBarIndex:0,
				// 顶部跟随的索引，id值不能为数字
				scroIntoIndex:"top0",
				// 内容块高度值
				clineHeight:0,
				topBar:[
					{name:"推荐"},
					{name:"运动户外"},
					{name:"潮流"},
					{name:"家具数码"},
					{name:"穆荫护府"},
					{name:"穆荫护府"},
					{name:"穆荫护府"},
				]
			}
		},
		methods:{
			onChangeIndex(index){
				if(this.topBarIndex===index) return;
				this.topBarIndex=index
				this.scroIntoIndex = 'top'+index
			},
			changeTab(e){
				this.topBarIndex = e.detail.current
				this.scroIntoIndex = 'top'+e.detail.current
			}
		},
		onReady(){
			const view = uni.createSelectorQuery().select('.home-data')
			view.boundingClientRect(data=>{
				this.clineHeight=data.height
			}).exec()
		}
		
	}
</script>

<style scoped>
.wx-nav{
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 180rpx;
	width: 100%;
	line-height: 180rpx;
	text-align: center;
}
	
.scroll-content{
	width: 100%;
	height: 80rpx;
	white-space: nowrap;
}
.scroll-item{
	display: inline-block;
	padding: 10rpx 30rpx;
	font-size: 32rpx;
}
	
.f-active-color{
	padding: 10rpx 0;
	border-bottom: 6rpx solid ;
}

</style>
