<?php 
/**
 * The template for displaying sidebars
 *
 */
if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
<div id="sidebar" class="side-container">
    <?php dynamic_sidebar( 'sidebar-1' ); ?>
</div>
<?php endif; ?>