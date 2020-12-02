var app = new Vue ({
    el:'#root',
    data: {
        items: [
            {
                name: "Home",
            },
            {
                name: "About",
            },
            {
                name: "Services",
                links: [],
            },
            {
                name: "Journal",
            },
            {
                name: "Contact",
            },

        ],
        //oggetto per i mex della chat
        chat:{
            mex:"This is a free Hubspot live chat. You can create your own chat flows and engage your customers with Avada& Hubspot!",
        },
        show: false,
    } ,

    methods: {

        autoClose() {
            setTimeout(() => {
                this.show = false;
            }, 3000);
        },


    }
//end Vue
});
