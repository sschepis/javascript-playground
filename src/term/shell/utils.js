export const expandPath = (cwd, path) => {
  if (path.match(/^\//)) {
    return normalizePath(path)
  } else {
    path = path.replace(/\/$/, '')
    cwd = cwd.replace(/^\//, '').split('/')
    path.split('/').forEach((part) => {
      if (part.match(/^\.+$/)) {
        part.substring(1).split('').forEach(() => cwd.pop())
      } else {
        cwd.push(part)
      }
    })
    return normalizePath(cwd.join('/'))
  }
}

export const normalizePath = (path) => (
  ('/' + path).replace(/\/+/g, '/').replace(/([^\/])\/$/, '$1')
)

export const parentDirectory = (path) => {
  const parts = path.split(/\//)
  return parts.slice(0, parts.length - 1).join('/').replace(/^\/?/, '/')
}

export const fileName = (path) => {
  const parts = path.split(/\//)
  return parts[parts.length - 1]
}

export const pathJoin = (paths) => (
  normalizePath(paths.join('/'))
)

// TODO: maybe use async.js if this gets out of hand
export const mapAsync = (arr, iterCallback, finalCallback) => {
  let failed = false
  const results = []
  let complete = 0
  arr.forEach((item, index) => {
    if (!failed) {
      iterCallback(item, (err, result) => {
        if (err) {
          if (!failed) finalCallback(err)
          failed = true
        } else {
          results[index] = result
          complete++
          if (complete >= arr.length) {
            finalCallback(null, results)
          }
        }
      })
    }
  })
}
