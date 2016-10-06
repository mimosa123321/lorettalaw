import $ from 'jquery';

import Submenu from './Submenu';
import { bindButtonsClick } from './MenuButton';
import { transiteMove, transitionEnd } from './../animateUtils/animateUtils';

const menu = $('#menu');
const menuSubSub = $('#SubsubLists');


export default class Subsubmenu extends Submenu {

    /*updateData(dataId) {
        console.log(dataId);
        this.dispose();
        if(dataId === 0) {
            console.log(this.menuSubArr);
            this.menuSubArr = window.GALLERY_PHOTOS_TITLES_EN;
        }else if(dataId === 1) {
            this.menuSubArr = window.NEWS_EN;
        }
        this.initSubmenu();
    }

    initSubmenu() {
        if(this.menuSubArr.length === 0) {
            return;
        }
        // this.makeColumn();
    }*/

    /*makeColumn() {
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
    }*/
}
