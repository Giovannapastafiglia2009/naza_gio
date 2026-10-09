document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-video");

    if (contenedor) {
        const titulo = document.createElement("h3");
        titulo.textContent = "¿Qué es la programación y para qué se utiliza?";
        contenedor.appendChild(titulo);

        const wrapper = document.createElement("div");
        wrapper.className = "video-wrapper";

        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/a7eznAouNak";
        iframe.title = "¿Qué es la programación y para qué se utiliza?";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        wrapper.appendChild(iframe);
        contenedor.appendChild(wrapper);
    }
});