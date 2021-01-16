<?php
/**
 * The template for displaying 404 pages (not found)
 *
 */

get_header();
?>

<div class="page-header">
    <h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'testtheme' ); ?></h1>
</div><!-- .page-header -->

<div class="page-content">
    <p><?php esc_html_e( 'Use the menu to navigate back to the site.', 'updatedtheme' ); ?></p>
</div><!-- .page-content -->

<?php
get_footer();