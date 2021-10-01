const KBot = require('./kbot')

//console.log("Saludar a Andrés en ingles a la mañana".toUpperCase())
//kBot = new KBot("EN");
//console.log(kBot.saludar("Andrés",8)=="Good morning Andrés");

//console.log("Saludar a Andrés en Español a la noche".toUpperCase())
//kBot = new KBot("ES");
//console.log(kBot.saludar("Andrés",21)=="Buenas noches Andrés");


describe("KBot", () => {
  it("Saludar a Andrés en idioma default a la tarde", () => {
    //Arrange
    const kBot = new KBot();
    
    //Act
    const mensaje = kBot.saludar("Andrés",13);
    
    //Assert
    expect(mensaje).toEqual("Buenas tardes Andrés");
  });
});

describe("KBot", () => {

    it("Saludar en ingles en la mañana", () => {
        //Arrange
        const kBot = new KBot("EN");
  
        //Act
        const mensaje = kBot.saludar("Pedro", 4)
  
        //Assert
        expect(mensaje).toEqual("Good morning Pedro")
    })
})

describe("KBot", () => {

    it("Saludar en ingles en la tarde", () => {
        //Arrange
        const kBot = new KBot("EN");
  
        //Act
        const mensaje = kBot.saludar("Pedro", 16)
  
        //Assert
        expect(mensaje).toEqual("Good afternoon Pedro")
    })
})

describe("KBot", () => {

    it("Saludar en ingles en la tarde", () => {
        //Arrange
        const kBot = new KBot("EN");
  
        //Act
        const mensaje = kBot.saludar("Pedro", 23)
  
        //Assert
        expect(mensaje).toEqual("Good evening Pedro")
    })
})

describe("KBot", () => {

    it("Saludar en español en la mañana", () => {
        //Arrange
        const kBot = new KBot();
  
        //Act
        const mensaje = kBot.saludar("Pedro", 1)
  
        //Assert
        expect(mensaje).toEqual("Buenos días Pedro")
    })
})

