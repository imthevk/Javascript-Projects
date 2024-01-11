// Array of sound names
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Create buttons for each sound
sounds.forEach((sound) => {
  // Create a button element
  const btn = document.createElement("button");
  // Add 'btn' class to the button
  btn.classList.add("btn");
  // Set button text to the sound name
  btn.innerText = sound;

  // Add click event listener to each button
  btn.addEventListener("click", () => {
    // Stop all currently playing sounds
    stopSongs();

    // Play the selected sound
    document.getElementById(sound).play();
  });

  // Append the button to the 'buttons' container
  document.getElementById("buttons").appendChild(btn);
});

// Function to stop all playing sounds
function stopSongs() {
  // Iterate through each sound
  sounds.forEach((sound) => {
    // Get the audio element corresponding to the sound
    const song = document.getElementById(sound);

    // Pause the sound and reset its playback position to the beginning
    song.pause();
    song.currentTime = 0;
  });
}
