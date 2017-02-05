import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';
import { transitionEnd } from './../animateUtils/animateUtils';

import Album from './../utils/Album';

const gallery = $('#gallery');
const album = $('.album');

export default class Gallery extends Album {
    constructor() {
        super();
        this.init();
        this.update = this.update.bind(this);
        myEmitter.on('updateGallery', this.update);
        myEmitter.on('removeGallery', this.remove);
    }

    update(photoArr, menuId) {
        "use strict";

        album.empty();
        var photoList =photoArr[menuId];
        var title = photoList[0].title;
        for(var i=0; i<photoList.length; i++) {
            var img = photoList[i].image;
            // album.append("<div class='images' style='background-image: url(" + img + ")'></div>");

            var caption = photoList[i].caption;
            album.append("<div class='images'><img src=" + img + " /><b>" + title + "</b>, " + caption + "</div>");
        }

        gallery.css('opacity',1);
        this.initSlider(album);
        Store.isAllowTouchMove = false;
    }
    remove() {
        if(parseInt(gallery.css('opacity')) === 1) {
            gallery.css('opacity',0);
            transitionEnd(gallery, ()=> {
                album.empty();
            });
        }

        Store.isAllowTouchMove = true;
    }
}