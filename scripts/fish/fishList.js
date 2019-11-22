
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from "./fishDataProvider.js"
import FishComponent from "./fish.js"


const FishListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishListArticle")
  const fishes = useFish()

  let allFishHTML = ""

  for (const fish of fishes) {
    const fishHTML = FishComponent(fish)
    allFishHTML += fishHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="fishList">
          ${allFishHTML}
      </section>
  `
}

export default FishListComponent