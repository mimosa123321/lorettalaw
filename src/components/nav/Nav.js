import $ from 'jquery';
import { transiteMove } from './../animateUtils/animateUtils';
import myEmitter from './../myEmitter/MyEmitter';

const nav = $('#nav');
let isOpen = false;

export default class Nav {
    init() {
        setTimeout(()=> {
            transiteMove(nav, 'show', ()=> {
                this.initButtons();
            });
        },1200);
    }
    initButtons() {
        const hamburger = $('.hamburger');
        hamburger.click(()=> {
            if(!isOpen) {
                myEmitter.emit('onNavClick','open');
                this.open();
                isOpen  = true;
            }else {
                myEmitter.emit('onNavClick','close');
                this.close();
                isOpen  = false;
            }
        })
    }
    open() {
        transiteMove(nav, 'open');
    }
    close() {
        nav.removeClass('open');
    }
}
