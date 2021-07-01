import "./contact.css";
import { useEffect, useState } from "react";

export default function Contact() {
    const [name, setName] = useState('Puchi')

    return (
        <>
            <div className="contactBackground">
                <div className="leftBackground">
                    <div className="phone"></div>
                    <div className="bottomCat"></div>
                </div>
                <div className="rightBackground">
                    <div className="showcase">
                        <h1>Contact Me!</h1>
                        <div>
                            <input type="text" className="text-input" id="name" name="name" placeholder="Name" />
                        </div>
                        <div>
                            <input type="text" className="text-input" id="phone" name="phone" placeholder="+1 (###) ###-#### " />
                        </div>
                        <div>
                            <input type="email" className="text-input" id="email" name="email"
                                placeholder="something@something.com..." />
                        </div>
                        <div>
                            <textarea name="message" className="text-area" id="message" cols="30" rows="5"
                                placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="singlePostButton" style={{ backgroundColor: "white", width: "100%", color: "#ff81b8", marginTop: "30px", padding: "12px" }}>Submit</button>
                        <div id="status"></div>
                    </div>
                </div>
            </div>
        </>
    );
}


