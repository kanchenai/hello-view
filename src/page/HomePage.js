import Page from "@core/frame/page/Page";

export default class HomePage extends Page {
    onCreate(param) {
        this.html = require("../html/home.html");
    }
}
