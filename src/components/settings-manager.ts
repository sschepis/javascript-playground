import { update } from "lodash"

import { diff, addedDiff, deletedDiff, detailedDiff, updatedDiff } from 'deep-object-diff'

export default class SettingsManager {
  updaters
  base
  constructor(json) {
    this.base = json
    this.updaters = {}
  }

  diff(other) {
    const ret = diff(this.base, other)
    Object.keys(ret).forEach((el) => {
      const changedKey = el
      const changedVal = ret[changedKey]
      if(this.updaters[changedKey]) {
        this.updaters[changedKey](changedVal)
      }
    })
  }

  exists(k) {
    return this.updaters[k] !== null
  }

  update(b) {
    this.base = b
  }

  when(match, action) {
    this.updaters[match] = action
  }
}
