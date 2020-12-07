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

        // block of services available
        services: [
            {
                titleService: "Answering phone calls",
                textService: "Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt.",
            },
            {
                titleService: "Basic data entry",
                textService: "Accumsan odio id nec mauris, eu, tortor at. Vitae tincidunt enim quis.",
            },
            {
                titleService: "Organizing calendar",
                textService: "Elementum blandit erat odio quam pellentesque aliquam faucibus.",
            },
            {
                titleService: "Travel search and booking",
                textService: "Est dignissim ipsum tellus, hendrerit ac aliquam eu vel blandit ac amet ut ut.",
            },
        ],

        // first block of card
        cards: [
            {
                title: "1",
                text: "Pellentesque pellentesque montes, pellentesque rutrum enim nisl purus posuere senectus.",
                link: "Learn more",
                href: "#",
            },
            {
                title: "2",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                link: "Learn more",
                href: "#",
            },
            {
                title: "3",
                text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                link: "Learn more",
                href: "#",
            },
        ],

        // second block of card
        boxBrand:[
            {
                num: "1",
                title: "Learn to delegate",
                text: "Pellentesque pellentesque montes, pellentesque rutrum enim nisl purus posuere senectus.",
                link: "Learn more",
                href: "#",
            },
            {
                num: "2",
                title: "Reduce labor costs",
                text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper.",
                link: "Learn more",
                href: "#",
            }
        ],

        //oggetto per i mex della chat
        chat:{
            mex:"This is a free Hubspot live chat. You can create your own chat flows and engage your customers with Avada& Hubspot!",
        },

        // hamburger menu
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
