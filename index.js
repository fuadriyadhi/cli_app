import inquirer from "inquirer";
import register_view from "./views/register.js";
import login_view from "./views/login.js";

const play = () => {
  console.log(`
    =====================================
    S I M P L E - N O T E - A P P - C L I
    =====================================
        `);

  inquirer
    .prompt([
      {
        name: "menu",
        message: "Masukkan Pilihan: ",
        type: "list",
        choices: ["register", "login", "exit"],
      },
    ])
    .then((ans) => {
      switch (ans.menu) {
        case "register":
          register_view();
          break;

        case "login":
          login_view();
          break;

        default:
          console.log("terima kasih");
      }
    });
};

play();
