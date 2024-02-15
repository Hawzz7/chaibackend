require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

const githubData = {
    "login": "Hawzz7",
    "id": 106986379,
    "node_id": "U_kgDOBmB7iw",
    "avatar_url": "https://avatars.githubusercontent.com/u/106986379?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Hawzz7",
    "html_url": "https://github.com/Hawzz7",
    "followers_url": "https://api.github.com/users/Hawzz7/followers",
    "following_url": "https://api.github.com/users/Hawzz7/following{/other_user}",
    "gists_url": "https://api.github.com/users/Hawzz7/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Hawzz7/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Hawzz7/subscriptions",
    "organizations_url": "https://api.github.com/users/Hawzz7/orgs",
    "repos_url": "https://api.github.com/users/Hawzz7/repos",
    "events_url": "https://api.github.com/users/Hawzz7/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Hawzz7/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Narendra Kumar Majhi",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-06-06T15:41:20Z",
    "updated_at": "2024-02-12T16:05:25Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("narendradotcom")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at chai or code</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai or code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})