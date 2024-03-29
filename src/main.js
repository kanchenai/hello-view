import '@css'

require('./global_style.css')

import State from "@core/frame/util/State";
import Application from "@core/frame/app/Application";
import {KeyboardViewBuilder} from "@src/custom-view/keyborad/KeyboardView";
import {CountdownViewBuilder} from "@src/custom-view/countdown/CountdownView";
import {PosterWhiteViewBuilder} from "@src/custom-view/poster-white/PosterWhiteView";
import {ButtonBuilder} from "@src/custom-view/button/Button";
import {PosterViewBuilder} from "@src/custom-view/poster/PosterView";
import {PosterShadowViewBuilder} from "@src/custom-view/poster-shadow/PosterShadowView";
import {CarouselViewBuilder} from "@src/custom-view/carousel/CarouselView";
import {DrawerViewBuilder} from "@src/custom-view/drawer/DrawerView";
import {ProgressViewBuilder} from "@src/custom-view/progress/ProgressView";
import {FocusViewBuilder} from "@src/custom-view/focus/FocusView";
import {HuarongViewBuilder} from "@src/custom-view/huarong/HuarongView";
import {PainterViewBuilder} from "@src/custom-view/painter/PainterView";

var start = new Date().getTime();
window.onload = function () {
    //添加自定义控件的创建工具
    Application.addCustomViewBuilder([
        KeyboardViewBuilder, CountdownViewBuilder, PosterWhiteViewBuilder,
        ButtonBuilder, PosterViewBuilder, PosterShadowViewBuilder,
        CarouselViewBuilder, DrawerViewBuilder, ProgressViewBuilder,
        FocusViewBuilder,PainterViewBuilder,HuarongViewBuilder
    ]);

    State.ScrollAnimation = true;//控制滚动动画开关

    //使用默认Application启动
    var application = new Application("app");
    window.application = application;
    application.launch();

    var mode = process.env.NODE_ENV || "production";//获取当前的模式,development:开发模式；production：生产模式
    console.log(mode, new Date().getTime() - start)

    console.log("项目地址：")
    console.log("github:https://github.com/kanchenai/View-App.git")
    console.log("gitee:https://gitee.com/kanchenai/View-App.git")
}

