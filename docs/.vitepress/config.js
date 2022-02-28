const cviSidebar = [
    {text: "cvi", link:"/cvi/"},
    {text:"briif", link:"/cvi/briif"},
    {text:"moodboard", link:"/cvi/moodboard"}]

const logiSidebar = [
    {text: "logi", link:"/logi/"},
    {text:"Font märgiks", link:"/logi/01_font"},
    {text:"Apple", link:"/logi/apple"},
    {text:"Pildi järgi disainimine", link:"/logi/pildijargi"},
    {text:"Vapp", link:"/logi/vapp"}]



module.exports = {
    title: "Minu Dokuveeb",
    base: "/dokuveeb/",
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
            "/logi/apple":logiSidebar,
            "/logi/pildijargi":logiSidebar,
            "/logi/vapp":logiSidebar,
          },
    },
  };