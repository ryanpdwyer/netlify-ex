
import {NetlifyAPI} from 'netlify';

const client = new NetlifyAPI('AwXJ-jyOxtWjtbDogyY47R-kLhrVaJes4G_0ruxkAYs')

const sites = await client.listFormSubmissions("120-water-22fa")

console.log(sites)
