class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/images.png";
        newsImage.alt = "caneca com imagem do darth vader e com um filhote de gato dentro da caneca";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80vw;
                box-shadow: 10px 13px 32px 0px rgba(0,0,0,0.5);
                -webkit-box-shadow: 10px 13px 32px 0px rgba(0,0,0,0.5);
                -moz-box-shadow: 10px 13px 32px 0px rgba(0,0,0,0.5);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 0.625rem;
            }
            
            .card__left > span {
                font-weight: 400;
            }
            
            .card__left > a {
                margin-top: 0.938rem;
                font-size: 1.563rem;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card__left > p {
                color: rgb(70, 70, 70);
            }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);