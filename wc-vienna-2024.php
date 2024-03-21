<?php

/**
 * Plugin Name:       WC Vienna 2024
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Fabian Todt
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wc-vienna-2024
 *
 * @package           wcv24
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}


add_action(
    'admin_menu',
    function () {
        add_menu_page(
            __('WC Vienna 2024', 'wc-vienna-2024'),
            __('WC Vienna 2024', 'wc-vienna-2024'),
            'manage_options',
            'wc-vienna-2024',
            __NAMESPACE__ . '\render_page',
        );
    }
);

function render_page()
{
    $assetFile = plugin_dir_path(__FILE__) . '/build/admin-page.asset.php';
    if (!file_exists($assetFile)) {
        throw new \Exception('please run examples build process');
    }
    $asset = include $assetFile;

    wp_enqueue_script(
        'wc-vienna-2024-examples-admin-page',
        plugin_dir_url(__FILE__) . '/build/admin-page.js',
        $asset['dependencies'],
        $asset['version']
    );

    wp_enqueue_style('wp-components');

    echo '<div id="wc-vienna-2024-examples-admin-page"></div>';
}
