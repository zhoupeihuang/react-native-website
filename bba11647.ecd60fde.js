(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{326:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),i=(n(0),n(413)),c={id:"typescript",title:"\u4f7f\u7528 TypeScript"},o={unversionedId:"typescript",id:"typescript",isDocsHomePage:!1,title:"\u4f7f\u7528 TypeScript",description:"TypeScript is a language which extends JavaScript by adding type definitions, much like Flow. While React Native is built in Flow, it supports both TypeScript and Flow by default.",source:"@site/../cndocs/typescript.md",slug:"/typescript",permalink:"/docs/next/typescript",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/typescript.md",version:"current",lastUpdatedAt:1608733604,sidebar:"docs",previous:{title:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",permalink:"/docs/next/libraries"},next:{title:"\u66f4\u65b0",permalink:"/docs/next/upgrading"}},p=[{value:"Getting Started with TypeScript",id:"getting-started-with-typescript",children:[]},{value:"Adding TypeScript to an Existing Project",id:"adding-typescript-to-an-existing-project",children:[]},{value:"How TypeScript and React Native works",id:"how-typescript-and-react-native-works",children:[]},{value:"What does React Native + TypeScript look like",id:"what-does-react-native--typescript-look-like",children:[]},{value:"Where to Find Useful Advice",id:"where-to-find-useful-advice",children:[]},{value:"Using Custom Path Aliases with TypeScript",id:"using-custom-path-aliases-with-typescript",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is a language which extends JavaScript by adding type definitions, much like ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://flow.org"}),"Flow"),". While React Native is built in Flow, it supports both TypeScript ",Object(i.b)("em",{parentName:"p"},"and")," Flow by default."),Object(i.b)("h2",{id:"getting-started-with-typescript"},"Getting Started with TypeScript"),Object(i.b)("p",null,"\u5982\u679c\u60a8\u8981\u5f00\u59cb\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5219\u6709\u51e0\u79cd\u4e0d\u540c\u7684\u4e0a\u624b\u65b9\u6cd5\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-template-typescript"}),"TypeScript \u6a21\u677f"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx react-native init MyApp --template react-native-template-typescript\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note")," \u5982\u679c\u4ee5\u4e0a\u547d\u4ee4\u5931\u8d25\uff0c\u5219\u53ef\u80fd\u662f\u60a8\u7684 PC \u4e0a\u5168\u5c40\u5b89\u88c5\u4e86\u65e7\u7248\u672c\u7684",Object(i.b)("inlineCode",{parentName:"p"},"react-native"),"\u6216",Object(i.b)("inlineCode",{parentName:"p"},"react-native-cli"),"\u3002 \u5c1d\u8bd5\u5378\u8f7d cli \u5e76\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"npx"),"\u8fd0\u884c cli.")),Object(i.b)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5177\u6709\u4e24\u4e2a TypeScript \u6a21\u677f\u7684",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://expo.io"}),"Expo"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g expo-cli\nexpo init MyTSProject\n")),Object(i.b)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://infinite.red/ignite"}),"Ignite"),"\uff0c\u5b83\u4e5f\u5177\u6709 TypeScript \u6a21\u677f:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g ignite-cli\nignite new MyTSProject\n")),Object(i.b)("h2",{id:"adding-typescript-to-an-existing-project"},"Adding TypeScript to an Existing Project"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u5c06 TypeScript \u4ee5\u53ca React Native \u548c Jest \u7684\u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\u4e2d\u3002")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n# or for npm\nnpm install --save-dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n")),Object(i.b)("p",null,"\u6dfb\u52a0\u4e00\u4e2a TypeScript \u914d\u7f6e\u6587\u4ef6\u3002 \u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "allowJs": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "isolatedModules": true,\n    "jsx": "react",\n    "lib": ["es6"],\n    "moduleResolution": "node",\n    "noEmit": true,\n    "strict": true,\n    "target": "esnext"\n  },\n  "exclude": [\n    "node_modules",\n    "babel.config.js",\n    "metro.config.js",\n    "jest.config.js"\n  ]\n}\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"jest.config.js"),"\u6587\u4ef6\u6765\u914d\u7f6e Jest \u4ee5\u4f7f\u7528 TypeScript:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  preset: 'react-native',\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']\n};\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"\u5c06 JavaScript \u6587\u4ef6\u91cd\u547d\u540d\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"* .tsx"),":")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u8bf7\u4fdd\u7559",Object(i.b)("inlineCode",{parentName:"p"},"./index.js"),"\u5165\u53e3\u6587\u4ef6\uff0c\u5426\u5219\u5c06\u5728\u6253\u5305\u751f\u4ea7\u7248\u672c\u65f6\u9047\u5230\u95ee\u9898\u3002")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"yarn tsc")," to type-check your new TypeScript files.")),Object(i.b)("h2",{id:"how-typescript-and-react-native-works"},"How TypeScript and React Native works"),Object(i.b)("p",null,"Out of the box, transforming your files to JavaScript works via the same ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"javascript-environment#javascript-syntax-transformers"}),"Babel infrastructure")," as a non-TypeScript React Native project. We recommend that you use the TypeScript compiler only for type checking. If you have existing TypeScript code being ported to React Native, there are ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/next/babel-plugin-transform-typescript"}),"one or two caveats")," to using Babel instead of TypeScript."),Object(i.b)("h2",{id:"what-does-react-native--typescript-look-like"},"What does React Native + TypeScript look like"),Object(i.b)("p",null,"You can provide an interface for a React Component's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"props"}),"Props")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"state"}),"State")," via ",Object(i.b)("inlineCode",{parentName:"p"},"React.Component<Props, State>")," which will provide type-checking and editor auto-completing when working with that component in JSX."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// components/Hello.tsx\nimport React from 'react';\nimport { Button, StyleSheet, Text, View } from 'react-native';\n\nexport interface Props {\n  name: string;\n  enthusiasmLevel?: number;\n}\n\nconst Hello: React.FC<Props> = (props) => {\n  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(\n    props.enthusiasmLevel\n  );\n\n  const onIncrement = () =>\n    setEnthusiasmLevel((enthusiasmLevel || 0) + 1);\n  const onDecrement = () =>\n    setEnthusiasmLevel((enthusiasmLevel || 0) - 1);\n\n  const getExclamationMarks = (numChars: number) =>\n    Array(numChars + 1).join('!');\n  return (\n    <View style={styles.root}>\n      <Text style={styles.greeting}>\n        Hello{' '}\n        {props.name + getExclamationMarks(enthusiasmLevel || 0)}\n      </Text>\n\n      <View style={styles.buttons}>\n        <View style={styles.button}>\n          <Button\n            title=\"-\"\n            onPress={onDecrement}\n            accessibilityLabel=\"decrement\"\n            color=\"red\"\n          />\n        </View>\n\n        <View style={styles.button}>\n          <Button\n            title=\"+\"\n            onPress={onIncrement}\n            accessibilityLabel=\"increment\"\n            color=\"blue\"\n          />\n        </View>\n      </View>\n    </View>\n  );\n};\n\n// styles\nconst styles = StyleSheet.create({\n  root: {\n    alignItems: 'center',\n    alignSelf: 'center'\n  },\n  buttons: {\n    flexDirection: 'row',\n    minHeight: 70,\n    alignItems: 'stretch',\n    alignSelf: 'center',\n    borderWidth: 5\n  },\n  button: {\n    flex: 1,\n    paddingVertical: 0\n  },\n  greeting: {\n    color: '#999',\n    fontWeight: 'bold'\n  }\n});\n\nexport default Hello;\n")),Object(i.b)("p",null,"You can explore the syntax more in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/play/?strictNullChecks=false&esModuleInterop=true&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteMA4wkUTOiRwACjjABnBio4YLhTECQALjg-GCgnAHMKShC4JGcxZj9gFD8QABkkKyEAfiiOZhAAI1ckzVtKNE4YuAAJJCEhCCjkQwA6ADEAYQAeHwh-AD44AF44AAowXz8AShmp+iCQxo5mgG00mAysnPzC9p4-KQBRdMzs3IKigF0ZxGIYXszRGDMkBaXegcjvdTkVlklNsFts1OABJDhoIjhZyvOaraZTS4wG6HO4nR7tOZzIF4h5nIRwAA+lLgAAZVgBqOAARnBkLg0PgnAAIkhEUhkfBZmi1tFrrdjmSikSSZLQe0qTT6XAjCy2ZR2Zy4PFrvI0EIUCAzMBOABZFBQADWAWF5RAgzEFr8ZQq1Sg6KmAEEoFAUAI5naHU64EzWb0AFYQJxzfAAQnw6pSRBgzCgHHm7JSw1UGmighE03oMWESD8vRwEBgmgmmZCwzkijzJcLxZEZfiRCkCWrtZSwTaHQg9HwBDqyT7E-oi3GZbCniZOuxeoNRvMZot1uJEpBBIp1LpyzHE+CwwA9A2YDWNeOJ9m1OomwWi-nS71Kqx2Dsezfjyecw-WyQFsXzLd82E4b9fyzFhwI4XsoPMGACwAIiMZD4N-TgfFLPxCx5PkkQOI8oIndA0Bw4BKmAIRgEEPIUGqIRpmQgATAiBQOdCfxIqEIE6KBmKIFiuJ4uBTyvUSz3-K8MLrf9HyA58S1Aj8IIknjhhgz9ZInRCUIZETRJCLCiD8XD6DhBFCOcYijLgMiKKomi6IY9pmKcflBUMuzGn45jKiEZgkG8qDxJ0uApPvdTb1PaT4MijRorgRMQjHMcqFPU8FL8KgtUAm0+BfcRJA+flfjmDYfwrGAokq38UBo+IOFhFwQGdAhyOcVx8C4eCGuAJreHaTAonwTqXCgHr2U0XqfzAz92rqidMBEeRuWAIgMBNDhRpwdQpu4kIQCcNoBrEGq4AAdlpWb6sa5rWva-AYmTNAxAOu6Bo4IahBGjqDm627j0qaA2KgAB1YAWMOKIAFYgeCGb2XmzhavglaFCiZkEb7MAUBYliEmUVxzDQBqohu6acY7EqEjRw7eP40aAGIAE52Y+49ME4GBwaQM6LvwEGhBYznEdmzRwSAA"}),"TypeScript playground"),"."),Object(i.b)("h2",{id:"where-to-find-useful-advice"},"Where to Find Useful Advice"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.typescriptlang.org/docs/home.html"}),"TypeScript Handbook")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://zh-hans.reactjs.org/docs/static-type-checking.html#typescript"}),"React's documentation on TypeScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"}),"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),Object(i.b)("h2",{id:"using-custom-path-aliases-with-typescript"},"Using Custom Path Aliases with TypeScript"),Object(i.b)("p",null,"To use custom path aliases with TypeScript, you need to set the path aliases to work from both Babel and TypeScript. Here's how:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Edit your ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json")," to have your ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"}),"custom path mappings"),". Set anything in the root of ",Object(i.b)("inlineCode",{parentName:"li"},"src")," to be available with no preceding path reference, and allow any test file to be accessed by using ",Object(i.b)("inlineCode",{parentName:"li"},"test/File.tsx"),":")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),'    "target": "esnext",\n+     "baseUrl": ".",\n+     "paths": {\n+       "*": ["src/*"],\n+       "tests": ["tests/*"],\n+       "@components/*": ["src/components/*"],\n+     },\n    }\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Configure the Babel side done by adding a new dependency, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/tleunen/babel-plugin-module-resolver"}),Object(i.b)("inlineCode",{parentName:"a"},"babel-plugin-module-resolver")),":")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev babel-plugin-module-resolver\n# or\nnpm install --save-dev babel-plugin-module-resolver\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Finally, configure your ",Object(i.b)("inlineCode",{parentName:"li"},"babel.config.js")," (note that the syntax for your ",Object(i.b)("inlineCode",{parentName:"li"},"babel.config.js")," is different from your ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json"),"):")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"{\n  plugins: [\n+    [\n+       'module-resolver',\n+       {\n+         root: ['./src'],\n+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],\n+         alias: {\n+           \"tests\": [\"./tests/\"],\n+           \"@components\": \"./src/components\",\n+         }\n+       }\n+     ]\n  ]\n}\n")))}l.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);