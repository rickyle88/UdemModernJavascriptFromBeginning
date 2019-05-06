// Render the profile to the DOM and UI when it fetch

class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile in UI
    showProfile(user) {
        //console.log(user);

        // Clear any remaining alerts
        this.clearAlert();

        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-success">Following: ${user.following}</span>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3 class="page-heading mb-3">Latest Repos</h3>

            <!-- Create repos section -->
            <div id="repos"></div>
        
        `;
    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>                        
                    </div>
                </div>
            `;
        })

        // This element created through JS using showProfile() method above
        // Output
        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(message, className) {

        // Clear any remaining alerts
        this.clearAlert();

        // Create a div 
        const div = document.createElement('div');
        // Add classes to div
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));

        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 secs
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear profile

    clearProfile() {
        this.profile.innerHTML = '';
    }


}

