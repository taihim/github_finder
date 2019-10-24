const searchUser = document.getElementById('searchUser');
const ui = new UI();
const gh = new github();
//Search input event listener

searchUser.addEventListener('keyup', (e) => {
    const userName = e.target.value;

    if(userName !== '')
    {
        //Make http call
        gh.getUser(userName)
         .then(data => {
             if(data.profile.message === 'Not Found')
             {
                ui.showAlert('User not found', 'alert alert-danger');
             }
             else
             {
                 ui.displayProfile(data.profile);
                 ui.showRepos(data.repos);
             }
         });
    }
    else
    {
        //Clear Profile
        ui.clearProfile();
    }

});