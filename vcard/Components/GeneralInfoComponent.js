class GeneralInfoComponent extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }
        build(){
            const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class","general_info d-flex flex-xl-column flex-md-row flex-column");
            
/*************** container Image - Row 1 */
            const containerImage = document.createElement("div");
            containerImage.setAttribute("class","general_info_image");

            const imageBackground = document.createElement("div");
            imageBackground.setAttribute("class","background_image");
            imageBackground.setAttribute("styles","background-image:url(./images/283.jpg)");
            
            containerImage.appendChild(imageBackground);
/*************** container General Info - row 2 */
            const 
        }

        styles(){

        }

}