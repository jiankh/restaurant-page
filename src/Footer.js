import { BsFacebook, BsInstagram, BsTwitter, BsTiktok} from 'react-icons/bs'

function Footer() {
    const footer = document.querySelector("footer");
    const footerEl = document.createElement("div");
    footerEl.classList = "footerEl-container";

    footerEl.innerHTML = `
    <div class="footer-block-1">
    <h2>Connect with us</h2>
        <div class="socials">
            <a href="#">${BsFacebook}</a>
            <a href="#">${BsInstagram}</a>
            <a href="#">${BsTwitter}</a>
            <a href="#">${BsTiktok}</a>
        </div>
    </div>
    <div class="footer-block-2"></div>
    <div class="footer-block-3"></div>
    <div class="footer-block-4"></div>

    `;
        
    footer.appendChild(footerEl);
}

export default Footer;