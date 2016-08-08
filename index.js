animation();

function animation() {
    var x = event.clientX;
    var y = event.clientY;
    TweenLite.to($("#dot"), 3, {
        x: x,
        y: y,
        rotationX: 40,
        rotationY: 180,
        alpha: 3,
        onComplete: returnToNormal,
        onCompleteParams: [$("#dot")]
    });
}

function returnToNormal(obj) {
    if (obj) {
        TweenLite.to(obj, 3, {
            rotationY: 720
        });
    }
}


//var i = 0;

//(function jar() {
//setInterval(function() {
//  if (i > 0) {
//     document.getElementById("dynamic").innerHTML = "<div id='+"meme"+'><style>meme {background:url(http://s2.quickmeme.com/img/f0/f0e8bc4e558ca6f8acbaf0f2fa0c6067902d1919e338039ddcfc03e7d716d8ee.jpg);}</style></div>";
//  }

//  else if (i > 2) {
//    document.getElementById("dynamic").innerHTML = "I  am lazy and don't want to work anymore, so i will just put a bunch of inspirational crap here.";
//    }
// else if (i > 3) {
//   document.getElementById("dynamic").innerHTML = "inspirational crap";
//  }

//}, 3000);
// i++;
// })();


alert("hello");