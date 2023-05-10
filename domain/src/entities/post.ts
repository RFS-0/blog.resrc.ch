import { EntityIdSchema, PostId, Title, TitleSchema } from '../value_objects';
import { implement } from '../validation';
import { Entity, RawEntity } from './entity';

export interface RawPost extends RawEntity {
  id: string;
  title: string;
}

export const PostSchema = implement<RawPost>().with({
  id: EntityIdSchema.shape.value,
  title: TitleSchema.shape.value,
});

export class Post extends Entity {

  private _id: PostId;
  private _title: Title;

  constructor(input: RawPost) {
    super(input);
    const result = PostSchema.safeParse(input);
    if (!result.success) {
      throw new Error(`Precondtions to create ${Post.name} not met because ${result.error.message}`);
    }
    this._id = new PostId({value: result.data.id});
    this._title = new Title({value: result.data.title});
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  toRaw(): RawPost {
    return {
      id: this.id.value,
      title: this.title.value,
    };
  }
}
