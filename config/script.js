const VARIANT = {
    CARD_BOTTOM: "bottom",
    CARD_TOP: "top",
    CARD_LEFT: "left",
    CARD_RIGHT: "right",
    DOUBLE_MEDIA_CARD_RIGHT: "double-right",
    DOUBLE_MEDIA_CARD_LEFT: "double-left",
    MEDIA_ONLY: "media-only",
    TEXT_ONLY: "text-only"
}

const MEDIA_TYPE = {
    VIDEO: "video",
    IMG: "image"
}

const img_url = "./config/image/";
const video_url = "./config/video/";

// ===================================================================================
// ===================================================================================
// ===================================================================================

const data = [
    {
        title: {
            text:`Variant Text Bottom \n test`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `Lorem ipsum dolor sit amet,\n consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 1",
            label: "Variant 1",
            balise: "bloc1",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/video_jump_song.mp4`,
            size: 600
        },
    },
    {
        title: {
            text:`Variant Text Top`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_TOP,
        nav: {
            chapter: "Chapitre 1",
            label: "Variant 2",
            balise: "bloc2",
        },
        media: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `2.webp`,
            size: 600
        },
    },
    {
        title: {
            text:`Variant Text Right`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            spacing: 60
        },
        description: {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "left"
        },
        variant: VARIANT.CARD_RIGHT,
        nav: {
            chapter: "Chapitre 2",
            label: "Variant 3",
            balise: "bloc3",
        },
        media: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `3.webp`,
            size: 600
        },
    },
    {
        title: {
            text:`Variant Text Left`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            spacing: 60
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "right"
        },
        nav: {
            chapter: "Chapitre 2",
            label: "Variant 4",
            balise: "bloc4",
        },
        variant: VARIANT.CARD_LEFT,
        media: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `4.webp`,
            size: 600
        }
    },
    {
        title: {
            text:`Variant Double Media Text Right`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            spacing: 60
        },
        description: {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "left"
        },
        variant: VARIANT.DOUBLE_MEDIA_CARD_RIGHT,
        nav: {
            chapter: "Chapitre 3",
            label: "Variant 5",
            balise: "bloc5",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/video_jump_song.mp4`,
            size: 600
        },
        media2: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `3.webp`,
            size: 600
        },
    },
    {
        title: {
            text:`Variant Double Media Text Left`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            spacing: 60
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "right"
        },
        nav: {
            chapter: "Chapitre 3",
            label: "Variant 6",
            balise: "bloc6",
        },
        variant: VARIANT.DOUBLE_MEDIA_CARD_LEFT,
        media: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `4.webp`,
            size: 600
        },
        media2: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/video_jump_song.mp4`,
            size: 600
        }
    },
    {
        title: {
            text:`Variant Media Only`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        variant: VARIANT.MEDIA_ONLY,
        nav: {
            chapter: "Chapitre 4",
            label: "Variant 7",
            balise: "bloc7",
        },
        media: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `3.webp`,
            size: 600
        },
    },
    {
        title: {
            text:`Variant Text Only`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        nav: {
            chapter: "Chapitre 4",
            label: "Variant 8",
            balise: "bloc8",
        },
        variant: VARIANT.TEXT_ONLY
    }
];

// ===================================================================================
// ===================================================================================
// ===================================================================================

function createContainer(containerName = 'card', customClass = 'container', backgroundColor) {
    const card = document.createElement('div');
    card.classList.add(containerName);
    if (customClass !== '') {
        card.classList.add(customClass);
    }
    if (backgroundColor) {
        card.style.backgroundColor = backgroundColor;
    }
    return card;
}

function createTitle(title, order = 2) {
    const titleText = title.text.split('\n'); 
    const cardTitle = document.createElement(`h${order}`);
    if(titleText.length > 1) {
        const container2 = document.createElement(`div`);
        titleText.forEach((textPart, index) => {
            const cardLign =  document.createElement(`h${order}`);
            const textNode = document.createTextNode(textPart); 
            cardLign.appendChild(textNode);
            cardLign.style.margin = 0;
            container2.appendChild(cardLign)
        });
        return container2;
    }
    else {
        cardTitle.textContent = title.text;
        cardTitle.style.fontSize = title.fontSize + "px";
        cardTitle.style.fontStyle = title.fontStyle;
        cardTitle.style.fontWeight  = title.fontWeight;
        cardTitle.style.textAlign = title.textAlign;
        cardTitle.style.marginBottom = title.spacing + "px";
        return cardTitle;
    }
}

function createDescription(description) {
    const titleText = description.text.split('\n'); 

    if(titleText.length > 1) {
        const container2 = document.createElement(`div`);
        titleText.forEach((textPart) => {
            const cardLign =  document.createElement(`p`);
            const textNode = document.createTextNode(textPart); 
            cardLign.appendChild(textNode);
            cardLign.style.margin = 0;
            container2.appendChild(cardLign)
        });
        return container2;
    }
    else {
        const cardDescription = document.createElement('p');
        cardDescription.textContent = description.text;
        cardDescription.style.fontSize = description.fontSize;
        cardDescription.style.fontWeight = description.fontWeight;
        cardDescription.style.textAlign = description.textAlign;
        return cardDescription;
    }
}



