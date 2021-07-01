import "./characters.css";
import { useEffect, useState } from "react";

export default function Characters() {
    const [name, setName] = useState('Puchi')
    const [desc, setDesc] = useState('Constantly in a bad mood')
    const link = `http://localhost:5000/images/${name}.png`
    function clickHandler(e) {
        console.log(e.target.id)
        setName(e.target.id)
        if (e.target.id == 'Puchi') {
            setDesc('Constantly in a bad mood')
        } else if (e.target.id == 'Meemers') {
            setDesc('Loves to cuddle')
        } else if (e.target.id == 'Chico') {
            setDesc('Easily stressed out')
        } else {
            setDesc('?????')
        }
    }
    function scrollUp() {
        console.log('Up')
        document.getElementById('pokedex').scrollTop -= 20;
    }

    function scrollDown() {
        console.log('Down')
        document.getElementById('pokedex').scrollTop += 20;
    }
    return (
        <>
            <div className="background">
                <div className="leftside">
                    <div className="namecard">
                        {name}
                    </div>
                    <div className="character">
                        <img src={link} alt="" className="cat" />
                    </div>
                    <div className="typecard">
                        <p className="description">{desc}</p>
                    </div>
                </div>

                <div className="list" id="pokedex">
                    <ul className="pokedex" id="pokelist">
                        <li id="Puchi" onClick={clickHandler}><span className="number">001</span> Puchi</li>
                        <li id="Meemers" onClick={clickHandler}><span className="number">002</span> Meemers</li>
                        <li id="Chico" onClick={clickHandler}><span className="number">003</span> Chico</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">004</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">005</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">006</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">007</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">008</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">009</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">010</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">011</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">012</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">013</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">014</span>  ---------</li>
                        <li id="Unknown" onClick={clickHandler}><span className="number">015</span>  ---------</li>
                    </ul>
                </div>
                <div className="scroll">
                    <button className="buttonUp" onClick={scrollUp}></button>
                    <button className="buttonDown" onClick={scrollDown}></button>
                </div>
            </div>
        </>
    );
}




