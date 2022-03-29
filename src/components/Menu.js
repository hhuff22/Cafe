import React from 'react';
import shakshuka from '../img/shakshuka.webp';
import pancakes from '../img/pancakes.jfif';
import quiche from '../img/quiche.jfif';
import omlette from '../img/omlette.jfif';
import pumpkinSoup from '../img/pumpkin-soup.webp';
import parsnip from '../img/parsnip.jfif';
import coconut from '../img/coconut.jfif';
import tomato from '../img/tomato.jfif'


function Menu(props) {

    return (
        <div className="midPage">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="midTitles mt-4">Breakfast</h3>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-sm">
                        <img className="w-100 menuItem" src={shakshuka} />
                        <p>Shakshuka</p>
                    </div>
                    <div className="col-sm">
                        <img className="w-100 menuItem" src={pancakes} />
                        <p>Pancakes</p>
                    </div>
                    <div className="col-sm">
                        <img className="w-100 menuItem" src={quiche} />
                        <p>Quiche</p>
                    </div>
                    <div className="col-sm">
                        <img className="w-100 menuItem" src={omlette} />
                        <p>Omlette</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <h3 className="midTitles mt-4">Soups</h3>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-sm">
                        <img className="w-100 menuItem" src={pumpkinSoup} />
                        <p>Pumpkin</p>
                    </div>
                    <div className="col-sm">
                        <img className="w-100 menuItem" src={parsnip} />
                        <p>Parsnip</p>
                    </div>
                    <div className="col-sm">
                        <img className="w-100 menuItem" src={coconut} />
                        <p>Coconut</p>
                    </div>
                    <div className="col-sm">
                        <img className="w-100 menuItem" src={tomato} />
                        <p>Tomato</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Menu;