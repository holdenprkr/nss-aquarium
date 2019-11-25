
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


  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="fishList">
          ${
            fishes.map(
              (fish) => {
              return FishComponent(fish)
            }).join("")
          }
      </section>
  `
}

export default FishListComponent