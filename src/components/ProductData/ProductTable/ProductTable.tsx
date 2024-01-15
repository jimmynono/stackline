import { useState } from "react";
import "./ProductTable.css";
import { SalesProps } from "../../../types/ProductInfo";

export const ProductTable = ({ data }: SalesProps) => {
  const [tableData, setTableData] = useState(data);

  const [weekSortUp, setWeekSortUp] = useState(false);
  const [retailSortUp, setRetailSortUp] = useState(false);
  const [wholeSaleSortUp, setWholeSaleSortUp] = useState(false);
  const [unitsSoldSortUp, setUnitsSoldSortUp] = useState(false);
  const [retailerMarginSortUp, setRetailerMarginSortUp] = useState(false);

  const handleWeekSortClick = () => {
    if (weekSortUp) {
      setWeekSortUp(!weekSortUp);
      setTableData([...data]);
    } else {
      setWeekSortUp(!weekSortUp);
      setTableData([...data].reverse());
    }
  };
  const handleRetailSortClick = () => {
    if (retailSortUp) {
      setRetailSortUp(!retailSortUp);
      setTableData(
        [...tableData].sort((a, b) => a.retailSales - b.retailSales),
      );
    } else {
      setRetailSortUp(!retailSortUp);
      setTableData(
        [...tableData].sort((a, b) => a.retailSales - b.retailSales).reverse(),
      );
    }
  };

  const handleWholesaleSortClick = () => {
    if (wholeSaleSortUp) {
      setWholeSaleSortUp(!wholeSaleSortUp);
      setTableData(
        [...tableData].sort((a, b) => a.wholesaleSales - b.wholesaleSales),
      );
    } else {
      setWholeSaleSortUp(!wholeSaleSortUp);
      setTableData(
        [...tableData]
          .sort((a, b) => a.wholesaleSales - b.wholesaleSales)
          .reverse(),
      );
    }
  };

  const handleUnitsSortClick = () => {
    if (unitsSoldSortUp) {
      setUnitsSoldSortUp(!unitsSoldSortUp);
      setTableData([...tableData].sort((a, b) => a.unitsSold - b.unitsSold));
    } else {
      setUnitsSoldSortUp(!unitsSoldSortUp);
      setTableData(
        [...tableData].sort((a, b) => a.unitsSold - b.unitsSold).reverse(),
      );
    }
  };

  const handleMarginSortClick = () => {
    if (retailerMarginSortUp) {
      setRetailerMarginSortUp(!retailerMarginSortUp);
      setTableData([...tableData].sort((a, b) => a.unitsSold - b.unitsSold));
    } else {
      setRetailerMarginSortUp(!retailerMarginSortUp);
      setTableData(
        [...tableData].sort((a, b) => a.unitsSold - b.unitsSold).reverse(),
      );
    }
  };

  return (
    <div className="product-table">
      <table className="product-table_table" cellSpacing="1" cellPadding="24">
        <thead>
          <tr>
            <td>
              Week Ending{" "}
              <span
                className={`sort-arrow ${weekSortUp ? "sort-arrow-down" : ""}`}
                onClick={() => handleWeekSortClick()}
              >
                &#94;
              </span>
            </td>
            <td>
              Retail Sales
              <span
                className={`sort-arrow ${
                  retailSortUp ? "sort-arrow-down" : ""
                }`}
                onClick={() => handleRetailSortClick()}
              >
                &#94;
              </span>
            </td>
            <td>
              Wholesale Sales
              <span
                className={`sort-arrow ${
                  wholeSaleSortUp ? "sort-arrow-down" : ""
                }`}
                onClick={() => handleWholesaleSortClick()}
              >
                &#94;
              </span>
            </td>
            <td>
              Units Sold
              <span
                className={`sort-arrow ${
                  unitsSoldSortUp ? "sort-arrow-down" : ""
                }`}
                onClick={() => handleUnitsSortClick()}
              >
                &#94;
              </span>
            </td>
            <td>
              Retailer Margin
              <span
                className={`sort-arrow ${
                  retailerMarginSortUp ? "sort-arrow-down" : ""
                }`}
                onClick={() => handleMarginSortClick()}
              >
                &#94;
              </span>
            </td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            const dateString = item.weekEnding.split("-").reverse().join("-");
            return (
              <tr key={`table-row-${index}`}>
                <td>{dateString} </td>
                <td>${item.retailSales}</td>
                <td>${item.wholesaleSales}</td>
                <td>{item.unitsSold}</td>
                <td>${item.retailerMargin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
