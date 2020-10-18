LIGHT_TEXT = '#292930'; //'#292930'
LIGHT_BKGND = '#f7f7f7'; //#f7f7f7


const light = document.getElementById('customSwitch1');
const dark = document.getElementById('customSwitch2');

//initialize
light.checked = true;
//console.log(getComputedStyle(document.documentElement).getPropertyValue('--mycolor'));
document.documentElement.style.setProperty('--mycolor', LIGHT_TEXT);
document.documentElement.style.setProperty('--mybackgroundcolor', LIGHT_BKGND);

const setLight = () => {
    document.documentElement.style.setProperty('--mycolor', LIGHT_TEXT);
    document.documentElement.style.setProperty('--mybackgroundcolor', LIGHT_BKGND);    
}

const setDark = () => {
    document.documentElement.style.setProperty('--mycolor', LIGHT_BKGND);
    document.documentElement.style.setProperty('--mybackgroundcolor', LIGHT_TEXT);    
}

//light event listener
light.addEventListener('change', event => {
    if(event.target.checked) {
        console.log('light was clicked!');
        setLight();
        dark.checked = false;
    } else {
        console.log('light was unclicked!');
        setDark();
        dark.checked = true;
    }
});

//dark event listener
dark.addEventListener('change', event => {
    if(event.target.checked) {
        console.log('dark was clicked!');
        setDark();
        light.checked = false;
    } else {
        console.log('dark was unclicked!');
        setLight();
        light.checked = true;
    }
});
