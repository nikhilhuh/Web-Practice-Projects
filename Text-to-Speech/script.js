let isConvert = false;
const button = document.querySelector('.start-stop');
const textArea = document.querySelector('.text');
const select = document.querySelector('select');

let voices = [];

// Function to update the list of voices in the select dropdown
function populateVoiceOptions() {
  if ('speechSynthesis' in window) {
    voices = window.speechSynthesis.getVoices();

    select.innerHTML = ''; // Clear existing options
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      select.appendChild(option);
    });
  } else {
    console.error('Web Speech API is not supported in this browser.');
  }
}

// Load voices when they become available
if ('speechSynthesis' in window) {
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = populateVoiceOptions;
  } else {
    populateVoiceOptions();
  }
}

// Function to convert text to speech
function textToSpeech(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set the language to English (US)

    // Set the voice based on the selected option
    const selectedVoiceName = select.value;
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Handle errors
    utterance.onerror = (event) => {
      console.error('SpeechSynthesis Error:', event.error);
    };

    // Handle end of speech
    utterance.onend = () => {
      toggleConversionState(false);
    };

    // Speak the text
    window.speechSynthesis.speak(utterance);
  } else {
    console.error('Web Speech API is not supported in this browser.');
  }
}

// Function to toggle conversion state
function toggleConversionState(state) {
  isConvert = state;
  if (isConvert) {
    button.innerHTML = 'Stop Converting';
    button.style.backgroundColor = 'red';
  } else {
    window.speechSynthesis.cancel(); // Stop the speech synthesis
    button.innerHTML = 'Start Converting';
    button.style.backgroundColor = 'green';
  }
}

// Event listener for the "Start/Stop" button
button.addEventListener('click', () => {
  const text = textArea.value.trim(); // Get the trimmed value of the textarea

  if (isConvert) {
    toggleConversionState(false);
  } else {
    if (text === "") {
      alert("Write something to convert to speech");
    } else {
      toggleConversionState(true);
      textToSpeech(text);
    }
  }
});
