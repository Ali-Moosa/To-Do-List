const AddBtn = document.querySelector("#add");
let ule = document.querySelector("#task-ul");
const task = document.querySelector("#texxt");
let update = null;

AddBtn.addEventListener("click", () => {
  let saved = localStorage.getItem("key)
  if(saved){
    ule.innerHtml = saved
  }
  if (task.value.trim() === "") return;
  if (update) {
    update.textContent = task.value;
    update = null;
    AddBtn.textContent = "Add";
    task.value = "";
  } else {
    ule.innerHTML += `<div class="task-div">
    <div class="upper">
            <input class="cheek" type="checkbox" />
          <li class=>${task.value}</li>
          </div>
          <div class="btns">
            <button class="del">Delete</button>
            <button class="edit">Edit</button>
          </div>
        </div>`;
  }
  localStorage.setItem("key",ule.innerHTML)
  task.value = "";
});

ule.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.closest(".task-div").remove();
    localStorage.setItem("key", ule.innerHTML)
  }

  if (e.target.classList.contains("edit")) {
    const taskDiv = e.target.closest(".task-div");
    const lis = taskDiv.querySelector("li");
    task.value = lis.textContent;
    update = lis;
    AddBtn.textContent = "Update";
  }
  if (e.target.classList.contains("cheek")) {
    const taskDiv = e.target.closest(".task-div");
    const lis = taskDiv.querySelector("li");
    lis.classList.toggle("completed");
  }
});
