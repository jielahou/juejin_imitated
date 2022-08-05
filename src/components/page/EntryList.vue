<template>
    <li class="item">
        <div class="entry">
            <div class="meta-container">
                
                    <el-popover
                        placement="top-start"
                        width="300"
                        trigger="hover"
                    >
                        <div class="author-basic">
                          <a href="/user/1204720472953240" target="_blank" rel=""><img src="https://p3-passport.byteacctimg.com/img/user-avatar/3cc923506359b8170e1d8b9051bb2bef~300x300.image" alt="jsmask的头像" class="lazy avatar avatar" data-src="https://p3-passport.byteacctimg.com/img/user-avatar/3cc923506359b8170e1d8b9051bb2bef~300x300.image"></a>
                          <div class="author-info">
                              <a href="/user/1204720472953240" class="author-name"><span>{{ author }}</span></a>
                              <div class="author-title">职业工程师</div>
                          </div>
                        </div>
                        <div class="popover-box user-popover" slot="reference">
                            <!---->
                            {{ author }}
                        </div>
                    </el-popover>
               
                <div class="line"></div>
                <div class="date">{{ time }}</div>
                <div class="line"></div>
                <div class="tag_list">
                    <a :href="tag_link" target="_blank" rel="" class="tag">
                        {{ tag }}
                    </a>
                </div>
            </div>

            <div class="content-wrapper">
                <div class="content-main">
                    <div class="content-main">
                        <div class="title-row">
                            <a
                                :href="page_link"
                                target="_blank"
                                rel=""
                                :title="title"
                                class="title"
                                >{{ title }}</a
                            >
                        </div>
                        <div class="abstract">
                            <a :href="page_link" target="_blank" rel="">
                                <div>
                                    {{ desc }}
                                </div>
                            </a>
                        </div>
                        <ul class="action-list">
                            <li class="item view">
                                <i></i> <span> {{ views }} </span>
                            </li>
                            <li class="item like">
                                <i></i><span> {{ likes }} </span>
                            </li>
                            <li class="item comment">
                                <i></i><span> {{ comments }} </span>
                            </li>
                            <!---->
                        </ul>
                    </div>
                </div>
                <img
                    src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce20b8bc28d1413b8ae80a374694ac1a~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
                    class="thumb"
                />
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: "EntryList",
    props: {
        author: String,
        authorlink: String,
        time: String,
        tag: String,
        tag_link: String,
        title: String,
        page_link: String,
        desc: String,
        views: Number,
        likes: Number,
        comments: Number,
    },
    methods: {

    },
};
</script>

<style scoped>
* {
    font-size: 13px;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}
.entry {
    cursor: pointer;
    position: relative;
    background: #fff;
    padding: 12px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.meta-container {
    color: #86909c;
    display: flex;
    align-items: center;
}

.meta-container .date {
    line-height: 22px;
}

.meta-container .tag_list {
    line-height: 22px;
}

.meta-container .line {
    width: 1px;
    height: 14px;
    background-color: #e5e6eb;
    line-height: 22px;
    margin-right: 8px;
    margin-left: 8px;
}

.content-wrapper {
    display: flex;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5e6eb;
    margin-top: 10px;
    width: 100%;
}

.meta-container .user-message {
    display: flex;
    align-items: center;
    max-width: 162px;
    font-size: 13px;
    line-height: 22px;
    color: #4e5969;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}

.tag_list,
.tag_list .tag {
    display: flex;
    align-items: center;
    color: #86909c;
}

.content-wrapper .content-main {
    flex: 1 1 auto;
}

.title-row {
    display: flex;
    justify-content: left;
    margin-bottom: 8px;
}

.title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.abstract {
    margin-bottom: 10px;
    text-align: left;
}

.abstract a {
    color: #86909c;
    font-size: 13px;
    line-height: 22px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.action-list {
    padding-left: 0px;
}

.action-list,
.action-list > .item {
    display: flex;
    align-items: center;
}

.action-list > .item {
    margin-right: 20px;
}

.action-list > .item.like:hover,
.item.comment:hover {
    color: #3b7cf4;
}

.action-list > .item.view i {
    background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png);
}

.action-list > .item.like i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC);
}

