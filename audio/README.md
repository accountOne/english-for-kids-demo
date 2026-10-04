# Pronunciation clips

Pre-recorded mp3 clips for every English word/sentence the speaker buttons read aloud, so playback does
not depend on the device's speech-synthesis voices (which are silent on some iPhones).

- Engine: [Piper](https://github.com/rhasspy/piper) (MIT), voice `en_US-ljspeech-medium`
  (trained on the public-domain LJ Speech dataset), slowed slightly (`length_scale` 1.15) for learners.
- `manifest.json` maps `speechKey(text)` to the clip file name (`sha1(key)[:10].mp3`).
- Regenerate after adding content: see the header of `scripts/generate-audio.py`.
