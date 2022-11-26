class DWS_tel extends HTMLElement{
    // version: 1.0.0
    constructor(){
        super();
        this.alto;
        this.texto;  
        this.color;
        this.tipo;
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes(){
        return ['alto','texto','color','tipo'];
    }    
    attributeChangedCallback(nameAtr, oldValue, newValue){    
        switch (nameAtr) {
            case "alto":
                this.alto = newValue;
                break; 
            case "texto":
                this.texto = newValue;
                break;
            case "color":
                this.color = newValue;
                break;
            case "tipo":
                this.tipo = newValue;
                break;
        }            
    }
    connectedCallback(){        
        let fa = `
        <style>
        #box{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .ico-dim{
            width: ${this.alto};
        }
        #texto{
            font-size: ${this.alto};
            color: ${this.color};
            font-family: ${this.tipo};
            height: ${this.alto};
            display: flex;
            align-items: center;
        }
        </style>
        <div id="box">
            <div class="ico-dim">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:${this.color};}
                </style>
                <g id="telefono">
                    <path class="st0" d="M47.63,34.93l-10.49-4.5c-0.04-0.02-0.09-0.04-0.13-0.05c-0.89-0.32-1.89-0.04-2.5,0.7l-4.65,5.69
                        c-7.31-3.44-13.18-9.32-16.63-16.63l5.69-4.65c0.74-0.6,1.01-1.6,0.7-2.49c-0.02-0.05-0.03-0.09-0.05-0.14l-4.5-10.49
                        C14.7,1.52,13.87,1,12.99,1c-0.17,0-0.34,0.02-0.51,0.06L2.74,3.3C1.72,3.54,1,4.45,1,5.5c0,2.56,0.22,5.06,0.64,7.49
                        c1.5,8.66,5.55,16.43,11.35,22.52c0.49,0.51,0.99,1.01,1.5,1.5c6.1,5.8,13.87,9.84,22.52,11.34C39.45,48.78,41.95,49,44.5,49
                        c1.05,0,1.96-0.72,2.19-1.74l2.25-9.74c0.04-0.17,0.06-0.34,0.06-0.51C49,36.12,48.47,35.3,47.63,34.93L47.63,34.93z"/>
                </g>
            </svg>
            </div>
            <div id="texto">
                ${this.texto}
            </div>
        
        </div>
        `;
        
       this.shadowRoot.innerHTML = fa;
      
    }

    
}
window.customElements.define("dws-tel", DWS_tel);