import { useState } from "react";
import "./App.css";
export default function App() {
    const [picUrl, selectPic] = useState(
        "https://dog.ceo/api/breed/affenpinscher/images/random"
    );
    const [Type, selectType] = useState("african");
    const states = {
        message: {
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: [],
            australian: ["shepherd"],
            basenji: [],
            beagle: [],
            bluetick: [],
            borzoi: [],
            bouvier: [],
            boxer: [],
            brabancon: [],
            briard: [],
            buhund: ["norwegian"],
            bulldog: ["boston", "english", "french"],
            bullterrier: ["staffordshire"],
            cairn: [],
            cattledog: ["australian"],
            chihuahua: [],
            chow: [],
            clumber: [],
            cockapoo: [],
            collie: ["border"],
            coonhound: [],
            corgi: ["cardigan"],
            cotondetulear: [],
            dachshund: [],
            dalmatian: [],
            dane: ["great"],
            deerhound: ["scottish"],
            dhole: [],
            dingo: [],
            doberman: [],
            elkhound: ["norwegian"],
            entlebucher: [],
            eskimo: [],
            finnish: ["lapphund"],
            frise: ["bichon"],
            germanshepherd: [],
            greyhound: ["italian"],
            groenendael: [],
            havanese: [],
            hound: [
                "afghan",
                "basset",
                "blood",
                "english",
                "ibizan",
                "plott",
                "walker"
            ],
            husky: [],
            keeshond: [],
            kelpie: [],
            komondor: [],
            kuvasz: [],
            labradoodle: [],
            labrador: [],
            leonberg: [],
            lhasa: [],
            malamute: [],
            malinois: [],
            maltese: [],
            mastiff: ["bull", "english", "tibetan"],
            mexicanhairless: [],
            mix: [],
            mountain: ["bernese", "swiss"],
            newfoundland: [],
            otterhound: [],
            ovcharka: ["caucasian"],
            papillon: [],
            pekinese: [],
            pembroke: [],
            pinscher: ["miniature"],
            pitbull: [],
            pointer: ["german", "germanlonghair"],
            pomeranian: [],
            poodle: ["miniature", "standard", "toy"],
            pug: [],
            puggle: [],
            pyrenees: [],
            redbone: [],
            retriever: ["chesapeake", "curly", "flatcoated", "golden"],
            ridgeback: ["rhodesian"],
            rottweiler: [],
            saluki: [],
            samoyed: [],
            schipperke: [],
            schnauzer: ["giant", "miniature"],
            setter: ["english", "gordon", "irish"],
            sheepdog: ["english", "shetland"],
            shiba: [],
            shihtzu: [],
            spaniel: [
                "blenheim",
                "brittany",
                "cocker",
                "irish",
                "japanese",
                "sussex",
                "welsh"
            ],
            springer: ["english"],
            stbernard: [],
            terrier: [
                "american",
                "australian",
                "bedlington",
                "border",
                "dandie",
                "fox",
                "irish",
                "kerryblue",
                "lakeland",
                "norfolk",
                "norwich",
                "patterdale",
                "russell",
                "scottish",
                "sealyham",
                "silky",
                "tibetan",
                "toy",
                "westhighland",
                "wheaten",
                "yorkshire"
            ],
            vizsla: [],
            waterdog: ["spanish"],
            weimaraner: [],
            whippet: [],
            wolfhound: ["irish"]
        },
        status: "success"
    };

   
    
    function handle(e) {
        
        selectType(e.target.value);
        selectPic(`https://dog.ceo/api/breed/${e.target.value}/images/random`);
    }
    return (
        <div className="App">
            <h1>Paw Select</h1>
            <div className="dropDown_menu">
                <select onChange={handle}>
                    <option hidden disabled selected>
                        Select your breed
                    </option>
                    {Object.keys(states.message).map((item, itemIndex) => {
                        if (states.message[item].length === 0)
                            return (
                                <option key={itemIndex} value={item}>
                                    {item}
                                </option>
                            );
                        else {
                            
                            return (
                                <optgroup label={item}>
                                    {states.message[item].map((item1, index) => {
                                        return (
                                            <option value={item + "/" + item1}>
                                                {item1}
                                            </option>
                                        );
                                    })}
                                </optgroup>
                            );
                        }
                    })}
                </select>
            </div>
            <div className="imageclass">
                <img src={picUrl} alt={Type}></img>
            </div>
        </div>
    );
}
