import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';
import MenuBase from './MenuBase';
import Subsubmenu from './Subsubmenu';

const subSubmenu = new Subsubmenu();

const menu = $('#menu');
const menuSubLists = document.getElementById('subLists');

export default class Submenu extends MenuBase {
    constructor() {
        super();
        myEmitter.on('subMenuOverListener', this.overListener);
        myEmitter.on('subMenuClickListener', this.clickListener);
        this.init(menuSubLists, Store.subMenuClickedId, Store.subMenuOverId, 'subMenuClickListener', 'subMenuOverListener');
    }

    bindData() {
        let dataArr = [], isRow;
        if(Store.menuClickedId === 0) {
            dataArr = window.GALLERY_PHOTOS_TITLES_EN;
            isRow = true;
        }else if(Store.menuClickedId === 1) {
            dataArr = window.NEWS_EN;
            isRow = false;
        }

        this.clear();
        this.initMenu(dataArr, isRow);
    }

    clickListener(id) {
        /*if(Store.subMenuClickedId === id) {
            return;
        }*/
        Store.subMenuClickedId = id;
        if(Store.menuClickedId === 0) {
            //update gallery
            myEmitter.emit('onBgHide');
            myEmitter.emit('onLogoHide');
            myEmitter.emit('onMenuHide');
            myEmitter.emit('updateGallery', window.GALLERY_PHOTOS, Store.subMenuClickedId);

        }
        if(Store.menuClickedId === 1 && Store.subMenuClickedId === 0) {
            subSubmenu.bindData();
        }else {
            subSubmenu.clear();
            myEmitter.emit('onBgHide');
            myEmitter.emit('onMenuHide');
        }
        myEmitter.emit('updateSection');
    }

    overListener(id) {
        /*if(Store.subMenuOverId === id) {
            return;
        }
        Store.subMenuOverId = id;
        subSubmenu.bindData();*/
    }

    clear() {
        Store.subMenuClickedId = -1;
        subSubmenu.clear();
        $('#subLists').empty();
    }
}
