# Fs-branding

An addon that holds the styles & assets for frontside open source
ember addons.

## Installation

``` bash
ember install fs-branding
```

In your `ember-cli-build.js` you have to specifically enable the
assets:

``` javascript
fsBranding: {
  enableAssets: true
}
```

Then you need to include the basic structure in your
`application.hbs`:

``` handlebars
<div class="page-content-border">
  <div class="page-content">
    {{outlet}}
  </div>
</div>
```

This addon includes bootstrap v4 automatically. So you can use all of
the CSS from bootstrap 4.


## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
