import 'babel-polyfill';
import $ from 'jquery';

import Opening from './opening/Opening';
import Landing from './landing/Landing';

const opening = new Opening();

export default class Application {
    init() {
        console.log("Application init");
        opening.init();
    }
}
