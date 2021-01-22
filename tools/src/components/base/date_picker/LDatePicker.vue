<template>
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
                fontWeight: form.isTextBold ? 'bold' : '400',
                fontStyle: form.isTextItalics ? 'italic' : 'normal',
                textDecoration: form.isTextDeleteLine ? 'line-through' : form.isTextUnderLine ? 'underline' : 'none'
            }"
        >
            {{form.name}}
        </span>
        <a-date-picker
            v-model="form.value"
            @click="handleClickDragElement"
            :getCalendarContainer="getCalendarContainer()"
            :style="{
                width: '100%'
            }">
            <template slot="dateRender" slot-scope="current, today">
                <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
                    {{ current.date() }}
                </div>
            </template>
        </a-date-picker>
    </div>
</template>

<script>
export default {
    name: "LSelect",
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
        return{
            value: 1,
            radioStyle: {
                height: '30px',
                lineHeight: '30px',
            },
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
    },
    methods:{
        /**
         * 定制内容和样式
         */
        getCurrentStyle(current, today) {
            const style = {};
            if (current.date() === 1) {
                style.border = '1px solid #1890ff';
                style.borderRadius = '50%';
            }
            return style;
        },
        /**
         * 点击选中当前组件，回传数据给公共管理库，记录
         */
        handleClickDragElement(){
            let vm = this;
            vm.$store.commit('setCompBaseInfo',vm.form);
        },
        getCalendarContainer() {
            return triggerNode => document.getElementById('tools-project');
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">

</style>