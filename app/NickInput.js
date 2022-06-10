export class NickInput {
  checkNick(nick) {
    const errors = [];

    //check if our input isnt empty
    if (nick === "" || nick === null) {
      errors.push("Your nick name is empty");
    } else {
      //check length of input
      if (nick.length < 3) {
        errors.push("Your nick must contain at least 3 characters");
      } else {
        for (const char of nick) {
          //check for spaces
          if (char === " ") {
            errors.push("You cant have spaces in your nick name");
            alert(errors);
            return false;
          } else {
            const letters = []; // here is an alphabet
            for (let i = 0; i < 26; i++) {
              letters.push((i + 10).toString(36));
            }
            //checks if in input are only letters
            if (!letters.includes(char)) {
              errors.push("Your nick can only contain letters");
              alert(errors);
              return false;
            }
          }
        }
      }
    }
    //if there is no errors in table named errorss table
    if (errors.length === 0) {
      return true;
    } else {
      alert(errors);
      return false;
    }
  }
}
