export default {
    base_info:[     //基础组件数据
        {
            type: 'l_title',                        //组件类型
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
            value:'',                              //数据库字段值 string
            value_arr:[],                          //数据库字段值 array
            value_bool:false,                      //数据库字段值 boolean
            _key:'',                               //数据库字段外键名称
            _value:'',                             //数据库字段外键值
            parentName:'.l-append-0-0',                         //组件添加的父级class名称
            btnType:'primary',                     //按钮类型
            interactiveType:'no_function',         //交互类型
            operateLayer:'main',                   //拖拽操作的层级
            enumops:'',                            //数据字典接口配置
            options:[                              //静态数据列表
                {
                    text:'选项一',
                    label:'选项一',
                    value:1
                },
                {
                    text:'选项二',
                    label:'选项一',
                    value:2
                }
            ],
            required:false,                        //是否必填
            checkRoot:'',                          //检查权限接口配置
            alias:'',                              //别名
            handles:[],                            //设置拖拽句柄
            readonly:true,                         //是否只读
            disabled:true,                         //是否禁用
        }
    ],
    layout_info:[   //布局组件数据
        {
            color: "",
            flex: 1,
            fontFamily: "",
            height: "50",
            index: 1,
            isBold: false,
            isHide: false,
            isLock: false,
            left: "",
            margin: "",
            name: "一行一列1",
            operateLayer: "main",
            padding: "",
            position: "absolute",
            top: "",
            type: "l_flex",
            width: "100%"
        }
    ],
    modal_info:[    //弹窗组件数据

    ],
    detail_table_info:[

    ]
}