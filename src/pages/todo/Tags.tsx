import useTagsStore from "@store/useTagsStore";
import components from "@components/components";
import { useEffect } from "react";
const Tags = () => {
  const { tags, removeTag } = useTagsStore();

  function handleRemoveTag(id: string) {
    removeTag(id);
    localStorage.setItem(
      "tags",
      JSON.stringify(tags.filter((tag) => tag.id !== id))
    );
  }

  useEffect(() => {
    document.title = "Yout tags - Taskify";
  }, []);

  return (
    <div className="tasks__wrapper">
      <div className={"tasks__container"}>
        <article className={"tasks__h1-container"}>
          <h1>Your Tags Suko</h1>
        </article>
        <div className={"tags__wrapper"}>
          {tags.map((tag) => (
            <div className={"tag"} key={tag.id}>
              <div className={"tag"}>{tag.name}</div>
              <button
                onClick={() => handleRemoveTag(tag.id)}
                title={"Remove " + "tag " + tag.name}
                className={"tag__remove-btn "}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <article className={"tasks__h1-container"}>
          <h1>Create new tag</h1>
        </article>
        <components.NewTag />
      </div>
    </div>
  );
};

export default Tags;
