const primarySidebar = [{text: "cvi", link:"/cvi/"}, {text:"briif", link:"/cvi/briif"}, {text:"moodboard", link:"/cvi/moodboard"}]

module.exports = {
    title: "Minu Dokuveeb",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
            { text: "Contact", link: "/contact/" },
            { text: "CVI", link: "/cvi/" },
          ],
          sidebar: {
              "/cvi/":primarySidebar,
              "/cvi/briif":primarySidebar,
          } 
    },
  };