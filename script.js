function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img e subistituir a imagem seeguindo condicional
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

 // const img = document.querySelector("#profile")
 // if (html.classList.contains("light")) {
 //   img.setAttribute("alt", "./assets/avatar-light.png")
 // } else {
  //  img.setAttribute(
   //   "alt",
    //  "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    //)
  }

