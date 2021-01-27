<template>
   <div ref="modal2">
       <a-modal
           v-model="visibleHeight.show"
           title="请输入行高"
           @ok="handleOk"
           :dialogStyle="{
                textAlign:'left'
            }"
           cancelText="取消"
           okText="确认"
           okType="primary"
           :getContainer="()=>$refs.modal2"
       >
           <a-form-model
               ref="ruleForm"
               :model="ruleForm"
               :label-col="{ span: 4 }"
               :wrapper-col="{ span: 12 }"
               ::rules="rules"
           >
               <a-form-model-item label="行高" required prop="height">
                   <a-input
                       v-model.number="ruleForm.height"
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
        visibleHeight:{
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
                height:''
            },
            rules: {
                height: [{ required: true, message: '请输入明细表的列数', trigger: 'change' }],
            },
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
        vm.ruleForm.height = vm.form.table_data[vm.t_index].children[vm.t_key].height;
    },
    methods:{
        /**
         * 点击确认
         */
        handleOk(){
            let vm = this;
            vm.form.table_data.forEach((tr,index) => {
                /**
                 * 给 这一行的每个td 赋相同的值:高度变化
                 */
                if(index === vm.t_index) {
                    tr.children.forEach((child,key) => {
                        child.height = Number.parseInt(vm.ruleForm.height);
                    });
                }
            })
            vm.visibleHeight.show = false;
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped>

</style>