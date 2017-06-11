import $ from 'jquery';
import Store from './../../store/Store';
import myEmitter from './../myEmitter/MyEmitter';

export default class Album {
    constructor() {
        this.bxslider = null;
    }

    init() {}
    initSlider(_container, _photoList) {
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
                //no caption for exhibition
                if(Store.menuClickedId === 1 && Store.subMenuClickedId === 0) {
                    $('.caption').html('');
                }else {
                    // for gallery
                    if(_photoList.length > 1) {
                        // if has story for gallery
                        if(window.GALLERY_POST_CONTENTS_EN[Store.subMenuClickedId ] !== "") {
                            $('.caption').html('');
                        }else {
                            $('.caption').html(_photoList[index].caption);
                        }

                    }else {
                        $('.caption').html('');
                    }
                }
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

            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                //no caption for exhibition
                if(Store.menuClickedId === 1 && Store.subMenuClickedId === 0) {
                    $('.caption').html('');
                }else {
                    // for gallery
                    if(_photoList.length > 1) {
                        //if have story and no of photo > 1
                        if(window.GALLERY_POST_CONTENTS_EN[Store.subMenuClickedId ] !== "") {
                            if(newIndex === 0) {
                                $('.caption').html("");
                            }else {
                                $('.caption').html(_photoList[newIndex - 1].caption);
                            }

                        }else {
                            $('.caption').html(_photoList[newIndex].caption);
                        }
                    }else {
                        $('.caption').html('');
                    }
                }
            }
        });

    }

}