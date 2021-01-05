import {set} from './assets/js/main.js'
let vm;
export function startListen(_vm) {
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