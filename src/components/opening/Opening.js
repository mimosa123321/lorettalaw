import $ from 'jquery';
import imagesLoaded from 'imagesloaded';

import { transiteMove } from './../animateUtils/animateUtils';

export default class Opening {
    init() {
        this.showIntro();
    }

    showIntro() {
        const img = $('#intro').find('.inside').find('.box').find('img');
        setTimeout(()=> {
            transiteMove(img, 'show');
        }, 100);
    }

    hideIntro() {
        const img = $('#intro').find('.inside').find('.box').find('img');
        transiteMove(img, 'hide', ()=> {
            $('#intro').css('display','none');
        });
    }

    preload() {
        return new Promise((resolve) => {
            const loader = $('#loader');
            const imgLoad = imagesLoaded('#landing', {background: '.background'}, ()=> {
                transiteMove(loader, 'finish', ()=> {
                    this.hideIntro();
                    this.hideLoader();
                    resolve();
                });
            });

            imgLoad.on('progress', (instance, image)=>{
            })
        });
    }

    hideLoader() {
        const loader = $('#loader');
        transiteMove(loader, 'hide');
    }


}

