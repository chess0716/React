import React, { useState } from 'react';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/noscript.css';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className={`is-preload ${isMenuVisible ? 'is-menu-visible' : ''}`}>
      <div id="wrapper">
        <header id="header">
          <div className="inner">
            <a href="index.html" className="logo">
              <span className="symbol"><img src="images/logo.svg" alt="" /></span><span className="title">코딩쿠킹</span>
            </a>
            <nav>
              <ul>
                <li><a href="#menu" onClick={toggleMenu}>Category</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <nav id="menu" className={isMenuVisible ? 'visible' : ''}>
  <h2>Menu</h2>
  <button onClick={hideMenu} className="close-button" style={{opacity: 1}}>Close</button>
  <ul>
    <li><a href="#" onClick={hideMenu} style={{fontSize: '1.2em', fontWeight: 'bold', textAlign: 'center'}}>구이/찜</a></li>
    <li><a href="generic.html" onClick={hideMenu} style={{fontSize: '1.2em', fontWeight: 'bold', textAlign: 'center'}}>찜/찌개</a></li>
    <li><a href="generic.html" onClick={hideMenu} style={{fontSize: '1.2em', fontWeight: 'bold', textAlign: 'center'}}>Tempus etiam</a></li>
    <li><a href="generic.html" onClick={hideMenu} style={{fontSize: '1.2em', fontWeight: 'bold', textAlign: 'center'}}>Consequat dolor</a></li>
    <li><a href="elements.html" onClick={hideMenu} style={{fontSize: '1.2em', fontWeight: 'bold', textAlign: 'center'}}>Elements</a></li>
  </ul>
</nav>

        <div id="main">
          <div className="inner">
            <header>
              <h1>당신의 한 끼의 가격은 얼마입니까?</h1>
              <p>당신의 한끼의 재료의 값을 계산하여 편리한 소비를 도와줍니다 레시피를 선택해주세요</p>
            </header>
            <section className="tiles">
            <article class="style1">
									<span class="image">
										<img src="images/pic01.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Magna</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style2">
									<span class="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Lorem</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style3">
									<span class="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Feugiat</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style4">
									<span class="image">
										<img src="images/pic04.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Tempus</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style5">
									<span class="image">
										<img src="images/pic05.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Aliquam</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style6">
									<span class="image">
										<img src="images/pic06.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Veroeros</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style2">
									<span class="image">
										<img src="images/pic07.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Ipsum</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style3">
									<span class="image">
										<img src="images/pic08.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Dolor</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style1">
									<span class="image">
										<img src="images/pic09.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Nullam</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style5">
									<span class="image">
										<img src="images/pic10.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Ultricies</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style6">
									<span class="image">
										<img src="images/pic11.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Dictum</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style4">
									<span class="image">
										<img src="images/pic12.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Pretium</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <section>
              <h2>Get in touch</h2>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="field half">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="field">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send" className="primary" /></li>
                </ul>
              </form>
            </section>
            <section>
              <h2>Follow</h2>
              <ul className="icons">
                {/* Add your social media icons here */}
              </ul>
            </section>
            <ul className="copyright">
              <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
