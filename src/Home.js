function Home() {
    const main = document.querySelector("#content");
    const home = document.createElement("div")
    home.classList = "home-container"

    home.innerHTML = (`

    <div className="welcome-msg">
        <h2>Welcome to Sprigs Bakery!</h2>
        <h3>Where sweet dreams come true</h3>
        <button class="order-now-btn" >Order Now</button>
    </div>

    `);
        
    
    main.appendChild(home)
}

export default Home