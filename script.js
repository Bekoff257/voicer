click.addEventListener('click', () => {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition;
    recognition.inerimResult = true;

    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

        document.getElementById("convert_text").innerHTML = transcript;
        console.log(transcript);
    })

    // const jsonData = { transcript: transcript }; // Create a JSON object with the transcript data

    // // Convert the JSON object to a string
    // const jsonString = JSON.stringify(jsonData, null, 2);

    // // Create a Blob object with the JSON string
    // const blob = new Blob([jsonString], { type: 'application/json' });

    // // Create a temporary URL for the Blob
    // const url = URL.createObjectURL(blob);

    // // Create a temporary <a> element to trigger the download
    // const link = document.createElement('a');
    // link.href = url;
    // link.download = 'transcript.json';
    // link.click();

    // // Clean up the temporary URL and <a> element
    // URL.revokeObjectURL(url);
    // link.remove();

    if(speech == true){
        recognition.start();
    }
})