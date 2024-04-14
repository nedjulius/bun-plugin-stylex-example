import path from "node:path";
import createStylexPlugin from "bun-plugin-stylex";

const [stylexPlugin, generateCSS] = createStylexPlugin({
  dev: false,
  useCSSLayers: true,
});

await Bun.build({
  entrypoints: ["./src/index.tsx"],
  outdir: "./dist",
  minify: false,
  plugins: [stylexPlugin],
  // external: ["@stylexjs/stylex", "react"],
});

const generatedCSS = await generateCSS();

if (generatedCSS) {
  await Bun.write(path.resolve(__dirname, "dist/styles.css"), generatedCSS);
}

await Bun.write(
  path.resolve(__dirname, "dist/index.html"),
  `<!DOCTYPE html>
  <head>
    <meta charset="utf-8" />
    <title>Bun example app</title>
    <style>
      * { box-sizing: border-box; }
      body { padding: 0; margin: 0; }
    </style>
    <link rel="stylesheet" type="text/css" href="./styles.css">
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
`
);
