//Project 1//

var panels = document.querySelectorAll('.expand_content > div');

console.log(panels);

panels.forEach((x) => {
    console.log(x);
    x.addEventListener("click", () => {
        console.log("project_1 expand pics");
        removeActiveClasses();
        x.classList.add("active");
    }
    )
});
function removeActiveClasses() {
    panels.forEach(x => {
        x.classList.remove("active");
    })
}
//Project 1//

//Project 2 progress bar//

var progress_bar = document.getElementById('progress_line');
var prev = document.getElementById('progress_prev');
var next = document.getElementById('progress_next');
var circles = document.querySelectorAll('.progress_circle');

var progress = 1;
next.addEventListener('click' , () => {
    progress++;

    if(progress > circles.length) {
        progress = circles.length;
    }
    console.log(progress)

    progress_update();
})

prev.addEventListener('click' , () => {
    progress--;

    if(progress < 1) {
        progress = 1;
    }
    console.log(progress)
    
    progress_update();
})

function progress_update() {
    circles.forEach((pro_circle, progress_idx) => {
        if(progress_idx < progress) {
            pro_circle.classList.add('active_circle');
        } else {
            pro_circle.classList.remove('active_circle');
        }
    })
/*
    var all_progress_actives = document.querySelectorAll('.active_circle');

   progress_bar.style.width = (all_progress_actives.length - 1) / (circles.length -1 ) * 100 + '%';*/
    if(progress == 2) {
        progress_bar.style.width = 33 + '%';
    } else if (progress == 3) {
        progress_bar.style.width = 66 + '%';
    } else if (progress == 4) {
        progress_bar.style.width = 99 + '%';
    } else {
        progress_bar.style.width = 0 + '%';
    }

    if (progress == 1) {
        prev.disabled = true;
    } else if(progress == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}


//Project 2 progress bar//

//Project 3 rotation menu//

var rm_open = document.getElementById('rm_open');
var rm_close = document.getElementById('rm_close');
var rm_container = document.querySelector('.rotating_menu');

rm_open.addEventListener('click', () => rm_container.classList.add('rm_show_nav'));
rm_close.addEventListener('click', () => rm_container.classList.remove('rm_show_nav'));


//Project 3 rotation menu//

//Project 4 search proj//

var sp_content = document.querySelector('.sp_content');
var sp_btn = document.querySelector('.sp_btn');
var sp_input = document.querySelector('.sp_input');

sp_btn.addEventListener('click', () => {
    sp_content.classList.toggle('sp_active');
    sp_input.focus();
})

//Project 4 search proj//


/*Project 5 blurry load*/


var bl_load_text = document.querySelector('.bl_loading-text');
var bl_bg = document.querySelector('.bl_bg');

var bl_load = 0;

var bl_int = setInterval(bl_Blurring, 25);

function bl_Blurring() {
    bl_load++

    if (bl_load > 99) {
        clearInterval(bl_int)
    }
   /* console.log(bl_load);*/
    bl_load_text.innerText = bl_load + '%';
    bl_load_text.style.opacity = scale(bl_load, 0, 100, 1, 0);
    bl_bg.style.filter = 'blur(' + scale(bl_load, 0, 100, 30, 0) +'px)';
  /*  console.log(bl_bg.style.filter);*/
}

var scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min)
    + out_min;
}

/*Project 5 blurry load*/

/*Project 6 Scroll animation*/

var sap_boxes = document.querySelectorAll('.sap_box');

window.addEventListener('scroll', sap_checkBoxes);

sap_checkBoxes();

function sap_checkBoxes() {
    console.log(window.innerHeight);
    var sap_triggerBottom = window.innerHeight * 0.7;

    sap_boxes.forEach (sap_box => {
        var sap_boxTop = sap_box.getBoundingClientRect().top;

        if(sap_boxTop < sap_triggerBottom) {
            sap_box.classList.add('sap_show');
        } else {
            sap_box.classList.remove('sap_show');
        }
    })
}


/*Project 6 Scroll animation*/


/*Project 7 Split screen*/
var sc_left, sc_right, sc_container;

sc_left = document.querySelector('.sc_left');
sc_right = document.querySelector('.sc_right');

sc_left.addEventListener('mouseenter', () => sc_left.classList.add('sc_hover_left'));
sc_left.addEventListener('mouseleave', () => sc_left.classList.remove('sc_hover_left'));

sc_right.addEventListener('mouseenter', () => sc_right.classList.add('sc_hover_right'));
sc_right.addEventListener('mouseleave', () => sc_right.classList.remove('sc_hover_right'));


/*Project 7 Split screen*/

/*Project 8 Split Form Input Wave*/

var fiw_labels = document.querySelectorAll('.fiw_control label');

fiw_labels.forEach(fiw_x => {
    fiw_x.innerHTML = fiw_x.innerText
    .split('')
    .map((fiw_letter, fiw_idx) => '<span style = "transition-delay: ' + fiw_idx * 50 + 'ms">' + fiw_letter +'</span>')
    .join('')
})

/*Project 8 Split Form Input Wave*/


/*Project 9 sound buttons*/

var sbp_sounds = ['sbp_horde', 'sbp_ili', 'sbp_steam', 'sbp_sandstorm', 'sbp_few', 'sbp_66', 'sbp_mex', 'sbp_pump', 'sbp_finale', 'sbp_again'];

sbp_sounds.forEach(sbp_sound => {
    var sbp_btn = document.createElement('button');
    sbp_btn.classList.add('sbp_btn');

    sbp_btn.innerText = sbp_sound;

    sbp_btn.addEventListener('click', () => {
        stopsbpSongs();
        document.getElementById(sbp_sound).play();
    })

    document.getElementById('sbp_buttons').appendChild(sbp_btn);
})

function stopsbpSongs() {
    sbp_sounds.forEach(sbp_sound => {
        var sbp_song = document.getElementById(sbp_sound);

        sbp_song.pause();
        sbp_song.currentTime = 0;
    })
}


/*Project 9 sound buttons*/

/*Project 10 square_proj*/

var sqp_content = document.getElementById('sqp_content_js');
var sqp_colors = ['#00FF00', '#0000FF', '#FF0000', '#FFFF00'];
var SQUARES = 496;

for(let i = 0; i < SQUARES; i++) {
    const sqp_kvadrat = document.createElement('div');
    sqp_kvadrat.classList.add('sqp_square');

    sqp_kvadrat.addEventListener('mouseover', () => setColor(sqp_kvadrat));
   
    sqp_kvadrat.addEventListener('mouseout', () => removeColor(sqp_kvadrat));


    sqp_content.appendChild(sqp_kvadrat);
}

function setColor(element) {
    var sqp_color = getRandomColor();
    console.log(element);
    element.style.background = sqp_color;
    element.style.boxShadow = '0 0 2px ' + sqp_color + ', 0 0 10px ' + sqp_color;
}

function removeColor(element) {
    element.style.background = '#000';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return sqp_colors[Math.floor(Math.random() * sqp_colors.length)];
}

/*Project 10 square_proj*/

/*Project 10 square_proj*/



//Project//
/*
var scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min)
    + out_min;
}
*/