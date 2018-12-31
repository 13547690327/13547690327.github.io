var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var audioa = document.getElementById('aaa');
var audiob = document.getElementById('bbb');
var analyser = audioCtx.createAnalyser();

var arr = ["audioa","audiob"];


    var audioSrc = audioCtx.createMediaElementSource(audioa);

  
    audioSrc.connect(analyser);
    analyser.connect(audioCtx.destination);
analyser.fftSize = 1024;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 获取ID为 "oscilloscope" 的画布
var canvas = document.getElementById("canvas");
var canvasCtx = canvas.getContext("2d");

// 绘制一个当前音频源的示波器

function draw() {

  drawVisual = requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

        var gradient =   canvasCtx.createLinearGradient(150, 200, 200, 50);
        gradient.addColorStop(0, '#00ff00');
        gradient.addColorStop(0.5, '#ffff00');
        gradient.addColorStop(1, '#ff0000');

  canvasCtx.fillStyle = "white";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 7;
  canvasCtx.strokeStyle = gradient;

  canvasCtx.beginPath();

  var sliceWidth = canvas.width * 1.0 / bufferLength;
  var x = 0;

  for (var i = 0; i < bufferLength; i++) {

    var v = dataArray[i] / 128;
    var y = v * canvas.height / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();
};

draw();