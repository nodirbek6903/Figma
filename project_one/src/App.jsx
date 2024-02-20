function App() {
  return (
    <div className="container">
      <div className="tables">
        <div className="table-title">
          <h1>Hujjatlar</h1>
          <hr />
        </div>
        <div className="table-items">
          <div className="status">
            <select name="status" id="status">
              <option value="status">Status</option>
              <option value="status">---</option>
              <option value="status">---</option>
              <option value="status">---</option>
            </select>
          </div>
          <table>
            <thead>
              <th>
                <td>Topshirilishi kerak bo'lgan hujjatlar</td>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>1-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>2-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>3-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>4-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>5-hujjat</td>
                <td className="edit">
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>6-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>7-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>8-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>9-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>10-hujjat</td>
                <td className="edit"><input type="checkbox" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
