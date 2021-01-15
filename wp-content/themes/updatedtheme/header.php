<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
	  <?php wp_enqueue_script("jquery"); ?>
	<?php wp_head(); ?>
	  <!-- <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" /> -->
	  
  </head>
  
	<?php 
		if( is_front_page() ):
		$custom_classes = array('custom_homepage');
		else:
		$custom_classes = array('custom_otherpage');
		endif;
  ?>
  <body <?php body_class( $custom_classes ); ?>>
	<header>
		<a href="/" class="logo">
		<img src="<?php header_image(); ?>" height="auto" width="auto" alt="" />
		</a>
		<div class="menu-navbar">
		<?php wp_nav_menu( array( 'theme_location' => 'main') ); ?>
	</div>
	</header>
		<main class="content-area">
		
  