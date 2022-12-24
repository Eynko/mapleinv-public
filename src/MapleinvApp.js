import React from 'react';
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import './MapleinvApp.css';
import HeaderBar from './HeaderBar.js';
import ItemTable from './DatabaseDisplay.js';
import InventoryDisplay from './InventoryDisplay.js';
import { queryMapleinvScrollPrices } from './graphql/queries';




export default function MapleinvApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [databaseMode, setDatabaseMode] = useState(true);
  const [inventoryMode, setInventoryMode] = useState(false);
  const [serverSelected, setServerSelected] = useState('SELECT');
  const [filterText, setFilterText] = useState('');
  
  const[itemTable, setItemTable] = useState([]);
  useEffect(() => {
    const pullData = async () => {
      const stuff = await API.graphql({ query: queryMapleinvScrollPrices, variables: { GSI1PK: "PRICE"} })
      console.log(stuff)
      setItemTable(stuff.data.queryMapleinvDBSByGSI1PKGSI1SKIndex.items);
    }
    pullData();
  }, []);


  const handleLoginClick = () => setIsLoggedIn(true);

  const handleLogoutClick = () => setIsLoggedIn(false);

  const handleDatabaseClick = () => {
    setDatabaseMode(true);
    setInventoryMode(false);
  }

  const handleInventoryClick = () => {
    setDatabaseMode(false);
    setInventoryMode(true);
  }

  const handleFilterTextChange = (filterText) => setFilterText(filterText);

  const handleServerClick = (e) => setServerSelected(e.target.value);

  //if(itemTable)
    //console.log(itemTable);
    

  //const items = props.items;
  return (
    <div>
      <HeaderBar 
        isLoggedIn={isLoggedIn}
        serverSelected={serverSelected}
        filterText={filterText}
        handleServerClick={handleServerClick}
        handleLoginClick={handleLoginClick}
        handleLogoutClick={handleLogoutClick}
        handleDatabaseClick={handleDatabaseClick}
        handleInventoryClick={handleInventoryClick}
        handleFilterTextChange={handleFilterTextChange}
      />
      <BodyDisplay
        serverSelected={serverSelected}
        databaseMode={databaseMode}
        inventoryMode={inventoryMode}
        itemTable={itemTable}
        filterText={filterText}
      />
    </div>
  );
}

function BodyDisplay({ serverSelected, databaseMode, itemTable, filterText }) {
  //const inventoryMode = this.props.inventoryMode;

  let display;

  if (serverSelected === 'SELECT') {
    display = <ServerSelectDisplay/>
  } else if (databaseMode) {
    display = <ItemTable 
                itemTable={itemTable} 
                filterText={filterText}
              />
  } else {
    display = <InventoryDisplay
                filterText={filterText}
              />
  }
  return (
    <div>
      {display}
    </div>
  );
}

function ServerSelectDisplay() {
  return (
    <div>
      <h2>
        Select a server on the top left to get started!
      </h2>
    </div>
  );
}