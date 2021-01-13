function createHead() {
    let fontlist = ["Quicksand", "Open+Sans", "Oswald"];
    for (i = 0; i < fontlist.length; i++) {
        let font = document.createElement("link");
        font.setAttribute("rel", "stylesheet");
        font.setAttribute("href", `https://fonts.googleapis.com/css?family=${fontlist[i]}`);
        document.head.appendChild(font);
    }
}

function createNav(num) {
    let navlist = ["Home", "Analysis", "Simulator", "Info", "Sources"];
    let filelist = ["index", "analysis", "sim", "info", "sources"];
    for (i = 0; i < navlist.length; i++) {
        let list = document.getElementById("navlist");
        let item = document.createElement("li");
        list.appendChild(item);
        let link = document.createElement("a");
        link.setAttribute("href", `${filelist[i]}.html`);
        link.innerHTML = navlist[i];
        if (i === num) {link.id = "navmain";}
        item.appendChild(link);
    }
}

function createCards() {
    let cardtitles = ["First Past the Post", "Alternative Vote", "Borda Count", "Condorcet Method", "Two Round Runoff", "Approval Voting", "Proportional Representation", "Score Voting"];

    for (i = 0; i < cardtitles.length; i++) {
        let card = document.createElement('div');
        card.className = "card";
        card.id = `${i}`
        grid = document.getElementById('grid');
        grid.appendChild(card);

        let title = document.createElement('h2');
        title.innerHTML = `${cardtitles[i]}`;
        card.appendChild(title);

        card.addEventListener('click', () => {
            showInfo(card.id);
            let cards = document.getElementsByClassName("card");
            for (i = 0; i < cards.length; i++) {
                cards[i].className = "card";
            }
            card.classList.toggle("card-active");
        });
    }
}

function showInfo(index) {
    let cardtext = ["a", "Good for picking large scale elections such as picking a new president, king, or ruler. In this system voters tier the candidates that they want or are ok with at the top and least liked candidates at the bottom. This way most people will be happy someone they were at least ok with is elected.
", "c", "d", "e", "f", "g", "h"];
    let info = document.getElementById("info-p");
    info.innerHTML = `${cardtext[index]}`;
}
