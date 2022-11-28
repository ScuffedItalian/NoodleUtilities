import { Difficulty, arcsBetween, bombsBetween, chainsBetween, wallsBetween, notesBetween } from "https://deno.land/x/remapper@3.0.0/src/mod.ts" // MAKE SURE THIS IS ON THE LATEST REMAPPER VERSION!!!!!!!!!

const map = new Difficulty("ExpertPlusLawless", "ExpertPlusStandard");  // Put your input and output here

// SCRIPT START




//SCRIPT END




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

let requireNoodle: any = map.require("Noodle Extensions", true)
let requireChroma: any = map.require("Chroma", true)
let suggestionChroma: any = map.suggest("Chroma", true)

function reqNoodle(){
    requireNoodle
}

function reqChroma(){
    requireChroma
}

function suggestChroma(){
    suggestionChroma
}

function setWarning(warningString: string){
    map.warnings = [warningString]
}




console.log("\n\n <Log Stats V1> \n\n")
console.log("\n\n ----------<Map Statistics>---------- \n\n",  map.notes.length, "Notes\n", map.bombs.length, "Bombs\n", map.walls.length, "Walls\n", map.arcs.length, "Arcs\n", map.chains.length, "Chains\n")
console.log("\n\n ----------<Fake Array Statistics>---------- \n\n", map.fakeNotes.length, "Fake Notes\n", map.fakeWalls.length, "Fake Walls\n", map.fakeBombs.length, "Fake Bombs\n", map.fakeChains.length, "Fake Chains\n")
console.log("\n\n ----------<Environment Statistics>---------- \n\n", map.customData.environment.length, "Environment pieces\n", map.rawEnvironment.length, "Raw Environment\n")


map.save();