<template>
    <div
        :style="{
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
        }"
        @click="handleClickDragElement"
    >
        <span
            v-if="form.parentName.includes('append')"
            :style="{
                width:'100px',
                fontFamily:form.fontFamily,
                fontSize:form.fontSize + 'px',
                fontWeight: form.isTextBold ? 'bold' : '400',
                fontStyle: form.isTextItalics ? 'italic' : 'normal',
                textDecoration: form.isTextDeleteLine ? 'line-through' : form.isTextUnderLine ? 'underline' : 'none'
            }"
        >{{form.name}}</span>
        <a-input
           v-model:value="form.value || ''"
           :disabled="form.isDisabled"
           :readonly="form.readonly"
           :placeholder="form.placeholder || '请输入'"
        />
    </div>
</template>

<script>
export default {
   name: "LInput",
   components:{
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