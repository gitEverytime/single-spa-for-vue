export default {
    //基础表单组件数据源
    base_scource:{
        type: '',                              //组件类型
        width: '',                             //宽
        height: '',                            //长
        name: '',                              //名称
        top: '',                               //垂直距离
        left: '',                              //水平距离
        position: 'absolute',                  //定位
        isHide: false,                         //是否隐藏
        isDisabled: false,                     //是否禁用
        index: '',                             //索引
        isTextBold: false,                     //是否加粗
        isTextItalics: false,                  //是否斜体
        isTextUnderLine:false,                 //是否有下划线
        isTextDeleteLine:false,                //是否有删除线
        fontSize:'14px',                       //字体大小
        fontFamily:'',                         //字体
        padding:'',                            //padding值
        margin:'',                             //margin值
        borderRadius:'',                       //圆角度
        color:'',                              //字体颜色
        isLock:false,                          //是否锁定
        key:'',                                //数据库字段名称
        value:'',                              //数据库字段值
        _key:'',                               //数据库字段外键名称
        _value:'',                             //数据库字段外键值
        parentName:'',                         //组件添加的父级class名称
        btnType:'primary',                     //按钮类型
        interactiveType:'insert',              //交互类型
        operateLayer:'main'                    //拖拽操作的层级
    },
    //布局容器组件数据源
    layout_scource:{
        type: '',
        width: '',
        height: '',
        name: '',
        top: '',
        left: '',
        position: 'absolute',
        isHide: false,
        isDisabled: false,
        index: '',
        isBold: false,
        isItalics: false,
        fontSize:'14px',
        fontFamily:'',
        padding:'',
        margin:'',
        borderRadius:'',
        color:'',
        isLock:false,
        key:'',
        value:'',
        _key:'',
        _value:'',
        flex:4,                                      //栅格格数
        children:[]
    },
}