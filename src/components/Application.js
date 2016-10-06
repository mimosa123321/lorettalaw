import 'babel-polyfill';
import $ from 'jquery';

import Opening from './opening/Opening';
import Landing from './landing/Landing';
import Nav from './nav/Nav';
import Menu from './menu/Menu';
import myEmitter from './myEmitter/MyEmitter';

const opening = new Opening();
const landing = new Landing();
const nav = new Nav();
const menu = new Menu();

export default class Application {
    init() {
        this.initOpening();
    }

    initOpening() {
        opening.init();
        opening.preload().then(()=>{
            this.initLanding();
            this.initNav();
        })
    }

    initLanding() {
        landing.init();
    }

    initNav() {
        nav.init();
        myEmitter.on('onNavClick', (status)=> {
            if(status === 'open') {
                menu.open();
            }else {
                menu.close();
            }
        });
    }
}
