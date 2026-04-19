import { Buffer as BufferPolyfill } from 'buffer'

if (typeof globalThis.Buffer === 'undefined') {
  ;(globalThis as typeof globalThis & { Buffer: typeof BufferPolyfill }).Buffer = BufferPolyfill
}
