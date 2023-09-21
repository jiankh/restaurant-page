function Header() {
    const content = document.querySelector("#page-header");
    const header = document.createElement("header")

    header.innerHTML = `
        <div class='logo'>
            <img src="images/sprigslogo.png" alt="Logo"/>
        </div>
        <div className='schedule'>
            <h2>
                Store Hours: 
                <br>
                <i>Coming Soon!</i>
            </h2>
        </div> `
    
    content.appendChild(header)
}

export default Header