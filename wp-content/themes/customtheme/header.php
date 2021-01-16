<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
	  <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
		<?php wp_head(); ?> <!-- Where functions are created -->
  </head>
  
	<?php 
		if( is_front_page() ):
		$custom_classes = array('custom_homepage');
		else:
		$custom_classes = array('custom_otherpage');
		endif;
		?>
  
  <body <?php body_class( $custom_classes ); ?> >
	<header class="headerContainer">
		<?php if ( has_custom_logo() ) { ?>
		<a class="logo" href="<?php echo home_url(); ?>"><img src="<?php echo get_header_image(); ?>" alt="Logo" width="114px" height="20px"/></a>
		<?php } else { ?>
		<a class="logo" href="<?php echo home_url(); ?>">Module Studio</a>
		<?php } ?>
		<a class="toggle-nav" href=""></a>
			  <div class="menuPanel">
		  <?php wp_nav_menu( array( 'theme_location' => 'main-sub-menu') ); ?>
	  </div>
	</header>
		<main class="content-area">
			<div class="bodyContainer">  