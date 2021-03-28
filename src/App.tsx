import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Todos from './pages/Todos';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <Todos />
      <GlobalStyle />
    </div>
  );
};

export default withAuthenticator(App);
