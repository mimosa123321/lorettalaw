import 'babel-polyfill';
import $ from 'jquery';
import 'bxslider';

import Store from './../store/Store';
import Opening from './opening/Opening';
import Landing from './landing/Landing';
import Nav from './nav/Nav';
import Menu from './menu/Menu';
import myEmitter from './myEmitter/MyEmitter';

import Gallery from './gallery/Gallery';
import { transitionEnd } from './animateUtils/animateUtils';

const opening = new Opening();
const landing = new Landing();
const nav = new Nav();
const menu = new Menu();
const gallery = new Gallery();

const bio =  $('#bio');
const contact =  $('#contact');
const awards =  $('#awardsHolder');

export default class Application {
    init() {
        myEmitter.on('updateSection', this.updateSection.bind(this));

        this.initOpening();

        document.ontouchmove = function(event){
            // browser window not allowed to bounce when touch in gallery section
            if(!Store.isAllowTouchMove) {
                event.preventDefault();
            }
        }
    }

    initOpening() {
        opening.init();
        opening.preload().then(()=>{
            this.initLanding();
            this.initNav();
        });
    }

    initLanding() {
        landing.init();
    }

    initNav() {
        nav.init();
        myEmitter.on('onNavClick', (status)=> {
            if(status === 'open') {
                menu.open();
                landing.showLogo('now');
                //if gallery section
                if(Store.menuClickedId === 0) {
                    gallery.hide();
                }
                //if exhibition section
                if(Store.menuClickedId === 1 && Store.subMenuClickedId === 0) {
                    gallery.hide();
                }

                Store.isAllowTouchMove = true;

            }else {
                menu.close();

                //if gallery section
                if(Store.menuClickedId === 0) {
                    Store.isAllowTouchMove = false;
                    gallery.show();
                    landing.hideLogo();
                }

                //if exhibition section
                if(Store.menuClickedId === 1 && Store.subMenuClickedId === 0) {
                    Store.isAllowTouchMove = false;
                    gallery.show();
                    landing.hideLogo();
                }
            }
        });

        myEmitter.on('onMenuHide', ()=> {
            myEmitter.emit('onNavClose');
            menu.hide();
        });
    }

    initSection(ele) {
        ele.css('display', 'block');
        setTimeout(function(){
            ele.css('opacity', 1);
        },100);
    }

    removeSection(ele) {
        ele.css('opacity', 0);
        ele.css('display', 'none');
    }

    updateSection() {
        // console.log('menu:',Store.menuClickedId);
        // console.log('submenu:',Store.subMenuClickedId);
        // console.log('subsubmenu:',Store.subSubMenuClickedId);
        //section gallery
        if(Store.menuClickedId === 0) {
        }

        //section news
        if(Store.menuClickedId === 1 && Store.subMenuClickedId === 2) {
            gallery.remove();
            this.initSection(awards);
        }else {
            this.removeSection(awards);
        }

        //section bio
        if(Store.menuClickedId === 2) {
            gallery.remove();

            //calculate the logo height to define "bio" position
            var logoHeight = parseInt($('#logo').css('height'));
            var logoTop = parseInt($('#logo').css('top'));
            var offsetHeight = 10;
            bio.css('top', logoHeight + logoTop + offsetHeight);

            this.initSection(bio);
        }else {
            this.removeSection(bio);
        }

        //section contact
        if(Store.menuClickedId === 3) {
            gallery.remove();
            window.location.href = "mailto:llaw@loretta-law.com";
            // this.initSection(contact);

        }else {
            // this.removeSection(contact);
        }
    }
}
