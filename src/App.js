import Compteur from './Compteur';
import CompteurEffet from './CompteurEffet';
import CounterWithTitle from './CounterWithTitle';
import DynamicText from './DynamicText';
import FormulaireNom from './FormulaireNom';
import MessageBouton from './MessageBouton';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div>
      <Compteur />
      <MessageBouton />
      <FormulaireNom />
      <CompteurEffet />
      <DynamicText/>
      <RegistrationForm/>
      <CounterWithTitle/>
    </div>
  );
}

export default App;