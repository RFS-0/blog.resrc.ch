import { Post, PostSchema } from '../post';
import { createEntityCreationTests } from './entity-test-helper';

const validInputs = [
  {
    id: '8a70353b-baf3-4bed-be24-06020a62691c',
    title: 'Example Post',
  },
]

const invalidInputs = [
  {
    id: '8a70353b-baf3-4bed-be24-06020a62691Z', // invalid id
    title: 'Example Post',
  }
]

createEntityCreationTests({
  ctor: Post,
  schema: PostSchema,
  validInputs,
  invalidInputs
})

describe(`Testing the entity 'Post'`, () => {
  describe("creating this object", () => {
    describe("with valid input", () => {
      validInputs.forEach(validInput => {
        it(`is ensured that the properties of '${JSON.stringify(validInput)}' are parsed correctly`, () => {
          const post = new Post(validInput)
          expect(post.id.value).toEqual(validInput.id)
        })
      })
    })
  })
})
