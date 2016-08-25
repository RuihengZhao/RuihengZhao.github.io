$(document).ready(function() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    
    if (Sys.firefox || Sys.ie){
        $('.Hobby .hobby-content').css({
            margin: '8% 15%'
        });
    }
        
    if(Sys.ie) {
        $(".se-pre-con p").text('Hello! Welcome to my website. It seems you are using IE. Please use Chrome, Firefox or Opera to open the site again. Or you can watch this snake for...ever...');
    }else{
        $(".se-pre-con").fadeOut();
    }

    /*
    if (Sys.ie) document.write('IE');
    if (Sys.firefox) document.write('Firefox');
    if (Sys.chrome) document.write('Chrome');
    if (Sys.opera) document.write('Opera');
    if (Sys.safari) document.write('Safari');
    */
   
	
	$('.zoom').magnify({
        onload: function() {
          console.log('Magnification powers activated!');
        }
    });


	var screenwidth = document.body.clientWidth;
	if (screenwidth < 1024) {
		$('#fullpage').fullpage({
			//sectionsColor: ['#47c9af', '#FFF', '#000', 'blue', 'black'],
			controlArrows: false,
			resize: true,
			anchors: ['Home','Profile','Motto', 'Projects', 'Hobby', 'Contact'],
			fixedElements: '#tip',
			menu: '#fullpageMenu',
			//navigation: true,
			//navigationTooltips: ['Home','Profile','Motto', 'Projects', 'Contact'],
			slidesNavigation: true,
			scrollOverflow: true,
			scrollingSpeed: 500,
			loopHorizontal: false,
			
        	afterLoad: function(link, index){
        		switch(index) {
        			case 1:
        				break;
        			case 2:
        				//var pic = $('.selfie img');
        				//pic.animate({height: (pic.height()-20), width: (pic.width()-20)}, {duration: 1500});
        				$('.profile-content1').animate({left: 0}, {duration:1000});
        				$('.profile-content2').animate({right: 0}, {duration:1000});
        				break;
        			case 3:
        				break;
        			case 4:
        				break;
        			case 5:
        				break;
        		}
        	},
        	onLeave: function(link, index){
            	switch(index) {
        			case 1:
        				break;
        			case 2:
        				//var pic = $('.selfie img');
        				//pic.css({height: (pic.height()+30), width: (pic.width()+30)}, {duration: 0});
        				$('.profile-content1').css({left: '-100%'});
        				$('.profile-content2').css({right: '-100%'});
        				break;
        			case 3: 
        				break;
        			case 4:   
        				break;
        			case 5:   
        				break;
        		}
        	}
		});
	}else{
	   $('#fullpage').fullpage({
            //sectionsColor: ['#47c9af', '#FFF', '#000', 'blue', 'black'],
            controlArrows: true,
            resize: true,
            anchors: ['Home','Profile','Motto', 'Projects', 'Hobby', 'Contact'],
            fixedElements: '#tip',
            menu: '#fullpageMenu',
            //navigation: true,
            //navigationTooltips: ['Home','Profile','Motto', 'Projects', 'Contact'],
            slidesNavigation: true,
            scrollOverflow: true,
            scrollingSpeed: 500,
            loopHorizontal: false,
            
            afterLoad: function(link, index){
                switch(index) {
                    case 1:
                        break;
                    case 2:
                        //var pic = $('.selfie img');
                        //pic.animate({height: (pic.height()-20), width: (pic.width()-20)}, {duration: 1500});
                        $('.profile-content1').animate({left: 0}, {duration:1000});
                        $('.profile-content2').animate({right: 0}, {duration:1000});
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                }
            },
            onLeave: function(link, index){
                switch(index) {
                    case 1:
                        break;
                    case 2:
                        //var pic = $('.selfie img');
                        //pic.css({height: (pic.height()+30), width: (pic.width()+30)}, {duration: 0});
                        $('.profile-content1').css({left: '-100%'});
                        $('.profile-content2').css({right: '-100%'});
                        break;
                    case 3: 
                        break;
                    case 4:   
                        break;
                    case 5:   
                        break;
                }
            }
        });
	}
});

$(function(){
	'use strict';

	var sidebar = $('#fullpageMenu'),
		sidebar_trigger = $('#showmenu'),
		hidenav = $('.hidenav'),
		closenav = $('.closenav'),
		tip = $('#tip'),
		shadow = $('.shadow'),
		body = $('#fullpage'),
		menucontent = $('.menu-content');

	hidenav.on('click', function(){
		sidebar.delay(500).animate({'right':-sidebar.width()});
		menucontent.fadeOut();
	})

	closenav.on('click', function(){
		sidebar.delay(500).animate({'right':-sidebar.width()});
		menucontent.fadeOut();
	})

	body.on('click', function(){
		sidebar.delay(500).animate({'right':-sidebar.width()});
		menucontent.fadeOut();
	})

	sidebar_trigger.on('click', function(){
		sidebar.animate({'right':0});
		menucontent.delay(500).fadeIn();
	})
})