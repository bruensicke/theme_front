<?php
echo $this->Html->scriptBlock("$().ready(function(){
	$('.elastic').elastic();
	$('.slugify').slug({slug:'slug', hide: false});
});");
