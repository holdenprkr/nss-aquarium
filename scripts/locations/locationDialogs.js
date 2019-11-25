const initializeLocationsDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const locationsCloseButtons = document.querySelectorAll(".btn--close")

  for (const button of locationsCloseButtons) {
    button.addEventListener(
      "click",
      eventClick => {
        const dialog = eventClick.target.parentNode
        dialog.close()
      }
    )
  }

  const allLocationDetailButtons = document.querySelectorAll("button[id^='button--']")

  // Add an event listener to each one
  for (const button of allLocationDetailButtons) {
      button.addEventListener(
          "click",
          theEvent => {
              const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
              const theDialog = document.querySelector(dialogSiblingSelector)
              theDialog.showModal()
          }
      )
  }
}

export default initializeLocationsDetailButtonEvents
