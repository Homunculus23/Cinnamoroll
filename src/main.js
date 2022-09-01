const _audioSwitch = $('.audioSwitch');
const _audioStyle =$('.audioStyle')

let onOff = 0;

_audioSwitch.on('click',() => {
    onOff++;
    if(onOff%2 === 1){
        _audioStyle[0].play();
        _audioSwitch.css('box-shadow','0 0 15px blue' )
    }else if(onOff%2 === 0){
        _audioStyle[0].pause();
        _audioSwitch.css('box-shadow','0 0 15px red' )
    }
})