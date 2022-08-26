<template>
<div>
  <MyTopNav></MyTopNav>
  <div class="markdown-body" id="content"></div>
</div>
</template>

<script>
import { marked } from 'marked'
import content from '../../mock/Article.js'
//highlight
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'
import MyTopNav from '../MyNav/MyTopNav.vue'; //样式

export default {
    mounted() {
        let mainContent = document.getElementById("content");
        mainContent.innerHTML = marked.parse(content);
        let blocks = mainContent.querySelectorAll("pre code");
        blocks.forEach((block) => {
            hljs.highlightBlock(block);
        });
    },
    components: { MyTopNav }
}
</script>

<style>
  .markdown-body{
    border-radius: 4px;
    background-color: white;
    padding-left: 32.040px;
    padding-right: 32.040px;
    padding-top: 32.004px;
    padding-bottom: 39.960px;
    box-sizing: border-box;
    /* width: 820px; */
  }

  
/* 
.markdown-body h1 {
    font-size: 24px;
    margin-bottom: 5px;
} */

  .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {
      line-height: 1.5;
      margin-top: 15px;
      margin-bottom: 10px;
      padding-bottom: 5px;
  }

pre, code {
  font-size: 0.85em;
  font-family: Consolas, Inconsolata, Courier, monospace;
}

code {
  margin: 0 0.15em;
  padding: 0 0.3em;
  white-space: pre-wrap;
  border: 1px solid #EAEAEA;
  background-color: #F8F8F8;
  border-radius: 3px;
  display: inline;
}

pre {
  font-size: 1em;
  line-height: 1.2em;
}

pre code {
  white-space: pre;
  overflow: auto; 
  border-radius: 3px;
  border: 1px solid #CCC;
  padding: 0.5em 0.7em;
  display: block !important; 
}

.markdown-here-wrapper[data-md-url*="wordpress."] code span {
  font: inherit;
}

.markdown-here-wrapper[data-md-url*="wordpress."] pre {
  background-color: transparent;
}


p {

  margin: 0 0 1.2em 0 !important;
}

table, pre, dl, blockquote, q, ul, ol {
  margin: 1.2em 0;
}

ul, ol {
  padding-left: 2em;
}

li {
  margin: 0.5em 0;
  font-size: 16px;
}

li p {
  margin: 0.5em 0 !important;
}

ul ul, ul ol, ol ul, ol ol {
  margin: 0;
  padding-left: 1em;
}

ul ul, ul, ul {
  list-style-type: square;
  font-size: 16px;
}

ol ol, ul ol {
  list-style-type: lower-roman;
}

ul ul ol, ul ol ol, ol ul ol, ol ol ol {
  list-style-type: lower-alpha;
}

dl {
  padding: 0;
}

dl dt {
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
}

dl dd {
  margin: 0 0 1em;
  padding: 0 1em;
}

blockquote, q {
  border-left: 4px solid #DDD;
  padding: 0 1em;
  color: #777;
  quotes: none;
}

blockquote::before, blockquote::after, q::before, q::after {
  content: none;
}

h1, h2, h3, h4, h5, h6{margin:20px 0 10px;  padding:0;  font-weight: bold;  color:#009688;}
h1{font-size:24px;  border-bottom:1px solid #ddd;}
h2{font-size:22px;  border-bottom:1px solid #eee;}
h3{font-size:20px;}
h4{font-size:18px;}
h5{font-size:16px;}
h6{font-size:16px; color:#777;}

table {
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  font: inherit;
  border: 0;
}

tbody {
  margin: 0;
  padding: 0;
  border: 0;
}

table tr {
  border: 0;
  border-top: 1px solid #CCC;
  background-color: white;
  margin: 0;
  padding: 0;
}

table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

table tr th, table tr td {
  font-size: 1em;
  border: 1px solid #CCC;
  margin: 0;
  padding: 0.5em 1em;
}

table tr th {
 font-weight: bold;
  background-color: #F0F0F0;
}

p {
  font-size: 16px;
  line-height: 1.75em;
  /* padding-right: 0.5em; 
  padding-left: 0.5em; */
}

strong, b{color:#BF360C;} 

</style>
