
class IndexView {
    
    constructor() {
        console.log('instantiating IndexView');
        this.valueA = document.querySelector('#lblWelcome');
        this.newButton = document.querySelector("#btnNew");
        this.newButton.onclick = e => this.challenge(e);
        this.validateButton = document.querySelector("#btnCucu");
        this.validateButton.onclick = e => this.doSomething(e);
        console.log('init done')
    }

    doSomething(e) {
        console.log('do something');


    }

}

new IndexView();


