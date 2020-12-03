// JAVASCRIPT for create a scroll bar indicator

// When the user scrolls the page, execute function of scroll
window.onscroll = function() {scrollBar()};

function scrollBar() {
  var winScroll = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  // add into style of this element the width in %
  document.getElementById("scrollIndicator").style.width = scrolled + "%";
};

// START VUE.js
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

        menuHamb: [
            {
                name: "Home",
            },
            {
                name: "About",
            },
            {
                name: "Services",
            },
            {
                name: "Contact",
            },
            {
                name: "Journal",
            },
        ],

        show: false,
        showListHamb:false,
    } ,

    methods: {

        autoClose() {
            setTimeout(() => {
                this.show = false;
            }, 3000);
        },

        hambClose() {
            setTimeout(() => {
                this.showListHamb = false;
            }, 1000);
        },

    }
//end Vue
});
