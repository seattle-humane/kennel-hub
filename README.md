# kennel-hub
[![Build Status](https://travis-ci.org/seattle-humane/kennel-hub.svg?branch=master)](https://travis-ci.org/seattle-humane/kennel-hub)

> Frontend for Seattle Humane's animal activity log

See [animal-status](https://github.com/seattle-humane/animal-status) for the backend.

## Build

kennel-hub is a bog-standard vue webpack app. Typical usage:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deployment

Hosting is AWS (S3/CloudFront), basically following [David Baumgold's guide](https://www.davidbaumgold.com/tutorials/host-static-site-aws-s3-cloudfront/).

I did the initial setup steps from that guide manually. Travis CI manages
continous deployment based on the master branch.
