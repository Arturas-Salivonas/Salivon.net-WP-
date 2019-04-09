<?php
/**
 * Template Name: CustomPageT1
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */
 ?>

<?php get_header();?>
<?php include 'template-parts/_master_loading-dots.php';?> <!-- calling Loading animation bubbles -->
<div id="page" class="page">
<?php include 'template-parts/_home_mobilemenu.php';?> <!-- calling main and mobile nav menu (<header>) -->

	<div id="main" class="site-main">
		<div id="particle-canvas" class="pt-wrapper">
			<div class="subpages">
				<h2>My blog</h2>

		<?php		// the query
$wpb_all_query = new WP_Query(array('post_type'=>'post', 'post_status'=>'publish', 'posts_per_page'=>-1)); ?>
 
<?php if ( $wpb_all_query->have_posts() ) : ?>
 
<ul>
 
    <!-- the loop -->
    <?php while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post(); ?>
        <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
    <?php endwhile; ?>
    <!-- end of the loop -->
 
</ul>
 
    <?php wp_reset_postdata(); ?>
 
<?php else : ?>
    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
			</div>
		</div>
	</div>

</div>

<?php get_footer();?>
