import $ from 'jquery';
import { bindButtonsClick, bindButtonsOver } from './MenuButton';
import { transiteMove, transitionEnd } from './../animateUtils/animateUtils';

const maxRows = 12;
let totalColumn = 0;

export default class MenuBase {
    constructor(_menuBtns,  _menuLists, _clickedId, _overId, _menuArr) {
        this.menuBtns = _menuBtns;
        this.menuLists = _menuLists;
        this.clickedId = _clickedId;
        this.overId = _overId;
        this.menuArr = _menuArr;
        this.bindButtons();
    }

    bindData(_dataId) {

    }

    initMenu() {
        if(this.menuArr.length === 0) {
            return;
        }
        this.makeColumn();
    }

    makeColumn() {
        var col = document.createElement('ul');
        this.menuLists.appendChild(col);

        var i = maxRows * totalColumn, row = 0;
        while (i<this.menuArr.length && row < maxRows) {
            var list = document.createElement('li');
            this.open(list, i);
            list.innerHTML = this.menuArr[i];
            col.appendChild(list);
            i++;
            row++;

            if( row === maxRows) {
                totalColumn += 1;
                this.makeColumn();
            }
        }
    }

    open(list, id) {
        setTimeout(()=> {
            transiteMove($(list), 'open');
        }, 10 + (id+1) * 50);
    }

    bindButtons() {
        bindButtonsClick(this.menuBtns, (clickedId, clickedBtn, unclickedArr)=> {
            this.clickedId = clickedId;
        });

        bindButtonsOver(this.menuBtns, (overId, overBtn, outArr)=> {
            this.overId = overId;
            this.buttonOver(overBtn);
            this.buttonOut(outArr);
        });
    }

    buttonOver(btn) {
        transiteMove($(btn), 'over');
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

    dispose() {
        totalColumn = 0;
        this.menuArr = [];
    }
}
