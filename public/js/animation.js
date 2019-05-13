        const CANVAS_W = 1250;
        const CANVAS_H = 300;
        const IMAGE_W  = 100;
        const IMAGE_H  = 100;
        const RIGHT    = CANVAS_W - IMAGE_W;
        const BOTTOM   = CANVAS_H - IMAGE_H;
        
        var con;
        var image1;
        var image2;
        var image3;
        
        var x  = 0;
        var y  = 0;
        var dx = 10;
        var dy = 7;

        var a = 400;
        var b = 10;
        var da = 7;
        var db = 10;

        var c = 900;
        var d = 20;
        var dc = 6;
        var dd = 7;

        var switch_img = true;

        
        function init()
        {
            console.log("enter init function");
            con = document.getElementById("canvas")
                          .getContext("2d");
            con.strokeStyle = "white";
            con.fillStyle = "white";
            
            image1 = new Image();
            image1.src = "img/cat.png";
            image2 = new Image();
            image2.src = "https://www.velocitylsat.com/sites/default/files/images/law-school-logos/stanford-law-school-logo.png";
            image3 = new Image();
            image3.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png";
            
            document.onclick = clicked;

            setInterval(draw, 40); //speed
        }
        
        function draw()
        {
            con.fillRect(0, 0, CANVAS_W, CANVAS_H);
            con.strokeRect(0, 0, CANVAS_W, CANVAS_H);
            
            con.drawImage(image1, x, y, IMAGE_W, IMAGE_H);
            con.drawImage(image2, a, b, IMAGE_W, IMAGE_H);
            con.drawImage(image3, c, d, IMAGE_W, IMAGE_H);
            
            x += dx;
            y += dy;

            a += da;
            b += db;

            c += dc;
            d += dd;

            
            // Bounce off a wall
            if ((x < 0) || (x > RIGHT))  dx = -dx;
            if ((y < 0) || (y > BOTTOM)) dy = -dy;

            if ((a < 0) || (a > RIGHT))  da = -da;
            if ((b < 0) || (b > BOTTOM)) db = -db;

            if ((c < 0) || (c > RIGHT))  dc = -dc;
            if ((d < 0) || (d > BOTTOM)) dd = -dd;

        }

        function clicked()
        {
            if(switch_img) {
                image1.src = "img/yale.png";
                image2.src = "img/princeton.png";
                image3.src = "img/berkeley.png";
                switch_img = false;
            }
            else{
                image1.src = "img/cat.png";
                image2.src = "https://www.velocitylsat.com/sites/default/files/images/law-school-logos/stanford-law-school-logo.png";
                image3.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png";
                switch_img = true;
            }
        }
    