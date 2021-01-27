<template>
    <div ref="modal3">
        <a-modal
            v-model="visibleWidth.show"
            title="请输入列宽"
            @ok="handleOk"
            :dialogStyle="{
                textAlign:'left'
            }"
            cancelText="取消"
            okText="确认"
            okType="primary"
            :getContainer="()=>$refs.modal3"
        >
            <a-form-model
                ref="ruleForm"
                :model="ruleForm"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 12 }"
                ::rules="rules"
            >
                <a-form-model-item label="请输入列宽" required prop="width">
                    <a-input
                        v-model.number="ruleForm.width"
                    />
                </a-form-model-item>
            </a-form-model>
        </a-modal>
    </div>
</template>

<script>
export default {
    name: "LSetHeightModel",
    components:{

    },
    props:{
        form:{
            type:Object
        },
        visibleWidth:{
            type:Object
        },
        t_index:{
            type:Number
        },
        t_key:{
            type:Number
        }
    },
    data(){
        return{
            ruleForm: {
                width:''
            },
            rules: {
                width: [{ required: true, message: '请输入列宽', trigger: 'change' }],
            },
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
        vm.ruleForm.width = vm.form.table_data[vm.t_index].children[vm.t_key].width;
    },
    methods:{
        /**
         * 点击确认
         */
        handleOk(){
            let vm = this;
            vm.form.table_data.forEach((form,t_index) => {
                form.children.forEach((child,t_key) => {
                    if(vm.t_key === t_key) {
                        child.width =  Number.parseInt(vm.ruleForm.width);
                    }
                });
            });
            vm.visibleWidth.show = false;
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped>

</style>