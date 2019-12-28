<?php

/**
 * Startup-Without-Borders-Plugin
 *
 *
 * @package   Startup-Without-Borders-Plugin
 * @author    Ali Shadman,Marco Cuomo,Yousef Saghir
 * @license   GPL-3.0
 *
 * @wordpress-plugin
 * Plugin Name:       Startup-Without-Borders-Plugin
 * Description:       React WordPress plugins
 * Author:            Ali Shadman,Marco Cuomo,Yousef Saghir
 * Text Domain:       Startup-Without-Borders-Plugin
 * License:           GPL-3.0
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path:       /languages
 */


namespace Pangolin\WPR;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'WP_REACTIVATE_VERSION', '1.0.2' );


/**
 * Autoloader
 *
 * @param string $class The fully-qualified class name.
 * @return void
 *
 *  * @since 1.0.0
 */
spl_autoload_register(function ($class) {

    // project-specific namespace prefix
    $prefix = __NAMESPACE__;

    // base directory for the namespace prefix
    $base_dir = __DIR__ . '/includes/';

    // does the class use the namespace prefix?
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    // get the relative class name
    $relative_class = substr($class, $len);

    // replace the namespace prefix with the base directory, replace namespace
    // separators with directory separators in the relative class name, append
    // with .php
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';

    // if the file exists, require it
    if (file_exists($file)) {
        require $file;
    }
});

/**
 * Initialize Plugin
 *
 * @since 1.0.0
 */
function init() {
	$wpr = Plugin::get_instance();
	$wpr_shortcode = Shortcode::get_instance();
	$wpr_admin = Admin::get_instance();
	$wpr_rest = Endpoint\Example::get_instance();
}
add_action( 'plugins_loaded', 'Pangolin\\WPR\\init' );



/**
 * Register the widget
 *
 * @since 1.0.0
 */
function widget_init() {
	return register_widget( new Widget );
}
add_action( 'widgets_init', 'Pangolin\\WPR\\widget_init' );

function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');

