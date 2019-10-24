class github
{
    constructor()
    {
        this.client_id = '9eee459de67804eb8392';
        this.client_secret = '7570a8d312fb1b9410975134223dcfbb43a5dcc8';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(username)
    {   
        const profileResponse = await fetch(`https://api.github.com/users/${username}?
        client_id=${this.client_id}&client_secret=${this.client_secret}`);

        
        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=${this.repos_sort}&per_page=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);



        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }



}