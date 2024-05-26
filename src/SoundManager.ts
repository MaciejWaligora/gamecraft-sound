import {Howler, Howl} from "howler";

export interface Sound{
    isPlaying: boolean;
    sound: Howl;
}

export class SoundManager{

    private _currentBackgroundSound: Sound|null = null;
    private _sfxtracks: Record<string, Sound> = {};

    public loadBackgroundSound(track: string){
        const sound = new Howl({
            src:[track],
            loop: true,
        });

        this._currentBackgroundSound = {
            isPlaying: true,
            sound: sound
        }
    }

    public playBackGroundSound(){
        if(this._currentBackgroundSound){
            this._currentBackgroundSound.isPlaying = true;
            this._currentBackgroundSound.sound.play();
        }else{
            console.log("No track loaded")
        }
    }

    public stopBackgroundSound(){
        if(this._currentBackgroundSound){
            this._currentBackgroundSound.isPlaying = false
            this._currentBackgroundSound.sound.stop();
        }else{
            console.log("No track loaded")
        }
    }

    public  isBackgroundPlaying(){
        return this._currentBackgroundSound?.isPlaying;
    }

    public loadSfxTracks(playlist: Record<string, string>){
        for(let entry of Object.entries(playlist)){
            const sound = {
                sound: new Howl({
                    src:[entry[1]],
                }),
                isPlaying: false
            }
            
            this._sfxtracks[entry[0]] = sound;
        }
    }

    public playsfx(trackName: string){
        this._sfxtracks[trackName].sound.play();
    }


}