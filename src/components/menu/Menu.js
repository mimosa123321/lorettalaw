import $ from 'jquery';

import Submenu from './Submenu';
import { bindButtonsClick, bindButtonsOver } from './MenuButton';
import { transiteMove, transitionEnd } from './../animateUtils/animateUtils';

const submenu = new Submenu();
const menu = $('#menu');
const menuMain = $('#menu').find('.main');
let menuClickedId = 0;
let menuOverId = 0;

export default class Menu {
    constructor() {
        this.bindButtons();
    }

    setDefaultButtonClick() {
        const btns = menuMain.find('ul').find('li');
        btns.each((index, btn)=> {
            if(menuClickedId === index) {
                this.buttonOver(btn);
            }else {
                this.buttonOut(btn);
            }
        });
    }

    bindButtons() {
        const btns = menuMain.find('ul').find('li');
        bindButtonsClick(btns, (clickedId, clickedBtn, unclickedArr)=> {
            menuClickedId = clickedId;
        });

        bindButtonsOver(btns, (overId, overBtn, outArr)=> {
            menuOverId = overId;
            this.buttonOver(overBtn);
            this.buttonOut(outArr);
        });
    }

    buttonOver(btn) {
        transiteMove($(btn), 'over');
        submenu.updateData(menuOverId);
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
    }

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
