<!-- 侧边栏 -->
<template>
<div class="sidebar-box" :style="{height: height}">
	<!-- 个人信息 -->
	<!-- 掘金APP 推广 -->
	<div class="appShare-box">
		<img class="qr-img" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png"/>
		<div class="text-box">
			<div class="line1">下载掘金APP</div>
			<div class="line2">一个帮助开发者成长的社区</div>
		</div>
	</div>
	<!-- 掘金微信交流群推广 -->
	<img class="wx-share" src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"/>
	<!-- 相关文章 -->
	<div class="relevantArticle-box" v-if="relevantArticles[0] !== undefined">
		<div class="title">
			<div>优秀文章</div>
		</div>
		<div class="item" v-for="(item, i) in relevantArticles">
			<div class="item-title">
				{{item.title}}
			</div>
			<div class="nums">
				{{item.thumbsUpNumber}}点赞 · {{item.commentNumber}}评论
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    name: "Aside",
	props: {
		
	},
    data() {
        return {
            relevantArticles: [],
			userinfo: {},
			height: 100
        };
    },
    mounted() {
        this.getRelevantArticles();
		this.getUserInfo();
		this.height = document.querySelector('.left-column').getBoundingClientRect().height + 'px'
    },
    methods: {
        // 将 2141576 转换为 2,141,576
        dotNumber(number) {
            let chars = ("" + number).split("");
            let str = "";
            let len = chars.length;
            for (let i = 0; i < len; i++) {
                str += chars[i];
                if ((len - i + 1) % 3 === 0 && i !== len - 1) {
                    str += ",";
                }
            }
            return str;
        },
        getRelevantArticles() {
            this.relevantArticles = [
                {
                    title: "TypeScript中interface与type的区别",
                    thumbsUpNumber: 32,
                    commentNumber: 6,
                },
                {
                    title: "IOS Charles抓包",
                    thumbsUpNumber: 31,
                    commentNumber: 2,
                },
                {
                    title: "超详细的网络抓包神器 tcpdump 使用指南",
                    thumbsUpNumber: 9031,
                    commentNumber: 474,
                },
                {
                    title: "前端必会抓包工具",
                    thumbsUpNumber: 556,
                    commentNumber: 29,
                },
                {
                    title: "经典八股文",
                    thumbsUpNumber: 9031,
                    commentNumber: 474,
                }
            ];
		}
    },
}
</script>

<style scoped lang="less">
* {
	box-sizing: border-box;
}

.sidebar-box {
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	background-color: #F4F5F5;
	

	.info-box {
		background-color: #fff;
		padding: 20px;
		padding-bottom: 10px;
		.up-box {
			display: flex;
			align-items: center;
			border-bottom: 1px solid #e4e6eb;
			padding-bottom: 10px;
			&:hover {
				cursor: pointer;
			}
			.avatar {
				width: 48px;
				height: 48px;
				border-radius: 50%;
			}
			.right-box {
				margin-left: 10px;
				
				.line1 {
					display: flex;
					.levelIcon {
						margin-left: 5px;
						height: 18px;
					}
				}
				.line2 {
					margin-top: 3px;
					font-size: 14px;
					color: #515767;
				}
			}
		}
		.down-box {
			margin-top: 20px;
			.item {
				margin: 10px 0;
				display: flex;

				.icon {
					width: 25px;
				}
				.text {
					margin-left: 10px;
				}
			}
		}
	}

	.appShare-box {
		background-color: #FFF;
		margin-top: 0px;
		display: flex;
		align-items: center;
		padding: 20px;
		&:hover {
			cursor: pointer;
		}

		.qr-img {
			margin-right: 16px;
			width: 50px;
		}
		.text-box {
			.line2 {
				margin-top: 5px;
				color: #8a919f;
				font-size: 14px;
			}
		}
	}
	.wx-share {
		margin-top: 20px;
		&:hover {
			cursor: pointer;
		}
	}

	.relevantArticle-box {
		margin-top: 20px;
		background-color: #FFF;
		padding: 0 15px;
		.title {
			height: 55px;
			border-bottom: 1px solid #e4e6eb;
			line-height: 55px;
		}
		.item {
			height: 80px;
			display: flex;
			flex-direction: column;
			padding: 10px;
			&:hover {
				cursor: pointer;

				.item-title {
					color: #1E80FF;
				}
			}
			.nums {
				margin-top: 5px;
				font-size: 14px;
				color: #8a919f;
			}
		}
	}
}

.catalog2 {
    position: sticky;
    top: 0;
}
</style>