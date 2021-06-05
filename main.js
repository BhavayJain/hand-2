prediction1="";
prediction2="";

Webcam.set({

    width:350,
    height:300,
    image_format:"png",
    png_quality:90
}
);

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
}
);
}
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]/model.json',modelloaded);
    function modelloaded(){
        console.log("modelloaded");
    }

    function speak(){
        synth=window.speechSynthesis;
        speak_data1="The First Prediction Is"+prediction1;

        var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
        synth.speak(utterThis);
    }