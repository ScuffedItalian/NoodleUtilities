import { CullFaceBack } from "https://cdn.skypack.dev/-/three@v0.146.0-32KZuHtb79LAER0munou/dist=es2019,mode=types/index.d.ts";
import { Difficulty } from "https://deno.land/x/remapper@3.0.0/src/mod.ts" // MAKE SURE THIS IS ON THE LATEST REMAPPER VERSION!!!!!!!!!

const map = new Difficulty("ExpertPlusLawless", "ExpertPlusStandard");

// SCRIPT

//Logs the maps stats :]


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

//FORGET ABOUT THIS!!!!
// function reqNoodle(reqN = false){
//     if(reqN === true){
//         map.require("Noodle Extensions", true)
//     }
//     if(reqN === false){
//         map.require("Noodle Extensions", false)
//     }
// }

// function reqChroma(reqC: boolean){
//     if(reqC === true){
//         map.require("Chroma", true)
//     }
//     if(reqC === false){
//         map.require("Chroma", false)
//     }
// }

// function sugChroma(sugC: boolean){
//     if(sugC === true){
//         map.suggest("Chroma", true)
//     }
//     if(sugC === false){
//         map.suggest("Chroma", false)
//     }
// }


map.save();