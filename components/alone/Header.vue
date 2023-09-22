<template>
	<header class="header">
		<div>
			Logo
		</div>
		<AloneNavBar />
	</header>
	<div class="header-white"></div>
</template>

<script setup>
	
</script>

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		z-index: 999;
		padding: 0 10%;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: $header-height;
	}
	.header-white{
		height: $header-height
	}
</style>
