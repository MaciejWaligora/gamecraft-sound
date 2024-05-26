"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundManager = void 0;
const howler_1 = require("howler");
class SoundManager {
    constructor() {
        this._currentBackgroundSound = null;
        this._sfxtracks = {};
    }
    loadBackgroundSound(track) {
        const sound = new howler_1.Howl({
            src: [track],
            loop: true,
        });
        this._currentBackgroundSound = {
            isPlaying: true,
            sound: sound
        };
    }
    playBackGroundSound() {
        if (this._currentBackgroundSound) {
            this._currentBackgroundSound.isPlaying = true;
            this._currentBackgroundSound.sound.play();
        }
        else {
            console.log("No track loaded");
        }
    }
    stopBackgroundSound() {
        if (this._currentBackgroundSound) {
            this._currentBackgroundSound.isPlaying = false;
            this._currentBackgroundSound.sound.stop();
        }
        else {
            console.log("No track loaded");
        }
    }
    isBackgroundPlaying() {
        var _a;
        return (_a = this._currentBackgroundSound) === null || _a === void 0 ? void 0 : _a.isPlaying;
    }
    loadSfxTracks(playlist) {
        for (let entry of Object.entries(playlist)) {
            const sound = {
                sound: new howler_1.Howl({
                    src: [entry[1]],
                }),
                isPlaying: false
            };
            this._sfxtracks[entry[0]] = sound;
        }
    }
    playsfx(trackName) {
        this._sfxtracks[trackName].sound.play();
    }
}
exports.SoundManager = SoundManager;
