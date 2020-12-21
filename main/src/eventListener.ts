let vm;
import time from './assets/js/time.js'
export function startListen(_vm) {
    vm = _vm;
    listenLogout();
    listenTime();
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