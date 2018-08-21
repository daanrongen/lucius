export const SkiDayRow = ({resort, date,
  powder, backcountry}) => (
  <tr>
    <td>
      {date.getMonth() + 1}/{date.getDate()}/
      {date.getFullYear()}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {(powder)}
    </td>
    <td>
      {(backcountry)}
    </td>
  </tr>

)
