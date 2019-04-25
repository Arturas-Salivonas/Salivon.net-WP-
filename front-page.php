<?php
/**
 * The front page template file
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
		<div class="pt-wrapper">
			<div class="subpages">
				<?php include 'template-parts/_home_home.php';?> <!-- calling Front Page home Section -->
				<?php include 'template-parts/_home_aboutme.php';?> <!-- calling Front page About me Section -->
				<?php include 'template-parts/_home_resume.php';?> <!-- calling Front page Resume Section -->
				<?php include 'template-parts/_home_portfolio.php';?> <!-- calling Front page Portfolio Section -->
				<?php include 'template-parts/_home_contact.php';?> <!-- calling Front page Contact Me Section -->
			</div>
		</div>
	</div>

</div>

<?php get_footer();?>
