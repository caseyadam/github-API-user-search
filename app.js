// INIT/INSTANTIATE GITHUB & UI
const github = new Github;
const ui = new UI;

// SEARCH INPUT
const searchUser = document.getElementById('searchUser');

// SEARCH INPUT EVENT LISTENER
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  // If there is text entered...
  if(userText !== ''){
   // Make HTTP call. Pass in user text from form. This will return a promise
   github.getUser(userText)
    // Promise
    .then(data => {
      // 'Not found' is under message: "Not Found" in the user profile data
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        // Show repo
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
