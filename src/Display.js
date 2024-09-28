import "./Display.css";
import { useState, useEffect } from "react";
import data from "./cansat.csv";
import * as d3 from "d3";
import LineChart from "./App";
import { TPChart } from "./TPChart";
import GnssAltChart from "./Gnssalt";
import VoltageChart from "./voltage";
import SpinChart from "./spin";
import YawChart from "./y";
import PitchChart from "./p";
import RollChart from "./r";
import OpdataChart from "./opdata";
import data_rows from "./cansat.csv";
import Tpplay from "./tpbutton";
import background from "./1725036399005.jpg";

export default function Display() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      d3.csv(data_rows, (d) => ({
        team_id: d.team_id,
        time_stamping: d.time_stamping,
        packet_count: d.packet_count,
        baro_altitude: d.altitude,
        pressure: d.pressure,
        temp: d.temp,
        voltage: d.voltage,
        latitude: d.gnss_latitude,
        longitude: d.gnss_longitude,
        time: d.gnss_time,
        altitude: d.gnss_altitude,
        pitch: d.pitch,
        yaw: d.yaw,
        roll: d.roll,
        spin: d.gyro_spin_rate,
        state: d.flight_software_state,
        sats: d.gnss_sats,
        opdata: d.optional_data,
      })).then((dataset) => {
        setData(dataset);
        d3.select("#teamid")
          .text("TEAM ID    : ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(dataset.length > 0 ? dataset[0].team_id : "")
          .style("font-family", "serif")
          .style("font-size", "18px");
        d3.select("#time_stamp")
          .text("TIMESTAMP:  ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(
            dataset.length > 0 ? dataset[dataset.length - 1].time_stamping : ""
          )
          .style("font-family", "serif")
          .style("font-size", "18px");
        d3.select("#packet_count")
          .text("PACKET COUNT:  ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(
            dataset.length > 0 ? dataset[dataset.length - 1].packet_count : ""
          )
          .style("font-family", "serif")
          .style("font-size", "16px");
        d3.select("#latitude")
          .text("LATITUDE:  ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].latitude : "")
          .style("font-family", "serif")
          .style("font-size", "18px");
        d3.select("#longitude")
          .text("LONGITUDE:  ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].longitude : "")
          .style("font-family", "serif")
          .style("font-size", "18px");
        d3.select("#time")
          .text("TIME:  ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].time : "")
          .style("font-family", "serif")
          .style("font-size", "18px");
        d3.select("#sats")
          .text("SATS:  ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].sats : "")
          .style("font-family", "serif")
          .style("font-size", "18px");
        d3.select("#state")
          .text("STATE:  ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].state : "")
          .style("font-family", "serif")
          .style("font-size", "18px");
        d3.select("#data")
          .text("LAST DATA COMMAND:  ")
          .style("font-family", "times-new-roman")
          .style("font-size", "18px")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].team_id : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(
            dataset.length > 0 ? dataset[dataset.length - 1].time_stamping : ""
          )
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(
            dataset.length > 0 ? dataset[dataset.length - 1].packet_count : ""
          )
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(
            dataset.length > 0 ? dataset[dataset.length - 1].baro_altitude : ""
          )
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].pressure : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].temp : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].voltage : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].latitude : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].longitude : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].time : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].altitude : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].pitch : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].yaw : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].roll : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].spin : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].state : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].sats : "")
          .style("font-family", "serif")
          .style("font-size", "18px")
          .append("text")
          .text(", ")
          .append("text")
          .text(dataset.length > 0 ? dataset[dataset.length - 1].opdata : "")
          .style("font-family", "serif")
          .style("font-size", "18px");
      });
    };

    fetchData();

    let interval;
    if (toggle) {
      interval = setInterval(fetchData, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [toggle == true]);

  const divStyle = {
    marginRight: "5px",
    marginLeft: "5px",
    backgroundColor: " #D3D3D3",
    height: "250px",
    width: "250px",
    position: "relative",
    borderRadius: "5",
  };

  const headerStyle = {
    marginTop: "0px",
    backgroundColor: "orange",
    textAlign: "center",
    height: "30px",
    alignItems: "center",
    paddingTop: "5px",
    zIndex: "1",
  };

  return (
    <div style={{ backgroundImage: `url(${background})`, height: "750px" }}>
      <div
        style={{ background: "black", position: "relative", height: "110px" }}
      >
        <img
          src="../Chaitanya_Bharathi_Institute_of_Technology_logo.png"
          alt="CBIT logo"
          style={{
            width: "90px",
            height: "105px",
            left: "10px",
            marginRight: "5px",
            float: "left",
            position: "absolute",
            marginBottom: "20px",
          }}
        ></img>
        <div className="label">
          <h4
            style={{
              left: "120px",
              top: "-20px",
              position: "absolute",
              color: "white",
            }}
            id="teamid"
          ></h4>
          &nbsp;&nbsp;&nbsp;
          <h4
            style={{
              left: "400px",
              top: "-20px",
              color: "white",
              position: "absolute",
            }}
            id="time_stamp"
          ></h4>
          <img
            src="../indian_flag.jpg"
            alt="Indian flag"
            style={{
              width: "120px",
              height: "70px",
              float: "left",
              position: "absolute",
              left: "570px",
              top: "0px",
            }}
          ></img>
          <h4
            style={{
              left: "720px",
              top: "-20px",
              color: "white",
              position: "absolute",
            }}
            id="packet_count"
          ></h4>
          <h4
            style={{
              left: "960px",
              top: "-20px",
              color: "white",
              position: "absolute",
            }}
            id="latitude"
          ></h4>
        </div>
        <img
          src="../astra-logo.jpg"
          alt="Astrasat logo"
          style={{
            width: "120px",
            height: "105px",
            marginLeft: "10px",
            float: "right",
            marginTop: "-10px",
          }}
        ></img>
        <br />
        <div className="label">
          <h4
            style={{
              left: "120px",
              top: "15px",
              color: "white",
              position: "absolute",
            }}
            id="longitude"
          ></h4>
          <h4
            style={{
              left: "400px",
              top: "15px",
              color: "white",
              position: "absolute",
            }}
            id="time"
          ></h4>
          <h4
            style={{
              left: "720px",
              top: "15px",
              color: "white",
              position: "absolute",
            }}
            id="sats"
          ></h4>
          <h4
            style={{
              left: "960px",
              top: "15px",
              color: "white",
              position: "absolute",
            }}
            id="state"
          ></h4>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          style={{
            left: "830px",
            position: "relative",
            top: "-8px",
            width: "100px",
            height: "30px",
            paddingTop: "0px",
          }}
        >
          <h7 style={{ paddingTop: "-10px" }}>{toggle ? "Stop" : "Start"}</h7>
        </button>
        <div className="label">
          <h4
            style={{
              left: "120px",
              top: "55px",
              width: "1000px",
              color: "white",
              position: "absolute",
            }}
            id="data"
          ></h4>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <br />
        <div style={divStyle}>
          <div style={headerStyle}>
            <h7>PRESSURE & TEMPERATURE</h7>
          </div>
          <TPChart refreshMe={toggle} />
        </div>

        <div style={divStyle}>
          <div style={headerStyle}>
            <h7>ALTITUDE</h7>
          </div>
          <LineChart refreshMe={toggle} />
        </div>
        <div style={divStyle}>
          <div style={headerStyle}>
            <h7>GNSS ALTITUDE</h7>
          </div>
          <GnssAltChart refreshMe={toggle} />
        </div>
        <div style={divStyle}>
          <div style={headerStyle}>
            <h7>VOLTAGE</h7>
          </div>
          <VoltageChart refreshMe={toggle} />
        </div>
        <div style={divStyle}>
          <div style={headerStyle}>
            <h7>SPIN</h7>
          </div>
          <SpinChart refreshMe={toggle} />
        </div>
      </div>
      <div
        style={{
          marginLeft: "130px",
          marginTop: "10px",
          backgroundColor: " 	#D3D3D3",
          paddingLeft: "0px",
          width: "250px",
          height: "250px",
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            textAlign: "center",
            alignItems: "center",
            paddingTop: "5px",
            height: "30px",
            marginBottom: "15px",
          }}
        >
          <h7>YAW</h7>
        </div>
        <YawChart refreshMe={toggle} />
      </div>
      <div
        style={{
          marginLeft: "390px",
          marginTop: "-250px",
          backgroundColor: " 	#D3D3D3",
          paddingLeft: "0px",
          width: "250px",
          height: "250px",
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            textAlign: "center",
            alignItems: "center",
            paddingTop: "5px",
            height: "30px",
            marginBottom: "15px",
          }}
        >
          <h7>PITCH</h7>
        </div>
        <PitchChart refreshMe={toggle} />
      </div>
      <div
        style={{
          marginLeft: "650px",
          marginTop: "-250px",
          backgroundColor: " 	#D3D3D3",
          paddingLeft: "0px",
          width: "250px",
          height: "250px",
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            textAlign: "center",
            alignItems: "center",
            paddingTop: "5px",
            height: "30px",
            marginBottom: "15px",
          }}
        >
          <h7>ROLL</h7>
        </div>
        <RollChart refreshMe={toggle} />
      </div>
      <div
        style={{
          marginLeft: "910px",
          marginTop: "-250px",
          backgroundColor: " 	#D3D3D3",
          paddingLeft: "0px",
          width: "250px",
          height: "250px",
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            textAlign: "center",
            alignItems: "center",
            paddingTop: "5px",
            height: "30px",
            marginBottom: "15px",
          }}
        >
          <h7>SO2 SENSOR</h7>
        </div>
        <OpdataChart refreshMe={toggle} />
      </div>
    </div>
  );
}
