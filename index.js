//console.log("jsisloaded")

const mosaicSamples = [
    { id:"ms1", src:"images/cube1.jpg" },
    { id:"ms2", src:"images/cube2.jpg" },
    { id:"ms3", src:"images/cube3.jpg" },
    { id:"ms4", src:"images/cube4.jpg" },
    { id:"ms5", src:"images/cube5.jpg" },
    { id:"ms6", src:"images/cube6.jpg" },
    { id:"ms7", src:"images/cube7.jpg" },
    { id:"ms8", src:"images/cube8.jpg" },
    { id:"ms9", src:"images/cube9.jpg" },
    { id:"ms10", src:"images/cube10.jpg" },
    { id:"ms11", src:"images/cube11.jpg" },
    { id:"ms12", src:"images/cube12.jpg" },
    { id:"ms13", src:"images/cube13.jpg" },
    { id:"ms14", src:"images/cube14.jpg" },
    { id:"ms15", src:"images/cube15.jpg" },
    { id:"ms16", src:"images/cube16.jpg" },
    { id:"ms17", src:"images/cube17.jpg" },
    { id:"ms18", src:"images/cube18.jpg" },
    { id:"ms19", src:"images/cube19.jpg" },
    { id:"ms20", src:"images/cube20.jpg" },
    { id:"ms21", src:"images/cube21.jpg" },
    { id:"ms22", src:"images/cube22.jpg" },
    { id:"ms23", src:"images/cube23.jpg" },
    { id:"ms24", src:"images/cube24.jpg" },
    { id:"ms25", src:"images/cube1.jpg" },
    { id:"ms26", src:"images/cube2.jpg" },
    { id:"ms27", src:"images/cube3.jpg" },
    { id:"ms28", src:"images/cube4.jpg" },
    { id:"ms29", src:"images/cube5.jpg" },
    { id:"ms30", src:"images/cube6.jpg" },
    { id:"ms31", src:"images/cube7.jpg" }
];

const mosaicLength = 8;
function getRandomMosaicSample() {
    const randomIndex = Math.floor(Math.random() * mosaicSamples.length);
    return mosaicSamples[randomIndex];
}
function generateRandomMosaic() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    for (let i = 0; i < mosaicLength; i++) {
        const mosaicSample = getRandomMosaicSample();
        const img = document.createElement("img");
        img.src = mosaicSample.src;
        img.alt = `Mosaic ${mosaicSample.id}`;
        img.className = "thumb";
        gallery.appendChild(img);
    }
}
document.getElementById("generate").addEventListener("click",generateRandomMosaic);


