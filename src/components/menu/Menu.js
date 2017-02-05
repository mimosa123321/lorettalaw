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
        myEmitter.emit('menuClickListener', 0);

        const btns = menu.find('ul').find('li');
        btns.each((index, btn)=> {
            /*if(Store.menuOverId === index) {
                this.buttonOver(btn);
            }else {
                this.buttonOut(btn);
            }*/
            if(Store.menuClickedId === index) {
                this.buttonOver(btn);
            }else {
                this.buttonOut(btn);
            }
        });
    }

    clickListener(id) {
        if(Store.menuClickedId === id) {
            return;
        }
        Store.menuClickedId = id;
        submenu.bindData();
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

    close() {
        Store.menuClickedId = -1;
        submenu.clear();
        menu.removeClass('open');
        transitionEnd(menu, ()=> {
            menu.css('display','none');
        });
    }
}
