=== WC Vienna 2024 ===
Contributors:      Fabian Todt
Tags:              block
Tested up to:      6.5
Stable tag:        0.2.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A plugin providing examples of @wordpress/component package for my [talk at WordCamp Vienna 2024](https://vienna.wordcamp.org/2024/session/using-components-to-build-better-wp-admin-interfaces/).

== Description ==

=== To run the examples: ===

**Test via WordPress Playground in browser**

https://playground.wordpress.net/#{%22landingPage%22:%20%22/wp-admin/admin.php?page=wc-vienna-2024%22,%22steps%22:%20[{%22step%22:%20%22login%22},{%22step%22:%20%22installPlugin%22,%22pluginZipFile%22:%20{%22resource%22:%20%22url%22,%22url%22:%20%22https://raw.githubusercontent.com/gaambo/wordcamp-vienna-2024-examples/main/wc-vienna-2024.zip%22},%22options%22:%20{%22activate%22:%20true}}]}

**Run in existing WordPress installation**
Download `wc-vienna-2024.zip` from GitHub and install in your WordPress site.

**Run local environment**
1. Get code: `git clone git@github.com:gaambo/wordcamp-vienna-2024-examples.git`
2. Run `npm install`
3. Run `npm run dev:start`
4. Open `localhost:8888/wp-admin` and login with `admin`/`password`

Build-directory is included in plugin, if you want to play with the examples and change something, run:
`npm run start`.

INFO: @goodwp/goodenberg may still be private at the time - so npm install may fail.

== Frequently Asked Questions ==


== Screenshots ==

== Changelog ==
