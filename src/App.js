import { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Project Files
import './App.css'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

const App = () => {
  const [access, setAccess] = useState(false)

  const toggle = () => {
    setAccess(!access)
  }

  return (
          <Provider store={store} >
            <Router>
              <div>
                <Header />
                  <Route path="/" exact={true} render={(props) => (
                    <>
                    {!access ? <Login toggle={toggle} /> : <Dashboard toggle={toggle} /> }
                    </>
                  )} />
                <Footer />
              </div>
            </Router>
          </Provider>
        )
  }

export default App;
