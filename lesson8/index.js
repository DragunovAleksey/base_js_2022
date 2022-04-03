/* const myCity = {
  name: "Moscow",
   population: 10000000,
  showName: function () {
     console.log(this.name);
   },
   showPopulation: function () {
     console.log(this.population);
   },

  changeKeyValue: function (key, newValue) {
     switch (key) {
      case "name":
        this.name = newValue;
        return;
      case "population":
        this.population = newValue;
        return;
       default:
        console.log("Ключ не найден");
         return;
     }
   },
 };


 const newCity = {
    name: "NN",
    population: 1500000,
  };
  
  myCity.showName.call(newCity);
  myCity.showPopulation.call(newCity);
  myCity.changeKeyValue.call(newCity, "name", "NY");
  myCity.changeKeyValue.apply(newCity, ["population", 5000]);
  
  const boundFunc = myCity.changeKeyValue.bind(newCity, "name", "LA");
  boundFunc();
  
  console.log(newCity); */

  const funcParallelepiped = (dlina) =>{
      return (shirina) => {
          return (visota) => {
              return dlina*shirina*visota;
          };
      };
  };
console.log(funcParallelepiped(3)(4)(5))