export default {
    set(name,value,expires,path,domain,secure){ //设置cookie
        let cookieText=encodeURIComponent(name)+'='+
            encodeURIComponent(value);
        if(expires){
            let exp = new Date();
            exp.setTime(exp.getTime() + expires);
            cookieText+=';expires='+exp.toGMTString();
        }
        if(path){
            cookieText += ';path=' + path;
        }
        if(domain){
            cookieText += ';domain=' + domain;
        }
        if(secure){
            cookieText += ';secure';
        }
        document.cookie = cookieText;
    },
}
