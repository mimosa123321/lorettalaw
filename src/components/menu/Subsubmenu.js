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
        if(Store.menuClickedId === 1) {
            if(Store.subMenuClickedId === 0) {
                dataArr = window.Exhibitions;
            }
        }
        this.initMenu(dataArr);
    }

    clickListener(id) {
        console.log("subsub" , id);
        if(Store.subSubMenuClickedId === id) {
            return;
        }
        Store.subSubMenuClickedId = id;
        myEmitter.emit('onBgHide');
        myEmitter.emit('onLogoHide');
        myEmitter.emit('onMenuHide');
        myEmitter.emit('updateGallery', window.NEWS_PHOTOS, Store.subSubMenuClickedId);

        myEmitter.emit('updateSection');
    }

    overListener(id) {
    }

    clear() {
        Store.subSubMenuClickedId = -1;
        $('#subSubLists').empty();
    }
}
