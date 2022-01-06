let sketch = function (p) {
    p.colorMode(p.HSB, 100, 100, 100)
    p.noiseSeed(p.floor(fxrand()*1000))
    
    width = p.min(p.windowHeight, p.windowWidth);
    height = width;
    let timer = 0;

    p.setup = function () {    
        p.pixelDensity(1);
        p.createCanvas(width, height);
        p.background(0, 0, 86);
        restart(p);
        
    }

    restart = function (p, timer) {
        p.clear();
        p.resizeCanvas(width, height);
        p.background(0, 0, 86);
        makeArt(p)
    };

    p.windowResized = function () {
        width = p.min(p.windowHeight, p.windowWidth);
        height = width;

        restart(p);
    };

    makeArt = function (p) {

        p.noStroke()
        p.fill(p.color(200,100,100))
        p.circle(width/2, height/2 ,width)
        fxpreview()
    }

    p.draw = function () {
        makeArt(p)
    }

};


new p5(sketch); 
