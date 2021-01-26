<template>
    <div class="l-font-size" style="margin-right: 10px">
        <a-select
            :getPopupContainer="
                triggerNode => {
                    return triggerNode.parentNode || document.body;
                }
            "
            style="width: 80px"
            @select="handleSelect"
            size="small"
            v-model:value="obj.fontSize"
            ref="select"
        >
            <a-select-option
                v-for="(item,index) in options"
                :key="index"
                :value="item.value"
                :style="{
                    backgroundColor:'transparent'
                }"
            >
                <span
                    :style="{
                        fontFamily:item.value
                    }"
                >
                    {{item.text}}
                </span>
            </a-select-option>
        </a-select>
    </div>
</template>

<script>
export default {
    name: "LFontFamily",
    components:{

    },
    props:{
        obj:{
            type:Object
        }
    },
    data(){
        return{
            options:[
                {
                    text:'10px',
                    value:'10'
                },
                {
                    text:'12px',
                    value:'12'
                },
                {
                    text:'14px',
                    value:'14'
                },
                {
                    text:'16px',
                    value:'16'
                },
                {
                    text:'18px',
                    value:'18'
                },
                {
                    text:'20px',
                    value:'20'
                },
                {
                    text:'22px',
                    value:'22'
                },
                {
                    text:'24px',
                    value:'24'
                },
                {
                    text:'30px',
                    value:'30'
                },
                {
                    text:'36px',
                    value:'36'
                }, {
                    text:'40px',
                    value:'40'
                },
                {
                    text:'45px',
                    value:'45'
                },
            ]
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        /**
         *
         */
        handleSelect(data){

        }
    }
}
</script>

<style scoped lang="scss">
.l-font-size{

}
</style>