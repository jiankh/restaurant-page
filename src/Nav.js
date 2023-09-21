function Nav() {
    const content = document.querySelector("#page-header");
    const nav = document.createElement("div")
    nav.classList = "nav-container"

    nav.innerHTML = (`
      <ul>
        <li>
          <a class="home-btn" href="#"> Home </a> 
        </li>
        <li>
            <a class="menu-btn" href="#"> Menu </a> 
        </li>
        <li>
            <a class="about-btn" href="#"> About Us </a> 
        </li>
        <li>
            <a href="#"> Contact Us </a> 
        </li>

      </ul>
      `
    );
        
    
    content.appendChild(nav)
}

export default Nav