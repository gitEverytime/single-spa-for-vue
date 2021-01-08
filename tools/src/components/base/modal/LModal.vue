<template>
   <div ref="modal">
       <div
           v-for="(form,index) in sources"
           :key="'modal' + index"
       >
           <a-modal
               :width="form.width"
               v-model:visible="form.visible"
               :getContainer="()=>$refs.modal"
               :dialogStyle="{
                   textAlign:'left'
               }"
               :bodyStyle="{
               }"
               :title="form.title"
               :ok-text="form.okText"
               :cancel-text="form.cancelText"
               :maskClosable="false"
               @ok="hideModal"
           >
               <a-form
                   ref="ruleForm"
                   :model="form"
                   :rules="rules"
               >
                   <div
                       class="l-modal-wrap"
                       style="min-height: 300px;position: relative"
                       @click="handleClickModal"
                       :class="{
                           'square':$store.state.is_show_square
                       }"
                   >
                       <!--布局组件渲染盒子-->
                       <temp-layout-render-box operate_layer="modal"></temp-layout-render-box>
                   </div>
               </a-form>
           </a-modal>
       </div>
   </div>
</template>

<script>
import TempLayoutRenderBox from '../../toolbar/LayoutRenderBox.vue'
import source from '../../../ts/data_manage/source.ts'
export default {
    name: "LModal",
    components:{
        TempLayoutRenderBox
    },
    props:{

    },
    data(){
        return{
            visible: false,
            form:{

            },
            rules:{

            },
            sources:source.modal_info,
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        showModal() {
            let vm = this;
            vm.form.visible = false;
            vm.$store.commit('setOperateLayer','main');
        },
        hideModal() {
            let vm = this;
            vm.form.visible = false;
            vm.$store.commit('setOperateLayer','main');
        },
        handleClickModal(){
            let vm = this;
        }
    }
}
</script>

<style scoped lang="scss">
    .square{
        background-image: linear-gradient(90deg, rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%),linear-gradient(rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
        background-size: 10px 10px;
    }
</style>