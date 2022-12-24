import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MapleinvApp from './MapleinvApp';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';
import amplifyConfig from './aws-exports';

Amplify.configure(amplifyConfig);

/*
const ITEMS = [
  {icon: 'scroll60.png', name: 'Scroll for Dagger for ATT 60%', priceRange: '350k~500k', lastUpdated: '08-17-22', lastUserUpdated: 'Anko'},
  {icon: 'scroll60.png', name: 'Scroll for One-Handed Sword for ATT 60%', priceRange: '150k~200k', lastUpdated: '09-01-22', lastUserUpdated: 'Falco'},
  {icon: 'scroll10.png', name: 'Scroll for Claw for ATT 10%', priceRange: '3m~4m', lastUpdated: '08-22-22', lastUserUpdated: 'samoyed'},
];*/

/*
function GetData () {
  
  useEffect(() => {
    const pullData = async () => {
      const data = await API.graphql({ query: queryMapleinvScrollPrices, variables: { GSI1PK: "PRICE"} })
      console.log(data)
    }
    pullData();
  }, []);


}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MapleinvApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
