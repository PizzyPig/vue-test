<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
// import CDialog from "@/components/dialog/index.vue";
export default {
    components: {
        // CDialog
    },
    data() {
        return {
            nickname: '',
            messageList: [],
            msg: '',
            socket: '',
            uid: ''
        }
    }
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
