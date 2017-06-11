import $ from 'jquery';

import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';
import MenuBase from './MenuBase';
import Submenu from './Submenu';
import { transiteMove, transitionEnd } from './../animateUtils/animateUtils';

const submenu = new Submenu();
const menu = $('#menu');
const menuMainList = document.getElementById('mainLists');

export default class Menu extends MenuBase {
    constructor() {
        super();
        this.isInit = false;
        myEmitter.on('menuOverListener', this.overListener);
        myEmitter.on('menuClickListener', this.clickListener);
        this.init(menuMainList, 0, 0, 'menuClickListener', 'menuOverListener');
    }

    bindData() {
        let dataArr = window.menu;
        this.initMenu(dataArr);
        this.setDefaultButton();
    };

    setDefaultButton() {
        if(!this.isInit) {
            //show the submenu by default when it's first initiated
            myEmitter.emit('menuClickListener', 0);
            this.isInit = true;
        }

        const btns = menu.find('ul').find('li');
        btns.each((index, btn)=> {
            if(Store.menuClickedId === index) {
                this.buttonOver(btn);
            }
        });
    }

    clickListener(id) {
        Store.menuClickedId = id;
        if(Store.menuClickedId === 2) {
            myEmitter.emit('onBgHide');
            myEmitter.emit('onMenuHide');
            submenu.clear();
        }else {
            submenu.bindData();
        }
        myEmitter.emit('updateSection');
    }

    overListener(id) {
        /*if(Store.menuOverId === id) {
            return;
        }
        Store.menuOverId = id;
        submenu.bindData();*/
    }

    open() {
        menu.css('display','block');
        setTimeout(()=>{
            transiteMove(menu, 'open', ()=> {
                this.bindData();
            });
        },50);
    }

    hide() {
        menu.removeClass('open');
        transitionEnd(menu, ()=> {
            menu.css('display','none');
        },100);
    }

    close() {
        // Store.menuClickedId = -1;
        // submenu.clear();
        menu.removeClass('open');
        transitionEnd(menu, ()=> {
            menu.css('display','none');
        });
    }
}
