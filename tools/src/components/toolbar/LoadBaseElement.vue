<template>
    <div @click="$emit('handleClickDraggable',index)">
        <!-- 输入框-->
        <comp-l-input
            v-if="form.type === 'l_input'"
            :form="form"
            :index="index">
        </comp-l-input>
        <!-- 按钮-->
        <comp-l-button
            v-if="form.type === 'l_btn'"
            :form="form"
            :index="index">
        </comp-l-button>
    </div>
</template>

<script lang="ts">
import CompLInput from '../../components/base/input/LInput.vue'
import CompLButton from '../../components/base/btns/LButton.vue'
export default {
    name: "LoadBaseElement",
    components:{
        CompLInput,
        CompLButton
    },
    props:{
        form:{
            type:Object
        },
        index:{
            type:Number
        }
    },
    data(){
        return{}
    },
    created() {
    },
    mounted() {
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">

</style>