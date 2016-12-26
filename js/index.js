$(function () {
    const sideNavLis = '.sidenav h3,.sidenav > div > ul > li';
    const $liveExampleLinks = $('#liveExamples').find('a');
    const $previewContainer = $('#previewContainer');
    const $iframe = $('#preview');

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
    TweenMax.staggerFrom(sideNavLis, .5, {x: -300, rotation: 90, scale: 2}, 0.1);
});
