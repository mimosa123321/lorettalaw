import $ from 'jquery';
import { transiteMove } from './../animateUtils/animateUtils';
import myEmitter from './../myEmitter/MyEmitter';

const landing = $('#landing');
const background = $('#landing').find('.background');
const logo = $('#logo').find('.inside').find('.box').find('img');
export default class Landing {
    init() {
        myEmitter.on('onBgHide', this.hideBackground.bind(this));
        myEmitter.on('onLogoHide', this.hideLogo.bind(this));
        this.showLanding();
        this.showLogo(null);
    }

    showLanding() {
        landing.css('display','block');
        setTimeout(()=> {
            transiteMove(landing, 'show', ()=> {
                transiteMove(background, 'show', ()=> {
                });
            });
        },400);
    }

    hideBackground(){
        background.removeClass('show');
    }

    showLogo(now) {
        logo.css('display','block');
        if(now !== null) {
            transiteMove(logo, 'show', ()=> {});
        }else {
            setTimeout(()=> {
                transiteMove(logo, 'show', ()=> {
                });
            },1500);
        }
    }


    hideLogo(){
        logo.removeClass('show');
    }
}
