import "./header.css";

export default function Header() {
  // var counter = 1;
  // setInterval(() => {
  //   document.getElementById('radio' + counter).checked = true;
  //   counter++;
  //   if (counter > 4) {
  //     counter = 1;
  //   }
  // }, 5000)

  return (
    <div className="header">
      {/* <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div> */}
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />

        <div className="slide first">
          <img src="http://localhost:5000/images/1.png" alt="" />
        </div>
        <div className="slide test">
          <img src="http://localhost:5000/images/2.png" alt="" />
        </div>
        <div className="slide">
          <img src="http://localhost:5000/images/1.png" alt="" />
        </div>
        <div className="slide">
          <img src="http://localhost:5000/images/2.png" alt="" />
        </div>
        {/* auto navigation start */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
      </div>
      {/* manual navigation */}
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      </div>
    </div>
  );
}
