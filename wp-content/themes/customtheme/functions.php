<?php 

function custom_style_get() {
	wp_enqueue_style('customstyle', get_template_directory_uri() . '/stles.css', array(),'1.0.0','all');
}

function custom_script_get() {
	wp_enqueue_script('customjs', get_template_directory_uri() . '/js/scripts.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_styles', 'custom_style_get');
add_action('wp_enqueue_scripts', 'custom_script_get');

function custom_theme_setup() {
	
	add_theme_support('menus');
	$headerDefaults = array(
		'flex-height'            => true,
		'flex-width'             => true,
	);
	add_theme_support( 'custom-header', $headerDefaults );
	add_post_type_support( 'page', 'excerpt' );
	
	register_nav_menu('main', 'Main Header navigation');
	register_nav_menu('secondery', 'Footer navigation');
}

function my_custom_upload_mimes($mimes = array()) {
	$mimes['csv'] = "text/html";
	$mimes['svg'] = 'image/svg+xml';
	$mimes['svgz'] = 'image/svg+xml';
	$mimes['doc'] = 'application/msword';
	return $mimes;
}

add_action('upload_mimes', 'my_custom_upload_mimes');
add_action('init', 'custom_theme_setup');
