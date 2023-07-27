import View from "@core/frame/view/base/View";
import {ViewBuilder} from "@core/frame/view/base/ViewManager";

export default class LoadingView extends View {

    get ele() {
        return this._ele;
    }

    set ele(value) {
        super.ele = value;
        // this.html = require("./countdown.html");
    }

    static parseByEle(ele, viewManager, listenerLocation){
        var view = new LoadingView(viewManager,listenerLocation);
        view.ele = ele;
        return view;
    }
}

export class LoadingViewBuilder extends ViewBuilder{
    constructor(props) {
        super(props);
        this.viewType = "loading";
    }

    buildView(ele, viewManager, listenerLocation) {
        return LoadingView.parseByEle(ele, viewManager, listenerLocation);
    }
}