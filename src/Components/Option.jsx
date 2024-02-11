export function Option(prop){
    return(<option value={prop.name} className={prop.className} i={prop.i} >{prop.name}</option>)
}