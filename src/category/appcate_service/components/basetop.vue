<template>
	<section class="base-service">
		<ul class="wuba-box clearfix">
			<a v-for="item in baseInfo"
				class="iconbg alink-action"
				v-on:href="item.url"
				v-on:title="item.title">
				<img :src="item.imgurl" />
				<p class="title">{{item.title}}</p>
				<p class="info">{{item.info}}</p>
			</a>
		</ul>
	</section>
</template>

<script>
	export default {
		name: "basetop",
		props: ["baseInfo"],
		methods: {
			
		}
	}
</script>