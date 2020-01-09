<?php
/**
 * Startup-Without-Borders-Plugin
 *
 *
 * @package   Startup-Without-Borders-Plugin
 * @author    Ali Shadman,Marco Cuomo,Yousef Saghir
 * @license   GPL-3.0
 */

namespace Pangolin\WPR;

/**
 * @subpackage Shortcode
 */
class Shortcode {

	/**
	 * Instance of this class.
	 *
	 * @since    1.0.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 * Return an instance of this class.
	 *
	 * @since     1.0.0
	 *
	 * @return    object    A single instance of this class.
	 */
	public static function get_instance() {

		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
			self::$instance->do_hooks();
		}

		return self::$instance;
	}

	/**
	 * Initialize the plugin by setting localization and loading public scripts
	 * and styles.
	 *
	 * @since     1.0.0
	 */
	private function __construct() {
		$plugin = Plugin::get_instance();
		$this->plugin_slug = $plugin->get_plugin_slug();
		$this->version = $plugin->get_plugin_version();

		add_shortcode( 'wp-reactivate', array( $this, 'shortcode' ) );
	}


	/**
	 * Handle WP actions and filters.
	 *
	 * @since 	1.0.0
	 */
	private function do_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	/**
	 * Register frontend-specific javascriptt
	 *
	 * @since     1.0.0
	 */
	public function register_frontend_scripts() {
		wp_register_script( $this->plugin_slug . '-shortcode-script', plugins_url( 'assets/js/shortcode.js', dirname( __FILE__ ) ), array( 'jquery' ), $this->version );
		wp_register_style( $this->plugin_slug . '-shortcode-style', plugins_url( 'assets/css/shortcode.css', dirname( __FILE__ ) ), $this->version );
		   // JS
    wp_register_script('prefix_bootstrap', '//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js');
    wp_enqueue_script('prefix_bootstrap');

    // CSS
    wp_register_style('prefix_bootstrap', '//stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
	wp_enqueue_style('prefix_bootstrap');
	 wp_register_style('prefix_font_icons', '//fonts.googleapis.com/icon?family=Material+Icons');
	   wp_enqueue_style('prefix_font_icons');
	   wp_register_style('font_google', '//fonts.googleapis.com/css?family=Raleway&display=swap');
	   wp_enqueue_style('font_google');

	  wp_register_style('prefix_slider', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
	   wp_enqueue_style('prefix_slider');
	   
	   wp_register_style('prefix_slider_theme', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');
	   wp_enqueue_style('prefix_slider_theme');
	}

	public function shortcode( $atts ) {
		wp_enqueue_script( $this->plugin_slug . '-shortcode-script' );
		wp_enqueue_style( $this->plugin_slug . '-shortcode-style' );

		$object_name = 'wpr_object_' . uniqid();

		$object = shortcode_atts( array(
			'title'       => 'Hello world',
			'api_nonce'   => wp_create_nonce( 'wp_rest' ),
			'api_url'	  => esc_url_raw( rest_url() ),
			'plugin_url'  => plugins_url( 'Startup-Without-Borders-Plugin/', '' ),
		), $atts, 'wp-reactivate' );

		wp_localize_script( $this->plugin_slug . '-shortcode-script', $object_name, $object );

		$shortcode = '<div class="wp-reactivate-shortcode" data-object-id="' . $object_name . '"></div>';
		return $shortcode;
	}
}
