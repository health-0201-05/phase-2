var data = {
    suggested: [
        {
            name: "Suggested Workout 1",
            exercises: ["ten pushups", "get beaten up by mike tyson", "large hadron colldier"]
        },
        {
            name: "Suggested Workout 2",
            exercises: ["crip walk", "fly with united airlines", "beatmania IIDX 31: EPOLIS"]
        },
        {
            name: "Suggested Workout 3",
            exercises: ["3y3s", "CVSHealth Premium Care Probiotic", "5 minute twerk"]
        },
        {
            name: "Suggested Workout 4",
            exercises: ["smashing wedge", "CR2032 Coin Battery", "i am green"]
        }
    ],
    userworkouts: [
        {
            name: "Workout 1",
            exercises: ["Dark Souls 3 any%", "CoD Black Ops II Nuke", "GTA V campaign no deaths"]
        },
        {
            name: "Workout 2",
            exercises: ["\"THE PEERLESS UNDER HEAVEN\" SPA EX-Hard Clear AAA", "Wolfenstein II: The New Colossus Mein Leben clear", "GITADORA Stargazer MAS-G SS FC"]
        }

    ],
    steps: {
        curr: 860,
        goal: 1200,
    }
}


function assignListeners(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                this.style["border-bottom-left-radius"] = "15px";
                this.style["border-bottom-right-radius"] = "15px";

            } else {
                content.style.display = "block";
                this.style["border-bottom-left-radius"] = "0px";
                this.style["border-bottom-right-radius"] = "0px";
            }
        });
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("modalcreate");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

function addSuggToWorkout({name, exercises}){

    let i = data.suggested.find((v) => {
        v.name === name;
    })
    data.suggested.splice(i, 1)

    console.log(data.suggested)
    data.userworkouts.push({name: name, exercises: exercises});
    regenerate()

}

function removeFromWorkout({name, exercises}){
    let i = data.userworkouts.find((v) => {
        return v.name === name;
    })
    data.userworkouts.splice(i, 1);

    regenerate()


}   

function regenerate(){
    let modal = document.getElementsByClassName("modalcontain")[0]
    let main = document.getElementById("exercises-container");
    main.replaceChildren()
    modal.replaceChildren()
    winonload()


}
function winonload(){
    let modal = document.getElementsByClassName("modalcontain")[0];
    let main = document.getElementById("exercises-container");
    
    let prog = document.getElementById("progbar");
    
    prog.style.width = `${Math.floor((data.steps.curr/data.steps.goal)*100)}%`
    prog.children.item(0).textContent = `${data.steps.curr}/${data.steps.goal} Steps`

    data.suggested.forEach((v, i, arr)=> {
        let e = document.createElement("button");
        e.type = "button"
        e.className = "collapsible"
        e.textContent = v.name

        let d = document.createElement("div");
        d.className = "collapsible-content"

        v.exercises.forEach((val, index, array)=>{
            let input = document.createElement("li")
            input.type = "checkbox"
            input.id = "e2"+index
            input.name = "e"+index
            input.value = "e"+index


            let label = document.createElement("label");
            label.textContent = val
            
            input.appendChild(label)

            d.appendChild(input);
            d.appendChild(document.createElement("br"))
        
        })

        let addToWorkout = document.createElement("button");
        addToWorkout.className = "workoutadd"
        addToWorkout.textContent = "Add to workout"
        addToWorkout.onclick = () =>{
            addSuggToWorkout(v)
        }
        d.appendChild(addToWorkout)

        modal.appendChild(e)
        modal.appendChild(d)
        //console.log("appended "+d+"\n")
    })

    data.userworkouts.forEach((v, i, arr)=> {
        let e = document.createElement("button");
        e.type = "button"
        e.className = "collapsible"
        e.textContent = v.name

        let d = document.createElement("div");
        d.className = "collapsible-content"

        v.exercises.forEach((val, index, array)=>{
            let input = document.createElement("input")
            input.type = "checkbox"
            input.id = "e"+index
            input.name = "e"+index
            input.value = "e"+index

            d.appendChild(input);

            let label = document.createElement("label");
            label.textContent = val

            d.appendChild(label)

            d.appendChild(document.createElement("br"))
        
        })

        let rm = document.createElement("button");
        rm.className = "workoutrm"
        rm.textContent = "Remove from workout"
        rm.onclick = () =>{
            removeFromWorkout(v)
        }
        d.appendChild(rm)


        main.appendChild(e)
        main.appendChild(d)
        console.log("appended "+d+"\n")
    })


    assignListeners()
}
window.onload = winonload;
