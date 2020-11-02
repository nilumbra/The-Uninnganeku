/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/

/*
 * jQuery endcredits Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
$(document).ready(function () {

    $("[data-ui='messages']").click(
    	function (e) {
        e.preventDefault();
        console.log("clicked")
        var maskHeight = $("[data-ui='messages']").height();
        var maskWidth = $("[data-ui='messages']").width();
        var ui_height = $("[data-ui='messages']").height();
        console.log("height:"+maskHeight+"\nwidth:"+maskWidth);

        $('#titles').css({
            'width': maskWidth,
        });

        $('#titles').fadeIn(1000);
        $('#titles').fadeTo("slow");
        $('#titles').fadeIn();
        // $('#credits').css("left", (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + "px");
        $('#credits').css("bottom", "-" + (maskHeight * 2),"px");
        $('#credits').show('slow');
   
        $('#credits').animate({
            bottom: maskHeight + "px"
        }, {
            duration: 15000,
            complete: function () {
                $('#titles').fadeOut();
                $('#credits').css("bottom", "-" + (maskHeight * 2) + "px");
            },
            step: function (n, t) {
                var pos = $(this).position();
                // console.log('X: ' + pos.left.toFixed(2) + ' Y: ' + pos.top.toFixed(2));
            }
        });

    })

    // $("[data-ui='messages']").click(function (e) {
    //     e.preventDefault();
    //     $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
    //     $('#titles').hide();
    //     $('.window').hide();
    // });

    // $('#titles').click(function () {
    //     $(this).hide();
    //     $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
    //     $('.window').hide();
    // });
});

 