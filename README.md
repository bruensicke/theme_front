# Theme webfront

This is a theme used for various web applications run by brünsicke.com GmbH.
It is a generic theme to adopt to multiple setups and has the following goals:

**Keep it flexible:** The webfront theme should be flexible in a way that by changing some colors, some margins or settings it is possible to achieve a complete different look & feel.

**Keep it lightweight:** The Underlying markup is lightweight, easy to transform and free of markup-overhead just to produce more visually appealing results. The markup should treat the content with respect and work without the inclusion of tons of libraries.

## Requirements

You need CakePHP 1.3 or higher, to make use of the webroot-folder within the themes-folder.

Also, you need to activate themes, by setting these variables in your AppController:

	public $view = 'Theme'; //tells CakePHP to use Themed View
	public $theme = 'front'; //tells CakePHP to use this <theme_name>

### Wait, what about CakePHP 1.2?

If you need to use CakePHP 1.2 for whatever reason, try to symlink the webroot folder to `APP\webroot\themes\ <theme_name> `

### Usage with Flour

If your CakePHP project is already powered by `flour` you also can use the `LayoutComponent` like this:

	var $components = array(
		'Flour.Layout' => array('admin' => 'cox', 'default' => 'front'),
	);

## Installation

Within your CakePHP applications root type the following command to add theme_front as a git submodule.

	git submodule add git@github.com/bruensicke/theme_front.git app/views/themed/front

## Development

Front Theme can easily be developed without CakePHP running or PHP parsing at all. Just open `webroot/index.html` in your favourite browser.
All Assets (js, css, img) should be loaded as usual and you can change markup to your likings and see how they render. Please notice, that changes to the markup will not reflect the themes layouts within CakePHP. It is more a preview of how assets will be rendered.
Therefore, to change something crucial, you have to work within the folders `/css`, `/js` or `/img`. Make sure to reference every other asserts relative, so both access methods remain intact.

## License

Front Theme is copyright by brünsicke.com GmbH and may not be used, copied or re-distributed in any way.

## Owner

Front theme is developed by [brünsicke.com GmbH](http://bruensicke.com/). Get in touch if you need help making your next project.