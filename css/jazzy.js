var cosmo, foggy, glory, playPause, spennit, temp, waveSurfValues;

waveSurfValues = {
  container: '#waveform',
  scrollParent: false,
  height: 256,
  barWidth: 3,
  progressColor: '#D6880E',
  waveColor: '#34707B',
  cursorColor: '#800020',
  cursorWidth: 2
};

temp = waveSurfValues;

temp['container'] += 'Cosmo';

$('#cosmoLoading').typed({
  strings: ['<h1 class="cover-heading upper cosmoFont"> Loading music..</h1>'],
  typeSpeed: 0
});

$('#gloryLoading').typed({
  strings: ['<h1 class="cover-heading upper cosmoFont"> Loading music..</h1>'],
  typeSpeed: 0
});

$('#foggyLoading').typed({
  strings: ['<h1 class="cover-heading upper cosmoFont"> Loading music..</h1>'],
  typeSpeed: 0
});

$('#spennitLoading').typed({
  strings: ['<h1 class="cover-heading upper cosmoFont"> Loading music..</h1>'],
  typeSpeed: 0
});

cosmo = WaveSurfer.create(temp);

cosmo.load('audio/cosmo.mp3');

cosmo.on('ready', function() {
  $('#cosmoLoading').hide();
  $('.typed-cursor').hide();
});

temp = waveSurfValues;

temp['container'] = '#waveformFoggyVision';

temp['waveColor'] = '#2F5A60';

temp['progressColor'] = '#D3D3D3';

foggy = WaveSurfer.create(temp);

foggy.load('audio/foggyVision.mp3');

foggy.on('ready', function() {
  $('#foggyLoading').hide();
});

temp = waveSurfValues;

temp['container'] = '#waveformSpennit';

temp['waveColor'] = '#722529';

temp['height'] = 156;

console.log(temp['container']);

spennit = WaveSurfer.create(temp);

spennit.load('audio/spennit.mp3');

spennit.on('ready', function() {
  $('#spennitLoading').hide();
});

temp = waveSurfValues;

temp['container'] = '#waveformGlory';

temp['waveColor'] = '#722529';

temp['height'] = 156;

console.log(temp['container']);

glory = WaveSurfer.create(temp);

glory.load('audio/glory.wav');

glory.on('ready', function() {
  glory.play();
  $('#gloryLoading').hide();
});

playPause = function() {
  var height, top, vh, vhDist;
  height = $(window).height();
  vh = height / 100;
  top = $('nav').offset()['top'];
  vhDist = (top / vh) - 5;
  if (vhDist < 100) {
    if (spennit.isPlaying()) {
      spennit.pause();
    }
    if (foggy.isPlaying()) {
      foggy.pause();
    }
    if (cosmo.isPlaying()) {
      cosmo.pause();
    }
    glory.playPause();
  } else if (vhDist < 200) {
    if (glory.isPlaying()) {
      glory.pause();
    }
    if (spennit.isPlaying()) {
      spennit.pause();
    }
    if (foggy.isPlaying()) {
      foggy.pause();
    }
    cosmo.playPause();
  } else if (vhDist < 300) {
    if (glory.isPlaying()) {
      glory.pause();
    }
    if (spennit.isPlaying()) {
      spennit.pause();
    }
    if (cosmo.isPlaying()) {
      cosmo.pause();
    }
    foggy.playPause();
  } else if (vhDist < 300) {
    if (glory.isPlaying()) {
      glory.pause();
    }
    if (foggy.isPlaying()) {
      foggy.pause();
    }
    if (cosmo.isPlaying()) {
      cosmo.pause();
    }
    spennit.playPause();
  }
};
