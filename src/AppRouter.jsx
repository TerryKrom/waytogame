import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Categorias from './components/categorias'

const AppRouter = () => {
    return (
      <Router>
          <Route path="/about" component={Categorias} />
          {/* Adicione mais rotas aqui */}
        </Router>
    );
  };
  
  export default AppRouter;