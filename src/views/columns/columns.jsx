import Card from "../../components/card/card";

function Columns() {
  return (
    <div className="mt-4 pt-5 container text-center">
      <h1 className="mb-5 pb-5">Allez au bout de ce qui vous tient à coeur</h1>
      <div className="row mt-5">
        <div className="col">
          <Card
            title={"Cagnotte"}
            image={"/save_money.png"}
            text={"Avec Nouvel'Air, vous avez la capacité de gagner en pouvoir d'achat, notre système, basé exclusivement sur votre motivation vous permet d'économiser tout en gagnant un cash-back de 10% sur le montant déposé, vous pourrez utiliser votre  cagnotte chez nos commerçants partenaires."}
            width={250}
          ></Card>
        </div>
        <div className="col">
          <Card
            title={"Santé"}
            width={200}
            image={"/community.png"}
            text={"Vouloir arrêter de fumer est une étape importante pour améliorer votre quotidien, être soutenu et s'entraider est important. Grâce à notre système de forum communautaire vous pourrez échanger avec les autres membres de la communauté et ainis vous soutenir au quotidien, et même raconter vos exploits."}
          ></Card>
        </div>
        <div className="col">
          <Card
            title={"Nouvelle colonne"}
            image={"/health.png"}
            text={"Votre santé, c'est elle qui importe, notre application vous permet de consulter en détail votre consommation de cigarettes. Arrêter de fumer signifie également retrouver le goût, l'odorat et améliorer votre souffle.\n Vous pouvez le faire !"}
            width={200}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default Columns;
