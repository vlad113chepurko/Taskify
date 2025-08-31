import TagForm from "../../utils/TagForm";
import useTagsStore from "@store/useTagsStore";
import { nanoid } from "nanoid";
const NewTag = () => {
  const { setNewTag, tags } = useTagsStore();
  const { register, handleSubmit, errors } = TagForm({
    onSubmit: (data) => {
      if (tags.find((tag) => tag.name === data.tagName)) {
        alert("Tag with this name already exists!");
        return;
      } else {
        console.debug("Received: ", data);
        const newTag = { id: nanoid(), name: data.tagName };
        setNewTag([...tags, newTag]);
        localStorage.setItem("tags", JSON.stringify([...tags, newTag]));
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <section className="tasks__form-section">
        <label className={errors && "error__label"} htmlFor="tagName">
          {errors.tagName?.message || "Enter tag name"}
        </label>
        <input
          className={errors.tagName && "error__input"}
          {...register("tagName")}
          id="tagName"
        />
        <button className="second__button" type="submit">
          Add a new tag
        </button>
      </section>
    </form>
  );
};

export default NewTag;
