<template>
	<div>
		<basetop :baseInfo="baseInfo"></basetop>
		{{title}}
	</div>
</template>

<script>
import basetop from "./components/basetop"		
export default {
	data() {
		return {
			baseInfo: [
				{"type":"link","url":"http://www.baidu.com","imgurl":"./static/img/fengjin1.png","title":"跳转百度",'Info':"点击链接跳转"},
				{"type":"link","url":"http://www.baidu.com","imgurl":"./../src/category/appcate_service//static/img/fengjin1.png","title":"跳转百度",'Info':"点击链接跳转"}			
			],
			title: "123"
		}
	},
	components: {
  		basetop
  	}
}
</script>
