const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas) {
    validatedSheep = ovejas.filter(sheep => {
      let hasA = sheep.name.toLowerCase().indexOf('a') >= 0;
      let hasN = sheep.name.toLowerCase().indexOf('n') >= 0;
      let isRed = sheep.color == 'rojo';
      return (hasA && hasN && isRed);
    });

    return validatedSheep;
}

console.log(contarOvejas(ovejas));
