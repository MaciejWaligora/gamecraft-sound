import { Howl } from "howler";
export interface Sound {
    isPlaying: boolean;
    sound: Howl;
}
export declare class SoundManager {
    private _currentBackgroundSound;
    private _sfxtracks;
    loadBackgroundSound(track: string): void;
    playBackGroundSound(): void;
    stopBackgroundSound(): void;
    isBackgroundPlaying(): boolean | undefined;
    loadSfxTracks(playlist: Record<string, string>): void;
    playsfx(trackName: string): void;
}
