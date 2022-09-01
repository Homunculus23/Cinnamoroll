const _audioSwitch = $('.audioSwitch');
const _audioStyle =$('.audioStyle')

_audioSwitch.on('click',() => {
    _audioStyle[0].play();
})