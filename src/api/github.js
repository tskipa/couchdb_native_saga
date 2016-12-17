export default api = {
  fetchUser(username) {
    username.toLowerCase().trim();
    let url = `https://api.github.com/users/${username}`;
    return fetch(url).then(res => res.json());
  },
  getRepos(username) {
    username.toLowerCase().trim();
    let url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then(res => res.json());
  }
};
