import MainScreen from './components/pages/main-screen';

type AppScreenProps = {
  numberOfOffers: number;
}

function App({numberOfOffers}: AppScreenProps): JSX.Element {
  return (<MainScreen numberOfOffers={numberOfOffers}/>);
}

export default App;
