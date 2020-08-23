
const localStore = window.localStorage

export const ser = (k,v = null) => {
  if (!v) {
    const v = localStore.getItem(k)
    return JSON.parse(v)
  }
  window.localStorage.setItem(k, JSON.stringify(v))
}

const debounceTimes = {}
const debounceTimerRefs = {}

function debounce(f, t) {
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
    css : string,
    js : string,
    jslibs : string | Array<string>,
    csslibs : string | Array<string>,
    compiledPage : string
  }
  props: {
    onRefresh? : any,
    html? : string,
    css? : string,
    js? : string,
    csslibs? : string | Array<string>,
    jslibs? : string | Array<string>,
    refreshOnUpdate? : boolean,
    onSerialize?:any
  }

  constructor (props) {
    this.props = Object.assign(this.props || {}, props)
  }

  init() {
    var s
    if(this.props.onSerialize) {
      s = this.props.onSerialize('jsplayground')
    } else s = ser('jsplayground')
    if (s) {
      this.setState(s)
    }
    this.refresh()
  }

  dispatch (e, p = null) {
    document.dispatchEvent(p ? new CustomEvent(e, { detail: p }) : new Event(e))
  }

  setState(v) {
    this.state = Object.assign(this.state || {}, v);
  }

  compilePage() {
    const textToArray = (t) => {
      if(!t.split) { return [] }
      return t.split('\n')
    } 
    return `<html>
    <head>
    ${textToArray(this.state.csslibs).map(el => {
      if (!el || el.startsWith('#')) { return }
      return `<link rel="stylesheet" href="${el}" />`
    }).join('\n')}
    <style>
    body {
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
    }
    ${this.state.css}
    </style>
    <script type="text/javascript">
      console = window.console = window.parent.console
      const loadJs = (f) => {
        const s = document.createElement('script')
        s.setAttribute('type','text/javascript')
        s.setAttribute('src', f)
        document.body.appendChild(s)
      }
    </script>
    ${textToArray(this.state.jslibs).map(el => {
      if (!el || el.startsWith('#')) { return }
      return `<script type="text/javascript" src="${el}"></script>`
    }).join('\n')}
    </head>
    <body>
    ${this.state.html}
    </body>
    <script type="text/javascript">
    ${this.state.js}
    </script>
    </html>`
  }

  saveAndRefresh() {
    const self = this
    const o = {
      html : this.state.html,
      css : this.state.css,
      js : this.state.js,
      jslibs: this.state.jslibs,
      csslibs: this.state.csslibs,
      compiledPage: this.compilePage()
    }
    if(this.props.onSerialize) {
      this.props.onSerialize('jsplayground', o)
    } else ser('jsplayground', o)
    this.setState({ compiledPage: o.compiledPage })
    self.refresh()
  }

  refresh() {
    this.dispatch('sketch_refresh')
    if(this.props.onRefresh) {
      this.props.onRefresh(this.state)
    }
  }

  handleChange (v) {
    this.setState(v)
    debounce(()=>this.saveAndRefresh(), 2000)()
  }

}