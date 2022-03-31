var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red " + random_number_r);
        console.log("Green " + random_number_g);
        console.log("Blue " + random_number_b);

        document.getElementById("detected").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("detected").style.fontFamily = 'Courier New' + "," + 'Courier' + "," + 'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - " + results[0].label;
        document.getElementById("voice").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("voice").style.fontFamily = 'Courier New' + "," + 'Courier' + "," + 'monospace';

        img = document.getElementById("image");

        if (results[0].label == "Barking") {
            img.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwipy4_skO_2AhXFI30KHbjdDsUQMygCegUIARDYAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog&ved=2ahUKEwipy4_skO_2AhXFI30KHbjdDsUQMygCegUIARDYAQ";
            dog = dog + 1;
            document.getElementById("detected").innerHTML = "Detected Dog - " + dog;
        } else if (results[0].label == "Meowing") {
            img.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3a%2FCat03.jpg%2F1200px-Cat03.jpg&imgrefurl=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fcat&tbnid=hMjxy8pUhhc4QM&vet=12ahUKEwjj1L-Bke_2AhXpATQIHfIRAAAQMygDegUIARDdAQ..i&docid=3aBlXpmFZqFG2M&w=1200&h=1199&q=cat&ved=2ahUKEwjj1L-Bke_2AhXpATQIHfIRAAAQMygDegUIARDdAQ";
            cat = cat + 1;
            document.getElementById("detected").innerHTML = "Detected Cat - " + cat;
        } else if (results[0].label == "Roar") {
            img.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F29%2F150929-050-547070A1%2Flion-Kenya-Masai-Mara-National-Reserve.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Flion&tbnid=DBk5Qx3rVV587M&vet=12ahUKEwiZ8tuVke_2AhUoBTQIHbNuBPIQMygBegUIARDYAQ..i&docid=Zp2R2-BbubSvqM&w=1600&h=1085&q=lion&ved=2ahUKEwiZ8tuVke_2AhUoBTQIHbNuBPIQMygBegUIARDYAQ";
            lion = lion + 1;
            document.getElementById("detected").innerHTML = "Detected Lion - " + lion;
        } else if (results[0].label == "Mooing") {
            img.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.economist.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F2021%2F09%2Farticles%2Fmain%2F20210918_stp504.jpg&imgrefurl=https%3A%2F%2Fwww.economist.com%2Fscience-and-technology%2Fhow-to-toilet-train-your-cow%2F21804770&tbnid=TjcuxfcDRX_TjM&vet=12ahUKEwjcjZqlke_2AhV5ADQIHWBxB5wQMygDegUIARDdAQ..i&docid=468IqFOaM5SKCM&w=1280&h=720&q=cow&ved=2ahUKEwjcjZqlke_2AhV5ADQIHWBxB5wQMygDegUIARDdAQ";
            cow = cow + 1;
            document.getElementById("detected").innerHTML = "Detected Cow - " + cow;
        } else {
            img.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FZg8uQ1mrCrSX7Dtk7z-8eY68OBA%3D%2F0x0%3A1200x630%2F1200x800%2Ffilters%3Afocal(504x219%3A696x411)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F69125075%2Farticle_geforce_broadcasters_rtx_voice_og_no_text1200x630.0.jpg&imgrefurl=https%3A%2F%2Fwww.theverge.com%2F2021%2F4%2F14%2F22383572%2Fopen-broadcaster-software-obs-nvidia-noise-removal-rtx-voice-broadcast&tbnid=jNUNsrwW5fbZhM&vet=12ahUKEwiczpezke_2AhW4ATQIHSiMBkoQMygJegUIARDoAQ..i&docid=2Wtd06OxmjG8OM&w=1200&h=800&q=background%20noise&ved=2ahUKEwiczpezke_2AhW4ATQIHSiMBkoQMygJegUIARDoAQ";
            background_noise = background_noise + 1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - " + background_noise;
        }
    }
}