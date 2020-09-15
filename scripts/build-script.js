const buildScript = (scope) =>
  `lerna exec ${
    scope ? `--scope @henriquec/${scope}` : ""
  } -- babel index.js --out-dir dist --config-file ../../babel.config.json`;

module.exports = buildScript;
