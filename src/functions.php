<?php
$theme = wp_get_theme('wp-react-spa-boilerplate');
$theme_version = $theme['Version'];

class Main {
	public function __construct() {
		add_action('after_setup_theme', array($this, 'content_width'), 0);
		add_action('after_setup_theme', array($this, 'setup'));
		add_action('wp_enqueue_scripts', array($this, 'enqueue_script'), 10);
	}

	public function setup() {
		add_theme_support('automatic-feed-links');
		add_theme_support('title-tag');
		add_theme_support('post-thumbnails');
	}

	public function content_width() {
		$GLOBALS['content_width'] = 640;
	}

	public function enqueue_script() {
		global $theme_version;

		$wp_parameters = array(
		  'SITE_TITLE' => get_bloginfo('name'),
		  'SITE_DESCRIPTION' => get_bloginfo('description'),
		  'SITE_URL' => get_site_url(),
		  'API' => get_site_url() . '/wp-json/',
			'POSTS_PER_PAGE' => get_option('posts_per_page'),
		  'PAGE_ON_FRONT' => get_option('page_on_front')
		);

		wp_enqueue_style('sircus', 'https://unpkg.com/sircus@3.0.0/css/sircus.min.css', '', $theme_version);

    wp_register_script('app-bundle', get_template_directory_uri() . '/bundle.js', array(), $theme_version, true);
    wp_localize_script('app-bundle', 'WP_PARAMETERS', $wp_parameters);

    wp_enqueue_script('app-bundle');
	}
}

class Admin {
	public function __construct() {}
}

$theme_object = (object) array(
	'version' => $theme_version,
	'main' => new Main(),
);

if (is_admin()) {
	$theme_object->admin = new Admin();
}
