const chokidar = require("chokidar");
const exec = require("child_process").exec;
const buildScript = require("./build-script");

chokidar.watch("./packages/*/*.js").on("change", (event, path) => {
  const scope = event.split("/")[1];

  exec(buildScript(scope), function (err, stdout, stderr) {
    if (err) {
      console.log(`\n${err}`);
    } else {
      console.log(`\n${scope} compiled succesfully!`);
    }
  });
});
