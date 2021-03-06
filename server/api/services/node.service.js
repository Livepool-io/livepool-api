import axios from 'axios'
import l from "../../common/logger"

export default class LivepoolNodeService {
    constructor() {
        this._server = process.env.LIVEPOOL_SERVER
    }

    transcoders () {
        return new Promise((resolve, reject) => {
            axios.get(`${this._server}/transcoders`)
            .catch(err => reject(err))
            .then(res => resolve(res.data.transcoders = res.data.transcoders.map(t => ({Region: process.env.REGION, ...t}))))
        })
    }

    status () {
        return new Promise((resolve, reject) => {
            axios.get(`${this._server}/poolStats`)
            .catch(err => reject(err))
            .then(res => resolve(res.data))
        })

    }
}
