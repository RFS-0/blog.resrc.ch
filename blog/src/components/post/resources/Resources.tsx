import { Component, For, Match, Switch } from 'solid-js';
import './resources-style.css';

export type Resource = {
  type: 'link'
  title: string
  description: string
  index: number
  data: Record<string, string>
}

export type ResourcesProps = {
  resources: Resource[]
}

export const Resources: Component<ResourcesProps> = (props) => {
  // noinspection JSUnusedLocalSymbols
  const filterPostByTag = (tag: string) => {
    console.log('filtering posts by tag: ', tag);
  };

  return (
      <div class="resources">
        <For each={props.resources}>
          {(resource) => (
              <Switch>
                <Match when={resource.type === 'link'}>
                  <a href={resource.data.url}>
                    [{resource.index}] -  {resource.title}
                  </a>
                </Match>
              </Switch>
          )}
        </For>
      </div>
  );
};
