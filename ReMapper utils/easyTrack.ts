import { arcsBetween, chainsBetween, Difficulty } from "https://deno.land/x/remapper@3.0.0/src/mod.ts" // MAKE SURE THIS IS ON THE LATEST REMAPPER VERSION!!!!!!!!!

const map = new Difficulty("ExpertPlusLawless", "ExpertPlusStandard");

// SCRIPT
console.log("e")
//Logs the maps stats :]

function chainsTrack( startC: number, endC: number, trackCName: string){
    chainsBetween(startC, endC, (c) => {
        c.customData.track = trackCName
    })
}

function arcsTrack(startA: number, endA: number, trackAName: string){
    arcsBetween(startA, endA, (a) => {
        a.customData.track = trackAName
    })
}

function bombTrack(startB: number, endB: number, trackBName: string){
    arcsBetween(startB, endB, (b) => {
        b.customData.track = trackBName
    })
}

function wallTrack(startW: number, endW: number, trackWName: string){
    arcsBetween(startW, endW, (w) => {
        w.customData.track = trackWName
    })
}

function noteTrack(startN: number, endN: number, trackNName: string){
    arcsBetween(startN, endN, (n) => {
        n.customData.track = trackNName
    })
}





map.save();