<template>
    <vue-draggable-resizable
        v-if="!form.isHide"
        @dragging="onDrag"
        @resizing="onResize"
        :w="Number(form.width)"
        :h="Number(form.height)"
        :x="Number(form.left)"
        :y="Number(form.top)"
        :min-height="34"
        :min-width="70"
        :parent="form.parentName"
        class="l_input l_handle_active"
        :class="'l_input' + index"
        :style="{
            Zindex:1000
        }"
    >
        <div
            :style="{
                display:'flex',
                flexDirection:'row',
                alignItems:'center'
            }"
        >
            <span
                :style="{
                    width:'100px',
                    fontSize:'12px',
                    fontWeight: form.isTextBold ? 'bold' : '300',
                    fontStyle: form.isTextItalics ? 'italic' : 'normal',
                    textDecoration: form.isTextDeleteLine ? 'line-through' : form.isTextUnderLine ? 'underline' : 'none'
                }"
            >{{form.name}}</span>
            <a-input
               v-model:value="form.value || ''"
               :disabled="form.isDisabled"
               @click="handleClickDragElement"
               :placeholder="form.placeholder || '请输入'"
            />
        </div>
    </vue-draggable-resizable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'

// 导入默认样式
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
export default {
   name: "LInput",
   components:{
       VueDraggableResizable
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
       let vm = this;
       return{

       }
   },
   created(){

   },
   mounted(){
       let vm = this;
       console.log(vm.form)
   },
   methods:{
       /**
        * 点击选中当前组件，回传数据给公共管理库，记录
        */
       handleClickDragElement(){
           let vm = this;
           vm.$store.commit('setCompBaseInfo',vm.form);
       },
       /**
        * 缩放回调
        * @param x
        * @param y
        * @param width
        * @param height
        */
       onResize(x, y, width, height) {
           let vm = this;
           vm.form.top = Number.parseInt(y);
           vm.form.left = Number.parseInt(x);
           vm.form.width = Number.parseInt(width);
           vm.form.height = Number.parseInt(height);
       },
       /**
        * 拖拽回调
        * @param x
        * @param y
        */
       onDrag(x, y) {
           let vm = this;
           vm.form.top = Number.parseInt(y);
           vm.form.left = Number.parseInt(x);
       }
   }
}
</script>

<style scoped lang="scss">
   .l_input{
       cursor: pointer;
       position: relative;
   }
   .vdr {
      border: none;
   }
   .active{
       border: #009dff solid 1px;
   }
</style>