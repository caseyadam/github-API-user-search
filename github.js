class Github {
  constructor() {
    this.client_id = '6af1c82778958e133305';
    this.client_secret = '7d551ebac2ccecf23b89ab17d110d751a73250c4';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // Get users
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // Get repo
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // Get profile JSON data
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // Return the profile data (profile: profile)
      profile,
      // Return repo data (repos: repos)
      repos
    }
  }
}
