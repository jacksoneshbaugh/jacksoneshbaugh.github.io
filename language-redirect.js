/**
 * Provides redirect for each translation of the site.
 *
 * @author Jackson Eshbaugh
 * @version 03/15/2024
 */

let languages = navigator.languages;

if(languages[0].startsWith('fr')) {
    window.location.href = 'fr/index.html';
} else {
    window.location.href = 'en/index.html';
}