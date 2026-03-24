export const Student = ({
    Name = "No name",
    Age = 0,
    isMarried = false
}) => {
  return (
    <div className="Student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{Name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{Age}</td>
          </tr>
          <tr>
            <th>isMarried</th>
            <td>{isMarried ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

