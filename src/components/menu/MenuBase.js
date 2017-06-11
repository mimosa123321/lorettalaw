import $ from 'jquery';

import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';
import { bindButtonsClick, bindButtonsOver } from './MenuButton';
import { transiteMove } from './../animateUtils/animateUtils';

const maxRows = 12;
let totalColumn = 0;

export default class MenuBase {
    constructor() {
    }

    init(_menuLists, _clickedId, _overId, _clickListener, _overListener) {
        this.menuLists = _menuLists;
        this.clickedId = _clickedId;
        this.overId = _overId;
        this.clickListener = _clickListener;
        this.overListener = _overListener;
    }

    initMenu(dataArr, isRow) {
        this.dispose();
        this.menuArr = dataArr;

        if(this.menuArr.length === 0) {
            return;
        }

        if(isRow) {
            //for gallery menu
            this.makeRow();
        }else {
            this.makeColumn();
        }

        this.bindButtons();
    }

    makeColumn() {
        var col = document.createElement('ul');
        this.menuLists.appendChild(col);

        var i = maxRows * totalColumn, row = 0;
        while (i<this.menuArr.length && row < maxRows) {
            var list = document.createElement('li');
            this.show(list, i);
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

    makeRow() {
        var col = document.createElement('ul');
        col.className = "horizontal";
        this.menuLists.appendChild(col);

        var i = 0;
        while (i<this.menuArr.length) {
            var list = document.createElement('li');
            this.show(list, i);
            list.innerHTML = this.menuArr[i];
            col.appendChild(list);

            i++;
        }
    }

    show(list, id) {
        setTimeout(()=> {
            transiteMove($(list), 'show');
        }, 10 + (id+1) * 50);
    }

    bindButtons() {
        const btns = $(this.menuLists).find('ul').find('li');
        bindButtonsClick(btns, (clickedId, clickedBtn, unclickedArr)=> {
            this.clickedId = clickedId;
            myEmitter.emit(this.clickListener, this.clickedId);
        });

        bindButtonsOver(btns, (overId, overBtn, outArr)=> {
            this.overId = overId;
            myEmitter.emit(this.overListener, this.overId);
            this.buttonOver(overBtn);
            this.buttonOut(outArr);
        });
    }

    buttonOver(btn) {
        transiteMove($(btn), 'over');
    }

    buttonOut(outBtn) {
        if(Array.isArray(outBtn)) {
            let i;
            for(i=0; i<outBtn.length; i++) {
                let btn = outBtn[i].btn;
                $(btn).removeClass('over');
            }
        }else {
            $(outBtn).removeClass('over');
        }
    }

    dispose() {
        $(this.menuLists).empty();
        totalColumn = 0;
        this.menuArr = [];
    }
}
