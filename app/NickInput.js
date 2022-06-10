export class NickInput {
  checkNick(nick) {
    const erros = [];
    if (nick === "" || nick === null) {
      erros.push("Your nick name is empty");
    } else {
      if (nick.length < 3) {
        erros.push("Your nick must contain at least 3 characters");
      } else {
        for (const char of nick) {
          if (char === " ") {
            erros.push("You cant have spaces in your nick name");
            alert(erros);
            return false;
          } else {
            const letters = [];
            for (let i = 0; i < 26; i++) {
              letters.push((i + 10).toString(36));
            }
            if (!letters.includes(char)) {
              erros.push("Your nick can only contain letters");
              alert(erros);
              return false;
            }
          }
        }
      }
    }
    if (erros.length === 0) {
      return true;
    } else {
      alert(erros);
      return false;
    }
  }
}
