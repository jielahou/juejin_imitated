<template>
    <div id="catalog" >
      <el-tabs tab-position="right" @tab-click="clickEvent">
        <el-tab-pane
            v-for="item in catalogData"
            :label="item.title"
            :key="item.id"
        ></el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
    props: ["catalogData"],
    methods: {
      clickEvent(item){
        //根据elementui组件特性来取id
        const clickedId =Number.parseInt(item.$el.id.slice(item.$el.id.indexOf('-')+1, ));
        const windowTop = document.body.getBoundingClientRect().top;
        const toTopDistance = document.getElementById(this.catalogData[clickedId].id).getBoundingClientRect().top;
        console.log(toTopDistance)
        window.scrollTo({
          top: toTopDistance - windowTop,
          behavior: 'auto'
        })

      }
    },
};
</script>

<style>
.test {
    color: red;
}

#catalog {
  position: fixed;
  top: 70px;
}
</style>