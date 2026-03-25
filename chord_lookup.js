document.getElementById('chordInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    lookupChord();
  }
});

function lookupChord() {
  const chordName = document.getElementById('chordInput').value;
  fetch(`/chords/${chordName}.json`)
    .then(response => response.json())
    .then(data => {
      const displayDiv = document.getElementById('chordDisplay');
      displayDiv.innerHTML = `Chord: ${chordName}<br><img src="${data.imageSrc}" alt="${chordName} diagram" />`;
    })
    .catch(error => {
      console.error('Error fetching chord data:', error);
    });
}