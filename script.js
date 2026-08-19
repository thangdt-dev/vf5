const carColors = [
    {
        id: 0,
        title: "Aerosol Gray",
        image_url: "assets/car/aerosol-gray.png",
        color_code: "#8A8F95"
    },
    {
        id: 1,
        title: "Desert Beige",
        image_url: "assets/car/desert-beige.png",
        color_code: "#D6C3A3"
    },
    {
        id: 2,
        title: "Forest Green",
        image_url: "assets/car/forest-green.png",
        color_code: "#2F4F3E"
    },
    {
        id: 3,
        title: "Stealth Obsidian",
        image_url: "assets/car/steakth-obsidian.png",
        color_code: "#1C1C1E"
    },
    {
        id: 4,
        title: "Urban Blue",
        image_url: "assets/car/urban-blue.png",
        color_code: "#3A5F8A"
    }
];
const optionList = document.getElementById('option__list')
const showcaseImg = document.getElementById('img')
const showcaseTag = document.querySelector('#showcase #img .hero__tag')
const loadList = () => {
    console.log(showcaseImg)
    showcaseImg.style.backgroundImage = `url(${carColors[showcaseId].image_url})`
    optionList.innerHTML = null
    showcaseTag.textContent = "VF5 - " + carColors[showcaseId].title
    carColors.forEach((e) => {
        optionList.innerHTML += `<div onClick={changeShowcaseId(${e.id})} class="option ${e.id === showcaseId ? "active" : ""}">
                            <i style="color: ${e.color_code};" class="fa-solid fa-circle"></i> ${e.title}
                        </div>`
    })
}



var showcaseId = 0
const changeShowcaseId = (id) => {
    showcaseImg.classList.remove("animate__animated", "animate__fadeIn");

    // force reflow (rất quan trọng)
    void showcaseImg.offsetWidth;

    // add lại animation
    showcaseImg.classList.add("animate__animated", "animate__fadeIn");
    showcaseId = id
    console.log(showcaseId)
    loadList()
}

loadList()




