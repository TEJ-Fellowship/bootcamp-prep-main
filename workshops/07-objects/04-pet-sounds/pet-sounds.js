let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW
function petSounds(animal, country) {
  let says = "";
  let noiseObj = {};

  noiseObj.dog = animalNoises[0].dog;
  noiseObj.cat = animalNoises[1].cat;
  noiseObj.chicken = animalNoises[2].chicken;

  says = `${animal[0].toUpperCase() + animal.slice(1)}s in ${country} say ${
    noiseObj[animal][country]
  }`;

  return says;
}
