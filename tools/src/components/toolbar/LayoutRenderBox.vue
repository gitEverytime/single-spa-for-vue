<template>
    <div>
        <div
            v-for="(form,index) in sources"
            :key="'layout' + index"
        >
            <comp-layout-flex
                v-if="form.type === 'l_flex'"
                :form="form"
                :index="index"
            >
            </comp-layout-flex>
        </div>
    </div>
</template>
<script>
import source from '../../ts/data_manage/source.ts'
import CompLayoutFlex from '../../components/base/layout/LayoutFlex.vue'
export default {
    name: "LayoutRenderBox",
    components:{
        CompLayoutFlex
    },
    data(){
        let vm = this;
        return{
            sources:source.layout_info
        }
    },
    created(){

    },
    mounted(){
        console.log(this.sources)
    },
    methods:{

    }
}
</script>

<style scoped>

</style>