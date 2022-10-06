export default async function getbitcoin() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const resp = await res.json()
    return resp
}