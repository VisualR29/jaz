// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQAsdLUrzyySvx2OGd4ZYDrrVDPVm_WQLtrv2oQpeqWFUJB1JNQipVlK18nlJfF5HALQ4zuNtKDURIQpU5LQoMeZ9i2oqHNPOEsy0JQZOjzN98UPrq3-5bRI9bTpq0SPkC5DcCiG2W9ogH7p2pBsTTFAlUJQLTyXMGE-BtndrfVh8uHl0etxb4_TS66wkQvF0U7-m3bc5sRygHV2ovdFVIny-c8cwSdhRc98ifFTYBp5eGbPt8AV_4gTrfW17Bgb69IpCO7H57EIVqN8r9zy4Ra4';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
}

const topTracks = await getTopTracks();
console.log(
    topTracks?.map(
        ({ name, artists }) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);