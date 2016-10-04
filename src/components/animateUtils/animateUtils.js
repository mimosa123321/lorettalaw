import $ from 'jquery';

function transiteMove(ele, anim, callback) {
    ele.addClass(anim);
    transitionEnd(ele, ()=> {
        if (callback) {
            callback.apply();
        }
    });
}

function transitionBind(ele, options) {
    if(options == null) {
        options = 'transform ease-out 0.7s';
    }
    (ele).css('transition', options);
}

function transitionUnBind(ele) {
    (ele).css('transition', '');
}


function transitionEnd(ele, callback) {
    "use strict";
    $(ele).unbind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd');
    $(ele).bind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function() {
        $(ele).unbind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd');
        if (callback) {
            callback.apply();
        }
    });
}

function animationEnd(ele, callback) {
    "use strict";
    $(ele).unbind('animationend webkitAnimationEnd MSAnimationEnd oanimationend');
    $(ele).bind('animationend webkitAnimationEnd MSAnimationEnd oanimationend', function() {
        $(ele).unbind('animationend webkitAnimationEnd MSAnimationEnd oanimationend');
        if (callback) {
            callback.apply();
        }
    });
}


export { transiteMove, transitionBind, transitionUnBind, transitionEnd }
