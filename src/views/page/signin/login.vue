<template>
    <transition name="fade">
        <div id="login">
            <i class="icon-chat"></i>
            <h2>请输入您的名字</h2>
            <input type="text" @keyup.enter="login" v-model.trim="name" autofocus>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        login() {
            let that = this;
            if (that.name === '') {
                return
            }
            let userNameList = [];
            userNameList.push(name);

        }
    }
}
</script>