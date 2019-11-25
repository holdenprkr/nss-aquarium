import { useLocations } from "./locationDataProvider.js";
import LocationComponent from "./location.js";



const LocationListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".locationsArticle")
  const locations = useLocations()

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="locations">
          ${
            locations.map(
              (location) => {
              return LocationComponent(location)
            }).join("")
          }
      </section>
  `
}

export default LocationListComponent