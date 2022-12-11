//1 = 255
//0 = 0

const ver = 1.0;
const dev = "ScuffedItalian";
const lang = "JavaScript"
class clr {
    constructor() {

    }
    

    red() {
        return [1,0,0]
    }

    blue() {
        return [0,0,1]
    }

    green() {
        return [0,1,0]
    }

    scriptInf() {
        console.log("Version: " + ver, "\nDeveloper: " + dev, "\nLanguage: " + lang);
    }

    aqua() {
        return [0,1,1]
    }

    yellow(){
        return [1,1,0]
    }

    pink(){
        return [1,0,1]
    }
}
