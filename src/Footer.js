
function Footer() {
    const footer = document.querySelector("footer");
    const footerEl = document.createElement("div");
    footerEl.classList = "footerEl-container";

    footerEl.innerHTML = `
    <div class="footerEl-container">
      <div class="footer-block-1">
        <h2>Connect with us</h2>
        <div class="socials">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-tiktok"></i></a>
          hello
        </div>
      </div>
      <div class="footer-block-2"></div>
      <div class="footer-block-3"></div>
      <div class="footer-block-4"></div>
    </div>

    `;
        
    footer.appendChild(footerEl);
}

export default Footer;