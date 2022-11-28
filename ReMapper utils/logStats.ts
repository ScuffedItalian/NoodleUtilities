import { Difficulty } from "https://deno.land/x/remapper@3.0.0/src/mod.ts" // MAKE SURE THIS IS ON THE LATEST REMAPPER VERSION!!!!!!!!!

const map = new Difficulty("ExpertPlusLawless", "ExpertPlusStandard");

// SCRIPT

//Logs the maps stats :]

console.log("\n\n <Log Stats V1> \n\n")
console.log("\n\n ----------<Map Statistics>---------- \n\n",  map.notes.length, "Notes\n", map.bombs.length, "Bombs\n", map.walls.length, "Walls\n", map.arcs.length, "Arcs\n", map.chains.length, "Chains\n")
console.log("\n\n ----------<Fake Array Statistics>---------- \n\n", map.fakeNotes.length, "Fake Notes\n", map.fakeWalls.length, "Fake Walls\n", map.fakeBombs.length, "Fake Bombs\n", map.fakeChains.length, "Fake Chains\n")
console.log("\n\n ----------<Environment Statistics>---------- \n\n", map.customData.environment.length, "Environment pieces\n", map.rawEnvironment.length, "Raw Environment\n")


map.save();