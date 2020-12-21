let vm;
import time from './assets/js/time.js'
export function startListen(_vm) {
    vm = _vm;
    listenLogout();
    time;
}


function listenLogout() {
    window.addEventListener('logout',() => {
        vm.logout();
    });
}
