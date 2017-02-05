import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';

export default class Album {
    constructor() {
        // const bxslider = new Bxslider();
    }

    init(_container) {
        "use strict";
        this.bxslider = _container.bxSlider({
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