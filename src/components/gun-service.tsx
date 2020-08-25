// import a CSS module
import React, { h, Component } from 'react'
import Gun from 'gun/gun'
import'gun/sea'
import'gun/lib/webrtc'
import randomstring from 'randomstring'

import peers from './gun-peers.json'

export default class GunService {
  state
  constructor(props) {
    this.state = Object.assign({
      observablePaths: [],
      onEmit: (o) => console.log(o),
      gun: new Gun(peers),
      user: null,
      observedNodes: {}
    }, props)
    this.state.user = this.state.gun.user()
    this.state = Object.assign(this.state, props)
    
    if(this.state.auth) {
      const a = this.state.auth
      if(a.create) {
        const username = a.username || randomstring.generate()
        const password = a.password || randomstring.generate()
        this.state.auth = Object.assign(this.state.auth, {
          username, password
        })
        this.state.user.create(username, password)
        if(this.state.onCreate) {
          this.state.onCreate(this.userGun, this.state.auth, false)
        }
      } else {
        const username = a.username
        const password = a.password 
        this.state.auth = Object.assign(this.state.auth, {})
        if(!username || !password) {
          throw new Error('Username and password must be provided!')
        }
        this.state.user.auth(username, password)
        if(this.state.onAuth) {
          this.state.onAuth(this.userGun, this.state.auth.username, false)
        }
      }
      this.state.gun.on('create', function() {
        if(this.state.onCreate) {
          this.state.onCreate(this.state.user, this.state.auth, true)
        }
      })
      this.state.gun.on('auth', function() {
        if(this.state.onAuth) {
          this.state.onAuth(this.state.user, this.state.auth.username, true)
        }
      })
      this.observe(this.state.observablePaths)
    }
  }

  observe(paths) {
    const ops = paths
    ops.forEach(opath=>{
      const pathParts = opath
        .split('/')
        .filter(e=>e)
        .map(e=>e.trim())
      const gun = this.userGun
      var node = gun
      pathParts.forEach(p => node = node.get(p))
      node.on((valu, key) => {
        if (this.state.onEmit) {
          this.state.onEmit(opath, node, valu, key)
        }
      })
      if(this.state.onObserving) {
        this.state.onObserving(opath, node)
      }
      this.state.observedNodes[opath] = node
    })
  }

  get userGun() {
    return this.state.user.is ? this.state.user : this.state.gun
  }

  componentDidMount () {
  }

  render () {
    return (<div />)
  }
}