.action-list > .item.like:hover i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKYSURBVHgB7VddbtNAEJ7ZdVJFtMKPSE2EjxBOgHOChhOQnCDilTaqoYLncIK2J6g5QZ0bpCeoVUDi0RCkQOzdZfyTHztO5brFPMD3EI1ndmc+r+dnA/CvA+GeaA1nPQB2QK50peAq0MToq9Vwi+6/F4HmkX+MqKyM2vW56BQlwaAknlgzYxVc9JUUHUSY0INRE/y0qJ/SBGoBayei8+mkcfb5XcNhrNahI/VIZzYPZ2YRP6UJELrhj5JqvFC4FnpSwXmkB2wXcVKeAMLzKJBCO6VXyovNqBdxU4pAnPloUNZPvryvT1JGLBa4NIEw+WjbcbSZsVHWTol5EEvSgQK4EwHdUroW8Iv47ZV981Y7X7c3D30ztJHohklZxKcGBbH/et7DwB9QqYXJ5WqafJVdg0yeJq1Fbw1/XW96wbBH9Nd7BGbfgJwMYC2BptPai73duUlne5GoXE6Nxs1pNHFQNOB2eFJAZ5E7yxOIGotQl9nm+GjP70ohgXFOT3LM+U7XtepenmfO688Afm5JQqEHQb1HJzhgHOgloZ8iQI3FimMrW0n5AZlGi1Q37YRdh7UOW5DYttrphG1AFQY3lh5XZnwahafgUQIp+Q0eGIyJRXNycwj8eSjF4hJFZldOwKASpk9shvL0Ox9XTkAEVEkxHG+0yqMqP0GU0FLKj+vK6ggkwwsUc6BqAvvWvL1o0dnhVQkBLqSZiE7WVgmBvPKrjMC28tskgHFpIK89hgeElP7LREyV3wLLWUAt+AoZdkmwW8O5Q6q8O51JtksoCLoxhf8VIj+I7CxvTXocH81H4bRKOaHrdrSQ8cKBN4OoNzcnO1a+LQODxnLgx9NKqwnPtXYnsf5HO/D5ne574X4a6O5tE/Q//jp+A4uQ/sJMdO/iAAAAAElFTkSuQmCC);
}

.action-list > .item.comment i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=);
}

.action-list > .item.comment:hover i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALDSURBVHgB7ZZdTttAEMdnd+0UikB+rASl5gRNb5CcAHqCkhOQ51IaA6Kv7Q0IJ6CcoOEGcALcAlLfaolKlNi705m1Q53UBhKMeOEvRd74Y+a3s7szA/CkJz2yBIyp+ff9Ol3qQqAvpHjF99Dgd6nUiU7M8fmn2tE49u4E4AXozZlkDRHb/PeW10P69WKlN38G0yHcF2DxY9wZdowhfdbjWSOa0BoRkqIBr2lI0RH+tXEhgh9b7iZMAvAiuPSdRO0LwUatumj03tnOdA9u0ML6ZYOAVsn7u+xWSNFolkVDlDl3tfyWzSYkx63bHI/KJxs6Z6MMQhZ9PHCOCEdKuW/Gdc4KyZlSpkkR5E1po+m10bsVYOFD3BlQO45+GwYiggnFEFK6Td43vJRzs/326DtDS5CGXp3wWCm9FN5hF99Fdl9IRVGF6OLCXYq+/JvUUARcDY10ZA6qcs6yS4jQo6E3M3O1mn82vASo0p0rnF2oWIZOkHUo5XIpwODIKRkfQ8VyazYCrHopAGbJpsrwD5Sz6ZUCDFR0XB5KIwCcZgFmnsc+VKz5wBYx4NxSDoBwyBelcAUqltKmwdcsMRUDUHHpphxiDSrWtU0hv5YCpCnXLoO3uHEVQEXKZ9fTLeegFMCSGtOClLjDGQzuKc6u1LwEqW3dGn3+HwBHgWq9reGUPvcXN/604R5yYsfPhr2iolZ4DM92ngUZhIcgP7/c6O/yTGASADcJs6Ff9PzGjmhh/Sqgvq+Tu0VNidj77TpH0UiV5LZtNtENEIZTLYVddvsyPpyCqUjr+Be/c7pdE2MBWGxuLBIZ5DqcTBgiphC0xl6+FRtRj5zUOctSb0EVVoRjAeRBjFHLaGCFvmoUvBLZJIN4KCT3ilx0xFA+MQCt8+1adyKAIqAkpk7H1RQFFRXVj7QtI1iuslTojIbmuG37kx5cfwGYmi/QPMKjGgAAAABJRU5ErkJggg==);
}

.action-list > .item span {
    margin-left: 4px;
}

.action-list > .item i {
    display: block;
    width: 16px;
    height: 16px;
    background-size: 100%;
}

.thumb {
    flex: 0 0 auto;
    width: 120px;
    height: 80px;
    margin-left: 24px;
    background-color: #fff;
    border-radius: 2px;
}

.author-basic {
  display: flex;
}

.author-basic img {
  margin-right: 1rem;
}

.author-info span {
  font-size: 1.33rem;
  line-height: 2rem;
  font-weight: 500;
  color: #252933;
}

.author-info .author-title {
  margin: .333rem 0 0;
  font-size: 1rem;
  line-height: 2rem;
}
</style>