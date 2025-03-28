# Optimization

-  🔹 - fully completed
-  〽️ - now in process
-  🔸 - partially developed
-  🔻 - waiting in queue

```
.
├─ 📦 archive
|  └─ .. files without repository sync
|
├─ 📦 public
|  ├─ 🗃️ assets
|  |  ├─ # a-icons
|  |  |  ├─ 🔹 apple-icon.png
|  |  |  ├─ 🔹 brand-192.png
|  |  |  ├─ 🔹 brand-512.png
|  |  |  ├─ 🔹 favicon-96.png
|  |  |  ├─ 🔹 favicon.ico
|  |  |  └─ 🔹 favicon.svg
|  |  ├─ # og-image
|  |  |  ├─ 🔸 auto-generation
|  |  |  └─ .. open-graph covers
|  |  └─ 🔹 app.webmanifest
|  ├─ 🔹 .htaccess
|  ├─ 🔹 robots.txt
|  └─ 🔹 sitemap.xml
|
├─ 📦 src
|  ├─ 🗃️ assets
|  |  ├─ # decors
|  |  |  ├─ 🔹 app-logo.svg
|  |  |  └─ .. files used in styles
|  |  ├─ # files
|  |  |  └─ .. files for download
|  |  ├─ # fonts
|  |  |  ├─ 🔹 jetbrains-mono.woff2
|  |  |  ├─ 🔹 jetbrains-mono_bold.woff2
|  |  |  ├─ 🔹 kode-mono_bold.woff2
|  |  |  └─ .. font in .woff2 and .svg
|  |  ├─ # images
|  |  |  ├─ 🔹 hero_home.svg
|  |  |  └─ .. content images
|  |  └─ # video
|  |     └─ .. content video
|  |
|  ├─ 🗃️ baseline
|  |  ├─ # Buttons
|  |  |  ├─ 🔹 Buttons.njk
|  |  |  └─ 🔹 Buttons.scss
|  |  ├─ # Checks
|  |  |  ├─ 🔸 Checks.njk
|  |  |  └─ 🔸 Checks.scss
|  |  ├─ # Effects
|  |  |  ├─ 🔹 __colorLoading.scss
|  |  |  ├─ 🔹 __elementRotate.scss
|  |  |  ├─ 🔹 __glowPulse.scss
|  |  |  ├─ 🔸 __glowSlide.scss
|  |  |  ├─ 🔸 __modalTranslate.scss
|  |  |  ├─ 🔹 __overlayLayer.scss
|  |  |  ├─ 🔹 __textCaretFade.scss
|  |  |  ├─ 🔹 __textColorSwitch.scss
|  |  |  ├─ 🔹 __typingText.js
|  |  |  ├─ 🔹 __unrealLogo.scss
|  |  |  └─ 🔹 Effects.scss
|  |  ├─ # Headers
|  |  |  ├─ 🔹 Headers.njk
|  |  |  └─ 🔹 Headers.scss
|  |  ├─ # Icons
|  |  |  ├─ 🔹 Icons.njk
|  |  |  └─ 🔹 Icons.scss
|  |  ├─ # Inputs
|  |  |  ├─ 🔸 Inputs.njk
|  |  |  └─ 🔹 Inputs.scss
|  |  ├─ # Modals
|  |  |  ├─ 🔸 Modals.njk
|  |  |  └─ 🔸 Modals.scss
|  |  ├─ 🔹 app-core.scss
|  |  ├─ 🔹 fonts.scss
|  |  ├─ 🔹 functions.scss
|  |  ├─ 🔹 groups.scss
|  |  ├─ 🔹 helpers.scss
|  |  ├─ 🔻 mixins.scss (переименовать в общий стиль)
|  |  ├─ 🔹 overrides.scss
|  |  ├─ 🔹 queries.scss
|  |  ├─ 🔸 sections.scss
|  |  ├─ 🔸 skeleton.scss
|  |  └─ 🔸 wysiwyg.scss
|  |
|  ├─ 🗃️ emails
|  |  └─ .. email template files
|  |
|  ├─ 🗃️ layouts
|  |  ├─ # __chunks
|  |  |  ├─ 🔹 __openHTML.njk
|  |  |  ├─ 🔹 __mainHead.njk
|  |  |  ├─ 🔹 __yMetrika.njk
|  |  |  └─ 🔹 __closeHTML.njk
|  |  ├─ 🔹 default.njk
|  |  └─ .. nunjucks layout files
|  |
|  ├─ 🗃️ modules
|  |  ├─ # carcass
|  |  |  ├─ 🔹 AppLogo
|  |  |  ├─ 🔹 Copyright
|  |  |  ├─ 🔹 CrumbsNav
|  |  |  ├─ 🔻 GlobalNav (разработать мобильное меню)
|  |  |  ├─ 🔹 Navbar
|  |  |  └─ 🔹 PageLead
|  |  ├─ # content
|  |  |  ├─ 🔹 HeroBlock
|  |  |  ├─ 〽️ RecentPosts (вывести card в компонент, а feed в универсальный модуль)
|  |  |  └─ 🔻 SimplePost
|  |  └─ .. components in .njk, .scss, .js
|  |
|  ├─ 🗃️ pages
|  |  └─ .. all pages for projects as .njk
|  ├─ 🔸 config.scss
|  ├─ 🔹 scripts.js
|  └─ 🔹 styles.scss
|
├─ 📦 webapp
|  └─ .. compiled project
|
├─ 🔹 .editorconfig
├─ 🔹 .gitattributes
├─ 🔹 .gitignore
├─ 🔹 CREATION.md
├─ 🔹 NOTES.md
├─ 🔹 package.json
├─ 🔹 README.md
├─ 🔹 STRUCTURE.md
├─ 🔹 vite.config.js
└─ 🔹 yarn.lock
```