//CUSTOM POST TYPE IMPORT
function cptui_register_my_cpts() {

	/**
	 * Post Type: Events.
	 */

	$labels = [
		"name" => __( "Events", "twentyseventeen" ),
		"singular_name" => __( "Event", "twentyseventeen" ),
		"menu_name" => __( "My Events", "twentyseventeen" ),
		"all_items" => __( "All Events", "twentyseventeen" ),
		"add_new" => __( "Add new", "twentyseventeen" ),
		"add_new_item" => __( "Add new Event", "twentyseventeen" ),
		"edit_item" => __( "Edit Event", "twentyseventeen" ),
		"new_item" => __( "New Event", "twentyseventeen" ),
		"view_item" => __( "View Event", "twentyseventeen" ),
		"view_items" => __( "View Events", "twentyseventeen" ),
		"search_items" => __( "Search Events", "twentyseventeen" ),
		"not_found" => __( "No Events found", "twentyseventeen" ),
		"not_found_in_trash" => __( "No Events found in trash", "twentyseventeen" ),
		"parent" => __( "Parent Event:", "twentyseventeen" ),
		"featured_image" => __( "Featured image for this Event", "twentyseventeen" ),
		"set_featured_image" => __( "Set featured image for this Event", "twentyseventeen" ),
		"remove_featured_image" => __( "Remove featured image for this Event", "twentyseventeen" ),
		"use_featured_image" => __( "Use as featured image for this Event", "twentyseventeen" ),
		"archives" => __( "Event archives", "twentyseventeen" ),
		"insert_into_item" => __( "Insert into Event", "twentyseventeen" ),
		"uploaded_to_this_item" => __( "Upload to this Event", "twentyseventeen" ),
		"filter_items_list" => __( "Filter Events list", "twentyseventeen" ),
		"items_list_navigation" => __( "Events list navigation", "twentyseventeen" ),
		"items_list" => __( "Events list", "twentyseventeen" ),
		"attributes" => __( "Events attributes", "twentyseventeen" ),
		"name_admin_bar" => __( "Event", "twentyseventeen" ),
		"item_published" => __( "Event published", "twentyseventeen" ),
		"item_published_privately" => __( "Event published privately.", "twentyseventeen" ),
		"item_reverted_to_draft" => __( "Event reverted to draft.", "twentyseventeen" ),
		"item_scheduled" => __( "Event scheduled", "twentyseventeen" ),
		"item_updated" => __( "Event updated.", "twentyseventeen" ),
		"parent_item_colon" => __( "Parent Event:", "twentyseventeen" ),
	];

	$args = [
		"label" => __( "Events", "twentyseventeen" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => true,
		"rewrite" => [ "slug" => "event", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "thumbnail", "custom-fields" ],
		"taxonomies" => [ "chapter" ],
	];

	register_post_type( "event", $args );

	/**
	 * Post Type: Speakers.
	 */

	$labels = [
		"name" => __( "Speakers", "twentyseventeen" ),
		"singular_name" => __( "Speaker", "twentyseventeen" ),
		"menu_name" => __( "My Speakers", "twentyseventeen" ),
		"all_items" => __( "All Speakers", "twentyseventeen" ),
		"add_new" => __( "Add new", "twentyseventeen" ),
		"add_new_item" => __( "Add new Speaker", "twentyseventeen" ),
		"edit_item" => __( "Edit Speaker", "twentyseventeen" ),
		"new_item" => __( "New Speaker", "twentyseventeen" ),
		"view_item" => __( "View Speaker", "twentyseventeen" ),
		"view_items" => __( "View Speakers", "twentyseventeen" ),
		"search_items" => __( "Search Speakers", "twentyseventeen" ),
		"not_found" => __( "No Speakers found", "twentyseventeen" ),
		"not_found_in_trash" => __( "No Speakers found in trash", "twentyseventeen" ),
		"parent" => __( "Parent Speaker:", "twentyseventeen" ),
		"featured_image" => __( "Featured image for this Speaker", "twentyseventeen" ),
		"set_featured_image" => __( "Set featured image for this Speaker", "twentyseventeen" ),
		"remove_featured_image" => __( "Remove featured image for this Speaker", "twentyseventeen" ),
		"use_featured_image" => __( "Use as featured image for this Speaker", "twentyseventeen" ),
		"archives" => __( "Speaker archives", "twentyseventeen" ),
		"insert_into_item" => __( "Insert into Speaker", "twentyseventeen" ),
		"uploaded_to_this_item" => __( "Upload to this Speaker", "twentyseventeen" ),
		"filter_items_list" => __( "Filter Speakers list", "twentyseventeen" ),
		"items_list_navigation" => __( "Speakers list navigation", "twentyseventeen" ),
		"items_list" => __( "Speakers list", "twentyseventeen" ),
		"attributes" => __( "Speakers attributes", "twentyseventeen" ),
		"name_admin_bar" => __( "Speaker", "twentyseventeen" ),
		"item_published" => __( "Speaker published", "twentyseventeen" ),
		"item_published_privately" => __( "Speaker published privately.", "twentyseventeen" ),
		"item_reverted_to_draft" => __( "Speaker reverted to draft.", "twentyseventeen" ),
		"item_scheduled" => __( "Speaker scheduled", "twentyseventeen" ),
		"item_updated" => __( "Speaker updated.", "twentyseventeen" ),
		"parent_item_colon" => __( "Parent Speaker:", "twentyseventeen" ),
	];

	$args = [
		"label" => __( "Speakers", "twentyseventeen" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "speaker", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "thumbnail" ],
	];

	register_post_type( "speaker", $args );

	/**
	 * Post Type: Sponsors.
	 */

	$labels = [
		"name" => __( "Sponsors", "twentyseventeen" ),
		"singular_name" => __( "Sponsor", "twentyseventeen" ),
		"menu_name" => __( "My Sponsors", "twentyseventeen" ),
		"all_items" => __( "All Sponsors", "twentyseventeen" ),
		"add_new" => __( "Add new", "twentyseventeen" ),
		"add_new_item" => __( "Add new Sponsor", "twentyseventeen" ),
		"edit_item" => __( "Edit Sponsor", "twentyseventeen" ),
		"new_item" => __( "New Sponsor", "twentyseventeen" ),
		"view_item" => __( "View Sponsor", "twentyseventeen" ),
		"view_items" => __( "View Sponsors", "twentyseventeen" ),
		"search_items" => __( "Search Sponsors", "twentyseventeen" ),
		"not_found" => __( "No Sponsors found", "twentyseventeen" ),
		"not_found_in_trash" => __( "No Sponsors found in trash", "twentyseventeen" ),
		"parent" => __( "Parent Sponsor:", "twentyseventeen" ),
		"featured_image" => __( "Featured image for this Sponsor", "twentyseventeen" ),
		"set_featured_image" => __( "Set featured image for this Sponsor", "twentyseventeen" ),
		"remove_featured_image" => __( "Remove featured image for this Sponsor", "twentyseventeen" ),
		"use_featured_image" => __( "Use as featured image for this Sponsor", "twentyseventeen" ),
		"archives" => __( "Sponsor archives", "twentyseventeen" ),
		"insert_into_item" => __( "Insert into Sponsor", "twentyseventeen" ),
		"uploaded_to_this_item" => __( "Upload to this Sponsor", "twentyseventeen" ),
		"filter_items_list" => __( "Filter Sponsors list", "twentyseventeen" ),
		"items_list_navigation" => __( "Sponsors list navigation", "twentyseventeen" ),
		"items_list" => __( "Sponsors list", "twentyseventeen" ),
		"attributes" => __( "Sponsors attributes", "twentyseventeen" ),
		"name_admin_bar" => __( "Sponsor", "twentyseventeen" ),
		"item_published" => __( "Sponsor published", "twentyseventeen" ),
		"item_published_privately" => __( "Sponsor published privately.", "twentyseventeen" ),
		"item_reverted_to_draft" => __( "Sponsor reverted to draft.", "twentyseventeen" ),
		"item_scheduled" => __( "Sponsor scheduled", "twentyseventeen" ),
		"item_updated" => __( "Sponsor updated.", "twentyseventeen" ),
		"parent_item_colon" => __( "Parent Sponsor:", "twentyseventeen" ),
	];

	$args = [
		"label" => __( "Sponsors", "twentyseventeen" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "sponsor", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "thumbnail" ],
	];

	register_post_type( "sponsor", $args );

	/**
	 * Post Type: Partners.
	 */

	$labels = [
		"name" => __( "Partners", "twentyseventeen" ),
		"singular_name" => __( "Partner", "twentyseventeen" ),
		"menu_name" => __( "My Partners", "twentyseventeen" ),
		"all_items" => __( "All Partners", "twentyseventeen" ),
		"add_new" => __( "Add new", "twentyseventeen" ),
		"add_new_item" => __( "Add new Partner", "twentyseventeen" ),
		"edit_item" => __( "Edit Partner", "twentyseventeen" ),
		"new_item" => __( "New Partner", "twentyseventeen" ),
		"view_item" => __( "View Partner", "twentyseventeen" ),
		"view_items" => __( "View Partners", "twentyseventeen" ),
		"search_items" => __( "Search Partners", "twentyseventeen" ),
		"not_found" => __( "No Partners found", "twentyseventeen" ),
		"not_found_in_trash" => __( "No Partners found in trash", "twentyseventeen" ),
		"parent" => __( "Parent Partner:", "twentyseventeen" ),
		"featured_image" => __( "Featured image for this Partner", "twentyseventeen" ),
		"set_featured_image" => __( "Set featured image for this Partner", "twentyseventeen" ),
		"remove_featured_image" => __( "Remove featured image for this Partner", "twentyseventeen" ),
		"use_featured_image" => __( "Use as featured image for this Partner", "twentyseventeen" ),
		"archives" => __( "Partner archives", "twentyseventeen" ),
		"insert_into_item" => __( "Insert into Partner", "twentyseventeen" ),
		"uploaded_to_this_item" => __( "Upload to this Partner", "twentyseventeen" ),
		"filter_items_list" => __( "Filter Partners list", "twentyseventeen" ),
		"items_list_navigation" => __( "Partners list navigation", "twentyseventeen" ),
		"items_list" => __( "Partners list", "twentyseventeen" ),
		"attributes" => __( "Partners attributes", "twentyseventeen" ),
		"name_admin_bar" => __( "Partner", "twentyseventeen" ),
		"item_published" => __( "Partner published", "twentyseventeen" ),
		"item_published_privately" => __( "Partner published privately.", "twentyseventeen" ),
		"item_reverted_to_draft" => __( "Partner reverted to draft.", "twentyseventeen" ),
		"item_scheduled" => __( "Partner scheduled", "twentyseventeen" ),
		"item_updated" => __( "Partner updated.", "twentyseventeen" ),
		"parent_item_colon" => __( "Parent Partner:", "twentyseventeen" ),
	];

	$args = [
		"label" => __( "Partners", "twentyseventeen" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "partner", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "thumbnail" ],
	];

	register_post_type( "partner", $args );
}

add_action( 'init', 'cptui_register_my_cpts' );



/**
 * Register activation and deactivation hooks
 */
register_meta( 'post', 'Sponsors', array(
	'show_in_rest' => true,
));
register_meta( 'post', 'Speakers', array(
	'show_in_rest' => true,
));
register_meta( 'post', 'Partners', array(
	'show_in_rest' => true,
));
register_meta( 'post', 'Date', array(
	'show_in_rest' => true,
));
register_activation_hook( __FILE__, array( 'Pangolin\\WPR\\Plugin', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'Pangolin\\WPR\\Plugin', 'deactivate' ) );

