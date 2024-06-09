import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { TableData } from "../constants/tableData.constant";
import Badge from "./Badge";

const Table = () => {
  const [searchInput, setSearchInput] = useState("");

  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterOptions, setFilterOptions] = useState([
    "search",
    "status",
    "date",
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const [userList, setUserList] = useState(TableData);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  const itemsPerPage = 5;

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const resetState = (name) => {
    if (name === "search") {
      setSearchInput("");
      setFilterOptions((prev) => prev.filter((list) => list !== "search"));
    }
    if (name === "status") {
      setFilterOptions((prev) => prev.filter((list) => list !== "status"));
      setStatus("");
    }
    if (name === "date") {
      setFilterOptions((prev) => prev.filter((list) => list !== "date"));
      setStartDate("");
      setEndDate("");
    }
  };

  const sortedByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const userListCopy = [...userList];

    userListCopy.sort((userA, userB) => {
      const fullNameA = `${userA.firstName} ${userB.lastName}`;
      const fullNameB = `${userB.firstName} ${userA.lastName}`;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setUserList(userListCopy);
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowDown />;
    }
    return <FaArrowUp />;
  };

  const getStatusColor = (status) => {
    console.log(status);
    switch (status) {
      case "Pending":
        return (
          <span className="p-1 px-4 bg-processed rounded-md">{status}</span>
        );
      case "Paid":
        return <span className="p-1 px-4 bg-success rounded-md">{status}</span>;

      case "Rejected":
        return <span className=" p-1 px-4 rounded-md bg-error">{status}</span>;

      default:
        return <span className="bg-black"></span>;
    }
  };

  useEffect(() => {
    if (searchInput) {
      !filterOptions.find((list) => list === "search") &&
        setFilterOptions([...filterOptions, "search"]);
    }
    if (startDate || endDate) {
      !filterOptions.find((list) => list === "date") &&
        setFilterOptions([...filterOptions, "date"]);
    }
    if (status) {
      !filterOptions.find((list) => list === "status") &&
        setFilterOptions([...filterOptions, "status"]);
    }

    const isEmpty = (value) => value === "";

    if ([searchInput, status, startDate, endDate].every(isEmpty)) {
      setUserList(TableData);
      setFilterOptions([]);
      return;
    }

    const filteredList = TableData.filter((list) => {
      const matchesSearchInput = searchInput
        ? list.firstName.toLowerCase().includes(searchInput.toLowerCase())
        : true;

      const matchesStatus = status
        ? list.status.toLowerCase() === status.toLowerCase()
        : true;

      const matchesDateRange =
        startDate && endDate
          ? (() => {
              const rowDate = new Date(list.added_on);
              const start = new Date(startDate);
              const end = new Date(endDate);
              end.setDate(end.getDate() + 1);
              return rowDate >= start && rowDate < end;
            })()
          : true;

      return matchesSearchInput && matchesStatus && matchesDateRange;
    });

    setCurrentPage(1);
    setUserList(filteredList);
  }, [searchInput, status, startDate, endDate]);

  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return userList.slice(startIndex, endIndex);
  }, [userList, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(userList.length / itemsPerPage);

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold ">Table Data</h2>
          </div>

          <div className="grid grid-cols-5 items-end gap-5 my-4 gap-y-6 md:grid-cols-3">
            <input
              placeholder="search"
              className="col-span-3 px-4 py-2 rounded border border-black"
              type="text"
              onChange={handleSearch}
              value={searchInput}
            />

            <div className=" w-full">
              <label className=" text-default-600" htmlFor="start_date">
                Start Date
              </label>
              <input
                className="border w-full border-black px-4 py-2 rounded"
                type="date"
                id="start_date"
                onChange={handleStartDateChange}
                value={startDate}
              />
            </div>

            <div className=" w-full">
              <label className=" text-default-600" htmlFor="start_date">
                End Date
              </label>
              <input
                className="border w-full border-black px-4 py-2 rounded"
                type="date"
                id="end_date"
                onChange={handleEndDateChange}
                value={endDate}
              />
            </div>

            <div className=" w-full">
              <label className=" -top-7 text-default-600" htmlFor="status">
                Status
              </label>

              <select
                className="border w-full border-black px-4 py-2 rounded"
                name="status"
                id="status"
                onChange={handleStatus}
                value={status}
              >
                <option disabled defaultChecked value="">
                  Select Status
                </option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              {filterOptions.map((list, idx) => (
                <div key={idx}>
                  <Badge onClose={() => resetState(list)}>{list}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      onClick={sortedByName}
                      className="mr-20 px-5 py-3 border-b-2 border-default-600 bg-default-300 text-left text-xs font-semibold uppercase"
                    >
                      Name
                      {sorted.sorted == "name" ? renderArrow() : null}
                    </th>
                    <th className="px-5 py-3 border-b-2 border-default-600  bg-default-300  text-left text-xs font-semibold uppercase">
                      Amount
                    </th>
                    <th className="px-5 py-3 border-b-2 border-default-600  bg-default-300 text-left text-xs font-semibold uppercase">
                      Gender
                    </th>
                    <th className="px-5 py-3 border-b-2 border-default-600 bg-default-300 text-left text-xs font-semibold uppercase">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-default-600 bg-default-300 text-left text-xs font-semibold uppercase">
                      Added on
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length ? (
                    paginatedData.map((list, idx) => (
                      <tr key={idx}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <RxAvatar className="w-full h-full rounded-full" />
                            </div>
                            <div className="ml-3">
                              <p className="whitespace-no-wrap">
                                {`${list.firstName} ${list.lastName}`}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                {"10001"}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b  bg-white text-sm">
                          <p className=" whitespace-no-wrap">
                            {`₹ ${list.amount}`}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b  bg-white text-sm">
                          <p className="whitespace-no-wrap">{list.gender}</p>
                        </td>
                        <td className="px-5 py-5 border-b  bg-white text-sm">
                          <span className=" inline-block py-1 font-semibold leading-tight">
                            <span
                              aria-hidden
                              className="opacity-50 rounded-full"
                            ></span>
                            {/* <span className="">{list.status}</span> */}
                            <span className="">
                              {getStatusColor(list.status)}
                            </span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b  bg-white text-sm">
                          <span className=" inline-block py-1 leading-tight">
                            <span
                              aria-hidden
                              className="absolut  opacity-50 rounded-full"
                            ></span>
                            <span className=" whitespace-nowrap">
                              {formatDate(list.added_on)}
                            </span>
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="p-4">No data found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2  text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2  text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
