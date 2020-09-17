import Vue from 'vue';
import 'muse-ui/lib/styles/base.less';
import {
    Button,
    List
} from "muse-ui";
import 'muse-ui/lib/styles/theme.less';

const MuseUI = {
    install: () => {
        Vue.component('Button', Button);
        Vue.component('List', List);
        // Vue.component('Paper', Paper);
    }
}

export default MuseUI;