class Github {
  constructor(){
    this.client_id = "e8f17d8c444d59c29298";
    this.client_secret="b17eef79fa0538398d5ecc7b1f2f5262cff53e88";
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}