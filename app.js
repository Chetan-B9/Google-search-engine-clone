let query = document.getElementById('query');
let clearButton = document.getElementById('clear-btn');


// function to handle clear button visibility on input field value changes 
const handleClearBtnVisibility = () => {
    if(query.value.length != 0){
        clearButton.style.opacity = '1'
        clearButton.style.visibility = 'visible'
    }
    else{
        clearButton.style.opacity = '0'
        clearButton.style.visibility = 'hidden'
    }
}

const handleSearch = (e) => {
    e.key === 'Enter' && redirector();
  }

// Add event listener for input field 
query.addEventListener('input', handleClearBtnVisibility);
query.addEventListener('keypress', handleSearch);

// Event listener for the Clear Button 
clearButton.addEventListener('click', () => {
    query.value = '';
})

// This function redirect to the google results page
const redirector = () => {
    open(`https://www.google.co.in/search?q=${query.value}`,'_self');
}
