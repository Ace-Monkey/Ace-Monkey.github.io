<?php 

/*
* Get custom styles/scripts: Retrives the stylesheet and scripts from the directory
*
*/
function custom_script_get() {
	wp_enqueue_style('customstyle', get_stylesheet_uri());
	wp_enqueue_script('customjs', get_template_directory_uri() . '/js/scripts.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'custom_script_get');

/*
* Theme setup function: Adds functionality for;
* -Site logo
* -page excerpts
* -Site navagations
*
*/
function custom_theme_setup() {
	
	add_theme_support('menus');
	add_theme_support( 'post-thumbnails' );
	$headerDefaults = array(
	'flex-height'            => true,
	'flex-width'             => true,
	'uploads'                => true,
	'random-default'         => false,
);
	add_theme_support( 'custom-header', $headerDefaults );
	add_post_type_support( 'page', 'excerpt' );
	
	register_nav_menu('main', 'Main Header Navigation');
	register_nav_menu('secondery', 'Secondery Extra Navigation');
}

/*
* Colour palette: Modifyes gutenburgs main text and backgorund colour palette, replacing the defualts with what is enterd here. 
*
*/
// add_theme_support( 'editor-color-palette', array(
// 	array(
// 		'name'  => __( 'Deep Orange', 'updatedtheme' ),
// 		'slug'  => 'deep-orange',
// 		'color'	=> '#fc8c11',
// 	),
// ) );

/*
* Sidebars: Allows sidebars to be used in the theme with widgets (currently 2 defualt ones set).
*
*/
function u_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Primary Sidebar', 'updatedtheme' ),
		'description'   => __( 'The widget that controls the primary sidebars content.' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<ul><li id="%1$s" class="widget %2$s">',
        'after_widget'  => '</li></ul>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
 
    register_sidebar( array(
		'name'          => __( 'Secondary Sidebar', 'updatedtheme' ),
		'description'   => __( 'The widget that controls the secondery sidebars content.' ),
        'id'            => 'sidebar-2',
        'before_widget' => '<ul><li id="%1$s" class="widget %2$s">',
        'after_widget'  => '</li></ul>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
	) );
	
	register_sidebar( array(
		'name'          => __( 'Footer Icons', 'updatedtheme' ),
		'description'   => __( 'The widget that controls the footer social icons.' ),
        'id'            => 'sidebar-3',
        'before_widget' => '<ul><li id="%1$s" class="widget %2$s">',
        'after_widget'  => '</li></ul>',
        'before_title'  => '<h3 class="widget-title hidden">',
        'after_title'   => '</h3>',
    ) );
}

add_action( 'widgets_init', 'u_widgets_init' );

/*
* Custom Mimes: Allows svgs to be uploaded onto the site (may not work).
*
*/
function my_custom_upload_mimes($mimes = array()) {

	$mimes['csv'] = "text/html";
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}

add_filter('upload_mimes', 'my_custom_upload_mimes');
add_action('init', 'custom_theme_setup');
