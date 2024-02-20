import React from 'react';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/noscript.css';
import Menu from './component/Menu.js';

function App() {
  return (
    <div className="is-preload">
      {/* Wrapper */}
      <div id="wrapper">
        
        
        
        <Menu />

       {/* Main */}
        <div id="main">
      <div className="inner">
        <header>
          <h1>당신의 한 끼의 가격은 얼마입니까?</h1>
          <p>당신의 한끼의 재료의 값을 계산하여 편리한 소비를 도와줍니다 레시피를 선택해주세요</p>
        </header> 
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Magna</h2>
              <div className="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          <article className="style2">
									<span className="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Lorem</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style3">
									<span className="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Feugiat</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style4">
									<span className="image">
										<img src="images/pic04.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Tempus</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style5">
									<span className="image">
										<img src="images/pic05.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Aliquam</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style6">
									<span className="image">
										<img src="images/pic06.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Veroeros</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style2">
									<span className="image">
										<img src="images/pic07.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Ipsum</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style3">
									<span className="image">
										<img src="images/pic08.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Dolor</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style1">
									<span className="image">
										<img src="images/pic09.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Nullam</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style5">
									<span className="image">
										<img src="images/pic10.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Ultricies</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style6">
									<span className="image">
										<img src="images/pic11.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Dictum</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style4">
									<span className="image">
										<img src="images/pic12.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Pretium</h2>
										<div className="content">
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
                <li><a href="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
                <li><a href="#" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon brands style2 fa-500px"><span className="label">500px</span></a></li>
                <li><a href="#" className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
                <li><a href="#" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
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
