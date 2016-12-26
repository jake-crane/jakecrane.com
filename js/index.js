$(function () {
    const sideNavLiSelector = '.sidenav h3,.sidenav > div > ul > li';
    const $liveExampleLinks = $('#liveExamples').find('a');
    const $previewContainer = $('#previewContainer');
    const $iframe = $('#preview');
    const $topNavBarLinks = $('.navbar-fixed-top').find('a');

    hideIframe(0);

    $previewContainer.resizable();

    function hideIframe(duration) {
        TweenMax.to($iframe, duration, {opacity: 0, scale: 0});
    }

    $liveExampleLinks.click(function () {
        if ($iframe.is(':visible')) {
            $(this).attr('target', 'preview');
        } else {
            $(this).attr('target', '');
        }
        hideIframe(.5);
    });

    $iframe.load(function () {
        TweenMax.to($iframe, 1, {opacity: 1, scale: 1});
    });
    TweenMax.staggerFrom(sideNavLiSelector, .5, {x: -300, rotation: 90, scale: 2}, 0.1);
    TweenMax.staggerFrom($topNavBarLinks, 2, {x: 800, ease: Bounce.easeOut}, 0.1);
});
