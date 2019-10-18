import React from 'react';

import './Cards.scss'

const List = props => <ul className="card-li">{props.children}</ul>;

function Card(props) {
  return (
    <li className="card-el">
      <img src={props.image} alt={props.image}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link}>Go</a>
    </li>
  );
}

function Cards(props) {

  const CardsList = props.data.map((card) => <Card {...card} key={card.id}/>);

  return (
      <List className='list'>
        {CardsList}
      </List>
    )
}

export default Cards;