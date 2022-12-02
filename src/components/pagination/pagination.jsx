import React, { useState } from "react";
import { Pagination as PaginationAnt } from "antd";
import "./style.scss";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState();

  const totalData = null;
  const itemsPerPage = 3;
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  return (
    <section className="pagination-ant">
      <PaginationAnt
        className="pagination"
        total={15}
        current={currentPage}
        pageSize={itemsPerPage}
        onChange={(page, size) => {
          setCurrentPage(page);
          // setCurrentData(products.slice(firstItem, lastItem));
        }}
      />
    </section>
  );
};

export default Pagination;
