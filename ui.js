class UI{
  constructor(){
    this.profile = document.querySelector("#profile");
  };
  showProfile(user){
      this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
            <span class="badge badge-success">Public Repos : ${user.followers}</span>
            <span class="badge badge-info">Public Repos : ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
      `
  };

  clearProfile() {
    this.profile.innerHTML = "";
  };
  clearAlert(){
    const currentAlert = document.querySelector(".alert");
    if(currentAlert){
      currentAlert.remove();
    }
  }
  showRepos(repos){
    let output = "";
    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars : ${repo.stargazers_count}
            </span>
            <span class="badge badge-secondary">Watchers : ${repo.watchers_count}
            </span>
            <span class="badge badge-success">Forks : ${repo.forks_count}
            </span>
            </div>
          <div>
        </div>
      `;
    })
    document.querySelector("#repos").innerHTML = output;
  }

  showAlert(message,className){
  this.clearAlert()
  const div = document.createElement("div");
  div.className = `${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".searchContainer");
  const card = document.querySelector(".search");
  container.insertBefore(div,card);
  setTimeout(this.clearAlert,3000)
  console.log(container);
  }
}