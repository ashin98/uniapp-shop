// 商品列表  放多个商品组件
<template>
	<view class="commodity-list">
		<Commodity :dataList='commodityList'></Commodity>
	</view>
</template>

<script>
	import Commodity from '@/components/Commodity-List/commodity/commodity.vue'
	export default {
		components:{
			Commodity
		},
		data(){
			return{
				commodityList:[
					{
						id:1,
						imageUrl:'/static/commodity-img/commodity1.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					},
					{
						id:2,
						imageUrl:'/static/commodity-img/commodity2.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					},
					{
						id:3,
						imageUrl:"/static/commodity-img/commodity3.jpg",
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					},
					{
						id:4,
						imageUrl:'/static/commodity-img/commodity4.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					},
					{
						id:5,
						imageUrl:'/static/commodity-img/commodity4.jpg',
						content:'大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买大姨绒毛大款2022年必须买',
						pprice:'779',
						oprice:'999',
						discount:'5.2'
					}
				]
			}
		}
	}
</script>

<style scoped>

</style>
