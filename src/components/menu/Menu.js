import $ from 'jquery';
import { transiteMove } from './../animateUtils/animateUtils';

const menu = $('#menu');

export default class Menu {
    init() {
        setTimeout(()=> {
            transiteMove(menu, 'show');
        },1200);
    }
    open() {
        transiteMove(menu, 'open');
    }
    close() {

    }


}
