import React, {useState} from 'react';

import Cards from './components/Cards'
import InfoCard from './models/InfoCard'

function App() {
  const [cardsList, setCardsList] = useState([
    new InfoCard(1,'Title one','description one','https://www.thelitigationgroup.com/wp-content/uploads/2016/10/image-x.png'),
    new InfoCard(2,'Title two','description two','https://www.thelitigationgroup.com/wp-content/uploads/2016/10/image-x.png'),
    new InfoCard(3,'Title three','description three','https://www.thelitigationgroup.com/wp-content/uploads/2016/10/image-x.png'),
  ])
  return (
    <Cards data={cardsList}/>
  );
}

export default App;
