<template>
    <div class="l-grid-box">
        <span :style="{
            color:$store.state.text_color
        }"> 网格数：</span>
        <a-radio-group
            v-model:value="obj.flex"
            class="l-radio-group"
            style="margin:8px"
            size="small"
            :style="{
                backgroundColor:'transparent'
            }"
        >
            <a-radio-button
                v-for="item in radios"
                :value="item.value"
                :style="{
                    backgroundColor:'transparent',
                    color:'#fff'
                }"
                :class="{
                    'l-active-radio':obj.flex === item.value
                }"
            >
                {{item.name}}
            </a-radio-button>
        </a-radio-group>
    </div>
</template>

<script lang="ts">
export default {
    name: "GridLayout",
    props:{
        obj:{
            type:Object
        }
    },
    data(){
        return{
            radios:[
                {
                    name:'1*4',
                    value:4
                },
                {
                    name:'1*3',
                    value:3
                },
                {
                    name:'1*2',
                    value:2
                },
                {
                    name:'1*1',
                    value:1
                }
            ]
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
   .l-active-radio{
        color: #009dff !important;
   }
</style>