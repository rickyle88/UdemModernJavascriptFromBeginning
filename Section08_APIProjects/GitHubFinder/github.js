class GitHub{
    constructor(){
        this.client_id = '23235ae246e3e2396b1c';
        this.client_secret = 'ec78bf501a6fd64dd3b3e1ada570af1ff4982045';

        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // Promise with async/await
    // Similar to HTTP Lib V3

    // URL: https://api.github.com/user/{userName}
    // URL: https://api.github.com/user/{userName}/repos

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();



        // return an object
        // Later we are fetching repos also and adding to same object
        return {
            profile,
            repos
        }
    }
}