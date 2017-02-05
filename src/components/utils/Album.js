import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';

export default class Album {
    constructor() {
        this.bxslider = null;
    }

    init() {
        console.log("album init");
    }
    initSlider(_container) {
        var self = this;
        if (this.bxslider) {
            this.bxslider.destroySlider();
        }
        this.bxslider = _container.bxSlider({
            speed: 500,
            pager: false,
            infiniteLoop: false,
            onSliderLoad: function(index) {
                _container.parent().css('opacity',1);
            },

            onSlideBefore: function($slideElement, oldIndex, newIndex) {
                if (newIndex >= self.bxslider.getSlideCount() - 1) {
                    $('.bx-next').hide();
                    $('.bx-prev').show();
                } else if (newIndex <= 0) {
                    $('.bx-prev').hide();
                    $('.bx-next').show();
                } else {
                    $('.bx-prev').show();
                    $('.bx-next').show();
                }
            },

            onSlideAfter: function() {}
        });

    }

}