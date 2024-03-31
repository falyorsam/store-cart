import ThemeContext from "./ContextA";
const List = ({ people, value }) => {
  return (
    <ThemeContext.Provider value={value}>
      <div>
        {people.map((e) => {
          console.log(e.name);
          return (
            <div key={e.id}>
              <h1>{e.name}</h1>;
            </div>
          );
        })}
      </div>
    </ThemeContext.Provider>
  );
};
export default List;
