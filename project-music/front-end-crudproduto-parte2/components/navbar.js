class MyTag extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = '<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif}.navbar{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background-color:#333}.nav-links{list-style:none;display:flex}.nav-links li{margin-right:20px}.nav-links a{color:white;text-decoration:none;font-size:16px}.nav-links a:hover{text-decoration:underline}.search-container{display:flex;align-items:center}.search-input{padding:5px 10px;font-size:14px;border-radius:4px;border:none;margin-right:10px}.search-btn{padding:5px 10px;background-color:#ff6600;color:white;border:none;border-radius:4px;cursor:pointer}.search-btn:hover{background-color:#e65c00}</style><nav class="navbar"><ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Sobre</a></li><li><a href="#">Serviços</a></li></ul><div class="search-container"><input type="text" placeholder="Buscar..." class="search-input"><button class="search-btn" onclick="listById()">Buscar</button></div></nav>';

    }
}

customElements.define("nav-bar",MyTag);