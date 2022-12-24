import React from 'react';

export default function ItemTable({ filterText, itemTable }) {
  const filteredText = filterText.toLowerCase();
  const itemRows = [];

  itemTable.forEach((item, i) => {
    let itemLower = item.ItemName.toLowerCase();
    if (itemLower.indexOf(filteredText) === -1) {
      return;
    }
    
    itemRows.push(
      <ItemInfoRow
        item={item}
        key={i} />
    );
  });

  return (
    <table>
      <thead>
        <ItemHeaderRow />
      </thead>
      <tbody>{itemRows}</tbody>
    </table>
  );
}

function ItemHeaderRow() {
  return (
    <tr>
      <th>Icon</th>
      <th>Name</th>
      <th>Price Range</th>
      <th>Last Updated</th>
      <th>Last User Update</th>
    </tr>
  );
}

function ItemInfoRow({ item }) {
  //const icon = require('./icons/' + item.icon);
  const icon = 'https://maplestory.io/api/gms/62/item/' + item.ItemID + '/icon?resize=1';
  const name = item.ItemName;
  const priceRange = item.ItemPrice.toLocaleString();
  const lastUpdated = item.PriceDate.slice(0,10);
  const lastUserUpdated = item.GSI2PK.slice(5);
  
  return (
    <tr>
      <td><img src={icon} alt="" /></td>
      <td>{name}</td>
      <td>{priceRange}</td>
      <td>{lastUpdated}</td>
      <td>{lastUserUpdated}</td>
    </tr>
  );
}