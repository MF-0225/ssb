;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M482.456933 728.876446c-33.074645 0-59.898672 26.834158-59.898672 59.892065 0 33.102932 26.824028 59.903322 59.898672 59.903322 33.075668 0 59.889462-26.800389 59.889462-59.903322C542.347419 755.711628 515.533625 728.876446 482.456933 728.876446z"  ></path>' +
    '' +
    '<path d="M768.717368 728.876446c-33.081808 0-59.905836 26.834158-59.905836 59.892065 0 33.102932 26.824028 59.903322 59.905836 59.903322 33.069528 0 59.888439-26.800389 59.888439-59.903322C828.605807 755.711628 801.786896 728.876446 768.717368 728.876446z"  ></path>' +
    '' +
    '<path d="M839.043968 618.708324 422.079334 618.708324l-143.534952-424.468434c-4.165031-12.376888-15.77288-18.62315-28.844119-18.62315L122.863299 175.61674c-16.80851 0-30.43645 11.838629-30.43645 28.652574 0 16.801664 13.627941 28.652574 30.43645 28.652574l104.965946 0 143.530858 424.450015c4.165031 12.376888 15.77288 18.641569 28.844119 18.641569l438.839746 0c16.80851 0 30.43645-11.833513 30.43645-28.65769C869.480418 630.54286 855.851454 618.708324 839.043968 618.708324z"  ></path>' +
    '' +
    '<path d="M904.318294 288.428062l-516.195732-44.978401c-16.688778-1.456165-25.959298 10.340509-20.618439 26.187429l90.205158 269.994224c5.346999 15.868409 23.418322 30.982642 40.157244 30.982642l376.812507 0c16.745062 0 31.90291-15.763009 33.684561-32.405037l23.035589-215.802998C933.184926 305.774125 921.007072 289.884226 904.318294 288.428062z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.904 96 357.12 96C315.264 96 281.024 127.2 281.024 165.344l0 693.344c0 38.144 34.24 69.344 76.096 69.344l334.784 0C733.76 928 768 896.8 768 858.656L768 165.344C768 127.2 733.76 96 691.904 96M478.88 151.456l91.296 0c8.384 0 15.232 6.176 15.232 13.856 0 7.648-6.848 13.856-15.232 13.856l-91.296 0c-8.416 0-15.232-6.208-15.232-13.856C463.68 157.664 470.496 151.456 478.88 151.456M524.544 900.256c-25.248 0-45.664-18.592-45.664-41.6 0-23.008 20.416-41.6 45.664-41.6 25.216 0 45.664 18.592 45.664 41.6C570.176 881.664 549.76 900.256 524.544 900.256M737.6 789.344 311.488 789.344 311.488 234.656 737.6 234.656 737.6 789.344z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantouxia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M813.459081 521.791187c-12.162965-12.162965-31.866968-12.162965-44.029932 0L542.346597 748.873738 542.346597 201.297066c0-17.14978-13.987409-31.13719-31.13719-31.13719-17.14978 0-31.13719 13.987409-31.13719 31.13719l0 547.576672L252.989666 521.791187c-12.162965-12.162965-31.866968-12.162965-44.029932 0-12.162965 12.162965-12.162965 31.866968 0 44.029932l280.234707 280.234707c2.919112 2.919112 6.324742 5.230075 10.095261 6.81126 3.770519 1.581185 7.784297 2.432593 11.919705 2.432593 4.013778 0 8.149186-0.851408 11.919705-2.432593 3.770519-1.581185 7.297779-3.892149 10.095261-6.81126l280.234707-280.234707C825.622045 553.658154 825.622045 533.954151 813.459081 521.791187L813.459081 521.791187zM813.459081 521.791187"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M62.407352 782.660396"  ></path>' +
    '' +
    '<path d="M523.913331 125.365242 134.080741 514.321882 134.080741 586.868151 256.44872 586.868151 256.44872 903.278521 460.106096 903.278521 460.106096 683.887812 586.845639 683.887812 586.845639 903.278521 790.501992 903.278521 790.501992 586.868151 912.875087 586.868151 912.875087 514.321882Z"  ></path>' +
    '' +
    '<path d="M957.451328 782.660396"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M887.260709 232.849232c-96.93575-96.936773-254.116605-96.936773-351.037005 0l-24.7548 24.761963-24.769127-24.761963c-96.93575-96.936773-254.102279-96.936773-351.022679 0-96.950076 96.92654-96.950076 254.084882 0 351.020632l24.755824 24.7548 351.035982 298.873971 351.021655-298.873971 24.77015-24.755824C984.182133 486.934115 984.182133 329.775772 887.260709 232.849232L887.260709 232.849232z" fill="#d81e06" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)