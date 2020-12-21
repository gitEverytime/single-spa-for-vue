<template>
    <div class="m-account">
       XXXXX
        <br>
        XXXXX
        <br>
        XXXXX
        <br>
        XXXXX
        <br>
        v
        XXXXX
        <br>
    </div>
</template>
<script>
    import hytools from 'hytools'
    import {apiAddress, apiLogin,apiPlains} from '../api/index.ts'
    import { JSEncrypt } from 'jsencrypt'
    const encrypt = new JSEncrypt();
    export default {
        data(){
            return {
                formLabelAlign:{
                    name:'',
                    pw:''
                }

            }
        },
        mounted(){
            let vm = this;
            vm.getPlain();
        },
        methods:{
            getPlain(){
                let vm = this;
                let params = {
                    sid: 'VXI_FSAFETY'
                };
                // 调用api接口，并且提供了两个参数
                apiPlains(params).then(res => {
                    let key = res.data.securekey;
                    vm.onLoad(key);
                })
            },
            // 获取数据
            onLoad(key) {
                let vm = this;
                encrypt.setPublicKey(key);
                let params = {
                    type:'enterprise_user',
                    code: encrypt.encrypt('admin'),
                    passwd: encrypt.encrypt('2020')
                };
                // 调用api接口，并且提供了两个参数
                apiLogin(params).then(res => {
                    document.cookie="venderId=10004"
                    vm.$router.push('/about')
                })
            },
            /**
             * 登录
             */
            getLogin: async function() {
                let vm = this;
                if(vm.loading) return;
                encrypt.setPublicKey(vm.$store.getters.getSecurekey);
                let params = {
                    type:'enterprise_user',
                    code: encrypt.encrypt(vm.username),
                    passwd: encrypt.encrypt(vm.password)
                }
                vm.loading = true;
                const res = await vm.http.get(vm.api.LOGIN,params);
                vm.loading = false;
                if(!res){
                    return
                }
                let result = res.data;
                if(result.status) {
                    vm.$toast.success('登录成功！');
                    vm.$router.push('/home/')
                }
            },
            submit(){

                // let BASE_URL = process.env.VUE_APP_BASEURL;
                // hytools.http({
                //     url:BASE_URL+'/account/user/checklogin',
                //     method: 'post',
                //     params:{
                //         email:this.formLabelAlign.name,
                //         pwd:this.formLabelAlign.pw
                //     }
                // }).then(res => {
                //     const resData = res.data;
                //     document.cookie="venderId=10004"
                //     document.cookie="zone_id=1000"
                //     document.cookie="VSSSESSID=needaamu3ffri2e1bd5nfn1ok7"
                //     document.cookie="lshLogin=1"
                //     document.cookie="warehouse_id=DC10004"
                //     document.cookie="MISSESSID=22rqf7hm35gus6ih53h7h7ifd0"
                //     this.$router.push('/')
                    // if(resData.ret + '' === '0') {
                    //     // document.cookie="venderId=10004"
                    //     // document.cookie="zone_id=1000"
                    //     // document.cookie="VSSSESSID=needaamu3ffri2e1bd5nfn1ok7"
                    //     // document.cookie="lshLogin=1"
                    //     // document.cookie="warehouse_id=DC10004"
                    //     // document.cookie="MISSESSID=22rqf7hm35gus6ih53h7h7ifd0"
                    //     // this.$router.push('/')
                    // }else {
                    //     this.$message.error(resData.msg);
                    // }
                // })
            }
        }
    }
</script>
<style lang="less">
    .m-account{
        text-align: left;
        .account-form{
            padding: 50px;
            width: 450px;
            margin: 150px auto 0;
            background-color: antiquewhite;
        }
    }
</style>
