GMdotnet_Magento_Bootstrap_Boilerplate
======================================

Bootstrap Boilerplate theme for Magento 1.x
 
### Installation

```
composer install gmdotnet/magento-bootstrap-boilerplate 1.0.x-dev
```
 
### Frontend  

Available tools:

- grunt
- bower
 
### Grunt task

Under folder `develop`:

```
npm install
bower install
```

| Task         | Alias                                   | Description         |
| :----------- | :-------------------------------------- | :------------------ |
| `minify-css` | `cssmin`                                | Minify all css used | 
| `minify-js`  | `uglify`                                | Minify all js used  | 
| `deploy`     | `copy:asset`                            | Copy source file into magento skin folder | 
| `default`    | `copy:asset`, `minify-css`, `minify-js` | Default Task        |
| `watch`      |                                         | Task for auto-update css and js min files |    
 
### Bower dependency

| Description                    | Value  |
| :----------------------------- | :----- |
| bootstrap                      | 3.3.7  |
| jquery                         | 2.2.4  |
| font-awesome                   | 4.6.3  |
| malihu-custom-scrollbar-plugin | 3.1.5  |
| jquery-mousewheel              | 3.1.13 |
| jquery-searcher                | 0.3.0  |