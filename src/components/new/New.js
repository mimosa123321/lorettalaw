import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';

import Album from './../utils/Album';

const gallery = $('#gallery');
const album = $('.album');

export default class Gallery extends Album {
    constructor() {
        super();
        this.init();
        this.update = this.update.bind(this);
        myEmitter.on('updateGallery', this.update);
    }

    update() {
        "use strict";
        album.empty();
        var photoList = window.GALLERY_PHOTOS[Store.subMenuClickedId];
        var title = photoList[0].title;
        for(var i=0; i<photoList.length; i++) {
            var img = photoList[i].image;
            // album.append("<div class='images' style='background-image: url(" + img + ")'></div>");

            var caption = photoList[i].caption;
            album.append("<div class='images'><img src=" + img + " /><b>" + title + "</b>, " + caption + "</div>");
        }

        this.initSlider(album);
    }

    clear() {

    }

}