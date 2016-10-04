import 'babel-polyfill';
import $ from 'jquery';

import Opening from './opening/Opening';
import Landing from './landing/Landing';
import Menu from './menu/Menu';

const opening = new Opening();
const landing = new Landing();
const menu = new Menu();

export default class Application {
    init() {
        this.initOpening();
    }

    initOpening() {
        opening.init();
        opening.preload().then(()=>{
            this.initLanding();
            this.initMenu();
        })
    }

    initLanding() {
        landing.init();
    }

    initMenu() {
        menu.init();
    }
}
