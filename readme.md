# X-Node Web Starter Kit

Is a boilerplate to quickly start developing an responsive, mobile-first websites. Built on the Nunjucks and Sass preprocessor with SCSS syntax, using a fully modular structure with BEM-style naming.

## #1. Installing

Step 1. Download and install latest stable version of [NodeJS](https://nodejs.org/en/).  
Step 2. Download and install latest stable version of [Yarn](https://yarnpkg.com/en/docs/install).  
Step 3. Open project folder in terminal and enter the `yarn install` command.  
Step 4. Preparation complete! You can start working with the project :)

## #2. Structure

```
.
├─ archive
|  └─ .. files without repository sync
├─ backend
|  └─ .. tpls and files for CMS
├─ public
|  └─ .. static files
├─ src
|  └─ .. pages, libs, elements, etc
├─ webapp
|  └─ .. compiled project
├─ .editorconfig
├─ .gitattributes
├─ .gitignore
├─ .stylintrc
├─ package.json
├─ readme.md
├─ vite.config.js
└─ yarn.lock
```

## #3. Command line

### Basic tasks

`npm run dev` – launches a project for dev process  
`npm run build` – just compile files to `webapp`  
`npm run preview` – preview from `webapp` folder

Default browser for preview launching: `Firefox`

## #4. Media queries

### @include mq(value)

```
– base      =  320px --  359px
– base-nano =  320px --  575px
– base-mini =  320px --  767px
– base-lite =  320px --  991px
– base-plus =  320px -- 1261px
– base-full =  320px -- 1439px
– base-wide =  320px -- 1559px
– base-mega =  320px -- 1759px

– nano-up   =  360px =>
– nano      =  360px --  575px
– nano-mini =  360px --  767px
– nano-lite =  360px --  991px
– nano-plus =  360px -- 1261px
– nano-full =  360px -- 1439px
– nano-wide =  360px -- 1559px
– nano-mega =  360px -- 1759px

– mini-up   =  576px =>
– mini      =  576px --  767px
– mini-lite =  576px --  991px
– mini-plus =  576px -- 1261px
– mini-full =  576px -- 1439px
– mini-wide =  576px -- 1559px
– mini-mega =  576px -- 1759px

– lite-up   =  768px =>
– lite      =  768px --  991px
– lite-plus =  768px -- 1261px
– lite-full =  768px -- 1439px
– lite-wide =  768px -- 1559px
– lite-mega =  768px -- 1759px

– plus-up   =  992px =>
– plus      =  992px -- 1261px
– plus-full =  992px -- 1439px
– plus-wide =  992px -- 1559px
– plus-mega =  992px -- 1759px

– full-up   = 1262px =>
– full      = 1262px -- 1439px
– full-wide = 1262px -- 1559px
– full-mega = 1262px -- 1759px

– wide-up   = 1440px =>
– wide      = 1440px -- 1559px
– wide-mega = 1440px -- 1759px

– mega-up   = 1559px =>
– mega      = 1559px -- 1759px

– over-up   = 1760px =>

– hdpi      = only for hdpi + may used in other '+media'
```

### Ordered rules

-  non-media-query code goes first
-  then all only min-width rules
-  then all only max-width rules
-  then all interval rules
-  then all other rules (print, etc)

## #5. Helpers

### Classes

`js-locked` – disabling scroll in block  
`is-hidden` – fully hide an element  
`block-link` – absolute positioning

### Data

`[data-reader]` – visually hidden only

### Mixins

`@include hover {}` – adds only hover
`@include focus {}` – adds focus and active
`@include focus-only {}` – adds only focus
`@include active-only {}` – adds only active

## #6. Copyrights

© 2016–2025, Under the MIT License  
[https://xnode.site/](https://xnode.site/)
