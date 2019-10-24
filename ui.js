class UI{
    constructor()
    {
        this.profile = document.getElementById('profile');
    }

    displayProfile(user)
    {
            profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class = "row">
                    <div class = "col-md-3">
                        <img class = "img-fluid mb-2" src = ${user.avatar_url}>
                        <a href = "${user.html_url}" target = "_blank" class = " mb-2 btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class = "col-md-9">
                        <span class = "badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
                        <span class = "badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>
                        <span class = "badge badge-success mb-1">Followers: ${user.followers}</span>
                        <span class = "badge badge-info mb-1">Following: ${user.following}</span>
                        <br><br>
                        <ul class = "list-group">
                            <li class = 'list-group-item'>Company: ${user.company}</li>
                            <li class = 'list-group-item'>Website: ${user.blog}</li>
                            <li class = 'list-group-item'>Location: ${user.location}</li>
                            <li class = 'list-group-item'>Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            
            </div>
           <h3  class = "page-heading mb-3">Latest Repos</h3>
           <div id = "repos"></div>
           `;
    }

    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class = "badge badge-primary mb-1">Stars: ${repo.stargazers_count}</span>
                            <span class = "badge badge-secondary mb-1">watchers: ${repo.watchers_count}</span>
                            <span class = "badge badge-success mb-1">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        });

        //Output repos
            document.getElementById('repos').innerHTML = output;
    }


    clearProfile()
    {
        this.profile.innerHTML = '';
    }

    clearAlert()
    {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert)
        {
            currentAlert.remove();
        }
    }

    showAlert(msg, className)
    {
        this.clearAlert();
        //Create div
        const div = document.createElement('div');
        //Add classes
        div.className = className;
        //Add text to div
        div.appendChild(document.createTextNode(msg));

        //Get parent
        const container = document.querySelector('.search-container');
        //Get search box
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        //Timeout error
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
        this.profile.innerHTML = '';


    }
}