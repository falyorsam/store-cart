import ThemeContext from "./ContextA";
const Form = ({ people, value }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.currentTarget.name.value;
          const date = new Date();
          const id = date.getTime();
          e.currentTarget.name.value = "";
          value(name, id);
        }}
        action="submit"
      >
        <label htmlFor="name">
          name
          <input type="text" id="name" />
        </label>
        <button>add name</button>
      </form>
    </div>
  );
};
export default Form;
