const btn = document.querySelector("#addbtn");
const box = document.querySelector(".noteCont");
let count = 0;
const save = document.querySelector(".save");
const addNotes = () => {
    count++;
    const note = document.createElement('div');
    note.classList.add('note');
    box.appendChild(note);
    note.innerHTML = `
    <h1>Task ${count}</h1>
                    <textarea name="task" id="task" cols="30" rows="10" placeholder="Add Your Note"></textarea>
                <button class="save" type="submit">Save</button>

    `;
}

btn.addEventListener('click', addNotes);
