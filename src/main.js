import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/main.less'
import './assets/css/reset.less'
// import { Toast, Dialog } from "vant"
// import { platform, cache } from "@/lib/tools.js";
// import CommonUtil from "@/lib/utility";
Vue.config.productionTip = false;
// Vue.prototype.$http = CommonUtil
// Vue.mixin({
//     data() {
//         return {
//             platform: platform()
//         }
//     },
//     methods: {
//         $toastx(msg) {
//             Toast({ message: msg, duration: 3000 })
//         },
//         $dialogx(msg, opt) {
//             if (opt) {
//                 let tmp = Object.assign({}, { message: msg }, opt)
//                 return Dialog.alert(tmp)
//             } else {
//                 return Dialog({
//                     title: "温馨提示",
//                     message: msg,
//                 })
//             }
//         }
//     }
// })
// Vue.prototype.$cache = cache 
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
