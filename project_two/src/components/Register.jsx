import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="reg-container">
      <header>Registration Form</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>Ism Familya</label>
          <input type="text" placeholder="FISH" required />
        </div>
        <div className="input-box">
          <label>Fuqaroligi</label>
          <input type="text" placeholder="Fuqaroligi" required />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Passport seriya</label>
            <input type="text" placeholder="Passport seriya" required />
          </div>
          <div className="input-box">
            <label>JSHShIR</label>
            <input type="text" placeholder="JSHR" required />
          </div>
        </div>

        <div className="input-box">
          <label>Email address</label>
          <input type="text" placeholder="Email address" required />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Telefon raqam</label>
            <input type="number" placeholder="Telefon raqam" required />
          </div>
          <div className="input-box">
            <label>Tug'ilgan kuni</label>
            <input type="date" placeholder="Tug'ilgan kuni" required />
          </div>
        </div>

        <div className="gender-box">
          <h3>Jinsi</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Erkak</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Ayol</label>
            </div>
          </div>
        </div>

        <div className="input-box address">
          <label>Tug'ilgan joy</label>
          <div className="column">
            <div className="select-box">
              <select>
                <option hidden>Davlat</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
            <input type="text" placeholder="Viloyat" required />
          </div>
          <div className="column">
            <input type="text" placeholder="Shahar / Tuman" required />
          </div>
          <div className="input-box manzil">
            <label>O'zbekistonda yashash manzili</label>
            <div className="column">
              <input type="text" placeholder="Viloyat" required />
              <input type="text" placeholder="Shahar / Tuman" required />
            </div>
            <div className="column">
              <input type="text" placeholder="MFY" required />
              <input type="text" placeholder="Ko'cha" required />
              <input type="text" placeholder="Uy" required />
            </div>
          </div>

          <div className="input-box malumot">
            <label>Ma'lumoti / Tamomlagan oliy o`quv yurti</label>
            <div className="column">
              <input type="text" placeholder="Davlat" required />
              <input type="text" placeholder="O'quv yurt nomi" required />
            </div>
            <div className="column">
              <input
                type="text"
                placeholder="Diplom bo'yicha mutaxasisligi"
                required
              />
              <input
                type="text"
                placeholder="Ilmiy daraja (magistr, PhD, DSc)"
              />
            </div>
          </div>
        </div>

        <button>Saqlash</button>
      </form>
    </div>
  );
};

export default Register;
