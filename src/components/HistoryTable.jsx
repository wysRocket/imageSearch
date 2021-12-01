import React from 'react'
import Table from 'react-bootstrap/Table'
import Loading from './Loading'

const HistoryTable = props => {
  if (!props.imgHistory) {
    return <Loading />
  }

  const historyItems = props.imgHistory.map(el => (
    <HistoryItem key={el.date} title={el.title} date={el.date} totalHits={el.totalHits} />
  ))

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Search Term</th>
            <th>Time of Search</th>
            <th>Number of Results</th>
          </tr>
        </thead>
        <tbody>{historyItems}</tbody>
      </Table>
    </div>
  )
}

export default HistoryTable

const HistoryItem = props => {
  return (
    <tr>
      <td> {props.title} </td>
      <td> {props.date} </td>
      <td> {props.totalHits} </td>
    </tr>
  )
}
