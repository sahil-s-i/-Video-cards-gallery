function createCard(thumbline = "https://i.ytimg.com/vi/NrhP53Divco/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAjU8-sxSfqBG8CSHNR0tkOJ42V7A", title = "Enter Your Video Title", cName = "Enter Your Channel Name", views = "Enter Total Number of Views", monthsOld = "Enter the Month", duration = "Enter Duration") {
    const containerEl = document.querySelector(".container");
    // console.log(containerEl);

    // created card div 
    const createDiv = document.createElement('div');
    createDiv.className = "card";
    // created 1st div of images and duration 
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'cardImg cardDuration');
    // creted 2nd div of text and channel name 
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'cardText viewsChannel');
    createDiv.appendChild(div1);
    createDiv.appendChild(div2);
    console.log(createDiv);

    // created img of thumbline 
    const cardImg = document.createElement("img");
    cardImg.classList.add("card_image");
    cardImg.setAttribute("src", `${thumbline}`);
    // !cardImg.setAttribute("src", 'https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA');
    cardImg.setAttribute("alt", 'Thumbnil Image');
    div1.appendChild(cardImg);

    // created a timespan of the img 
    const timespan = document.createElement('span');
    const innerText = document.createTextNode(`${duration}`);
    // !const innerText = document.createTextNode('12.23');
    timespan.appendChild(innerText);
    div1.appendChild(timespan);

    // creted a title element of the card 
    const head = document.createElement('h1');
    head.className = "card_title";
    const cardTitle = document.createTextNode(`${title}`);
    // !const cardTitle = document.createTextNode('hello enter the title of the card');
    head.appendChild(cardTitle);
    div2.appendChild(head);

    // creted a div of a views and channerl name etc
    const div3 = document.createElement('div');
    div3.classList.add("infoOfCard");
    div2.appendChild(div3);

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.classList.add("text");
    p2.classList.add("text");
    p3.classList.add("text");
    // const svg = document.createElement('div');
    const img1 = document.createElement('img');
    img1.setAttribute("src", 'dot.svg');
    img1.setAttribute("alt", 'Dot Image');
    const img2 = document.createElement('img');
    img2.setAttribute("src", 'dot.svg');
    img2.setAttribute("alt", 'Dot Image');
    // svg.appendChild(img1);

    // !const channelName = document.createTextNode('channelname');
    const channelName = document.createTextNode(`${cName}`);
    p1.appendChild(channelName);
    // !const viewCount = document.createTextNode("views");
    const viewCount = document.createTextNode(`${views}` + " views");
    p2.appendChild(viewCount);
    // !const time = document.createTextNode("time");
    const time = document.createTextNode(`${monthsOld}` + " months ago");
    p3.appendChild(time);

    div3.append(p1);
    div3.appendChild(img1);
    div3.append(p2);
    div3.appendChild(img2);
    div3.append(p3);

    containerEl.appendChild(createDiv);
}

// if the alert messages irritates you then better to remove it and use default parameters or pass the required parameters to the function manually 

alert("Sorry to disturb, This projects works as this only you have to give the input first then it will be reflected on the screen")
let imgLink = prompt("Enter the thumnbline link : ");
let title = prompt("Enter the title of the video : ")
let channelName = prompt("Enter the  Channnel Name : ")
let totalViews = prompt("Enter the total no of views of : ")
let date = prompt("Enter the Date on which Video uploaded : ")
let duration = prompt("Enter the total duration of the video : ")

// The function with a arguments with alert messages 
createCard(imgLink, title, channelName, totalViews, date, duration);

// The function call with the argument values 
createCard('https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA', 'hello welcome to sigma web development course #1', 'code with harry', '1000', '5', '12.23')
createCard('https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA', 'hello welcome to sigma web development course #1', 'code with harry', '1000', '5', '12.23')
createCard('https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA', 'hello welcome to sigma web development course #1', 'code with harry', '1000', '5', '12.23')