import { Endpoint } from './endpoint'

export interface ExecuteOptions extends RequestInit {
    timeout?: number | false
}

export type Execute = (action: string, params?: Record<string, any> | URLSearchParams, options?: ExecuteOptions) => Promise<Response>

export const createExecute = (endpoint: Endpoint): Execute => (action, params = {}, options = {}) => {
    const searchParams = new URLSearchParams(params)
    const url = `${endpoint.url}/${action}${searchParams && '?' + searchParams}`

    return endpoint.fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    })
}