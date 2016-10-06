import $ from 'jquery';

function bindButtonsClick(btns, callback) {
    const btnsArr = [];
    btns.each((index, btn)=>{
        btnsArr.push({index:index, btn:btn});
        $(btn).click(()=>{
            //return an array in which btns not contain clicked btn
            let filterBtns = btnsArr.filter((btns)=>{
                if(btns.index != index) {
                    return btns;
                }
            });
            if(callback) {
                callback.apply(this, [index, btn, filterBtns])
            }
        })
    });
}

function bindButtonsOver(btns, callback) {
    const btnsArr = [];
    btns.each((index, btn)=>{
        btnsArr.push({index:index, btn:btn});
        $(btn).mouseover(()=>{
            //return an array in which btns not contain clicked btn
            let filterBtns = btnsArr.filter((btns)=>{
                if(btns.index != index) {
                    return btns;
                }
            });
            if(callback) {
                callback.apply(this, [index, btn, filterBtns])
            }
        })
    });
}

function unbindButtonsClick() {

}

export { bindButtonsClick, unbindButtonsClick, bindButtonsOver }
