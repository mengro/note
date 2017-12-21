        /****使用外链样式配置右键菜单*****/
        .kinerMenuBox {
            width: 200px;
            background: #FEFEFE;
            border: solid 1px #444444;
            cursor: pointer;
            border-radius: 10px;
            overflow: hidden;
            box-shadow:1px 1px 5px #000, -1px -1px 5px #fff;
            -webkit-box-shadow: 1px 1px 5px #000,-1px -1px 5px #fff;
            -moz-box-shadow: 1px 1px 5px #000,-1px -1px 5px #fff;
            -o-box-shadow: 1px 1px 5px #000,-1px -1px 5px #fff;
            font-size: 16px;
            position: absolute;
        }
 
        .kinerMenuBox .kinerMenuTitle {
            background: #DDDDDD;
            padding: 10px 5px;
            border-bottom: inset #444444 1px;
            cursor: default
        }
 
        .kinerMenuBox .kinerMenuTitle .kinerMenuTitleIcon {
            width: 30px;
            height: 30px
        }
 
        .kinerMenuBox .kinerMenuTitle .kinerMenuTitleCon {
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
 
            color: #444444;
            font-size: 18px;
            display: inline-block;
            vertical-align: top
        }
 
        .kinerMenuBox .kinerMenuItem {
            background: #FFF;
            padding: 5px 5px;
        }
 
        .kinerMenuBox .kinerMenuItem:hover {
            background: #CCC;
        }
 
        .kinerMenuBox .kinerMenuItem .kinerMenuItemIcon {
            display: inline-block;
            width: 30px;
            height: 30px
        }
 
        .kinerMenuBox .kinerMenuItem .kinerMenuItemCon {
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
 
            position: relative;
            color: #444444;
            font-size: 16px;
            display: inline-block;
            vertical-align: top
        }
 
        .kinerMenuBox .kinerSeparator {
            width: 100%;
            height: 1px;
            border-bottom: dashed 1px #444444;
            /*background: #444444*/
            border-left: none;
            border-right: none
        }
 
        .kinerMenuBox .kinerKeyMap {
            margin-right: 5px;
            right: 10px;
            position: absolute;
            color: #444444;
            height: 30px;
            line-height: 30px;
            display: inline-block;
        }            
var menu = new contextMenu({
                        target: document.getElementById("box"),//开启自定义右键菜单的目标,
                        hasIcon: true,//是否需要图标
                        hasTitle: true,//是否需要标题
                        autoHide:true,//是否自动隐藏右键菜单
                        linkClass: true,//是否使用外链样式，如果为true，则配置样式失效;若选择false且同时设置css样式，则配置样式与css样式按优先级呈现;若选false,则可不用配置classes属性
                        menu: {//菜单数据配置
                            title: {//标题配置
                                icon: "imgs/em_01.png",//标题图标路径
                                content: "菜单标题"//标题内容
                            },
                            items: [//菜单项配置
                                {
                                    icon: "imgs/em_02.png",//菜单项图标路径
                                    content: "菜单项1",//菜单项内容
                                    action: function (e, item) {//菜单项单击和快捷键触发事件
                                        alert(item.content);
                                    },
                                    keymap: "alt+1"//快捷键（目前只支持：ctrl+  alt+  shift+  ）
                                },
                                "-",//代表分隔符
                                {
                                    icon: "imgs/em_04.png",
                                    content: "菜单项2",
                                    action: function (e, item) {
                                        alert("====>" + item.content);
                                    },
                                    keymap: "alt+2"
                                },
                                {
                                    icon: "imgs/em_05.png",
                                    content: "菜单项3",
                                    action: function (e, item) {
                                        alert("====>" + item.content);
                                    },
                                    keymap: "ctrl+j"
                                },
                                {
                                    icon: "imgs/em_06.png",
                                    content: "菜单项4",
                                    action: function (e, item) {
                                        alert("====>" + item.content);
                                    },
                                    keymap: "shift+y"
                                },
                                "-",
                                {
                                    icon: "",
                                    content: "菜单项5",
                                    action: function (e, item) {
                                        console.log(e, item,this);
                                    }
                                },
                                {
                                    icon: "imgs/em_07.png",
                                    content: "菜单项6",
                                    action: function (e, item) {
                                        alert("====>" + item.content);
                                    }
                                },
                                {
                                    icon: "imgs/em_09.png",
                                    content: "菜单项7",
                                    action: function (e, item) {
                                        alert("====>" + item.content);
                                    }
                                }
 
                            ]
 
                        },
                        classes: {//对有菜单的样式控制
                            menuBox: {//右键菜单的样式
                                "width": "200px",
                                "background": "#FEFEFE",
                                "border": "solid 1px #333",
                                "cursor": "pointer",
                                "border-radius": "10px",
                                "overflow": "hidden",
                                "box-shadow": "-1px -1px 5px #000,1px 1px 5px #ccc",
                                "-webkit-box-shadow": "-1px -1px 5px #000,1px 1px 5px #ccc",
                                "-moz-box-shadow": "-1px -1px 5px #000,1px 1px 5px #ccc",
                                "-o-box-shadow": "-1px -1px 5px #000,1px 1px 5px #ccc",
                                "font-size": "16px"
                            },
                            menuTitle: {//菜单标题的样式
                                self: {//标题整体样式
                                    "background": "#DDDDDD",
                                    "padding": "10px 5px",
                                    "border-bottom": "inset #000 1px",
                                    "cursor": "default"
                                },
                                icon: {//标题图标样式
                                    width: "30px",
                                    height: "30px"
                                },
                                content: {//标题内容样式
                                    height: "30px",
                                    "line-height": "30px",
                                    "padding-left": "10px",
 
                                    "color": "#333333",
                                    "font-size": "18px",
                                    "display": "inline-block",
                                    "vertical-align": "top"
                                }
                            },
                            item: {//菜单项样式控制
                                self: {//菜单项整体样式控制
                                    "background": "#FFF",
                                    "padding": "5px 5px"
                                },
                                icon: {//菜单项图标样式
                                    width: "30px",
                                    height: "30px"
                                },
                                content: {//菜单项内容样式
                                    height: "30px",
                                    "line-height": "30px",
                                    "padding-left": "10px",
 
                                    "color": "#333333",
                                    "font-size": "16px",
                                    "display": "inline-block",
                                    "vertical-align": "top"
                                },
                                hover: {//菜单项鼠标移入样式
                                    background: "#ccc"
                                },
                                keymap: {//快捷键县市区样式
 
                                    "margin-right": "5px",
                                    "color": "blue"
                                }
                            },
                            separator: {//分隔符样式
                                width: "100%",
                                height: "1px",
                                border: "solid 1px #000",
                                "border-left": "none",
                                "border-right": "none"
                            }
                        }
 
                    });
