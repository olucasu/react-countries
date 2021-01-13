import CountriesList from '../components/CountriesList';
import SearchField from '../components/SearchField';

function Home()
{
  return(
    <div className="App">
      <SearchField />
      <CountriesList />
  </div>
  )
}

export default Home;
