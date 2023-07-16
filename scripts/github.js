fetch('https://api.github.com/repos/nfoert/nfoert.github.io/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    document.getElementById('github_version_info').innerHTML = "Latest Commit: '" + res[0].commit.message + "'"
  })