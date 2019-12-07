<?php
/**
 * @package basicwordpressplugin
 * @version 0.1
 */
/*
Plugin Name: BasicWordpressPlugin
Description: Very basic plugin to start tinkering wirh Wordpress and Javascript
Author: Massimo Avvisati
Version: 0.1
*/


function add_dashboard_my_widgets() {

	wp_add_dashboard_widget(
                 'systemthree_dashboard_widget',         // Widget slug.
                 'Overview',         // Title.
                 'my_dashboard_widget_function' // Display function.
        );
}



/**
 * Create the function to output the contents of our Dashboard Widget.
 */
function my_dashboard_widget_function() {

	// Display whatever it is you want to show.
	?>
	<h1>HELLO WORLD</h1>
	<h2>Where the magic happens</h2>
	<div id="my-posts">
		<!-- Post will magically appears here using Javascript -->
	</div>
	<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', function(){
		var wp = new WPAPI({
			endpoint: window.WP_API_Settings.endpoint,
			nonce: window.WP_API_Settings.nonce
		});
		wp.posts().get(function( err, data ) {
			if ( err ) {
					// handle err
			}
			var myPostHTMLElement = document.querySelector('#my-posts');
			data.forEach(post=>{
				console.log(post);
				var newHTMLElement = document.createElement('div');
				newHTMLElement.setAttribute('style', 'border: 1px solid red; margin-bottom: 5px;')
				newHTMLElement.innerHTML = `<a href="${post.link}">${post.title.rendered}</a>`;
				myPostHTMLElement.appendChild(newHTMLElement);
			})
			// do something with the returned posts
		});
	});
	</script>
  <?php

}



function my_options_page(  ) {
		?>
		<h1>HELLO WORLD</h1>
    <h2>Where the magic happens</h2>
		<script type="text/javascript">
		document.addEventListener('DOMContentLoaded', function(){
			var wp = new WPAPI({
	    endpoint: window.WP_API_Settings.endpoint,
	    nonce: window.WP_API_Settings.nonce
		});
		wp.posts().get(function( err, data ) {
			if ( err ) {
					// handle err
			}
			console.log(data);
			// do something with the returned posts
		});});
		</script>
		<?php

}

function my_add_admin_menu(  ) {

	add_menu_page( 'My Admin Page', 'My Admin Page', 'manage_options', 'myadminpage', 'my_options_page' );

}

/*
	Here we load node-wpapi http://wp-api.org/node-wpapi/
*/

function my_enqueue_scripts() {

    $wpapijsfilename  = plugins_url( '/js/wpapi.min.js', __FILE__ );
    wp_enqueue_script( 'app', $wpapijsfilename, array(), false, true );
    wp_localize_script( 'app', 'WP_API_Settings', array(
        'endpoint' => esc_url_raw( rest_url() ),
        'nonce' => wp_create_nonce( 'wp_rest' )
    ) );
}

/*
	This function is called by Wordpress everytime and execute proper actions in order to:
	1) load javascript libraries
	2) create a custom widget in the main Wordpress Dashboard
	3) create a custom admin menu and page
*/

function init_plugin() {
  add_action( 'wp_dashboard_setup', 'add_dashboard_my_widgets' );
  add_action( 'admin_menu', 'my_add_admin_menu' );
  add_action( 'admin_enqueue_scripts', 'my_enqueue_scripts' );
}

function activate() {
  init_plugin();
  flush_rewrite_rules();
}

function dectivate() {
  flush_rewrite_rules();
}

register_activation_hook(__FILE__, 'activate');
register_activation_hook(__FILE__, 'deactivate');

add_action('init', 'init_plugin' );
