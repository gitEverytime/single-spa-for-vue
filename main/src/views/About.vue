<template>
  <div class="about">
      <a-layout-content style="padding: 0 50px">
          <a-breadcrumb style="margin: 16px 0">
              <a-breadcrumb-item>Home</a-breadcrumb-item>
              <a-breadcrumb-item>List</a-breadcrumb-item>
              <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout style="padding: 24px 0; background: #fff">
              <a-layout-sider width="200" style="background: #fff">
                  <a-menu
                      mode="inline"
                      :default-selected-keys="['1']"
                      :default-open-keys="['sub1']"
                      style="height: 100%"
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
              <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
                  Content
              </a-layout-content>
          </a-layout>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
  </div>
</template>
<script lang="ts">
import {apiAddress} from '../api/index.ts'
export default {
    data(){
        return{
        // @ts-ignore
            collapsed: false,
        }
    },
    mounted() {
        // @ts-ignore
        this.onLoad();
        // let s: string = '111';
        // console.log(s)
    },
    methods:{
        // 获取数据
        onLoad() {
            // 调用api接口，并且提供了两个参数
            apiAddress({
            }).then(res => {
            })
        }
    }
}
</script>
