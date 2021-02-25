var fs = require('fs');
var Midi = require('jsmidgen');

var channel0 = ['A#1', 'C2', 'B1', 'A1', 'A1', 'C2', 'F#2', 'D#2', 'D#2', 'C3', 'F#2', 'A#2', 'B2', 'D#2', 'D2', 'D#2', 'F2', 'F#2', 'D#3', 'F#3', 'E3', 'G#2', 'F#3', 'F#3', 'D5', 'D3', 'C3', 'A#2', 'C#3', 'G4', 'D3', 'D3', 'B3', 'A3', 'E3', 'C3', 'A2', 'F#2', 'G#2', 'F3', 'C#4', 'F#3', 'G#3', 'F3', 'E2', 'C#2', 'F#2', 'F5', 'G1', 'G1']
var channel1 = ['A#1', 'B1', 'B1', 'A1', 'A1', 'C2', 'F#2', 'F#2', 'E2', 'G2', 'E2', 'C3', 'A#2', 'D2', 'D2', 'D#2', 'E2', 'E2', 'C#3', 'C3', 'A2', 'G2', 'C#3', 'B3', 'A2', 'A2', 'F4', 'A3', 'C4', 'A#3', 'F#3', 'D3', 'D#3', 'G3', 'F3', 'F3', 'F3', 'F#3', 'D3', 'B2', 'G3', 'A3', 'F3', 'A#3', 'G3', 'E2', 'C#2', 'F#2', 'G1', 'G1']
var channel2 = ['A1', 'A1', 'A1', 'A1', 'A#1', 'A#1', 'A#1', 'C2', 'B1', 'A#1', 'A#1', 'A#1', 'A1', 'A#1', 'B1', 'B1', 'D2', 'E2', 'C2', 'E2', 'C#2', 'C#2', 'A#1', 'A1', 'A1', 'B1', 'G2', 'D#2', 'F#2', 'G2', 'F#2', 'C#2', 'D2', 'G2', 'E2', 'D#2', 'E2', 'F2', 'E2', 'A2', 'D3', 'D4', 'G#3', 'D3', 'C5', 'C#3', 'G#2', 'C#3', 'A#3', 'G1', 'G1']
var channel3 = ['A#1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A#1', 'F3', 'D2', 'C2', 'A#1', 'A#1', 'C2', 'C2', 'B1', 'A#1', 'C2', 'F2', 'D2', 'C#2', 'D#2', 'E2', 'F2', 'C#2', 'D2', 'C#2', 'D2', 'F3', 'C#4', 'D#3', 'D3', 'C4', 'G2', 'F2', 'D#3', 'D#2', 'F#2', 'B2', 'G#2', 'G2', 'F3', 'C3', 'D3', 'G#3', 'A5', 'C#3', 'A#2', 'F#3', 'C4', 'G1', 'G1']


var file = new Midi.File();
var track = new Midi.Track();
var track1 = new Midi.Track();
var track2 = new Midi.Track();
var track3 = new Midi.Track();
file.addTrack(track);
file.addTrack(track1);
file.addTrack(track2);
file.addTrack(track3);

channel0.forEach((note) => {
  track.addNote(0, note, 64)
})

channel1.forEach((note) => {
  track1.addNote(0, note, 64)
})

channel2.forEach((note) => {
  track2.addNote(0, note, 64)
})

channel3.forEach((note) => {
  track3.addNote(0, note, 64)
})

fs.writeFileSync('test.mid', file.toBytes(), 'binary');
