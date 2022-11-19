class DWS_wapp1 extends HTMLElement{
    // version: 1.0.0
    constructor(){
        super();
        this.width;  
        this.color;
        this.bottom;
        this.right;
        this.tel;
        this.texto;
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes(){
        return ['color','width', 'bottom','right','tel','texto'];
    }    
    attributeChangedCallback(nameAtr, oldValue, newValue){    
        switch (nameAtr) {
            case "color":
                this.color = newValue;
                break;   
            case "width":
                this.width = newValue;
                break; 
            case "bottom":
                this.bottom = newValue;
                break;
            case "right":
                this.right = newValue;
                break;
            case "tel":
                this.tel = newValue;
                break;
            case "texto":
                let str = newValue.replace(/ /g,"%20");
                this.texto = str;
                break;
        }
            
    }
    connectedCallback(){        
        let wa = `
        <style>
        .box-wa{
            position: fixed;
            width: ${this.width};
            bottom: ${this.bottom};
            right: ${this.right};
        }
        </style>
        <div class="box-wa">
        <a href="https://wa.me/${this.tel}/?text=${this.texto}" target="_blank">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
   <style type="text/css">
       .st0{fill:${this.color};}
       .st1{fill:#FFFFFF;}
   </style>
   <g id="fondo">
       <g>
           <path class="st0" d="M30,57.1c-4.6,0-9.1-1.2-13.1-3.3l-0.5-0.3L3,57l3.6-13.1l-0.3-0.5c-2.4-4.1-3.6-8.9-3.6-13.7
               C2.7,14.7,14.9,2.4,30,2.4c7.3,0,14.2,2.8,19.3,8c5.3,5.3,8.3,12.2,8.3,19.3C57.6,44.8,45.2,57.1,30,57.1z"/>
           <path class="st1" d="M30,3.8c6.9,0,13.4,2.7,18.3,7.6c5.1,5.1,7.9,11.6,7.9,18.3C56.2,44,44.4,55.7,30,55.7
               c-4.3,0-8.6-1.1-12.4-3.2l-1-0.5l-1.1,0.3L5,55l2.8-10.2l0.3-1.1l-0.6-1c-2.3-3.9-3.5-8.4-3.5-13C4.1,15.5,15.7,3.8,30,3.8 M30,1
               C14.1,1,1.3,13.9,1.3,29.7c0,5.1,1.3,10,3.8,14.4L1,59l15.2-4c4.2,2.3,8.9,3.5,13.7,3.5h0c15.8,0,29-12.9,29-28.8
               c0-7.7-3.3-14.9-8.7-20.3C44.9,4,37.7,1,30,1L30,1z"/>
       </g>
   </g>
   <g id="tel">
       <path class="st1" d="M44.5,36.6c-0.2-0.3-0.7-0.5-1.4-0.8c-0.7-0.4-4.3-2.1-4.9-2.3c-0.7-0.3-1.1-0.4-1.6,0.4
           c-0.5,0.7-1.8,2.3-2.3,2.8c-0.4,0.5-0.8,0.5-1.5,0.2c-4.2-2.1-7-3.8-9.8-8.5c-0.7-1.3,0.7-1.2,2.1-3.9c0.2-0.5,0.1-0.9-0.1-1.3
           c-0.2-0.4-1.6-3.9-2.2-5.3c-0.6-1.4-1.2-1.2-1.6-1.2c-0.4,0-0.9,0-1.4,0s-1.3,0.2-1.9,0.9c-0.7,0.7-2.5,2.5-2.5,6s2.6,6.9,2.9,7.4
           c0.4,0.5,5.1,7.7,12.3,10.9c4.6,2,6.3,2.1,8.6,1.8c1.4-0.2,4.3-1.7,4.8-3.4S44.6,36.9,44.5,36.6z"/>
   </g>
   </svg>
</a>
</div>
        `;
        
       this.shadowRoot.innerHTML = wa;
      
    }

    
}
window.customElements.define("dws-wapp1", DWS_wapp1);