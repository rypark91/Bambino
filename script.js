$(function(){
    $(window).scrollTop(0);
    $(window).on("scroll", function(){

        console.log($(this).scrollTop());
        var scrollPosition = Number($(this).scrollTop());
       
            $("#card1").css("top",String(200 - scrollPosition) + "px");
            if(scrollPosition > 549){
                var op = (scrollPosition - 459)/ 630;
                $("#card2").css("opacity",`${op}`);   
            }
            if(scrollPosition > 2104){
                var op = 1 -((scrollPosition - 2104) / 630);
                $("#card2").css("opacity",`${op}`);   
            }
            $("#card2").css("left",String(-1200 + scrollPosition) + "px");
            
            if(scrollPosition > 3059){
                var op = (scrollPosition - 3059) / 630;
                $("#card3").css("opacity",`${op}`)
            }
            if(scrollPosition > 4598 && scrollPosition < 5256){
                var op = 1 -((scrollPosition - 4598) / 600);
                $("#card3").css("opacity",`${op}`); 
            }
            
            $("#card3").css("left",String(4600 - scrollPosition) + "px");

            if(scrollPosition > 4822){
                var op = (scrollPosition - 4822) / 291;
                $("#card4").css("opacity",`${op}`)
            }
            if(scrollPosition > 5700 && scrollPosition < 6300){
                var op = 1 -((scrollPosition - 5700) / 291);
                $("#card4").css("opacity",`${op}`); 
            }
            $("#card4").css("top",String(5700 - scrollPosition) + "px");

            if(scrollPosition > 6042 && scrollPosition < 6874){
                var op = (scrollPosition - 6042) / 330;
                $("#card5").css("opacity",`${op}`)
            }
            if(scrollPosition > 6874 && scrollPosition < 7800){
                var op = 1 -((scrollPosition - 6873) / 330);
                $("#card5").css("opacity",`${op}`); 
            }
            var op = 1 -((scrollPosition - 6874) / 1000);;
            $("#card5").css("top",String(-6400 + scrollPosition) + "px");
            
            if(scrollPosition > 7039){
                var op = (scrollPosition - 7039)/ 630;
                $("#card6").css("opacity",`${op}`);

            }
            if(scrollPosition > 8604){
                var op = 1 -((scrollPosition - 8604) / 630);
                $("#card6").css("opacity",`${op}`);
            }
            $("#card6").css("left",String(8600 - scrollPosition) + "px");

            if(scrollPosition > 9270){
                var op = (scrollPosition - 9270)/ 630;
                $("#card7").css("opacity",`${op}`);
            }
            if(scrollPosition > 10842){
                var op = 1 -((scrollPosition - 10842) / 630);
                $("#card7").css("opacity",`${op}`);
            }
            $("#card7").css("left",String(-9900 + scrollPosition) + "px");
            if(scrollPosition > 10842){
                var op = (scrollPosition - 10842)/ 303;
                $("#card8").css("opacity",`${op}`);
            }
            if(scrollPosition > 11732){
                var op = 1 - (scrollPosition - 11732)/ 303;
                $("#card8").css("opacity",`${op}`);
            }
            $("#card8").css("top",String(-11200 + scrollPosition) + "px");
            
            if(scrollPosition > 11370){
                var op = (scrollPosition - 11370)/ 490;
                $("#card9").css("opacity",`${op}`);
            }
            if(scrollPosition > 13047){
                var op = 1 -((scrollPosition - 13047) / 490);
                $("#card9").css("opacity",`${op}`);
            }
            $("#card9").css("left",String(-12000 + scrollPosition) + "px");
            
            if(scrollPosition > 12900){
                var op = (scrollPosition - 12900) / 490;
                $("#card10").css("opacity",`${op}`);
            }
            if(scrollPosition > 13924){
                var op = 1 -((scrollPosition - 13924) / 490);
                $("#card10").css("opacity",`${op}`);
            }
            $("#card10").css("top",String(-13500 + scrollPosition) + "px");
            
            if(scrollPosition > 14048){
                var op = (scrollPosition - 14048)/ 490;
                $("#card11").css("opacity",`${op}`);
            }
            if(scrollPosition > 15620){
                var op = 1 -((scrollPosition - 15620) / 600);
                $("#card11").css("opacity",`${op}`);
            }
            $("#card11").css("left",String(15600 - scrollPosition) + "px");
            
            if(scrollPosition > 15513){
                var op = (scrollPosition - 15513)/ 500;
                $("#card12").css("opacity",`${op}`);
            }
            if(scrollPosition > 17116){
                var op = 1 -((scrollPosition - 17116) / 500);
                $("#card12").css("opacity",`${op}`);
            }
            $("#card12").css("left",String(17100 - scrollPosition) + "px");

            if(scrollPosition > 16900){
                var op = (scrollPosition - 15513)/ 285;
                $("#card13").css("opacity",`${op}`);
            }
            if(scrollPosition > 17628){
                var op = 1 -((scrollPosition - 17628) / 285);
                $("#card13").css("opacity",`${op}`);
            }
            
            $("#card13").css("top",String(-17300 + scrollPosition) + "px");
        
            $("#card14").css("top",String(-17900 + scrollPosition) + "px");

            
        

    });
});

