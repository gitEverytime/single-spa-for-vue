<template>
    <colorPicker
        v-model="color"
        @change="$emit('handChangeColor')"
    />
</template>

<script>

import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)
export default {
    name: "ColorPicker",
    components:{
        vcolorpicker
    },
    data() {
        return {
            color: '#ff0000'
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {

    },
    beforeDestroy() {
    }
}
</script>

<style scoped>

</style>