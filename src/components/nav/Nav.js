import $ from 'jquery';
import { transiteMove } from './../animateUtils/animateUtils';
import myEmitter from './../myEmitter/MyEmitter';

const nav = $('#nav');
let isOpen = false;

export default class Nav {
    init() {
        myEmitter.on('onNavClose', this.close);
        myEmitter.on('onNavOpen', this.open);

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

            }else {
                myEmitter.emit('onNavClick','close');
                this.close();
            }
        })
    }
    open() {
        isOpen  = true;
        transiteMove(nav, 'open');
    }
    close() {
        isOpen  = false;
        nav.removeClass('open');
    }
}
