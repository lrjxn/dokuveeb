const cviSidebar = [
    {text: "cvi", link:"/cvi/"},
    {text:"briif", link:"/cvi/briif"},
    {text:"moodboard", link:"/cvi/moodboard"}]

const logiSidebar = [
    {text: "logi", link:"/logi/"},
    {text:"Font märgiks", link:"/01_font"}]



module.exports = {
    title: "Minu Dokuveeb",
    themeConfig: {
        nav: [
            { text: "Esileht", link: "/" },
            { text: "Minust", link: "/about/" },
            { text: "Logi", link: "/logi/" },
            { text: "CVI", link: "/cvi/" },
          ],
          sidebar: 
              {
              "/cvi/":cviSidebar,
              "/cvi/briif":cviSidebar,
              "/cvi/moodboard":cviSidebar,
              "/cvi/visandid":cviSidebar,
            "/logi/":logiSidebar,
            "/logi/01_font":logiSidebar,
          },
    },
  };