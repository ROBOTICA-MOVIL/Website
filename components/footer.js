class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `  
      <p class="logoF"> 
      <a href="https://unal.edu.co/" title="Universidad Nacional de Colombia"><img src="img/logoF.png" width="150" height="100" alt="UNAL Media Logo"/></a><br/></p>
      <p class="footerIcons"> 
      <a href="index.html" title="Home"><img src="img/ic_action_home.png" width="62" height="62" alt="Home"/></a><br/></p>
      <p class="footerIcons"> 
      <a href="https://github.com/Esdek" title="GitHub"><img src="img/ic_action_github.png" width="62" height="62" alt="GitHub"/></a><br/></p>
      `;
    }
  }
  
customElements.define('footer-custom', Footer);