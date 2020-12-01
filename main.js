var app = new Vue ({
    el:'#root',
    data: {
        items: [ "Home","About", "Services", "Journal", "Contact"],
        show: false,
    } ,

    methods: {

        autoClose() {
            setTimeout(() => {
                this.show = false;
            }, 3000);
        }
    // end methods
    }
//end Vue
});
