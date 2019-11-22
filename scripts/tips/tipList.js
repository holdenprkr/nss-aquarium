import { useTips } from "./tipDataProvider.js";
import TipComponent from "./tip.js";



const TipListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".tipList")
  const tips = useTips()

  let allTipsHTML = ""

  for (const tip of tips) {
    const tipHTML = TipComponent(tip)
    allTipsHTML += tipHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="tips">
          ${allTipsHTML}
      </section>
  `
}

export default TipListComponent