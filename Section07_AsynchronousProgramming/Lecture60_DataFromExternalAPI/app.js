document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const numberOfJoke = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    console.log("Value of jokes : " + typeof numberOfJoke);

    

    // Open
    xhr.open('GET',`http://api.icndb.com/jokes/random/${numberOfJoke}`, true);

    // Onload
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText) ;
            console.log(response);

            // { "type": "success", "value": [ { "id": 506, "joke": "Chuck Norris programs do not accept input.", "categories": ["nerdy"] }, { "id": 175, "joke": "When Chuck Norris was a baby, he didn't suck his mother's breast. His mother served him whiskey, straight out of the bottle.", "categories": [] } ]  }

            let output = '';
            
            if(response.type === 'success'){
                // We need to loop thru response.value

                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`
                });

            }else{
                output += '<li>Something went wrong</li>'
            }

            // Add li to UL list
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    // Send
    xhr.send();

    // Clear input
    document.querySelector('input[type="number"]').value = '';
  
    e.preventDefault();
}

 