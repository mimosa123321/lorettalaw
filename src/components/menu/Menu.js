import $ from 'jquery';

import { bindButtonsClick } from './MenuButton';
import { transiteMove, transitionEnd } from './../animateUtils/animateUtils';

const menu = $('#menu');
const menuMain = $('#menu').find('.main');
let menuClickedId = 0;

export default class Menu {
    constructor() {
        console.log(window.GALLERY_PHOTOS_TITLES_EN);
        this.setDefaultButtonClick();
        this.bindButtons();
    }

    setDefaultButtonClick() {
        const btns = menuMain.find('ul').find('li');
        btns.each((index, btn)=> {
            if(menuClickedId === index) {
                this.buttonClick(btn);
            }else {
                this.buttonUnClick(btn);
            }
        });
    }

    bindButtons() {
        const btns = menuMain.find('ul').find('li');
        bindButtonsClick(btns, (clickedId, clickedBtn, unclickedArr)=> {
            menuClickedId = clickedId;
            this.buttonClick(clickedBtn);
            this.buttonUnClick(unclickedArr);
        });
    }

    buttonClick(clickedBtn) {
        transiteMove($(clickedBtn), 'clicked');
    }

    buttonUnClick(unclickedBtn) {
        if(Array.isArray(unclickedBtn)) {
            let i;
            for(i=0; i<unclickedBtn.length; i++) {
                let btn = unclickedBtn[i].btn;
                $(btn).removeClass('clicked');
            }
        }else {
            $(unclickedBtn).removeClass('clicked');
        }
    }

    open() {
        menu.css('display','block');
        setTimeout(()=>{
            transiteMove(menu, 'open');
        },50);
    }
    close() {
        menu.removeClass('open');
        transitionEnd(menu, ()=> {
            menu.css('display','none');
        });
    }
}
