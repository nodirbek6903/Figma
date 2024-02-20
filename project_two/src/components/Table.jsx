import React from "react";
import { TbUsers } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import "./Table.css";

const Table = () => {
  return (
    <>
      <div className="tables">
        <div className="reg-btn">
          <a href="/register-form">
            <button className="reg">Regiter</button>
          </a>
        </div>
        <div className="teachers">
          <div className="all-teachers card">
            <div className="all-icons icons">
              <TbUsers className="icon" />
            </div>
            <div className="all-descr description">
              <span className="check-teacher">Jami o'qituvchilar</span>
              <span className="number">5,423</span>
            </div>
          </div>
          <div className="works card">
            <div className="works-icon icons">
              <FaUserCheck className="icon" />
            </div>
            <div className="works-descr description">
              <span className="check-teacher">Ishlayotganlar</span>
              <span className="number">189</span>
            </div>
          </div>
          <div className="no-works card">
            <div className="no-works-icon icons">
              <RiComputerLine className="icon" />
            </div>
            <div className="no-works-descr description">
              <span className="check-teacher">Ishlamayotganlar</span>
              <span className="number">1,893</span>
            </div>
          </div>
        </div>
        <div className="tables-description">
          <div className="table-title">
            <span>Jami o'qituvchilar</span>
            <div className="table-search">
              {/* <FaSearch /> */}
              <input type="text" placeholder="Ism yoki Passport" />
            </div>
            <button className="btn">Search</button>
            <div className="table-option">
              <select name="status" id="status">
                <option value="status">Status</option>
                <option value="---">---</option>
                <option value="---">---</option>
              </select>
            </div>
          </div>
          <div className="table-descr">
            <table>
              <thead>
                <tr>
                  <td>Ism Familya</td>
                  <td>Passport</td>
                  <td>Telefon Raqam</td>
                  <td>Email</td>
                  <td>Daraja</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="userlar">
                    <img
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOD0Dfy4oJq4r2T3p5SS4YcPY4U7xO976KzBO2SyI~2O1wbOx75EXiY3iIaDk4FUQjh3zJofU0c-yDNXF~RnOnrAmkq7SJqp0uLH5os3rTcEw5vaKJ3YIe3i1AADo3l2hLA2mfNspg4dVW824XDmAIAtiYS2v-PGb5QL8IH8a3a1tgyNf8cz~sFb~qgMN86759S-6HEOcs5bovbJZRtyZCYh0R4XbJopCKieOk8n1XBD2C0YJTg8wAMI4glEEtsJlbvS0frx~5cFoGyk7-ydgZ82N6Zo6sHyC2ceMUQPsqxDyvi2yqg272DLB~G-9xXzUqLp5GoMup4gNUHxIhA~mg__"
                      alt=""
                    />
                    <span>Jane Cooper</span>
                  </td>
                  <td>AC3121212</td>
                  <td>(225)555-0118</td>
                  <td>jane@microsoft.com</td>
                  <td>Bakalavr</td>
                  <td>
                    <button className="btn">Active</button>
                  </td>
                </tr>
                <tr>
                  <td className="userlar">
                    <img
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOD0Dfy4oJq4r2T3p5SS4YcPY4U7xO976KzBO2SyI~2O1wbOx75EXiY3iIaDk4FUQjh3zJofU0c-yDNXF~RnOnrAmkq7SJqp0uLH5os3rTcEw5vaKJ3YIe3i1AADo3l2hLA2mfNspg4dVW824XDmAIAtiYS2v-PGb5QL8IH8a3a1tgyNf8cz~sFb~qgMN86759S-6HEOcs5bovbJZRtyZCYh0R4XbJopCKieOk8n1XBD2C0YJTg8wAMI4glEEtsJlbvS0frx~5cFoGyk7-ydgZ82N6Zo6sHyC2ceMUQPsqxDyvi2yqg272DLB~G-9xXzUqLp5GoMup4gNUHxIhA~mg__"
                      alt=""
                    />
                    <span>Floyd Miles</span>
                  </td>
                  <td>AC3121212</td>
                  <td>(205)555-0100</td>
                  <td>floyd@microsoft.com</td>
                  <td>Bakalavr</td>
                  <td>
                    <button className="btn">Active</button>
                  </td>
                </tr>
                <tr>
                  <td className="userlar">
                    <img
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOD0Dfy4oJq4r2T3p5SS4YcPY4U7xO976KzBO2SyI~2O1wbOx75EXiY3iIaDk4FUQjh3zJofU0c-yDNXF~RnOnrAmkq7SJqp0uLH5os3rTcEw5vaKJ3YIe3i1AADo3l2hLA2mfNspg4dVW824XDmAIAtiYS2v-PGb5QL8IH8a3a1tgyNf8cz~sFb~qgMN86759S-6HEOcs5bovbJZRtyZCYh0R4XbJopCKieOk8n1XBD2C0YJTg8wAMI4glEEtsJlbvS0frx~5cFoGyk7-ydgZ82N6Zo6sHyC2ceMUQPsqxDyvi2yqg272DLB~G-9xXzUqLp5GoMup4gNUHxIhA~mg__"
                      alt=""
                    />
                    <span>Ronald Richards</span>
                  </td>
                  <td>AC3121212</td>
                  <td>(302)555-0107</td>
                  <td>ronald@microsoft.com</td>
                  <td>Bakalavr</td>
                  <td>
                    <button className="btn">Active</button>
                  </td>
                </tr>
                <tr>
                  <td className="userlar">
                    <img
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOD0Dfy4oJq4r2T3p5SS4YcPY4U7xO976KzBO2SyI~2O1wbOx75EXiY3iIaDk4FUQjh3zJofU0c-yDNXF~RnOnrAmkq7SJqp0uLH5os3rTcEw5vaKJ3YIe3i1AADo3l2hLA2mfNspg4dVW824XDmAIAtiYS2v-PGb5QL8IH8a3a1tgyNf8cz~sFb~qgMN86759S-6HEOcs5bovbJZRtyZCYh0R4XbJopCKieOk8n1XBD2C0YJTg8wAMI4glEEtsJlbvS0frx~5cFoGyk7-ydgZ82N6Zo6sHyC2ceMUQPsqxDyvi2yqg272DLB~G-9xXzUqLp5GoMup4gNUHxIhA~mg__"
                      alt=""
                    />
                    <span>Marvin McKinney</span>
                  </td>
                  <td>AC3121212</td>
                  <td>(252)555-0126</td>
                  <td>marvin@tesla.com</td>
                  <td>Magistr</td>
                  <td>
                    <button className="btn">Active</button>
                  </td>
                </tr>
                <tr>
                  <td className="userlar">
                    <img
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOD0Dfy4oJq4r2T3p5SS4YcPY4U7xO976KzBO2SyI~2O1wbOx75EXiY3iIaDk4FUQjh3zJofU0c-yDNXF~RnOnrAmkq7SJqp0uLH5os3rTcEw5vaKJ3YIe3i1AADo3l2hLA2mfNspg4dVW824XDmAIAtiYS2v-PGb5QL8IH8a3a1tgyNf8cz~sFb~qgMN86759S-6HEOcs5bovbJZRtyZCYh0R4XbJopCKieOk8n1XBD2C0YJTg8wAMI4glEEtsJlbvS0frx~5cFoGyk7-ydgZ82N6Zo6sHyC2ceMUQPsqxDyvi2yqg272DLB~G-9xXzUqLp5GoMup4gNUHxIhA~mg__"
                      alt=""
                    />
                    <span>Jerome Bell</span>
                  </td>
                  <td>AC3121212</td>
                  <td>(629)555-0129</td>
                  <td>jerome@google.com</td>
                  <td>Magistr</td>
                  <td>
                    <button className="btn">Active</button>
                  </td>
                </tr>
                <tr>
                  <td className="userlar">
                    <img
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOD0Dfy4oJq4r2T3p5SS4YcPY4U7xO976KzBO2SyI~2O1wbOx75EXiY3iIaDk4FUQjh3zJofU0c-yDNXF~RnOnrAmkq7SJqp0uLH5os3rTcEw5vaKJ3YIe3i1AADo3l2hLA2mfNspg4dVW824XDmAIAtiYS2v-PGb5QL8IH8a3a1tgyNf8cz~sFb~qgMN86759S-6HEOcs5bovbJZRtyZCYh0R4XbJopCKieOk8n1XBD2C0YJTg8wAMI4glEEtsJlbvS0frx~5cFoGyk7-ydgZ82N6Zo6sHyC2ceMUQPsqxDyvi2yqg272DLB~G-9xXzUqLp5GoMup4gNUHxIhA~mg__"
                      alt=""
                    />
                    <span>Kathyrn Murphy</span>
                  </td>
                  <td>AC3121212</td>
                  <td>(406)555-0120</td>
                  <td>kathyrn@microsoft.com</td>
                  <td>Magistr</td>
                  <td>
                    <button className="btn">Active</button>
                  </td>
                </tr>
                <tr>
                  <td className="userlar">
                    <img
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOD0Dfy4oJq4r2T3p5SS4YcPY4U7xO976KzBO2SyI~2O1wbOx75EXiY3iIaDk4FUQjh3zJofU0c-yDNXF~RnOnrAmkq7SJqp0uLH5os3rTcEw5vaKJ3YIe3i1AADo3l2hLA2mfNspg4dVW824XDmAIAtiYS2v-PGb5QL8IH8a3a1tgyNf8cz~sFb~qgMN86759S-6HEOcs5bovbJZRtyZCYh0R4XbJopCKieOk8n1XBD2C0YJTg8wAMI4glEEtsJlbvS0frx~5cFoGyk7-ydgZ82N6Zo6sHyC2ceMUQPsqxDyvi2yqg272DLB~G-9xXzUqLp5GoMup4gNUHxIhA~mg__"
                      alt=""
                    />
                    <span>Jacob Jones</span>
                  </td>
                  <td>AC3121212</td>
                  <td>(208)555-0112</td>
                  <td>jacob@yahoo.com</td>
                  <td>PHD</td>
                  <td>
                    <button className="btn">Active</button>
                  </td>
                </tr>
                <tr>
                  <td className="userlar">
                    <img
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/3389/ec29/9edb640f65b7cb2d606c9ae4d3bd74e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOD0Dfy4oJq4r2T3p5SS4YcPY4U7xO976KzBO2SyI~2O1wbOx75EXiY3iIaDk4FUQjh3zJofU0c-yDNXF~RnOnrAmkq7SJqp0uLH5os3rTcEw5vaKJ3YIe3i1AADo3l2hLA2mfNspg4dVW824XDmAIAtiYS2v-PGb5QL8IH8a3a1tgyNf8cz~sFb~qgMN86759S-6HEOcs5bovbJZRtyZCYh0R4XbJopCKieOk8n1XBD2C0YJTg8wAMI4glEEtsJlbvS0frx~5cFoGyk7-ydgZ82N6Zo6sHyC2ceMUQPsqxDyvi2yqg272DLB~G-9xXzUqLp5GoMup4gNUHxIhA~mg__"
                      alt=""
                    />
                    <span>Kristin Watson</span>
                  </td>
                  <td>AC3121212</td>
                  <td>(704)555-0127</td>
                  <td>kirstin@facebook.com</td>
                  <td>PHD</td>
                  <td>
                    <button className="btn">Active</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
