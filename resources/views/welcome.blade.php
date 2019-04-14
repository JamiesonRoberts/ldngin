<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <meta name="description" content="">

    <meta name="_token" content="{{ csrf_token() }}">
    <link rel="preconnect" href="https://www.google.com">
    <style>
        @php
            include('css/app.css');
        @endphp
    </style>
</head>
<body>
<main class="container">
    <div class="content">
        <h1>#ldnont <br>Gin Club<span class="cocktail-icon"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="cocktail" class="svg-inline--fa fa-cocktail fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M391.32 128H24.68c-21.95 0-32.94 26.53-17.42 42.05L192 354.79V480h-53.33c-14.73 0-26.67 11.94-26.67 26.67 0 2.95 2.39 5.33 5.33 5.33h181.33c2.95 0 5.33-2.39 5.33-5.33 0-14.73-11.94-26.67-26.67-26.67H224V354.79l107.7-107.7 22.66-22.66 54.37-54.37c15.52-15.53 4.53-42.06-17.41-42.06zM208 325.53L42.47 160h331.06L208 325.53zM432 0c-62.55 0-114.89 40.23-134.61 96h34.31c17.95-37.68 55.83-64 100.3-64 61.76 0 112 50.24 112 112s-50.24 112-112 112c-18.49 0-35.68-4.93-51.06-12.9l-23.52 23.52C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0zm0 192c-.04 0-.08-.01-.13-.01-.2.21-.3.48-.51.69L405.04 219c8.46 3.05 17.46 5 26.96 5 44.12 0 80-35.89 80-80s-35.88-80-80-80c-26.05 0-49.01 12.68-63.62 32H432c26.47 0 48 21.53 48 48s-21.53 48-48 48z"></path></svg></span></h1>
        <p>Welcome to the #ldnont Gin Club, a social gathering of Gin aficionados in London,
            Ontario.</p>
        <form autocomplete="off" id="signUpForm">
            @csrf
            <div class="inputGroup textInput">
                <input type="text" id="name" name="name" placeholder="John Smith"
                       class="inputField" pattern=".*\S.*">
                <label for="name" class="label">Name</label>
                <span class="optional">(Optional)</span>
                <span class="error">You have entered invalid characters</span>
            </div>
            <div class="inputGroup textInput">
                <input type="email" id="email" name="email" required class="inputField"
                       placeholder="John@smith.com">
                <label for="email" class="label">Email Address</label>
                <span class="required">(Required)</span>
                <span class="error">Valid email address is required</span>
            </div>
            <div class="inputGroup">
                <input type="checkbox" id="consent-newsletter" name="consent-newsletter"
                       class="checkbox"/>
                <label for="consent-newsletter" class="label">
                    Let me know about upcoming meet-ups via a newsletter
                </label>
            </div>
            <div class="inputGroup">
                <input type="checkbox" id="consent-availability" name="consent-availability"
                       class="checkbox"/>
                <label for="consent-availability" class="label">
                    Let me know occasionally about new Gin's available in London via a newsletter.
                </label>
            </div>
            <button class="button g-recaptcha" type="submit" data-sitekey="6LfT-Z0UAAAAAEIws6iMbZIVkugDyUi4KhqctzwU" data-callback="onSubmit">Sign me up!</button>
        </form>
    </div>
    <div class="featured-image">
        <picture>
            <source srcset="{{ asset('img/cocktail.webp') }}" type="image/webp">
            <source srcset="{{ asset('img/cocktail.jpg') }}" type="image/jpeg">
            <img src="{{ asset('img/cocktail.jpg') }}"
                 alt="Gin based drink on a barn-board background"/>
        </picture>
    </div>
</main>
<footer>Made with <span class="heart-icon"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z"></path></svg></span> in London, Canada</footer>
<script src="{{ mix('js/app.js') }}" async></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
    function onSubmit(token) {
        document.getElementById("signUpForm").submit();
    }

    WebFontConfig = {
        google: {
            families: ['Montserrat', 'Playfair Display'],
        },
    };

    (function (d) {
        var wf = d.createElement('script'), s = d.scripts[0];
        wf.src = 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js';
        wf.async = true;
        s.parentNode.insertBefore(wf, s);
    })(document);
</script>
</body>
</html>
