var data = {
    suggested: [
        {
            name: "Suggested Workout 1",
            exercises: ["ten pushups", "who is steve jobs?", "large hadron colldier"]
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
            flag: true,

            name: "Workout 1",
            exercises: ["Dark Souls 3 any%", "10 minute run", "TETRIS true killscreen"]
        },
        {
            flag: true,

            name: "Workout 2",
            exercises: ["beatmania IIDX 12 Hard Clear", "Wolfenstein II: The New Colossus Mein Leben clear", "50 sit-ups"]
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
    var but = document.getElementById('w-edit');
    but.onclick = () => {
        data.userworkouts.push( {
            flag: true,
            name: `Workout ${data.userworkouts.length+1}`,
            exercises: []
        })
        regenerate()
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
    data.userworkouts.push({name: name, exercises: exercises, flag:true});
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

function edit({name, exercises, flag}, button, parent, index) {


    if(flag){ // in editing
        button.textContent = "Save changes"

        let toRemove = parent.getElementsByTagName('label')

        for (var i = toRemove.length - 1; i >= 0; i--) {
            toRemove[i].textContent = ''
        }

        let inputs = parent.getElementsByTagName('input')
        //console.log(inputs)
        let ind = 0
        //console.log(exercises)
        for(x of inputs){
            let t = document.createElement('input')
            t.type = 'text'
            t.value = exercises[ind]
            t.style.width = '50%'
            t.id = 'input'+name+ind
            ind++
            parent.replaceChild(t, x)
        }


        let addex = document.createElement('button')
        addex.textContent = 'Create Exercise'
        addex.className = 'excreate'
        addex.onclick = () => {
            let ind = data.userworkouts.findIndex((v, i, a)=>{
                if(v.name == name){
                    return true
                }
            })
            let t = document.createElement('input')
            t.type = 'text'
            t.style.width = '50%'
            if(parent.getElementsByTagName('input')[data.userworkouts[ind].exercises.length-1])
                parent.getElementsByTagName('input')[data.userworkouts[ind].exercises.length-1]
                .after(t)
            else {
                let rm = document.getElementById(name+ind)
                rm.before(t)
            }

            t.after(document.createElement('br'))

        }
        parent.appendChild(addex)

        let notice = document.createElement('p')
        //console.log(inputs)
        notice.textContent = 'Leave an exercise field blank to delete!'
        parent.appendChild(notice)

        let wname = document.createElement('input')
        wname.type = 'input'
        wname.value = 'New workout name here!'
        wname.id = 'nw'+index
        wname.style.padding = '5px'
        wname.style.width = "35%"
        let treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT,
            {acceptNode: function(node) { 
                             return NodeFilter.FILTER_ACCEPT;
                         }
             }, 
             false );
        treeWalker.currentNode = parent
        treeWalker.previousNode().before(wname)


    } else { //when clicked again, return to normal
        let inputs = parent.getElementsByTagName('input')
        let ind = data.userworkouts.findIndex((v, i, a)=>{
            if(v.name == name){
                return true
            }
        })
        data.userworkouts[ind].exercises = []
        for(x of inputs){
            if(x.value.length > 0)
                data.userworkouts[ind].exercises.push(x.value)
        }
        
        let nn = document.getElementById('nw'+index)
        if(nn.value != 'New workout name here!'){
            name = nn.value
            data.userworkouts[ind].name = nn.value
        }
        

        regenerate()
        document.getElementById('coll'+name).click()
        


    }

    flag = !flag
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
        e.id = 'coll'+v.name

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
        rm.textContent = "Delete this workout"
        rm.id = v.name+i
        rm.onclick = () =>{
            removeFromWorkout(v)
        }

        let editWorkout = document.createElement("button")
        editWorkout.textContent = "Edit workout"
        editWorkout.className = 'workout-edit'
        editWorkout.onclick = () => {
            
            edit(v, editWorkout, d, i)
            v.flag = !v.flag
        }

        d.appendChild(rm)
        d.appendChild(editWorkout)

        main.appendChild(e)
        main.appendChild(d)
        console.log("appended "+d+"\n")
    })


    assignListeners()
}
window.onload = winonload;
