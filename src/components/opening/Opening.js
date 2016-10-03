import $ from 'jquery';
import { imagesLoaded } from 'imagesloaded';

export default class Opening {
    init() {
        console.log("opening init");
        //preload();
    }

    preload() {
        imagesLoaded('#landing', {background: '.item'}, ()=> {

        });
    }



}

