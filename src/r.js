import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import data from "./cansat.csv";
import "./App.css";
import { FullScreenRoll, SummaryRoll } from "./FSRoll";

const RollChart = (props) => {
  const [fullScreenModalState, setFullScreenModalState] = useState(false);

  const chartRef = useRef(null);
  const refreshMe = props.refreshMe;

  useEffect(() => {
    d3.csv(data, (d) => ({
      time: parseInt(d.time_stamping),
      roll: parseFloat(d.roll),
    })).then((dataset) => {
      const slicedData = dataset.slice(-15);

      if (!refreshMe) {
        return;
      }

      const width = 240;
      const height = 150;

      d3.select(chartRef.current).select("svg").remove();
      const svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height + 100)
        .append("g")
        .attr("transform", `translate(45,5)`);

      const xScale = d3
        .scaleLinear()
        .domain(d3.extent(slicedData, (d) => d.time))
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(slicedData, (d) => d.roll)])
        .range([height, 0]);

      const line = d3
        .line()
        .x((d) => xScale(d.time))
        .y((d) => yScale(d.roll));

      svg
        .append("path")
        .datum(slicedData)
        .attr("class", "line")
        .attr("d", line)
        .style("fill", "none") // Set fill to none for the line path
        .style("stroke", "steelblue")
        .style("stroke-width", "2");
      svg
        .append("text")
        .attr("x", 95)
        .attr("y", 180)
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("Time");
      svg
        .append("text")
        .attr("x", 90)
        .attr("y", 40)
        .attr("transform", "rotate(90)")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text("Roll");

      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

      svg.append("g").call(d3.axisLeft(yScale));
    });
  }, [refreshMe]);

  return (
    <>
      <button
        id="myBtnPitch"
        className="modal-button"
        onClick={launchSummaryMode}
      >
        <i
          class="fa fa-arrows-alt"
          style={{
            top: "165px",
            position: "relative",
            color: "white",
            left: "870px",
          }}
        ></i>
      </button>
      <button
        id="myBtnP"
        className="modal-button"
        onClick={launchFullScreenMode}
      >
        <i
          class="fa fa-play"
          style={{
            top: "165px",
            position: "relative",
            left: "650px",
            color: "white",
          }}
        ></i>
      </button>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div ref={chartRef}></div>
      <FullScreenRoll toggle={fullScreenModalState} slice={false} />
      <SummaryRoll toggle={fullScreenModalState} slice={false} />
    </>
  );
  function launchFullScreenMode() {
    const modal = document.getElementById("myModalR");
    modal.style.display = "block";
    modal.style.zIndex = 9999;
    const modalback = document.getElementById("modalR");
    modalback.style.display = "block";
    modal.style.zIndex = 1;
  }
  function launchSummaryMode() {
    const modal = document.getElementById("myModalRoll");
    modal.style.display = "block";
    modal.style.zIndex = 9999;
    const modalback = document.getElementById("modalRoll");
    modalback.style.display = "block";
    modal.style.zIndex = 1;
  }
};

export default RollChart;
