const ffmpeg = require('./ffmpeg')



// Process video and send back the result
    ffmpeg()
        .input('./faceId.mp4')
        .fps(30)
        .addOptions(["-crf 28"])
        .input('./watermark.png')
        .complexFilter([
            "overlay=main_w-overlay_w-20:main_h-overlay_h-20"
        ])
        .outputOptions('-pix_fmt yuv420p')
        .on("end", () => {
            console.log("Enddd",)
        })
        .on("error", (err) => {
            console.error("Errror in save",err)
        }).save(`./test.mp4`);
