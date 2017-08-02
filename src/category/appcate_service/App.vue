<template>
	<div>
		<basetop :baseInfo="baseInfo" :title="title"></basetop>
		{{title}}
	</div>
</template>

<script>
import basetop from "./components/basetop"		
export default {
	data() {
		return {
			baseInfo: [
				{"type":"link","url":"http://www.baidu.com","imgurl":"https://www.baidu.com/img/baidu_jgylogo3.gif","title":"跳转百度",'Info':"点击链接跳转"},
				{"type":"link","url":"http://www.baidu.com","imgurl":"https://www.baidu.com/img/baidu_jgylogo3.gif","title":"跳转百度",'Info':"点击链接跳转"}			
			],
			title: "开始的标题"
		}
	},
	components: {
  		basetop
  	},
  	methods: {
  		changeTitle: function(val){
  			this.title = val;
  		}
  	}
}
</script>
