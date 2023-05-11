import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Chart from 'react-apexcharts'

const Users = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const [state, setState] = useState({
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
  });



  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, data]);



  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };


  const handleActiveUser = (user) => {
    // dispatch({ type: "SETACTIVEUSER", payload: user })
    navigate(`/${user._id}`)

  }


  // <tr onClick={() => { navigate(`/${item.name}`)}} key={item.id}>
  return (
    <>

      <div className="users-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(item => {
              return (
                <tr onClick={() => handleActiveUser(item)} key={item.id}>
                  <td >{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.occupation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
{/* line, area, bar, pie, donut, scatter, bubble, heatmap, radialBar */}
      {/* <div className="charts-container">
      <Chart options={state.options} series={state.series} type="line" width={500} height={320} />
      <Chart options={state.options} series={state.series} type="bar" width={500} height={320} />
      <Chart options={state.options} series={state.series} type="scatter" width={500} height={320} />
      <Chart options={state.options} series={state.series} type="area" width={500} height={320} />
      </div> */}
 

    </>
  );
}


export default Users
