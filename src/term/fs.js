export let fsWrapper = {}

const BFSFile = BrowserFS.FileSystem

BFSFile.XmlHttpRequest.Create({
  index: 'js/bin/index.json'
}, (e, bin) => {
  BFSFile.LocalStorage.Create((e, root) => {
    BFSFile.MountableFileSystem.Create({
      '/': root,
      '/bin': bin
    }, (e, mfs) => {
      fsWrapper.MFS = mfs
      BrowserFS.initialize(mfs)
    })
  })
})

export const FS = BrowserFS.BFSRequire('fs')
