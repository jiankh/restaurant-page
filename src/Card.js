const Card = (title,img,description,price) => { 
    return (`
      <article class="card">
        <div class="menuItemTitle">
          <h2> ${title} </h2>
        </div>
        <div class="menuItemImage">
          <img src=${img} />
        </div>
        <p>${description}</p>
        <ul class='addCart'>
          <li>Price: ${price} ea</li>
          <li><button> Add To Cart</button></li>
        </ul>
      </article>
    `);
}

export default Card