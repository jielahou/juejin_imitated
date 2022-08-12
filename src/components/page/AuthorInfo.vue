<template>
<div class="sidebar-block author-block pure">
   
    <a  href="/user/2409780510207133"
	   target="_blank"
	   rel=""
	   class="user-item item">
		<img src="https://p6-passport.byteacctimg.com/img/user-avatar/154b55eb36c8ae10f701e2d3d6cfb138~300x300.image"
			 alt=""
			 class="lazy avatar avatar"
			 data-src="https://p6-passport.byteacctimg.com/img/user-avatar/154b55eb36c8ae10f701e2d3d6cfb138~300x300.image"
			 loading="lazy">
		<div class="info-box">
			<a href="/user/2409780510207133"
			   target="_blank"
			   rel=""
			   class="username">
				<span class="name"
					  style="max-width: 128px;">
					{{titlename}}
				</span>
				<span blank="true"
					  class="rank">
					<img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png"
						 alt="lv-6">
				</span>
			</a>
			<div title="person-info"
				 class="position">{{personinfo}}</div>
		</div>
	</a>

	<div class="stat-item1 item">
		<svg xmlns="http://www.w3.org/2000/svg"
			 width="25"
			 height="26"
			 viewBox="0 0 25 26"
			 class="zan">
			<g fill="none"
			   fill-rule="evenodd"
			   transform="translate(0 .57)">
				<ellipse cx="12.5"
						 cy="12.57"
						 fill="#E1EFFF"
						 rx="12.5"
						 ry="12.57"></ellipse>
				<path fill="#7BB9FF"
					  d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"></path>
			</g>
		</svg>
		<span class="content">获得点赞<span class="count">&nbsp;{{likes}}</span>
		</span>
	</div>

	<div class="stat-item2 item">
		<svg width="25"
			 height="25"
			 viewBox="0 0 25 25"
			 class="icon stat-view-icon">
			<g fill="none"
			   fill-rule="evenodd">
				<circle cx="12.5"
						cy="12.5"
						r="12.5"
						fill="#E1EFFF"></circle>
				<path fill="#7BB9FF"
					  d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"></path>
			</g>
		</svg>
		<span class="content">文章被阅读<span class="count">&nbsp;{{readings}}</span>
		</span>
	</div>

</div>

</template>

<script>
export default {
  name: 'AuthorInfo',
  props: {
	titlename: String,
	personinfo: String,
	readings: Number,
	likes: Number,
  }
}
</script>

<style scoped>
.sidebar-block{
    width: 260px;
    height: 143.969px;
    background: white;
    margin-bottom: 20px;
    padding: 20.004px;
}

.username .position{
    height: 24px;
    float: right;
    color: #fff;
}

.avatar {
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.item{
    background-color: white;
}

.avatar{
    float: left; /* 要左浮动 */
    margin-right: 10px; /* 为了让图片和文字不贴着,右外边距定义40px */
}

.info-box{
    margin-left: 15.996px;
    width: 190.016px;
    height: 50px;
    /* float: left; */
}

.user-item {
    /* border-bottom: 1px solid #e4e6eb; */
    border-bottom: 1px solid blue;
    padding-bottom: 1.416rem;
}

.sidebar-block:after {
    display: table;
    content: "";
    clear: both;
}

.stat-item1 {
    margin-top: 0.667rem;
    display: flex;
    align-items: center;
}

.stat-item2{
    margin-top: 0.667rem;
    display: flex;
    align-items: center;
}

.rank img{
    height: 16px;
    width: 35px;
}

</style>