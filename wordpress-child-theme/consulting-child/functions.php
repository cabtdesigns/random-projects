<?php
/* child style */
function childtheme_enqueue_styles() {

/*this line prevents the parent style sheet from loading twice
    after instaling check source code to make sure on 2 sheets are loading, parent and child*/
wp_dequeue_style( 'consulting-thinkup-style' );

wp_enqueue_style( 'parent_style', get_template_directory_uri() . '/style.css' );

wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css' , false,filemtime( get_stylesheet_directory() . '/style.css' ), 'all' );

}
add_action( 'wp_enqueue_scripts', 'childtheme_enqueue_styles', 999 );
?>