class Personne {
    static nombrePersonnes = 0;
  
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
      Personne.nombrePersonnes++;
    }
  
    sePresenter() {
      console.log(`Je suis ${this.nom} et j'ai ${this.age} ans.`);
    }
  
    static afficherNombrePersonnes() {
      console.log(`Il y a ${Personne.nombrePersonnes} personnes.`);
    }
  }
  
  class Enfant extends Personne {
    constructor(nom, age) {
      super(nom, age);
    }
  
    sePresenter() {
      super.sePresenter();
      console.log("Je suis un enfant.");
    }
  }
  
  const personne1 = new Personne("Alice", 30);
  const enfant1 = new Enfant("Bob", 8);
  
  personne1.sePresenter();
  enfant1.sePresenter();
  
  Personne.afficherNombrePersonnes();
  