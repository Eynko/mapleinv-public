import React from 'react';

export default function HeaderBar(
  { isLoggedIn, serverSelected, filterText, handleServerClick, handleLoginClick, 
    handleLogoutClick, handleDatabaseClick, handleInventoryClick, handleFilterTextChange }
  ) {
  
  return (
    <div className='headerbar'>
      <ServerSelect 
        serverSelected={serverSelected}
        handleServerClick={handleServerClick} 
      />
      <ModeControl 
        handleDatabaseClick={handleDatabaseClick}
        handleInventoryClick={handleInventoryClick}
      />
      <SearchBar 
        filterText={filterText} 
        handleFilterTextChange={handleFilterTextChange}
      />
      <LoginControl 
        isLoggedIn={isLoggedIn} 
        handleLoginClick={handleLoginClick}
        handleLogoutClick={handleLogoutClick}
      />
    </div>
  );
}

function ServerSelect({ serverSelected, handleServerClick }) {
  return (
    <label>
      <select name="server selection" value={serverSelected} onChange={handleServerClick}>
        <option value="SELECT" disabled hidden>Server Select</option>
        <option value="PHOENIX">Phoenix</option>
        <option value="PIP">Pip prayge</option>
      </select>
    </label>
  );
}

function ModeControl({ handleDatabaseClick, handleInventoryClick }) {
  return (
    <div>
      <DatabaseButton onClick={handleDatabaseClick} />
      <InventoryButton onClick={handleInventoryClick} />
    </div>
  );
}

function DatabaseButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Database
    </button>
  );
}

function InventoryButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Inventory
    </button>
  );
}

function SearchBar({ filterText, handleFilterTextChange }) {
  const callHandleFilterTextChange = (e) => handleFilterTextChange(e.target.value);

  return (
    <form>
      <input 
        type="text"
        placeholder="Search"
        value={filterText} 
        onChange={callHandleFilterTextChange}
      />
    </form>
  );
}

function LoginControl({ isLoggedIn, handleLoginClick, handleLogoutClick }) {  
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      {button}
    </div>
  );
}

function LoginButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Login
    </button>
  );
}

function LogoutButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Logout
    </button>
  );
}