import { useTips } from "./tipDataProvider.js";
import TipComponent from "./tip.js";



const TipListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".tipList")
  const tips = useTips()

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="tips">
          ${
            tips.map((tip) => {
            return TipComponent(tip)
            }).join("")
          }
      </section>
  `
}

export default TipListComponent