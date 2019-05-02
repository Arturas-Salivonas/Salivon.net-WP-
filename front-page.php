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

<style>
.pt-wrapper {
    background-color: <?php the_field('global_background_color_'); ?>;
	background-image: url(<?php the_field('background_image_global'); ?>);
	background-image: url(<?php the_field('background_image_global_webp'); ?>);
}
.error404 .pt-wrapper{
	background-color: <?php the_field('global_background_color_'); ?>;
    background-image: url(<?php the_field('background_image_global'); ?>);
}

a{
	color: <?php the_field('global_custom_color'); ?>;
}
a:hover{
	color: <?php the_field('global_hover_custom_color'); ?>;
}

input[type=submit]:hover, input[type=submit]:focus, input[type=button]:focus, button:hover, button:focus, a.button:hover, a.button:focus {
    background-color: <?php the_field('global_custom_color'); ?>;
}
.border-block-top-110 {
    border-top: 3px solid <?php the_field('global_custom_color'); ?>;
    border-left: 3px solid <?php the_field('global_custom_color'); ?>;
}
.header {
    background-color: <?php the_field('global_custom_color'); ?>;
}
ul.social-links li a:hover{
	background-color: <?php the_field('global_hover_custom_color'); ?>;
}
.menu-toggle i{
	color: <?php the_field('global_custom_color'); ?>;
}
.site-main-menu li a:after{
	background-color: <?php the_field('global_custom_color'); ?>;
} 
.section-description {
    background-color: <?php the_field('global_custom_color'); ?>;
}
.home-page-block h1{
	color: <?php the_field('global_custom_color'); ?>;
}
.info-list li .title:after{
	 background-color: <?php the_field('global_custom_color'); ?>;
}
.event-date{
	 background-color: <?php the_field('global_custom_color'); ?>;
} 
.event-date .event-icon{
        border-top: 1px solid <?php the_field('global_custom_color'); ?>;
        border-left: 1px solid <?php the_field('global_custom_color'); ?>;
}
.career-timeline .event-description {
    color: <?php the_field('global_custom_color'); ?>;
}
.portfolio-grid  figure a div i{
	color: <?php the_field('global_custom_color'); ?>;
}

.header.header-color-light .site-title {
  	color: <?php the_field('global_custom_color'); ?>;
}
.header.header-color-light .site-main-menu li.active a:after {
    background-color: <?php the_field('global_custom_color'); ?>;
}
ul.list ul:before {
    border-left: 1px solid <?php the_field('global_custom_color'); ?>;
}
ul.list li a:hover,
ul.list li a:hover+ul li a {
    color: <?php the_field('global_custom_color'); ?>;
}
ul.list ul li:before {
    border-top: 1px solid <?php the_field('global_custom_color'); ?>;
}
.visit--website_cta:hover{
	color: <?php the_field('global_custom_color'); ?>;
}

.Buttonx {
    background: <?php the_field('global_custom_color'); ?>;
    box-shadow: 0 10px 60px -10px <?php the_field('global_custom_color'); ?>;
}
.Buttonx:hover{
 	 background: <?php the_field('global_hover_custom_color'); ?>;
     box-shadow: 0 8px 65px -5px <?php the_field('global_hover_custom_color'); ?>;

}
.Buttonx:active{
    background: <?php the_field('global_hover_custom_color'); ?>;
    box-shadow: 0 8px 65px -5px <?php the_field('global_hover_custom_color'); ?>;

}
span[data-typer-targets] {
    color: <?php the_field('global_custom_color'); ?>;
}
.navigation--cta{
	 background: <?php the_field('global_custom_color'); ?>;
}
.navigation--cta:hover{
	 background: <?php the_field('global_hover_custom_color'); ?>;
}
</style>
<?php get_footer();?>
