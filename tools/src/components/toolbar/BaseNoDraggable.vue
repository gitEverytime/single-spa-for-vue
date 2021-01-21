<template>
    <div class="base-draggable" style="width: 100%">
        <div  v-for="(form,index) in sources.filter(source => source.parentName === className)">
            <!-- 加载组件盒子-->
            <temp-load-base-element
                :form="form"
                :index="index"
            >
            </temp-load-base-element>
        </div>
    </div>
</template>
<script>
import source from '../../ts/data_manage/source.ts'
import TempLoadBaseElement from '../../components/toolbar/LoadBaseElement.vue'
export default {
    name: "BaseRenderBox",
    components:{
        TempLoadBaseElement
    },
    props:{
        className:{
            type:String
        }
    },
    data(){
        let vm = this;
        return{
            sources:source.base_info,
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
    }
}
</script>

<style scoped lang="scss">
.vdr {
    border: none;
}
.active{
    border: #009dff solid 1px;
}
</style>