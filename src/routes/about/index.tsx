import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <div>
        <div>More about About!</div>
      </div>
    </div >
  );
});

export const head: DocumentHead = {
  title: "About: Simple blog",
  meta: [
    {
      name: "description",
      content: "Made with QwikJS x/ MDX.",
    },
  ],
};
