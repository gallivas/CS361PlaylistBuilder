// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function inputSearch(event) {
  event.preventDefault();
  const locationSelect = document.getElementById('startingLocation');
  const selectedCity = locationSelect.value;
  // Redirect to playlist.html with the selected city as a query parameter
  window.location.href = `playlist.html?startingLocation=${selectedCity}`;
}


async function handleSearch(selectedCity) {
  const apiKey = '07b953ac32c1e1c6b2407464986e0f65';

  // Fetch Last.fm tracks
  try {
      const response = await fetch(`http://localhost:3000/standalonePlaylistMicroservice/microservice?startingLocation=${encodeURIComponent(selectedCity)}`);
      console.log(response);
      const tracks = response.results.trackmatches.track;

      // Populate the generatedPlaylist div with the list of tracks
      const generatedPlaylistDiv = document.getElementById('generatedPlaylist');
      generatedPlaylistDiv.innerHTML = generateTrackListHTML(tracks);   

    } catch (error) {
        console.error('Error fetching tracks:', error);
    }
}

function generateTrackListHTML(tracks) {
  return `
      <ul>
          ${tracks.map(({ name, artist, url }) => `
              <li key="${url}">
                  <a href="${url}" target="_blank" rel="noopener noreferrer">
                      ${name} by ${artist}
                  </a>
                  </br></br>
              </li>
          `).join('')}
      </ul>
  `;
}

// async function fetchLastFmTracks(apiKey, query) {
//   const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${apiKey}&format=json`);
//   return await response.json();
// }
