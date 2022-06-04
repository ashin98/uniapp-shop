// 商品列表  放多个商品组件
<template>
	<view class="commodity-list">
		<Commodity :dataList='dataList'></Commodity>
	</view>
</template>

<script>
	import Commodity from '@/components/Commodity-List/commodity/commodity.vue'
	export default {
		components:{
			Commodity
		},
		data(){
			return{}
	},
	props:{
		dataList:Array
	},
	}
</script>

<style scoped>

</style>
