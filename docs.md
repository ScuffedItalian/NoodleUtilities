
# Tracks
## Chains track
note chains track creation:
```powershell
chainsTrack(0, 69, "chainsTrack")
```
* the first number is the number that the track will start in beats, the second is the number in beats the track will end, the string is the track name, it can be any!

## Arcs track
note arc track creation:
```powershell
arcsTrack(0, 69, "ArcsTrack")
```
* assigns the tracks between beat 0 and 69 to the track named "ArcsTrack" 

## Bombs track
Bomb track creation:
```powershell
bombTrack(0, 69, "BombsTrack")
```
* assigns all bombs between beat 0 and 69 to the track "BombsTrack"

## Walls track
Wall track creation:
```powershell
wallTrack(0, 69, "TrackWithWall")
```
* assigns all walls between beat 0 and 69 to the track "TrackWithWall"

## Note track
Note track creation:
```powershell
noteTrack(0, 96, "TrackWillNotesYEE")
```
* assigns all notes between beat 0 and 96 to the track "TrackWillNotesYEE"

# Requirments / Suggestions

## Require Noodle
```powershell
reqNoodle() //This makes noodle extensions a map requirment!
```

## Require Chroma
```powershell
reqChroma() //Makes Chroma a requirment
```

## Suggest Chroma
```powershell
suggestChroma() //This makes chroma a suggestion
```

## Set Warnings
```powershell
setWarning("This map has lots of flashing lights!") //Custom warnings! 
```



