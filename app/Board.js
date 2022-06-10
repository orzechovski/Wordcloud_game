export class Board {
  categoryAndWord = [
    {
      category: "animals",
      allwords: ["hole", "sofa", "pear", "tiger", "oatmeal", "square", "nut", "cub", "shirt", "tub", "passenger", "cow"],
      goodWords: ["tiger", "cow"],
    },
    {
      category: "colors",
      allwords: ["jeans", "existence", "ink", "red", "blue", "yellow", "laugh", "behavior", "expansion", "white", "black", "cakes"],
      goodWords: ["red", "blue", "yellow", "white", "black"],
    },
    { category: "vehicels", allwords: ["belief", "wire", "car", "bus", "star", "river", "hat", "skirt", "train"], goodWords: ["car", "bus", "train"] },
  ];

  createTable() {
    let tableWords = [];
    const drawCategoryNumber = Math.floor(Math.random() * this.categoryAndWord.length);
    let category = this.categoryAndWord[drawCategoryNumber].category;
    this.categoryAndWord[drawCategoryNumber].allwords.forEach((word) => {
      const li = document.createElement("li");
      li.textContent = word;
      li.addEventListener("click", (e) => {
        e.target.classList.toggle("chosen");
      });
      tableWords.push(li);
    });
    return [tableWords, category, drawCategoryNumber];
  }
  randomizePosition(table) {
    table.forEach((li) => {
      let randomTop = Math.floor(Math.random() * 90);
      let randomLeft = Math.floor(Math.random() * 90);
      li.style.top = `${randomTop}%`;
      li.style.left = `${randomLeft}%`;
    });
    return table;
  }
}
