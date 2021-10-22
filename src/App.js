
import { Header } from './components/Header';
import styled from 'styled-components';


function App() {
  const headerContent = {
    language: 'Рус',
    city: 'Усть-Каменогорск',
    menuItems: [
      {id: 1, name: 'Банк'},
      {id: 2, name: 'Маркет'},
      {id: 3, name: 'Mobile'},
      {id: 4, name: 'Путешествия'},
      {id: 5, name: 'Бизнес'},
      {id: 6, name: 'Club'}
    ],
    contacts: '7575',
    loginMessage: 'Войти'
  }

  return (
      <AppWrapper>
        <Header content={headerContent} />
      </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #fff;
`


export default App;
