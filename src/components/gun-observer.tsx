// import a CSS module
import React, { h, Component } from 'react'
import Gun from 'gun/gun'
import'gun/sea'
import'gun/lib/webrtc'
import randomstring from 'randomstring'

import peers from './gun-peers.json'

export default class GunObserver extends Component {
  state
  constructor(props) {
    super(props)
    this.state = {
      observablePaths: [],
      onEmit: (o) => console.log(o),
      gun: new Gun(peers),
      user: null,
      observedNodes: []
    };
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
          this.state.onCreate(this.state.user, this.state.auth)
        }
      })
      this.state.gun.on('auth', function() {
        if(this.state.onAuth) {
          this.state.onAuth(this.state.user, this.state.auth.username)
        }
      })
    
      const ops = this.state.observablePaths
      ops.forEach(opath=>{
        const pathParts = opath
          .split('/')
          .filter(e=>e)
          .map(e=>e.trim())
        const gun = this.userGun
        var node = gun
        pathParts.forEach(p => node = node.get(p))
        node.on((valu) => {
          if (this.state.onEmit) {
            this.state.onEmit(opath, node, valu)
          }
        })
        if(this.state.onObserving) {
          this.state.onObserving(opath, node)
        }
        this.state.observedNodes.push(node)
      })
    }
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
