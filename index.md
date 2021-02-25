# How Does Your Brain Sound?
A Rune Labs Hack Day project by Poorvi Acharya and Ian Lockwood

### The Goal: Translating brain data into to musical notes
At Rune Labs, we have incredibly rich data coming from amazing devices directly implanted in the brain. One of the data streams, Local Field Potential (or LFP) is measured in Hz - just like musical notes. And so, we got to thinking... can brain data be music?

Well, yes and no. The data coming from your brain does not register Hz at audible-to-human-musical-notes, but with a bit of math we found we were able to translate the data to an audible range while maintaining the relationships between datapoints. Of coure, different formulas will produce different results, so we can't claim that these notes are the sole truthful translation - but it's still pretty cool.

(Note: All data in this project was anonymized the entire time, from ingestion to use).


### The Math, in a Jupyter Notebook
[rune-brain-sounds.ipynb](https://github.com/rune-labs/How-Does-Your-Brain-Sound/blob/main/src/rune-brain-sounds.ipynb?short_path=b85f1ce)

### The Midi Translation, Built Using [jsmidgen](https://github.com/dingram/jsmidgen)
[midiDemo.js](https://github.com/rune-labs/How-Does-Your-Brain-Sound/blob/main/src/midiDemo.js)

### The Music

First up, a basic translation of a single channel of sample data:
<audio ref="Cool Brain" src="https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/cool%20brain.mp3"></audio>
  

Then, Ian took a minute to have a little fun with that sample:
<audio ref="Funky Brain" src="https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/Funky%20Brain.mp3"></audio>

Now it was time to pick our actual data and translate all channels. We found a rich piece of LFP data and ran all 4 channels through the jupyter notebook translation, and then the JS midi maker, and got this:

<audio ref="Raw LFP to Notes" src="https://raw.githubusercontent.com/rune-labs/How-Does-Your-Brain-Sound/main/Brain%20Songs/Brain%20To%20Notes%20Raw.mp3"></audio>

### Next Steps


You can use the [editor on GitHub](https://github.com/rune-labs/How-Does-Your-Brain-Sound/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.
