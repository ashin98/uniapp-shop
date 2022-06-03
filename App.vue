<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url('./common/iconfont.css');
	@import url('./common/uni.css');
	@import url('./common/common.css');
	/* 取消横向滚动条的出现 */
	 ::-webkit-scrollbar{  
	                display: none;  
	                width: 0;  
	            }  
</style>
