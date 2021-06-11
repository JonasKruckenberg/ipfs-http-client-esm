import { Client } from './endpoint'

export interface ExecuteOptions extends RequestInit {
    timeout?: number | false
}

export type Execute = (action: string, params?: Record<string, any> | URLSearchParams, options?: ExecuteOptions) => Promise<Response>

export const createExecute = (endpoint: Client): Execute => async (action, params = {}, options = {}) => {
    const searchParams = new URLSearchParams(Object.fromEntries(
        Object.entries(params).filter(([, value]) => value !== undefined))
    )

    const url = `${endpoint.url}/${action}${searchParams && '?' + searchParams}`

    const res = await endpoint.fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    })
    if (!res.ok) throw res
    return res
}