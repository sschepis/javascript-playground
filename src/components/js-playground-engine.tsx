
import safeStringify from 'fast-safe-stringify'

const localStore = window.localStorage

export const ser = (k,v) => {
  if (v === null || v === undefined) {
    const v = localStore.getItem(k)
    return JSON.parse(v)
  }
  window.localStorage.setItem(k, safeStringify.stableStringify(v))
}

const debounceTimes = {}
const debounceTimerRefs = {}

export function debounce(f, t) {
  const fName = f.name ? f.name : 'anonymous'
  function funcOut() {
      const timeNow = Date.now()
      const timeBefore = debounceTimes[fName] ? debounceTimes[fName] : -1
      const timerRef = debounceTimerRefs[fName]
      if (timerRef) {
          clearTimeout(timerRef)
          debounceTimerRefs[fName] = undefined
      }
      if(timeBefore === -1 || timeNow - timeBefore >= t) {
          debounceTimes[fName] = timeNow
          return f()
      } else {
        debounceTimerRefs[fName] = setTimeout(f, t - (timeNow - timeBefore))
      }
  }
  return funcOut
}

export default class JSPlaygroundEngine {
  state : {
    html : string,
    css : Array<string>,
    js : Array<string>,
    jslibs : string | Array<string>,
    csslibs : string | Array<string>,
    compiledPage : string
  }
  props: {
    onRefresh? : any,
    html? : string,
    css? : Array<string>,
    js? : Array<string>,
    csslibs? : string | Array<string>,
    jslibs? : string | Array<string>,
    refreshOnUpdate? : boolean
  }

  constructor (props) {
    this.props = Object.assign({}, props)
    this.state = Object.assign({}, props)
  }

  dispatch (e, p = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }

  setState(v) {
    this.state = Object.assign(this.state || {}, v);
  }

  compilePage() {
    const toArray = (t) => {
      if(Array.isArray(t)) { return t }
      if(!t || !t.split) { return [] }
      return t.split('\n')
    }
    return `<html>
    <head>
    <script type="text/javascript">
    console = window.console = window.parent.console
    </script>
    ${toArray(this.state.csslibs).map(el => {
      if (!el || el.startsWith('#') || el === '') { return }
      return `<link rel="stylesheet" href="${el}" />`
    }).join('\n')}
    <style>
    body {
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
    }
    ${Array.isArray(this.state.css) ? this.state.css.join('\n'):this.state.css }
    </style>
    <script type="text/javascript">
      function require(url, callback) {
        var e = document.createElement("script");
        e.src = url;
        e.type="text/javascript";
        e.addEventListener('load', callback);
        document.getElementsByTagName("head")[0].appendChild(e);
      }
    </script>
    ${toArray(this.state.jslibs).map(el => {
      if (!el || el.startsWith('#') || el === '') { return }
      return `<script type="text/javascript" src="${el}"></script>`
    }).join('\n')}
    </head>
    <body>
    ${this.state.html}
    </body>
    <script type="text/javascript">
    ${Array.isArray(this.state.js) ? this.state.js.join('\n'):this.state.js}
    </script>
    </html>`
  }

  refresh() {
    this.setState({
      html : this.props.html,
      css : this.props.css,
      js : this.props.js,
      jslibs: this.props.jslibs,
      csslibs: this.props.csslibs,
      compiledPage: this.compilePage()
    })
    if(this.props.onRefresh) {
      this.props.onRefresh(this.state)
    }
  }

}
