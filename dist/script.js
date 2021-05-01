const button = document.getElementById('jokeButton');
const jokeContent = document.getElementById('joke');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const female = document.querySelector('#female');
const other = document.querySelector('#other');
let html = '';



async function getJoke () {
  const url = 'https://api.chucknorris.io/jokes/random';
 //prevent non-compliant user
  if (firstName.value === '' || lastName.value === ''){
    alert('Please enter your first and last name!');
    return;
  };
    //fetch chuck norris random joke api using asynchronis function
 const jokePromise = await  fetch(url);
 const renderJoke = await jokePromise.json();
  
  // below code gets user input to replace chuck norris with user name and last name
  let jokes = renderJoke.value;
    jokes = jokes.replace(/Chuck/gi, `${firstName.value}`);
    jokes = jokes.replace(/Norris/gi,`${lastName.value}`);
  
  //below 'if' statement changes pronouns if a pronoun other than chuck norris' is checked-- using regex search and string replace method
  
      if(female.checked){
          jokes = jokes.replace(/ he/gi, ' she');
          jokes = jokes.replace(/ his/gi, ' her');
      } if(other.checked){
          jokes = jokes.replace(/ he/gi, ' they');
          jokes = jokes.replace(/ his/gi, ' their');
      };
  
  //renders new 'norris-ify-ed' joke to DOM
  
  html = jokes;
  jokeContent.textContent = html;
  firstName.value = '';
  lastName.value = '';
};

button.addEventListener('click', (e) => {

  e.preventDefault();

  getJoke();
});