
export const timeout = (fn, ms = 0) =>
    new Promise(resolve =>
        setTimeout(async () => {
            await fn()
            resolve()
        }, ms)
    )

export class Emitter<T> {
	handlers: Array<(T) => void> = []
	lastValue: T | null = null

	constructor(startingValue: T) {
		this.lastValue = startingValue
	}

	subscribe(handler: (t: T) => void) {
		this.handlers.push(handler)
		setTimeout(() => handler(this.lastValue))
		return { unsubscribe: () => this.unsubscribe(handler) }
	}

	unsubscribe(handler: (t: T) => void) {
		this.handlers = this.handlers.filter(h => h !== handler)
	}

	emit(value: T): Promise<any> {
		this.lastValue = value
		return Promise.all(this.handlers.map(handler => timeout(() => handler(value))))
	}
}
