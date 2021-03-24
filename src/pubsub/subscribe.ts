import { createCommand } from "../util/create-command";

export const subscribe = createCommand(async (execute, topic: string) => {
    const res = await execute('pubsub/sub', { arg: topic }, { timeout: false })
    return streamAsyncIterator(res.body!)
})

async function* streamAsyncIterator(stream: ReadableStream) {
    // Get a lock on the stream
    const reader = stream.getReader();
    const decoder = new TextDecoder()

    try {
        while (true) {
            // Read from the stream
            const { done, value } = await reader.read();
            // Exit if we're done
            if (done) return;
            // Else yield the chunk
            yield JSON.parse(decoder.decode(value));
        }
    }
    finally {
        reader.releaseLock();
    }
}