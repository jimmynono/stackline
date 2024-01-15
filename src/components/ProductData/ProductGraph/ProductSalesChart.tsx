import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { SalesProps, d3LineProps } from "../../../types/ProductInfo";

const ProductSalesChart = ({ data }: SalesProps) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const width = 800;
    const height = 200;
    const marginTop = 100;
    const marginBottom = 30;
    const marginLeft = 20;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.weekEnding))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.retailSales) || 0])
      .range([50, 0]);

    const line = d3
      .line<d3LineProps>()
      .x((d) => xScale(d.weekEnding)! + xScale.bandwidth() / 2)
      .y((d) => yScale(d.retailSales)! + marginTop / 2)
      .curve(d3.curveCardinal);

    const lineWholesale = d3
      .line<d3LineProps>()
      .x((d) => xScale(d.weekEnding)! + xScale.bandwidth() / 2)
      .y((d) => yScale(d.wholesaleSales)! + marginTop / 2 + 25)
      .curve(d3.curveCardinal);

    svg
      .append("path")
      .data([data])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", "2");

    svg
      .append("path")
      .data([data])
      .attr("d", lineWholesale)
      .attr("fill", "none")
      .attr("stroke", "grey")
      .attr("stroke-width", "2");

    const xAxis = d3
      .scaleTime()
      .domain([new Date("01-01-2017"), new Date("12-31-2017")])
      .range([0, width]);

    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},${height - marginBottom})`)
      .attr("class", "divider")
      .call((g: d3.Selection<SVGGElement, unknown, null, undefined>) => {
        g.call(
          d3
            .axisBottom(xAxis)
            .ticks(d3.timeMonth, 1)
            .tickFormat(d3.timeFormat("%b") as never),
        );
        g.select(".domain").remove();
      });

    svg
      .append("line")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", height - marginBottom)
      .attr("y2", height - marginBottom)
      .attr("stroke-width", 1)
      .attr("stroke", "lightgrey");

    return () => {
      d3.select(chartRef.current).selectAll("*").remove();
    };
  }, []);

  return <div ref={chartRef}></div>;
};

export default ProductSalesChart;
