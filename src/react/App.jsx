import React from 'react';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Index from './Index.jsx';
import ImportantInformation from './ImportantInformation.jsx';
import Contact from './Contact.jsx';
import AboutUs from './AboutUs.jsx';


class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
              <Switch>
              <Route exact path="/" component={Index}  />
              <Route exact path="/ImportantInformation" component={ImportantInformation}  />
              <Route exact path="/Contact" component={Contact}  />
              <Route exact path="/AboutUs" component={AboutUs}  />
              <Redirect to='/'/>
              </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