function createPicture(media) {  
    const cardImage = document.createElement('img');

    cardImage.onload = function() {
        const originalWidth = cardImage.width;
        const originalHeight = cardImage.height;

        const scaleFactor = media.size / Math.max(originalWidth, originalHeight);
        const newWidth = originalWidth * scaleFactor;
        const newHeight = originalHeight * scaleFactor;

        cardImage.style.width = newWidth + 'px';
        cardImage.style.height = newHeight + 'px';
    };

    cardImage.style.borderRadius = 25 + 'px';

    cardImage.src = media.link;
    return cardImage;
}

function createVideo(media) {
    const cardVideo = document.createElement('video');

    const videoContainer = createContainer(null,null);

    cardVideo.style.borderRadius = 25 + 'px';
    cardVideo.src = media.link;
    cardVideo.controls = true; 
    cardVideo.width = media.size;

    videoContainer.appendChild(cardVideo);
    return videoContainer;
}

function createMedia(media) {
    if(media.type === MEDIA_TYPE.IMG) {
      return createPicture(media);
    }
    else if (media.type === MEDIA_TYPE.VIDEO) {
        return createVideo(media);
    }
    return null;
}

function generateDefaultCard(backgroundColor, balise) {
    const div= createContainer('card', 'container', backgroundColor);
    div.id = balise
    return div;
}


function createCardTop(title, description, balise, media, backgroundColor) {
    const card = generateDefaultCard(backgroundColor, balise);
    const pictureContainer = createContainer('cardTopBottom');

    if(title) {
        const cardTitle = createTitle(title);
        pictureContainer.appendChild(cardTitle);
    }

    if(description) {
        const cardDescription = createDescription(description);
        pictureContainer.appendChild(cardDescription);
    }

    if(media) {
        const cardMedia  = createMedia(media);
        pictureContainer.appendChild(cardMedia);
    }

    card.appendChild(pictureContainer);

    return card;
}

function createCardRight(title, description, balise, media, backgroundColor) {
    const card = generateDefaultCard(backgroundColor, balise);
    const mainContainer = createContainer('mainContainer', null);

    if(title) {
        const cardTitle = createTitle(title);
        card.appendChild(cardTitle);
    }

    const dataContainer = createContainer('cardRightLeft', null);


    if(media) {
        const cardMedia  = createMedia(media);
        dataContainer.appendChild(cardMedia);
    }

    if(description) {
        const cardDescription = createDescription(description);
        dataContainer.appendChild(cardDescription);
    }

    mainContainer.appendChild(dataContainer)
    card.appendChild(mainContainer);

    return card;
}

function createCardLeft(title, description, balise, media, backgroundColor) {
    const card = generateDefaultCard(backgroundColor, balise);
    const mainContainer = createContainer(null, 'mainContainer');

    if(title) {
        const cardTitle = createTitle(title);
        card.appendChild(cardTitle);
    }

    const dataContainer = createContainer('cardRightLeft', null);

    if(description) {
        const cardDescription = createDescription(description);
        dataContainer.appendChild(cardDescription);
    }

    if(media) {
        const cardMedia  = createMedia(media);
        dataContainer.appendChild(cardMedia);
    } 

    mainContainer.appendChild(dataContainer)
    card.appendChild(mainContainer);

    return card;
}

function createDoubleCardRight(title, description, balise, media, media2, backgroundColor) {
    const card = generateDefaultCard(backgroundColor, balise);
    const mainContainer = createContainer(null, 'mainContainer');

    if(title) {
        const cardTitle = createTitle(title);
        card.appendChild(cardTitle);
    }

    const dataContainer = createContainer('cardRightLeft', null);
    const mediaContainer = createContainer('cardTopBottom', null);

    if(media) {
        const cardMedia  = createMedia(media);
        mediaContainer.appendChild(cardMedia);
    }

    if(media2) {
        const cardMedia2 = createMedia(media2);
        mediaContainer.appendChild(cardMedia2);
    }

    dataContainer.appendChild(mediaContainer);

    if(description) {
        const cardDescription = createDescription(description);
        dataContainer.appendChild(cardDescription);
    }

    mainContainer.appendChild(dataContainer)
    card.appendChild(mainContainer);

    return card;
}

