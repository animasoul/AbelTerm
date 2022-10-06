export default async function getdog(args) {
    //console.log(args[0])
    var type = ''
    const url = 'https://api.thedogapi.com/v1/images/search'

    if (typeof args !== "undefined") {
        type = '?mime_types='+args[0]
    }
    
    const res = await fetch(url+type)

    const resp = await res.json()
    console.log(resp)
    return resp[0]
}