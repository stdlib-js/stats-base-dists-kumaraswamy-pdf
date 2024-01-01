<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [probability density function][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable is

<!-- <equation class="equation" label="eq:kumaraswamy_pdf" align="center" raw="f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a Kumaraswamy's double bounded distribution."> -->

```math
f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} &amp; \text{ for } x \in (0,1) \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:kumaraswamy_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/pdf/docs/img/equation_kumaraswamy_pdf.svg" alt="Probability density function (PDF) for a Kumaraswamy's double bounded distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a > 0` is the first shape parameter and `b > 0` is the second shape parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-pdf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-pdf@esm/index.mjs';
```

#### pdf( x, a, b )

Evaluates the [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var y = pdf( 0.5, 1.0, 1.0 );
// returns 1.0

y = pdf( 0.5, 2.0, 4.0 );
// returns ~1.688

y = pdf( 0.2, 2.0, 2.0 );
// returns ~0.768

y = pdf( 0.8, 4.0, 4.0 );
// returns ~1.686

y = pdf( -0.5, 4.0, 2.0 );
// returns 0.0

y = pdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = pdf( 1.5, 4.0, 2.0 );
// returns 0.0

y = pdf( +Infinity, 4.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -1.0, 0.5 );
// returns NaN

y = pdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.5, -1.0 );
// returns NaN

y = pdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### pdf.factory( a, b )

Returns a function for evaluating the [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var mypdf = pdf.factory( 0.5, 0.5 );

var y = mypdf( 0.8 );
// returns ~0.86

y = mypdf( 0.3 );
// returns ~0.679
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@esm/index.mjs';
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-pdf@esm/index.mjs';

var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    a = ( randu()*5.0 ) + EPS;
    b = ( randu()*5.0 ) + EPS;
    y = pdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, f(x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-kumaraswamy-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-kumaraswamy-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-pdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-pdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-kumaraswamy-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-kumaraswamy-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-kumaraswamy-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-kumaraswamy-pdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-pdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-pdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-pdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-kumaraswamy-pdf/main/LICENSE

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