function createDoubleCardLeft(title, description, balise, media, media2, backgroundColor) {
    const card = generateDefaultCard(backgroundColor, balise);
    const mainContainer = createContainer(null, 'mainContainer');

    if(title) {
        const cardTitle = createTitle(title);
        card.appendChild(cardTitle);
    }

    const dataContainer = createContainer('cardRightLeft', null);
    const mediaContainer = createContainer('cardTopBottom', null);

    if(description) {
        const cardDescription = createDescription(description);
        dataContainer.appendChild(cardDescription);
    }

    if(media) {
        const cardMedia  = createMedia(media);
        mediaContainer.appendChild(cardMedia);
    }

    if(media2) {
        const cardMedia2 = createMedia(media2);
        mediaContainer.appendChild(cardMedia2);
    }

    dataContainer.appendChild(mediaContainer);

    

    mainContainer.appendChild(dataContainer)
    card.appendChild(mainContainer);

    return card;
}

function createCardBottom(title, description, balise, media, backgroundColor) {
    const card = generateDefaultCard(backgroundColor, balise);
    const pictureContainer = createContainer('cardTopBottom');

    if(title) {
        const cardTitle = createTitle(title);
        pictureContainer.appendChild(cardTitle);
    }

    if(media) {
        const cardMedia  = createMedia(media);
        pictureContainer.appendChild(cardMedia);
    }

    if(description) {
        const cardDescription = createDescription(description);
        pictureContainer.appendChild(cardDescription);
    }

    card.appendChild(pictureContainer);

    return card;
}

function createTextOnly(title, description, balise, backgroundColor) {
    const card = generateDefaultCard(backgroundColor, balise);
    const pictureContainer = createContainer('cardTopBottom');

    if(title) {
        const cardTitle = createTitle(title);
        pictureContainer.appendChild(cardTitle);
    }

    if(description) {
        const cardDescription = createDescription(description);
        pictureContainer.appendChild(cardDescription);
    }

    card.appendChild(pictureContainer);

    return card;
}

function createPictureOnly(title, media, balise, backgroundColor) {
    const card = generateDefaultCard(backgroundColor, balise);
    const pictureContainer = createContainer('cardTopBottom');

    if(title) {
        const cardTitle = createTitle(title);
        pictureContainer.appendChild(cardTitle);
    }

    if(media) {
        const cardMedia  = createMedia(media);
        pictureContainer.appendChild(cardMedia);
    }

    card.appendChild(pictureContainer);

    return card;
}

function switchVariant(title, description, variant, balise, media, media2, backgroundColor) {
    switch(variant) {
        case VARIANT.CARD_BOTTOM:
            return createCardBottom(title, description, balise, media, backgroundColor);
        case VARIANT.CARD_TOP:
            return createCardTop(title, description, balise, media, backgroundColor);
        case VARIANT.CARD_LEFT:
            return createCardLeft(title, description, balise, media, backgroundColor);
        case VARIANT.CARD_RIGHT:
            return createCardRight(title, description, balise, media, backgroundColor);
        case VARIANT.DOUBLE_MEDIA_CARD_RIGHT:
            return createDoubleCardRight(title, description, balise, media, media2, backgroundColor);
        case VARIANT.DOUBLE_MEDIA_CARD_LEFT:
            return createDoubleCardLeft(title, description, balise, media, media2, backgroundColor);
        case VARIANT.MEDIA_ONLY:
            return createPictureOnly(title, media, balise, backgroundColor);
        case VARIANT.TEXT_ONLY:
            return createTextOnly(title, description, balise, backgroundColor);
        default:
            return createTextOnly(title, media, balise, backgroundColor);
    }
}

function removeSpaces(text) {
    return text.replace(/\s/g, '').toLowerCase();
}

function generateNavbar(data) {
    const navbar = document.createElement('nav');
    const chapterMenus = {};

    data.forEach(item => {
        if (item.nav) {
            const chapter = item.nav.chapter;
            const id = removeSpaces(chapter);

            if (!chapterMenus[chapter]) {
                chapterMenus[chapter] = document.createElement('ul');
                chapterMenus[chapter].innerHTML = `<li class="dropdown" ><a class="dropbtn">${chapter}</a><div id="${id}" class="dropdown-content"></div></li>`;
                navbar.appendChild(chapterMenus[chapter]);
            }
        
        }
    });

    navbar.classList.add('navbar');

    const navbarContainer = createContainer(null, 'navbarContainer');
    navbarContainer.appendChild(navbar);

    return navbarContainer;
}

function renderComponents(data) {
    const app = document.getElementById('app');
    app.innerHTML = '';

    const navbar = generateNavbar(data);
    app.appendChild(navbar);

    data.forEach(item => {
        if (item.nav) {
            const chapter = item.nav.chapter;
            const id = removeSpaces(chapter);
            var div = document.getElementById(id);
            const labelItem = document.createElement('a');
            labelItem.href = `#${item.nav.balise}`
            labelItem.textContent = item.nav.label;
            div.appendChild(labelItem);
        }
    });

    data.forEach(item => {
        const card = switchVariant(item.title, item.description, item.variant, item.nav.balise, item.media, item.media2, item.backgroundColor);
        app.appendChild(card);
    });
}

renderComponents(data);