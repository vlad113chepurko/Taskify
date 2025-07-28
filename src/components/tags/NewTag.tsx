import TagForm from "../../utils/TagForm";

const NewTag = () => {
  const { register, handleSubmit, errors } = TagForm({
    onSubmit: (data) => {
      console.log("Received: ", data);
      // Добавить новый тег в стор.
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <section className="tasks__form-section">
        <label htmlFor="tagName">
          {errors.tagName?.message || 'Enter tag name'}
        </label>
        <input
          className={errors.tagName && 'error__input'}
          {...register("tagName")}
          id="tagName"
        />
      </section>
    </form>
  );
};

export default NewTag;
