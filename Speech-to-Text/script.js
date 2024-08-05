// Check if the browser supports the Web Speech API
if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true; // Keep recognizing speech continuously
  recognition.interimResults = true; // Do not include interim results
  recognition.lang = "en-US"; // Set the language to English (US)

  const Class = (Class) => document.querySelector(Class);

  let text = Class(".text"),
    button = Class(".start-stop");
  let isRecognizing = false;
  let finalTranscript = '';

  // Event handler for when speech is recognized
  recognition.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    text.textContent = finalTranscript + interimTranscript;
  };

  recognition.onend = () => {
    if (isRecognizing) {
      recognition.start(); // Restart recognition if it's still supposed to be running
    }
  };
  
  // Event handler for errors
  recognition.onerror = (event) => {
    alert("Speech Recognition Error:", event.error);
  };

  // Start speech recognition
  button.addEventListener("click", () => {
    if(isRecognizing) {
        recognition.stop();
        button.innerHTML = "Start Converting";
        button.style.backgroundColor = "green";
    }
    else{
        text.textContent = ""
        finalTranscript = '';
        recognition.start();
        button.innerHTML = "Stop Converting";
        button.style.backgroundColor = "red";
    }
    isRecognizing = !isRecognizing
  });

} else {
  alert("Web Speech API is not supported in this browser");
}
