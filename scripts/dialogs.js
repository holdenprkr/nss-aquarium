const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
    btn.addEventListener(
      "click",
      theEvent => {
        const dialogElement = theEvent.target.parentNode
        dialogElement.close()
      }
    )
  }
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line

  // Show Bart's details when the button is clicked
  document.querySelector("#button--bitey").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--bitey")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--jawsie").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--jawsie")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--angie").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--angie")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--barry").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--barry")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--spongebob").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--spongebob")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--sandy").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--sandy")
      theDialog.showModal()
    }
  )

  // document.querySelector("#button--randy").addEventListener(
  //   "click",
  //   theClickEvent => {
  //     const theDialog = document.querySelector("#details--randy")
  //     theDialog.showModal()
  //   }
  // )


};

  export default initializeDetailButtonEvents