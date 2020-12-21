<template>
    <div class="goods-list">
        <a-layout id="components-layout-demo-top-side-2">
            <a-layout>
                <a-layout-sider width="200" style="background: #fff">
                    <a-menu
                        mode="inline"
                        :default-selected-keys="['1']"
                        :default-open-keys="['sub1']"
                        :style="{ height: '100%', borderRight: 0 }"
                    >
                        <a-sub-menu key="sub1">
                            <span slot="title"><a-icon type="user" />subnav 1</span>
                            <a-menu-item key="1">
                              option1
                            </a-menu-item>
                            <a-menu-item key="2">
                              option2
                            </a-menu-item>
                            <a-menu-item key="3">
                              option3
                            </a-menu-item>
                            <a-menu-item key="4">
                              option4
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub2">
                            <span slot="title"><a-icon type="laptop" />subnav 2</span>
                            <a-menu-item key="5">
                              option5
                            </a-menu-item>
                            <a-menu-item key="6">
                              option6
                            </a-menu-item>
                            <a-menu-item key="7">
                              option7
                            </a-menu-item>
                            <a-menu-item key="8">
                              option8
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub3">
                            <span slot="title"><a-icon type="notification" />subnav 3</span>
                            <a-menu-item key="9">
                              option9
                            </a-menu-item>
                            <a-menu-item key="10">
                              option10
                            </a-menu-item>
                            <a-menu-item key="11">
                              option11
                            </a-menu-item>
                            <a-menu-item key="12">
                              option12
                            </a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout style="padding: 0 24px 24px">
                    <a-breadcrumb style="margin: 16px 0">
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>List</a-breadcrumb-item>
                        <a-breadcrumb-item>App</a-breadcrumb-item>
                    </a-breadcrumb>
                    <a-layout-content
                        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
                    >
                    Content
                    </a-layout-content>
                </a-layout>
            </a-layout>
        </a-layout>
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
    .goods-list{
        text-align: left;
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
</style>
