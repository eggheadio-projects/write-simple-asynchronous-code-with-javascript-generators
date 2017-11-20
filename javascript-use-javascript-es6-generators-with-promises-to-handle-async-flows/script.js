function* createQuoteFetcher() {
  // API switched for use in plunker. Concepts in lesson still apply.
  const response = yield fetch('https://swapi.co/api/people/1')
  const person = yield response.json()
  return `${person.name} —${person.height}`
}

const coroutine = (gen) => {
  const generator = gen()

  const handle = (result) => {
    if (result.done) return Promise.resolve(result.value)
    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)))
  }

  return handle(generator.next())
}

const quoteFetcher = coroutine(createQuoteFetcher)
quoteFetcher.then(quote => console.log(quote))


// console.log modified for output in plunker