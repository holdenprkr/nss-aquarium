const fishCollection = [
  {
    image: "fish.jpg",
    name:"Bitey",
    food: ["Humans", "Pellets"],
    species:"Pirahna",
    length:"4in",
    location:"Brazil"
  },
  {
    image: "fish.jpg",
    name:"Jawsie",
    food: ["Seals", "Flakes"],
    species:"Shark",
    length:"25ft",
    location:"Florida, USA"
  },
  {
    image: "fish.jpg",
    name:"Angie",
    food: ["Shrimp", "Crabs"],
    species:"Angler",
    length:"12in",
    location:"Alaska"
  },
  {
    image: "fish.jpg",
    name:"Barry",
    food: ["Fish", "Sponges"],
    species:"Barracuda",
    length:"70in",
    location:"Bahamas"
  },
  {
    image: "fish.jpg",
    name:"Spongebob",
    food: ["Krabby Patty", "Pizza"],
    species:"Sponge",
    length:"5in",
    location:"Bikini Bottom"
  },
  {
    image: "fish.jpg",
    name:"Sandy",
    food: ["Nuts", "Krabby Patty"],
    species:"Underwater Squirrel",
    length:"6in",
    location:"Bikini Bottom"
  }
]

export const useFish = () => {
  return fishCollection
}