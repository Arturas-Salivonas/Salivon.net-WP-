<section class="pt-page pt-page-1 table_custom" data-id="home">
   <div class="section-inner">
      <div class="section--navigation__box hide--mobile">
         <a class="navigation--cta navigation--previous" href="#contact"><i class="fas fa-chevron-up"></i></a>
         <a class="navigation--cta navigation--next" href="#about_me"><i class="fas fa-chevron-down"></i></a>
      </div>
      <div class="home-page-block">
         <h1>
            <?php the_field('home_main_title'); ?>
         </h1>
         <h2 class="welcome--title"><span data-typer-targets="Hello, Hola, Привет, Bonjour, 你好, नमस्ते, مرحبا">Hello</span>, nice to meet you! </h2>
      </div>
      <div class="download-cv-block cv1">
         <?php if( get_field('cv_download_url_file') ): ?>
         <a class="Buttonx" target="_blank" href="<?php the_field('cv_download_url_file'); ?>">
         <?php the_field('cv_download_button_text'); ?></a>
         <?php endif; ?>
      </div>
   </div>
</section>