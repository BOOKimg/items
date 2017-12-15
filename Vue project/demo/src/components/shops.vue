<template>
	<div>
		<heads></heads>
		<tap></tap>
		<div class="box">
			<div v-for="(value,index) in list">
				<p v-if='value.cells'>
					<img :src="value.cells[0].cell_image_urls"/>
				</p>
				<ul v-else>
					<li v-for='y in value.content_cells'>
						<div class="content" style="width:144px;height:220px;">
							<img :src="y.cell_image_urls[0]"/><br />
								<span>{{y.cell_sub_titles[0]}}</span><br />
								<span style="color:red;">{{y.cell_sub_titles[1]}}</span>
								<button>点击购买</button>
						</div>
					</li>
				</ul>
			</div>			
		</div>
	</div>
</template>

<script>
	import heads from '@/components/head';
	import tap from '@/components/tap';
	//	axios.defaults.withCredentials=true;//跨域允许浏览器值
	//	var getlists=
	//	var lists = getlists()
	export default {
		components: {heads,tap},
		data(){
			return{
				list:''
			}
		},
		methods: {
			get() {
				var This=this
				this.$axios({
					url: 'https://api-test.glbuyer.com/v1/activity/promoterViewShippingFree4px/kyigi',
					method: 'get',
				}).then(function(response) { //如果接口走通了
					console.log(response.data.data.components)
					This.list=response.data.data.components
					console.log(typeof(This.list))
					console.log(This.list)
				})

			}
		},
		mounted() {
			this.get()
		}
	}
</script>

<style scoped>
	*{
		list-style:none;
	}
	button{
		margin-left: 5px;
		color:white;
		background:#FF6D6D;
		border:0 none;
	}
	.content{
		margin-top: 10px;
		margin-left:10px;
	}
	img{
		width:24rem;
		margin-top: -10px;
	}
	li img{
		width:130px;
		height:153px;
		margin-top: 2px;	
	}
	ul{
		background:#DFEEFF;
		margin-top:-15px;
		overflow: hidden;
		width:343px;
		height:470px;
	}
	li{
		float:left;
	}
	span{
		font-size: 10px;
	}
</style>