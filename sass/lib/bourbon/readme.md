# The Bourbon Sass Mixin library

Bourbon is a comprehensive library of sass mixins that are designed to be simple and easy to use. No configuration required.
The mixins aim to be as vanilla as possible, meaning they should be as close to the original CSS syntax as possible.

The mixins contain vendor specific prefixes for all CSS3 properties for support amongst modern browsers. The prefixes also ensure graceful degradation for older browsers that support only CSS3 prefixed properties. Bourbon uses SCSS syntax.

### Customizations per this project

A technique I make heavy use of is using a site `config.scss` file for theme and default management. The Bourbon library does not use common defaults within it's modular structure, so I am adding them as I need them. 

Within modules like `css3/_box-sizing.scss` for example, you will see `!default` variables added to the module. 

	$default-box-sizing: border-box !default; 

These `!default` variables are then configurable via the `_config.scss` file located at the root of the `sass/` directory for customization. 	