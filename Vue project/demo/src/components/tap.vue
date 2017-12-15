<template>
	<div>
		<span v-for="(value,index) in list" >{{value.name}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[{
					'name':'商品组1 |'
				},{
					'name':'商品组2 |'
				},{
					'name':'商品组3 |'
				},{
					'name':'商品组4 |'
				},{
					'name':'商品组5'
				},]
			}
		}
	}
</script>

<style scoped>
	span{
		margin-left:7px;
	}
</style>