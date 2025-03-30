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
            text:`1.1 : Nomada Studio, Gris : les couleurs des niveaux`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `Nomada Studio, Gris, 2018, jeu vidéo (extraits vidéos provenant de la chaine youtube : MKIceAndFire)`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 1",
            label: "1.1 : Nomada Studio, Gris : les couleurs des niveaux",
            balise: "bloc2",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/1.1.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`1.2 : Nomada Studio, Gris : la tempête`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Nomada Studio, Gris, 2018, jeu vidéo (extraits vidéos provenant de la chaine youtube : MKIceAndFire)`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 1",
            label: "1.2 : Nomada Studio, Gris : la tempête",
            balise: "bloc3",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/1.2.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`1.3 : Nomada Studio, Gris : Musiques`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            spacing: 60
        },
        description: {
            text: `Berlinist, Gris, Pt.1 et Gris, Pt.2 (Nomada Studio, Gris, 2018, jeu vidéo)`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "left"
        },
        variant: VARIANT.DOUBLE_MEDIA_CARD_RIGHT,
        nav: {
            chapter: "Chapitre 1",
            label: "1.3 : Nomada Studio, Gris : Musiques",
            balise: "bloc4",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/1.3.mp4`,
            size: 650
        },
        media2: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/1.4.mp4`,
            size: 650
        },
    },
    {
        title: {
            text:`1.4 : Christopher Nolan, Interstellar`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Christopher Nolan, Interstellar, 2014, film, 2h 49min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 1",
            label: "1.4 : Christopher Nolan, Interstellar",
            balise: "bloc10",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/1.5.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`2.1 : Miwa Matreyek, Myth and Infrastructure`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `Miwa Matreyek, Myth and Infrastructure, 2010, performance, vidéo, 10 minutes`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 2",
            label: "2.1 : Miwa Matreyek, Myth and Infrastructure",
            balise: "bloc11",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/2.1.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`2.2 : Andrew Thomas Huang, Bjök - The Gate`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Andrew Thomas Huang, Bjök - The Gate, 2017, vidéo, 6min 47sec`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 2",
            label: "2.2 : Andrew Thomas Huang, Bjök - The Gate",
            balise: "bloc12",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/2.2.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`2.3 : Mélanie Martinez, k-12`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `Mélanie Martinez, k-12, 2019, film, 1h 32min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 2",
            label: "2.3 : Mélanie Martinez, k-12",
            balise: "bloc13",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/2.3.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`3.1 : Archive personnel, Témoin`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Témoin, vidéo, 51sec`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 3",
            label: "3.1 : Archive personnel, Témoin",
            balise: "bloc14",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/3.1.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`3.2 : Peter Tscherkassky, Outer Space\nATTENTION : Flashs lumineux colorés, risque épileptique`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `Peter Tscherkassky, Outer Space, 1999, court-métrage, 10min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 3",
            label: "3.2 : Peter Tscherkassky, Outer Space",
            balise: "bloc15",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/3.2.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`3.3 : Nicolas Winding Refn, The Neon Demon\nATTENTION : Flashs lumineux colorés, risque épileptique`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Nicolas Winding Refn, The Neon Demon, 2016, 1h 57min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 3",
            label: "3.3 : Nicolas Winding Refn, The Neon Demon",
            balise: "bloc16",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/3.3.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`3.4 : Edgar Wright, Last Night in Soho`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `Edgar Wright, Last Night in Soho, 2021, film, 1h 56min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 3",
            label: "3.4 : Edgar Wright, Last Night in Soho",
            balise: "bloc17",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/3.4.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`3.5 : Gaspar Noé, Lux aeterna\nATTENTION : Flashs lumineux colorés, risque épileptique`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Gaspar Noé, Lux aeterna, 2019, moyen-métrage, 51min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 3",
            label: "3.5 : Gaspar Noé, Lux aeterna",
            balise: "bloc18",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/3.5.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`4.1 : Christopher Nolan, Memento`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Christopher Nolan, Memento, 2000, film, 1h 53min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 4",
            label: "4.1 : Christopher Nolan, Memento",
            balise: "bloc28",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/4.0.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`4.2 : Guy Maddin, The Heart of the World`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `Guy Maddin, The Heart of the World, 2000, court-métrage, 6min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 4",
            label: "4.2 : Guy Maddin, The Heart of the World",
            balise: "bloc19",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/4.1.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`4.3 : György Pálfi, Final Cut: Ladies and Gentlemen`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `György Pálfi, Final Cut: Ladies and Gentlemen, 2012, Film, 1h 42min`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 4",
            label: "4.3 : György Pálfi, Final Cut: Ladies and Gentlemen",
            balise: "bloc20",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/4.2.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`4.4 : Jeff Wall, La chambre détruite`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            spacing: 60
        },
        description: {
            text: `Jeff Wall, La chambre détruite, 1978, photographie, 158.8 x 229 cm \n 	
            Eugène Delacroix, La Mort de Sardanapale, 1827, huile sur toile, 392 x 469 cm, Musée du Louvre, Paris`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "left"
        },
        variant: VARIANT.DOUBLE_MEDIA_CARD_RIGHT,
        nav: {
            chapter: "Chapitre 4",
            label: "4.4 : Jeff Wall, La chambre détruite",
            balise: "bloc21",
        },
        media: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `4.3.webp`,
            size: 650
        },
        media2: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `4.5.png`,
            size: 650
        },
    },
    {
        title: {
            text:`5.1 : Henry Selick, Coraline`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            spacing: 60
        },
        description: {
            text: `Henry Selick, Coraline, 2009, film, 1h 40min. \n La première image représente la cuisine du monde normal de Coraline, la deuxième représente la cuisine du monde parallèle.`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "left"
        },
        variant: VARIANT.DOUBLE_MEDIA_CARD_RIGHT,
        nav: {
            chapter: "Chapitre 5",
            label: "5.1 : Henry Selick, Coraline",
            balise: "bloc23",
        },
        media: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `5.1.png`,
            size: 650
        },
        media2: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `5.2.png`,
            size: 650
        },
    },
    {
        title: {
            text:`5.2 : Bruno Collet, Mémorable`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            spacing: 60
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Bruno Collet, Mémorable, 2019, court-métrage, 12min (images provenant de la chaine youtube : Egy.Best)`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "left"
        },
        variant: VARIANT.DOUBLE_MEDIA_CARD_RIGHT,
        nav: {
            chapter: "Chapitre 5",
            label: "5.2 : Bruno Collet, Mémorable",
            balise: "bloc24",
        },
        media: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `5.3.JPG`,
            size: 650
        },
        media2: {
            type: MEDIA_TYPE.IMG,
            link: img_url + `5.4.JPG`,
            size: 650
        },
    },
    {
        title: {
            text:`6.1 : Christian Marclay, The Clock`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `Christian Marclay, The Clock, 2010, film, 24h (vidiéo du film prise par un spectateur dans la sale de diffusion, extraits vidéos provenant de la chaine youtube : JusTiniArt)`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 6",
            label: "6.1 : Christian Marclay, The Clock",
            balise: "bloc25",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/6.1.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`6.2 : Bill Viola, Tristan's Ascension (The Sound of a Mountain under a Waterfall)`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        backgroundColor: "#1F1F1F",
        description: {
            text: `Bill Viola, Tristan's Ascension (The Sound of a Mountain under a Waterfall), 2005, vidéo, environ 10min, 5.8x3.25m`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 6",
            label: "6.2 : Bill Viola, Tristan's Ascension (The Sound of a Mountain under a Waterfall)",
            balise: "bloc26",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/6.2.mp4`,
            size: 1000
        },
    },
    {
        title: {
            text:`6.3 : David Lowery, The Green Knight`,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center"
        },
        description: {
            text: `David Lowery, The Green Knight, 2021, film, 2h 10`,
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: "normal", 
            textAlign: "center"
        },
        variant: VARIANT.CARD_BOTTOM,
        nav: {
            chapter: "Chapitre 6",
            label: "6.3 : David Lowery, The Green Knight",
            balise: "bloc27",
        },
        media: {
            type: MEDIA_TYPE.VIDEO,
            link: video_url + `/6.3.mp4`,
            size: 1000
        },
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