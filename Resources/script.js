const contactDisplay = () => {
    const content = document.getElementById("contact-content");
    if (content.style.display === "none") {
        content.style.display = "inline";
    } else {
        content.style.display = "none";
    }
}

document.getElementById("contact-tab").addEventListener('click',contactDisplay);
