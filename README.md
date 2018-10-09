# atom-popup

This is a small skeleton to create distributable components based on [Atomico](https://github.com/uppercod/atomico).

The component is packaged thanks to `rollup.config.js`, you can execute the commands

```bash
# alias rollup -c -w
npm run watch
# alias rollup -c
npm run build
```

## package.json

The output files of the package are defined within `package.json`, this is thanks to [rollup-prepare](https://github.com/uppercod/rollup-prepare).

```json
 "name": "atom-popup",
 "main": "dist/atom-popup.js",
 "umd:main": "dist/atom-popup.umd.js",
 "iife": "dist/atom-popup.iife.js",
 "module": "dist/atom-popup.m.js",
 "source": "src/index.js",
```

| Property | Description |
|-----------|-------------|
| name | Necessary for the exit of the files type `umd:*`|
| main | Allows to generate a component in output format **CJS** |
| umd:main | Allows to generate a component in output format **UMD** |
| iife | Allows to generate a component in output format **IIFE** |
| module | Allows to generate a component in output format **ES** |
| source | component source file |

## Component installation

```html
<body>
    <atom-popup></atom-popup>
    <!-- polyfill --> 
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"></script>
    <!-- size 1.7kB -->
    <script src="https://unpkg.com/atomico@0.3.4/dist/atomico.umd.js"></script>
    <!-- size 1.4kB -->
    <script src="https://unpkg.com/atom-popup@0.0.0/dist/atom-popup.umd.js"></script>
</body>
```

> The scripts can also load from the `<head>`.