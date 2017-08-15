<template>
	<section class="base-service">
		<div class="box clearfix">
			<a v-for="item in baseInfo"
				class="iconbg alink-action"
				v-bind:href="item.url"
				v-bind:title="item.title"
				@click.prevent
				@click="changeValue">
				<img :src="item.imgurl"/>
				<p class="title">{{item.title}}</p>
				<p class="info">{{item.info}}</p>
			</a>
			<p>{{title}}</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: "basetop",
		props: ["baseInfo","title"],
		data(){
			return {
				currectValue: this.title
			}
		},
		methods: {
			changeValue: function(){
				this.currectValue="这是改变之后的title"
			}
		},
		watch: {
			currectValue: function(val){
				this.$emit("change-title",val);
			}
		}
	}
</script>

<style>
	.base-service {
		background: pink;
		ul li{
			background: greenyellow
		}
	}
</style>