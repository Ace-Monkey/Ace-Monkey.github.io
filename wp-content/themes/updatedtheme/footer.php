</main>
 <footer>
<div class="footerLogo">
	<a href="/"><img src="<?php header_image(); ?>" alt="logo"/></a>
	 </div>
	 <div class="footerContent">
	 <div class="fBox">
	<h4>Find us</h4>
		 <?php the_field( 'find_us', 6 ); ?>
		 <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet iusto sit ea, labore ipsam fuga, molestias nam facere aliquam odit at excepturi, delectus in consequatur animi minus consequuntur unde ipsum.</p> -->
	 </div>
	 <div class="fBox">
	<h4>Call us</h4>
		 <?php the_field( 'call_us', 6 ); ?>
		 <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet iusto sit ea, labore ipsam fuga, molestias nam facere aliquam odit at excepturi, delectus in consequatur animi minus consequuntur unde ipsum.</p> -->
	 </div>
	 <div class="fBox">
	<h4>Email us</h4>
	<?php the_field( 'email_us', 6 ); ?>
	<!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet iusto sit ea, labore ipsam fuga, molestias nam facere aliquam odit at excepturi, delectus in consequatur animi minus consequuntur unde ipsum.</p> -->
	 </div>
	 <div class="fBox">
	<h4>Follow us</h4>
	<?php if ( is_active_sidebar( 'sidebar-3' ) ) : ?>
    <?php dynamic_sidebar( 'sidebar-3' ); ?>
<?php endif; ?>
	 </div>
</div>
</footer>
<?php wp_footer(); ?>
<script>
//put scripts that use php here!
</script>
 </body>
</html>