const addMouseOverTipBorder = () => {

  const tipCards = document.querySelectorAll(".tip")

  for (const tip of tipCards) {
    tip.addEventListener(
      "mouseover",
      (theMouseOverEvent) => {
        tip.classList.add("tipBorder")
      }
    )

    tip.addEventListener("mouseout",
      (theMouseOutEvent) => {
        tip.classList.remove("tipBorder")
      })
  }
}

export default addMouseOverTipBorder 