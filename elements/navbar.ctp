<?php
$this->Nav->create('Navbar', array('class' => 'services'));
$this->Nav->add('Navbar', array(
	'name' => __('Home', true),
	'url' => '/',
	'type' => 'link',
));

echo $this->Nav->show('Navbar', array('class' => 'services'));
?>
<ul class="options">
	<li><a href="/">Home</a></li>
</ul>
<hr />