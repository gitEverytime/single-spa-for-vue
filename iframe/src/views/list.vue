<template>
    <div class="good1-list">
        <iframe src=" http://192.168.0.125:9998/"></iframe>
    </div>
</template>

<script>
// @ is an alias to /src
import hytools from 'hytools'
import {apiQuery} from '../api/index.ts'
export default {
    name: 'home',
    data(){
        return {
            collapsed: false,
        }
    },
    created() {

    },
    mounted() {
        let vm = this;
        vm.onLoad();
        window.dispatchEvent(new CustomEvent('timeFunc'));
    },
    methods:{
        onLoad() {
            let params = {
                page: 1,
                rows: 20,
                resid: 'IDKG3GE3UF',
                industrytype: 'X2IKH707G'
            };
            apiQuery(params).then(res => {
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .good1-list{
        text-align: left;
        height: 100%;
    }
  .item{
    width: 200px;
    text-align: center;
      margin-top: 20px;
    img{
      max-width: 100%;
    }
  }
    .warehouse{
        margin-top: 40px;
    }
    iframe{
        border: 0;
        width: 100%;
        height: 100%;
    }
</style>
