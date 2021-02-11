const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.getElementsByClassName("cards")[0];
axios.get('https://api.github.com/users/opa1164')
.then(response => {
  console.log(response.data);
  cards.appendChild(cardCreator(response.data));
});
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

  followersArray.forEach(function(element){
    axios.get(`https://api.github.com/users/${element}`)
  .then(response => {
  console.log(response.data);
  cards.appendChild(cardCreator(response.data));
});
  })

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardCreator(obj)
{
  const card = lazyClass("div", "card");
  const image = document.createElement("img");
  image.src = obj.avatar_url;
  card.appendChild(image);
  const info = lazyClass("div", "card-info");
  info.appendChild(lazyClassText("h3", "name", obj.name));
  info.appendChild(lazyClassText("p", "username", obj.login));
  info.appendChild(lazyText("p", `Location: ${obj.location}`));

  const profile = lazyText("p", `Profile:`);
  const link = lazyText("a", obj.url);
  link.href = link.textContent;
  profile.appendChild(link);
  info.appendChild(profile);

  info.appendChild(lazyText("p", `Followers: ${obj.followers}`));
  info.appendChild(lazyText("p", `Following: ${obj.following}`));
  info.appendChild(lazyText("p", `Bio: ${obj.bio}`));

  card.appendChild(info);
  console.log(card);
  return card;
}


function lazyClass(type, className){
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
}

function lazyText(type, textCon){
  const element = document.createElement(type);
  if(textCon != null)
  {
    element.textContent = textCon;
  }
  else
  {
    element.textContent = "null";
  }
  return element;
}

function lazyClassText(type, className, textCon){
  const element = document.createElement(type);
  element.classList.add(className);
  if(textCon != null)
  {
    element.textContent = textCon;
  }
  else
  {
    element.textContent = "null";
  }
  return element;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
