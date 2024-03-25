const s="eh-antdesign-ui",e="0.1.36",i="module",t=["dist","package.json","README.md"],n="./dist/eh-antdesign-ui.umd.cjs",o="./dist/eh-antdesign-ui.js",u="./dist/eh-antdesign-ui.js",r="dist/eh-antdesign-ui.iife.js",c={"./dist/style.css":"./dist/style.css","./css":"./dist/style.css",".":{import:"./dist/eh-antdesign-ui.js",require:"./dist/eh-antdesign-ui.umd.cjs"}},d={dev:"vite","docs:dev":"vitepress dev docs --port 8000 --open","docs:build":"vitepress build docs","docs:deploy":"sh scripts/deploy.sh",build:"run-s clean build:lib",clean:"rimraf ./dist","build:lib":"run-p type-check build:es build:browser","type-check":"vue-tsc --noEmit","build:es":"vite build","build:browser":"vite -f iife build",pub:"sh scripts/publish.sh",push:"sh scripts/push.sh",preview:"vite preview",lint:"eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"},p={"@vuepic/vue-datepicker":"7.4.1","@vueuse/core":"^10.8.0","@vueuse/integrations":"^10.8.0","ant-design-vue":"^4.1.2","core-js":"^3.36.0","date-fns":"^3.3.1","naive-ui":"^2.38.0",qrcode:"^1.5.3",swiper:"^11.0.6",vue:"^3.4.19","vue-router":"^4.3.0"},l={"@rollup/plugin-terser":"^0.4.4","@rushstack/eslint-patch":"^1.7.2","@types/node":"^20.11.20","@vitejs/plugin-vue":"^5.0.4","@vue/eslint-config-typescript":"^13.0.0","@vue/tsconfig":"^0.5.1",eslint:"^8.56.0","eslint-plugin-vue":"^9.22.0",less:"^4.2.0",minimist:"^1.2.8","npm-run-all":"^4.1.5",prettier:"^3.2.5",rimraf:"^5.0.5","rollup-plugin-visualizer":"^5.12.0",typescript:"^5.3.3","unplugin-vue-components":"^0.26.0",vite:"^5.1.4",vitepress:"^1.0.1","vue-tsc":"^2.0.6"},a="An Amazing Vue3 UI Components Library.",h={type:"git",url:"git+https://github.com/zhaoyifan-admin/eh-antdesign-ui.git"},g=["Vue3","TS","Vite","Less","Amazing","UI","Components","Tools"],v="theMuseCatcher",m="MIT",b={url:"https://github.com/zhaoyifan-admin/eh-antdesign-ui/issues"},y="https://zhaoyifan-admin.github.io/eh-antdesign-ui/",f=["> 1%","last 2 versions","not dead"],j={name:s,version:e,private:!1,type:i,files:t,main:n,module:o,browser:u,unpkg:r,exports:c,scripts:d,dependencies:p,devDependencies:l,description:a,repository:h,keywords:g,author:v,license:m,bugs:b,homepage:y,browserslist:f};export{j as p};
