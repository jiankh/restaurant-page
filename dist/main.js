(()=>{"use strict";(function(){const n=document.querySelector("#page-header"),e=document.createElement("header");e.innerHTML="\n        <div class='logo'>\n            <img src=\"images/sprigslogo.png\" alt=\"Logo\"/>\n        </div>\n        <div className='schedule'>\n            <h2>\n                Store Hours: \n                <br>\n                <i>Coming Soon!</i>\n            </h2>\n        </div> ",n.appendChild(e)})(),function(){const n=document.querySelector("#page-header"),e=document.createElement("div");e.classList="nav-container",e.innerHTML='\n      <ul>\n        <li>\n          <a href="#"> Home </a> \n        </li>\n        <li>\n            <a href="#"> Menu </a> \n        </li>\n        <li>\n            <a href="#"> About Us </a> \n        </li>\n        <li>\n            <a href="#"> Contact Us </a> \n        </li>\n\n      </ul>\n      ',n.appendChild(e)}(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList="home-container",e.innerHTML='\n\n    <div className="welcome-msg">\n        <h2>Welcome to Sprigs Bakery!</h2>\n        <h3>Where sweet dreams come true</h3>\n        <button class="order-now-btn" >Order Now</button>\n    </div>\n\n    ',n.appendChild(e)}()})();