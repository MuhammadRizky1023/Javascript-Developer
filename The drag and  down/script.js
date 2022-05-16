const lists = document.querySelectorAll(".list");
const listItems = document.querySelectorAll(".list-item");

let dragedItems = null;

// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API


for (let i = 0; i < listItems.length; i++){
    const item = listItems[i];

    item.addEventListener("dragstart", function () {
        dragedItems = item
        setTimeout(() => {
            item.style.display = "none";
        }, 50);
    })

    item.addEventListener("dragend", function () {
        setTimeout(() => {
            item.style.display = "block";
            dragedItems = null;
        }, 50);
    });

    for (let i = 0; i < lists.length; i++){
        const list = lists[i];

        list.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        list.addEventListener("dragenter", function (e) {
            e.preventDefault();
            list.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        })
        list.addEventListener("dragleave", function () {
            list.style.backgroundColor = " rgba(88, 65, 83, 0.5)";
          });
      
          list.addEventListener("drop", function () {
            list.append(dragedItems);
            list.style.backgroundColor = "rgba(88, 65, 83, 0.5)";
          });
    }
}
