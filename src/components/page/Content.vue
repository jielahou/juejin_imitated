<template>
  <div class="content" ref="content"></div>
</template>

<script>
import { marked } from 'marked';
export default {
    mounted() {
        const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.\n\n## Head2-1\n\nHi'
        +'\n## Head2-2\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-1\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n## Head2-1\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n## Head2-2\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n## Head2-3\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n## Head2-4\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n## Head2-5\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-2\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-3\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-4\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-5\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-6\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-7\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-8\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-9\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-10\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-11\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-2\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-2\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-2\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-2\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi'
        +'\n# Head1-2\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi\n\nHi');
        this.$refs.content.innerHTML = html;
    }
}
</script>

<style>

</style>