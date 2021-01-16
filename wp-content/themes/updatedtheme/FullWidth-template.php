<?php 
/*
* Template Name: Full Width template
*/
 get_header(); ?>

	<?php if(have_posts()): //--------Post/page Loop
		
		while(have_posts()): the_post(); ?>
		
		<?php //the_content(); ?>
		<?php get_template_part( '/template-parts/title-content'); ?>
		
		<?php endwhile;
	endif;
	?>
	
<?php get_footer(); ?>