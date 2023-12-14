
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";
inquirer
  .prompt([
    /* First we need to pass a message to the user */
    {"message": "Type in your url: ","name":"URL"}
  ])
  .then((answers) => {
    //Now we need to write our code based upon the user input.
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
