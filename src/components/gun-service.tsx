// import a CSS module
import React, { h, Component } from 'react'
import Gun from 'gun/gun'
import'gun/lib/radix'
import'gun/lib/radisk'
import'gun/lib/store'
import'gun/lib/rindexed'
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
        this.state.auth = Object.assign({
          username, password
        }, this.state.auth)
        this.state.user.create(username, password)
      } else {
        const username = a.username
        const password = a.password
        this.state.auth = Object.assign({}, this.state.auth)
        if(!username || !password) {
          throw new Error('Username and password must be provided!')
        }
        this.state.user.auth(username, password)
      }
      this.state.gun.on('auth',() => {
        if(this.state.onCreate && this.state.auth.create) {
          this.state.onCreate(this.state.user, this.state.auth)
        }
        else if(this.state.onAuth) {
          this.state.onAuth(this.state.user, this.state.auth)
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
