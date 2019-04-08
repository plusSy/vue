<template>
  <div class="side">
		<ul>
			<li><a href="#"><div class="sidebox"><img src="../../../static/images/icon_green.png">加盟申请</div></a></li>
			<li><a href="#"><div class="sidebox"><img src="../../../static/images/icon_green.png">免费试用</div></a></li>
			<li><a href="javascript:void(0);" ><div class="sidebox"><img src="../../../static/images/icon_green.png">联系我们</div></a></li>
			<li style="border:none;"><a class="sidetop" @click="gotop"><img src="../../../static/images/icon_green.png"></a></li>
		</ul>
	</div>
</template>

<style src="./pageDetail.css" scoped></style>


<script>
export default {
  name: 'PageDetail',
  methods: {
    gotop () {
      this.jQuery('html,body').animate({'scrollTop': 0}, 600)
    }
  }
}
</script>