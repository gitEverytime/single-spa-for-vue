// @ts-ignore
import {set} from './assets/js/main.js'
let vm:any;
export function startListen(_vm:any) {
    vm = _vm;
    listenLogout();
    listenTime();
    //set()
}
function listenLogout() {
    window.addEventListener('logout',() => {
        vm.logout();
    });
}
function listenTime(){
    window.addEventListener('timeFunc',() => {
        vm.time();
    });
}