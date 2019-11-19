const addMouseOverEventLocation = () => {

  const fishCards = document.querySelectorAll(".location")

  for (const card of fishCards) {
    card.addEventListener(
      "mouseover",
      (theMouseOverEvent) => {
        card.classList.add("highlightFish")
      }
    )

    card.addEventListener("mouseout",
      (theMouseOutEvent) => {
        card.classList.remove("highlightFish")
      })
  }
}

addMouseOverEventLocation()