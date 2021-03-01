import { COUNTRYS } from './service/queries'
import { contriesItemsVar } from './service'
import { useQuery } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home/Home'
import Routes from './routes/Routes'
import './App.css'
import Loader from './views/Loader'

function App() {
  const { loading, error, data } = useQuery(COUNTRYS);
  if (loading) return <Loader />
  if (error) return `Error! ${error.message}`
  contriesItemsVar(data.Country)

  return (
    <div className="App">
      <Routes>
        <Home />
      </Routes>
    </div>
  )
}

export default App;
