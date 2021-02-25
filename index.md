# How Does Your Brain Sound?
A Rune Labs Hack Day project by Poorvi Acharya and Ian Lockwood

## The Goal: Translating brain data into to musical notes
At Rune Labs, we have incredibly rich data coming from amazing devices directly implanted in the brain. One of the data streams, Local Field Potential (or LFP) is measured in Hz - just like musical notes. And so, we got to thinking... can brain data be music?

Well, yes and no. The data coming from your brain does not register Hz at audible-to-human-musical-notes, but with a bit of math we found we were able to translate the data to an audible range while maintaining the relationships between datapoints. Of coure, different formulas will produce different results, so we can't claim that these notes are the sole truthful translation - but it's still pretty cool.

(Note: All data in this project was anonymized the entire time, from ingestion to use).


## The Math, in a Jupyter Notebook
[rune-brain-sounds.ipynb](https://github.com/rune-labs/How-Does-Your-Brain-Sound/blob/main/src/rune-brain-sounds.ipynb)

### The Midi Translation, Built Using [jsmidgen](https://github.com/dingram/jsmidgen)
[midiDemo.js](https://github.com/rune-labs/How-Does-Your-Brain-Sound/blob/main/src/midiDemo.js)

## The Music

First up, a basic translation of a single channel of sample data:

![Cool Brain](https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/cool%20brain.mp3)

Then, Ian took a minute to have a little fun with that sample:

[Funky Brain](https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/Funky%20Brain.mp3)

Now it was time to pick our actual data and translate all channels.

![LFP Stream](https://github.com/rune-labs/How-Does-Your-Brain-Sound/blob/main/assets/stream.png)

We found a rich piece of LFP data (thanks to Gavin on our product team!) and ran all 4 channels through the jupyter notebook translation, and then the JS midi maker, and got this:

[Raw LFP to Notes](https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/Brain%20To%20Notes%20Raw.mp3)

Maybe not too far off from what you expected a brain to sound like? With all four channels available it was time to get creative. First, we rounded the notes to the scale of C Major to make them a little easier to work with (while still mostly accurate). We then split up and created a couple of songs!

Ian noticed that one of the channels looked a lot like a solid bassline, assigned it to a bass software instrument and dropped it an octave. The remaining notes, while still dissonant, looked like they could be crunchy rock chords, and this hard rock number was born:

[Hard Rock CMAJ](https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/CMAJ%20Brain%20Hard%20Rock.mp3)

Taking a little more liberty led to an even more listenable rock song! One constraint though - we felt that channels still had to have the same relationship, so while there's more repetition here, no channels were ever moved away from each other in time:

[All Dressed Up](https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/CMAJ%20Brain%20Hard%20Rock.mp3)

Poorvi took things a different direction, with a beautiful orchestral arrangement:

[Brainwaves in Bb Major](https://github.com/rune-labs/How-Does-Your-Brain-Sound/blob/main/Brain%20Songs/Brainwaves%20in%20B%20flat%20major.mp3)

She then refined it into a beautiful "Second Movement":

[Brainwaves in Bb Major 2nd Movement](https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/Brainwaves%20in%20B%20flat%20major%202nd%20movement.mp3)

## Next Steps
This is about as far as we could get in a single day, but the evolution of this idea would be to hook everything up into an automated app or service, where data on our platform could be selected and easily run through to either generate midi files OR translate to an MP3.
