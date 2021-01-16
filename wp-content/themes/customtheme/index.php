<?php get_header(); ?>

	<?php if(have_posts()): //--------Post/page Loop
		
		while(have_posts()): the_post(); ?>
		
		<?php the_content(); ?>
		
		<?php endwhile;
	endif;
	?>
	
<?php get_footer(); ?>