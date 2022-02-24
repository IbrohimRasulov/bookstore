const Form = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <div className="main-form">
      <input type="text" />

      <select name="categories" id="categories">
        <option value="null">Categories</option>
        <option value="fiction">Fiction</option>
        <option value="fantasy">Fantasy</option>
        <option value="romance">Romance</option>
        <option value="development">Development</option>
        <option value="scifi">Sci-Fi</option>
        <option value="history">History</option>
        <option value="religious">Religious</option>
        <option value="adventure">Adventure</option>
        <option value="health">Health</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </div>
  </form>
);

export default Form;
