const fishCollection = [
  {
    image: "https://s7d1.scene7.com/is/image/PETCO/1031740-left-1",
    name:"Bitey",
    food: ["Humans", "Pellets"],
    species:"Pirahna",
    length:"4in",
    location:"Brazil"
  },
  {
    image: "https://s7d1.scene7.com/is/image/PETCO/1031740-left-1",
    name:"Jawsie",
    food: ["Seals", "Flakes"],
    species:"Shark",
    length:"25in",
    location:"Florida, USA"
  },
  {
    image: "https://s7d1.scene7.com/is/image/PETCO/1031740-left-1",
    name:"Angie",
    food: ["Shrimp", "Crabs"],
    species:"Angler",
    length:"12in",
    location:"Alaska"
  },
  {
    image: "https://s7d1.scene7.com/is/image/PETCO/1031740-left-1",
    name:"Barry",
    food: ["Fish", "Sponges"],
    species:"Barracuda",
    length:"70in",
    location:"Bahamas"
  },
  {
    image: "https://s7d1.scene7.com/is/image/PETCO/1031740-left-1",
    name:"Spongebob",
    food: ["Krabby Patty", "Pizza"],
    species:"Sponge",
    length:"5in",
    location:"Bikini Bottom"
  },
  {
    image: "https://s7d1.scene7.com/is/image/PETCO/1031740-left-1",
    name:"Sandy",
    food: ["Nuts", "Krabby Patty"],
    species:"Underwater Squirrel",
    length:"6in",
    location:"Bikini Bottom"
  },
  {
    image: "https://s7d1.scene7.com/is/image/PETCO/1031740-left-1",
    name:"Patrick",
    food: ["Krabby Patty", "Pizza"],
    species:"Sponge",
    length:"4in",
    location:"Bikini Bottom"
  },
  {
    image: "https://s7d1.scene7.com/is/image/PETCO/1031740-left-1",
    name:"Salty",
    food: ["Nuts", "Krabby Patty"],
    species:"Underwater Squirrel",
    length:"8in",
    location:"Bikini Bottom"
  }
]

let holyFish = []
let soldiers = []
let regularFish = []

for (const fish of fishCollection) {
  if (fish.length.split("in")[0] % 3 === 0) {
      holyFish.push(fish)
  } else if (fish.length.split("in")[0] % 5 === 0) {
      soldiers.push(fish)
  } else {
      regularFish.push(fish)
  }
}

export const mostHolyFish = () => {
  return holyFish.slice()
}

export const soldierFish = () => {
  return soldiers.slice()
}

export const nonHolyFish = () => {
  return regularFish.slice()
}