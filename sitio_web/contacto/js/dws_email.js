class DWS_email extends HTMLElement{
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
                <g id="email">
                    <g>
                        <path class="st0" d="M24.98,32.86c-1.46,0-2.92-0.45-4.17-1.33L1,16.6v23.34c0,5.07,4.11,9.19,9.19,9.19h29.63
                            c5.07,0,9.19-4.11,9.19-9.19V16.6L29.23,31.5C27.95,32.41,26.47,32.86,24.98,32.86z"/>
                        <path class="st0" d="M42.03,1.08H7.97C4.12,1.08,1,4.19,1,8.04v1.59L23.65,26.7c0.79,0.56,1.91,0.56,2.74-0.04L49,9.64V8.04
                            C49,4.19,45.88,1.08,42.03,1.08z"/>
                    </g>
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
window.customElements.define("dws-email", DWS_email);