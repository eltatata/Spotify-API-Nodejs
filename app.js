const express = require('express')
const dotenv = require("dotenv");
dotenv.config()
const app = express()
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_ID_SECRET,
    redirectUri: process.env.REDIRECT_URI
});

// CONSEGUIR EL TOKEN DE ACCESO

// app.get('/', (req, res, next) => {
//     res.redirect(spotifyApi.createAuthorizeURL([
//         "ugc-image-upload",
//         "user-read-recently-played",
//         "user-read-playback-state",
//         "user-top-read",
//         "app-remote-control",
//         "playlist-modify-public",
//         "user-modify-playback-state",
//         "playlist-modify-private",
//         "user-follow-modify",
//         "user-read-currently-playing",
//         "user-follow-read",
//         "user-library-modify",
//         "user-read-playback-position",
//         "playlist-read-private",
//         "user-read-email",
//         "user-read-private",
//         "user-library-read",
//         "playlist-read-collaborative",
//         "streaming"
//     ]))
// })

// app.get('/callback', (req, res, next) => {
//     console.log('reqquery', req.query)
//     const code = req.query.code
//     console.log(code)
//     spotifyApi.authorizationCodeGrant(code).then((response) => {
//         console.log(response);
//         res.send(JSON.stringify(response.body.access_token))
//     })
// })

const token = process.env.TOKEN;

spotifyApi.setAccessToken(token)

spotifyApi.getMe()
    .then(function (data) {
        console.log('Some information about the authenticated user', data.body);
    }, function (err) {
        console.log('Something went wrong!', err);
    });

app.listen(9000, () => {
    console.log("http://localhost:9000")
})

