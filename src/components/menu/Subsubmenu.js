import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';
import MenuBase from './MenuBase';

const menu = $('#menu');
const menuSubsubLists = document.getElementById('subSubLists');
let defaultOverId = 0;
let defaultClickedId = 0;

export default class Subsubmenu extends MenuBase {
    constructor() {
        super();
        myEmitter.on('subSubmenuOverListener', this.overListener);
        myEmitter.on('subSubmenuClickListener', this.clickListener);
        this.init(menuSubsubLists, defaultClickedId, defaultOverId, 'subSubmenuClickListener', 'subSubmenuOverListener');
    }

    bindData() {
        let dataArr = [];
        if(Store.menuOverId === 1) {
            if(Store.subMenuOverId === 0) {
                dataArr = window.Exhibitions;
            }
        }
        this.initMenu(dataArr);
    }

    clickListener(id) {
    }

    overListener(id) {
    }

    clear() {
        Store.subSubMenuOverId = -1;
        $('#subSubLists').empty();
    }
}
