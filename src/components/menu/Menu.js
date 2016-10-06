import $ from 'jquery';

import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';
import MenuBase from './MenuBase';
import Submenu from './Submenu';
import { transiteMove, transitionEnd } from './../animateUtils/animateUtils';

const submenu = new Submenu();
const menu = $('#menu');
const menuMain = $('#menu').find('.main');

export default class Menu extends MenuBase {
    constructor() {
        super();
        // this.bindButtons();
        myEmitter.on('menuOverListener', this.overListener);
        myEmitter.on('menuClickListener', this.clickListener);
        this.init(menuMain, 0, 0, 'menuClickListener', 'menuOverListener');
    }

    bindData() {
        let dataArr = ['Gallery','News','Bio','Contact'];

        this.initMenu(dataArr);
    }

    /*setDefaultButtonClick() {
        const btns = menuMain.find('ul').find('li');
        btns.each((index, btn)=> {
            if(Store.menuClickedId === index) {
                this.buttonOver(btn);
            }else {
                this.buttonOut(btn);
            }
        });
    }*/

    /*bindButtons() {
        const btns = menuMain.find('ul').find('li');
        bindButtonsClick(btns, (clickedId, clickedBtn, unclickedArr)=> {
            Store.menuClickedId = clickedId;
        });

        bindButtonsOver(btns, (overId, overBtn, outArr)=> {
            if(Store.menuOverId === overId) {
                return;
            }
            Store.menuOverId = overId;
            this.buttonOver(overBtn);
            this.buttonOut(outArr);
        });
    }

    buttonOver(btn) {
        transiteMove($(btn), 'over');
        submenu.bindData();
    }

    buttonOut(unclickedBtn) {
        if(Array.isArray(unclickedBtn)) {
            let i;
            for(i=0; i<unclickedBtn.length; i++) {
                let btn = unclickedBtn[i].btn;
                $(btn).removeClass('over');
            }
        }else {
            $(unclickedBtn).removeClass('over');
        }
    }*/

    open() {
        menu.css('display','block');
        setTimeout(()=>{
            transiteMove(menu, 'open', ()=> {
                this.setDefaultButtonClick();
            });

        },50);
    }
    close() {
        menu.removeClass('open');
        transitionEnd(menu, ()=> {
            menu.css('display','none');
        });
    }
}
