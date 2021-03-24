export function lowercaseKeys(obj: Record<string, any>) {
    const out: Record<string, any> = {}
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key] instanceof Object) {
                out[key.toLowerCase()] = lowercaseKeys(obj[key])
            } else {
                out[key.toLowerCase()] = obj[key];
            }
        }
    }
    return out
}