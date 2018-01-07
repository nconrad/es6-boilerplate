/**
 * Plugin
 *
 * Boilerplate environment for webpack + babel
 *
 * Author(s): nconrad
 *
 */
export default class Plugin {
    constructor(ele){
        this.ele = ele;
    }

    init() {
        var node = document.createTextNode("This is a plugin.");
        this.ele.appendChild(node);
    }
}

