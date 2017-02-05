import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';

import bxslider from 'bxslider';

export default class Album {
    constructor() {
    }

    init(_container) {
        "use strict";

        console.log(bxslider.bxSlider());

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