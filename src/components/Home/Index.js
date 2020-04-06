import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './../../assets/img/eu.jpg';



class Index extends React.Component {
  render() {
     return (
        <div className='home'>
            <div className='home__modal'>
                <img src={img1}></img>
                <div className='home__modal--body'>
                    <h1>Natasha Valencia</h1>
                    <p>Desenvolvedora</p>
                </div>
            </div>
            
        </div>
     );
  }
}

export default Index;
