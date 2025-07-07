// Classe Pet per la creazione di oggetti animali domestici
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  // Metodo per verificare se due animali hanno lo stesso padrone
  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}
