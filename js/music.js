var canvas = document.getElementById("canvas");
    var cxt = canvas.getContext("2d");
    //获取API
    var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    var context = new AudioContext;
    //加载媒体
    var audio = document.getElementById("audio");
    //创建节点
    var source = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();
    //连接：source → analyser → destination
    source.connect(analyser);
    analyser.connect(context.destination);
    //创建数据
    var output = new Uint8Array(360);
    (function drawSpectrum() {
        analyser.getByteFrequencyData(output);//获取频域数据
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        //画线条
        for (var i = 0; i < 360; i++) {
            var value = output[i] / 8//<===获取数据
            cxt.beginPath();
            cxt.lineWidth = 3;
            cxt.strokeStyle = "white";

            cxt.moveTo(150, 150);
            //R * cos (PI/180*一次旋转的角度数) ,-R * sin (PI/180*一次旋转的角度数)
            cxt.lineTo(Math.cos((i * 1) / 70 * Math.PI) * (100 + value) + 150, (- Math.sin((i * 1) / 70 * Math.PI) * (100 + value) + 150));
            cxt.stroke();
        }
        //画一个小圆，将线条覆盖
        cxt.beginPath();
        cxt.lineWidth = 1;
        cxt.arc(150, 150, 98, 0, 2 * Math.PI, false);

        var img = new Image();
        img.src = "images/swiper_2/loser.png";
        
        var pat=cxt.createPattern(img,"no-repeat");
        cxt.fillStyle = pat;   
        cxt.stroke();
        cxt.fill();
        //请求下一帧
        requestAnimationFrame(drawSpectrum);

          
    })();

    music_kz.addEventListener("click", function(){
       if (this.getAttribute("src",2) == ("images/swiper_2/play.png")) {
            this.src = "images/swiper_2/pause.png";
            audio.play();
        }
        else{
            this.src = "images/swiper_2/play.png";
            audio.pause();
        }
    });