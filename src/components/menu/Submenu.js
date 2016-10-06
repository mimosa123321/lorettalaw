import $ from 'jquery';

import Subsubmenu from './Subsubmenu';
import { bindButtonsClick, bindButtonsOver } from './MenuButton';
import { transiteMove, transitionEnd } from './../animateUtils/animateUtils';

const subSubmenu = new Subsubmenu();
const menu = $('#menu');
const menuSub = $('#subLists');
const maxRows = 12;
let totalColumn = 0;
let submenuOverId = 0;
let submenuClickedId = 0;
let menuSubArr = [];
let dataId;


export default class Submenu {
    constructor() {
        console.log(window.GALLERY_PHOTOS_TITLES_EN);
    }

    updateData(_dataId) {
        this.dispose();
        dataId = _dataId;
        if(dataId === 0) {
            menuSubArr = window.GALLERY_PHOTOS_TITLES_EN;
        }else if(dataId === 1) {
            menuSubArr = window.NEWS_EN;
        }
        this.initSubmenu();
    }

    initSubmenu() {
        if(menuSubArr.length === 0) {
            return;
        }
        this.makeColumn();
        if(dataId === 1) {
            this.bindButtons();
        }
    }

    makeColumn() {
        const menuSubLists = document.getElementById('subLists');
        var col = document.createElement('ul');
        menuSubLists.appendChild(col);

        var i = maxRows * totalColumn, row = 0;
        while (i<menuSubArr.length && row < maxRows) {
            var list = document.createElement('li');
            this.open(list, i);
            list.innerHTML = menuSubArr[i];
            col.appendChild(list);
            i++;
            row++;

            if( row === maxRows) {
                totalColumn += 1;
                this.makeColumn();
            }
        }
    }

    bindButtons() {
        const btns = menuSub.find('ul').find('li');
        bindButtonsClick(btns, (clickedId, clickedBtn, unclickedArr)=> {
        });

        bindButtonsOver(btns, (overId, overBtn, outArr)=> {
            submenuOverId = overId;
            this.buttonOver(overBtn);
            this.buttonOut(outArr);
        });
    }

    buttonOver(btn) {
        transiteMove($(btn), 'over');
        subSubmenu.updateData(0);
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


    open(list, id) {
        setTimeout(()=> {
            transiteMove($(list), 'open');
        }, 10 + (id+1) * 50);
    }

    close() {

    }

    dispose() {
        totalColumn = 0;
        menuSubArr = [];
        menuSub.empty();
    }
}
