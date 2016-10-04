import $ from 'jquery';
import { transiteMove } from './../animateUtils/animateUtils';

export default class Landing {
    init() {
        this.showLanding();
        this.showLogo();
    }

    showLanding() {
        const landing = $('#landing');
        const background = $('#landing').find('.background');
        landing.css('display','block');
        setTimeout(()=> {
            transiteMove(landing, 'show', ()=> {
                transiteMove(background, 'show', ()=> {
                });
            });
        },400);
    }

    showLogo() {
        const logo = $('#logo').find('.inside').find('.box').find('img');
        setTimeout(()=> {
            transiteMove(logo, 'show', ()=> {
            });
        },1500);
    }
}
