let synth = speechSynthesis;
    let availableVoices = document.getElementById("Lang");
    let change_voice = '';
    voices();

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        availableVoices.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

    function speak(){    
        let textToSpeak = document.getElementById("Text").value;
        var msg = new SpeechSynthesisUtterance();
        msg.text = textToSpeak;
        for(let voice of synth.getVoices()){
            if(voice.name === availableVoices.value){
                msg.voice = voice;
            }
        }
        window.speechSynthesis.speak(msg);
    }