// Init github
const github = new GitHub();

// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    clear

    // 2 way data binding
    if(userText !== ''){
        //console.log(userText);

        // Make HTTP call
        github.getUser(userText)
            .then( data => {
                // console.log(data);


                // Check return message
                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');

                }else{
                    // Render the profile to the DOM and UI when it fetch
                    // Show profile

                    ui.showProfile(data.profile);

                    ui.showRepos(data.repos);

                }
            })
    }else{
        // Clear profile
        ui.clearProfile();
    }
    
});