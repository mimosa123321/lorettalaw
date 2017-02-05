import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';

import * as bxslider from "jquery.bxslider";

export default class Album {
    constructor() {
        // const bxslider = new Bxslider();
    }

    init(_container) {
        "use strict";
        // this.bxslider = Bxslider(window, $);
        console.log(_container);

        console.log(bxslider);


        // bxslider.getCurrentSlide();
        // console.log(this.bxslider);




        this.bxslider = _container.bxslider({
            speed: 500,
            pager: false,
            infiniteLoop: false,
            onSliderLoad: function(index) {
            },

            onSlideBefore: function($slideElement, oldIndex, newIndex) {
            },

            onSlideAfter: function() {}
        });

    }

}