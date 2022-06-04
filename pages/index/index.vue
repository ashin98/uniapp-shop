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

		<swiper @change="changeTab" :current="topBarIndex" :style="'height:'+clineHeight+'px'">
			<swiper-item v-for="(item,index) in newTopBar" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+clineHeight+'px'">
					
					<view v-if="item.data.length==0">暂无数据...</view>  <!-- 如果没有数据 -->
					
					<!-- 推荐模板 -->
					<block v-for="(k,i) in item.data" :key="i">
						<IndexSwiper v-if='k.type==="swiperList"' :dataList='k.data'></IndexSwiper>
						<template v-if='k.type==="recommendList"'>
							<Recommend :dataList='k.data'></Recommend>
							<Card cardTitle='猜你喜欢'></Card>
						</template>
						
						<!-- 运动户外，服饰内衣.... -->
						 <Banner v-if="k.type==='bannerList'" :dataList='k.imgUrl'></Banner>
						<template v-if="k.type==='iconsList'">
							<Icons :dataList="k.data"></Icons>
							<Card cardTitle='热销爆品'></Card>
						</template>
						<template v-if="k.type==='hotList'">
							<Hot :dataList="k.data"></Hot>
							<Card cardTitle='推荐店铺'></Card>
						</template>
						<template v-if="k.type==='shopList'">
							<Shop :dataList='k.data'></Shop>
							<Card cardTitle='为您推荐'></Card>
						</template>
						
						<CommodityList v-if='k.type==="commodityList"' :dataList='k.data'></CommodityList>
					</block>
		
				</scroll-view>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	import IndexSwiper from '@/components/indexSwiper/indexSwiper.vue'
	import Commend from '@/components/recommend/index.vue'
	import Card from '@/components/Card/index.vue'
	import CommodityList from '@/components/Commodity-List/commodityList/commodityList.vue'
	import Recommend from '@/components/recommend/index.vue'
	import Banner from '@/components/banner/banner.vue'
	import Icons from '@/components/Icon/Icon.vue'
	import Hot from '@/components/Hot/Hot.vue'
	import Shop from '../../components/shop/shop.vue'
	export default {
		components: {
			IndexSwiper,
			Commend,
			Card,
			CommodityList,
			Recommend,
			Banner,
			Icons,
			Hot,
			Shop
		},
		data() {
			return {
				// 选中的索引
				topBarIndex: 0,
				// 顶部跟随的索引，id值不能为数字
				scroIntoIndex: "top0",
				// 内容块高度值
				clineHeight: 0,
				topBar: [],
				newTopBar: [] // 承载数据
			}
		},
		methods: {
			// 点击更新topBarIndex的索引
			onChangeIndex(index) {
				if (this.topBarIndex === index) return;
				this.topBarIndex = index
				this.scroIntoIndex = 'top' + index
			},
			// 对应滑动
			changeTab(e) {
				this.topBarIndex = e.detail.current
				this.scroIntoIndex = 'top' + e.detail.current
				this.addData()  //点击topBar切换数据
			},
			getIndexData() {
				uni.request({
					url: "http://192.168.226.1:3000/api/index_list",
					success: (res) => {
						let data = res.data.data
						this.topBar = data.topBar
						this.newTopBar = this.initData(data)
					}
				})
			},
			
			//对应显示不同的数据
			addData(){
				// 拿到索引
				let index = this.topBarIndex
				// 拿到id
				let id = this.topBar[index].id
				// 请求不同的数据
				uni.request({
					url:'http://192.168.226.1:3000/api/index_list/'+id+'/data/1',
					success: (res) => {
						let data = res.data.data
						this.newTopBar[index].data = [...this.newTopBar[index].data,...data]
					}
				})
			},

			initData(res) {
				let arr = []
				for (let i = 0; i < this.topBar.length; i++) {
					let obj = {
						data: []
					}
					// 获取首次数据
					if (i == 0) {
						obj.data = res.data
					}
					arr.push(obj)
				}
				return arr
			}
		},
		onLoad() {
			this.getIndexData()
		},
		onReady() {
			// 获取内容区的高度 getSystemInfo可以获取设备的宽高，型号，系统
			uni.getSystemInfo({
				success:(res)=> {
					this.clineHeight = res.windowHeight - uni.upx2px(80)
				}
			})
		}

	}
</script>

<style scoped>
	.wx-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 180rpx;
		width: 100%;
		line-height: 180rpx;
		text-align: center;
	}

	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}

	.scroll-item {
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 32rpx;
	}

	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 6rpx solid;
	}
</style>
