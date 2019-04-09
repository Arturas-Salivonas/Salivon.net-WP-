<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
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

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

 <?php the_title(); ?>
 <?php the_content(); ?>
 <?php echo get_the_date(); ?>

<?php endwhile; ?>
<?php endif; ?>
			</div>
		</div>
	</div>

</div>

<?php get_footer();?>
