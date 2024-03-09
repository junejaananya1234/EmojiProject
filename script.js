let newData = document.getElementById("new_Data");
let input_box = document.getElementById("input_box");
let Search = document.getElementById("Search");
// console.log(newData);

// console.log(emojiList);


// emojiList.forEach(function(emoji) {
//     let newRow = document.createElement("tr");
//     let newCol = document.createElement("td");
//     let newCol2 = document.createElement("td");
//     let newCol3 = document.createElement("td");
//     newCol.innerHTML =emoji.emoji;
//     newCol2.innerHTML =emoji.aliases[0];
//     newCol3.innerHTML =emoji.description;
//     // console.log(newCol2)
//     newRow.appendChild(newCol);
//     newRow.appendChild(newCol2);
//     newRow.appendChild(newCol3);
//     newData.appendChild(newRow);    
// })


function repeat(ans){
    let filtered = emojiList.filter(function(emoji){
        return emoji.aliases.some(alias => alias.toLowerCase().includes(ans)) 
      });
      if (filtered.length > 0) {
          newData.innerHTML = "";
          filtered.forEach(function(emoji) {
              let newRow = document.createElement("tr");
              let newCol = document.createElement("td");
              let newCol2 = document.createElement("td");
              let newCol3 = document.createElement("td");
              newCol.innerHTML = emoji.emoji;
              newCol2.innerHTML = emoji.aliases[0];
              newCol3.innerHTML = emoji.description;
              newRow.appendChild(newCol);
              newRow.appendChild(newCol2);
              newRow.appendChild(newCol3);
              newData.appendChild(newRow);
          });
      }
}
input_box.addEventListener("input",function(e){
    let ans = e.target.value.toLowerCase();
    console.log(ans);
    repeat(ans);
    
})

window.addEventListener("load",function(){
    repeat('');
});