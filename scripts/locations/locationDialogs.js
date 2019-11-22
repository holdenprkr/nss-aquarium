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

  document.querySelector("#button--locationOne").addEventListener(
    "click",
    clickEvent => {
      const dialog = document.querySelector("#details--locationOne")
      dialog.showModal()
    }
  )

  document.querySelector("#button--locationTwo").addEventListener(
    "click",
    clickEvent => {
      const dialog = document.querySelector("#details--locationTwo")
      dialog.showModal()
    }
  )

  document.querySelector("#button--locationThree").addEventListener(
    "click",
    clickEvent => {
      const dialog = document.querySelector("#details--locationThree")
      dialog.showModal()
    }
  )

  document.querySelector("#button--locationFour").addEventListener(
    "click",
    clickEvent => {
      const dialog = document.querySelector("#details--locationFour")
      dialog.showModal()
    }
  )
  
  document.querySelector("#button--locationFive").addEventListener(
    "click",
    clickEvent => {
      const dialog = document.querySelector("#details--locationFive")
      dialog.showModal()
    }
  )

  document.querySelector("#button--locationSix").addEventListener(
    "click",
    clickEvent => {
      const dialog = document.querySelector("#details--locationSix")
      dialog.showModal()
    }
  )

  document.querySelector("#button--locationSeven").addEventListener(
    "click",
    clickEvent => {
      const dialog = document.querySelector("#details--locationSeven")
      dialog.showModal()
    }
  )

  document.querySelector("#button--locationEight").addEventListener(
    "click",
    clickEvent => {
      const dialog = document.querySelector("#details--locationEight")
      dialog.showModal()
    }
  )

}

export default initializeLocationsDetailButtonEvents
