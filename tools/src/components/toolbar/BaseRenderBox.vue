<template>
    <div>
        <div
            v-for="(form,index) in sources"
            :key="'base' + index"
        >
            <div v-if="form.parentName === className">
                <comp-l-input
                    v-if="form.type === 'l_input'"
                    :form="form"
                    :index="index"
                >
                </comp-l-input>
                <comp-l-button
                    v-if="form.type === 'l_btn'"
                    :form="form"
                    :index="index"
                >
                </comp-l-button>
            </div>
        </div>
    </div>
</template>
<script>
import source from '../../ts/data_manage/source.ts'
import CompLInput from '../../components/base/input/LInput.vue'
import CompLButton from '../../components/base/btns/LButton.vue'
export default {
    name: "BaseRenderBox",
    components:{
        CompLInput,
        CompLButton
    },
    props:{
        className:{
            type:String
        }
    },
    data(){
        let vm = this;
        return{
            sources:source.base_info
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

<style scoped>

</style>