import React from "react";
import "./Methods.css";
import Balance from "../../utilities/images/balance.gif";
import Idea from "../../utilities/images/idea.gif";
import Presentation from "../../utilities/images/presentation.gif";
import Protection from "../../utilities/images/protection.gif";
import Planning from "../../utilities/images/planning.png";

function Method() {
  return (
    <>
      <div classname="container-fluid">
        <div class="container mt-5">
          <h1>
            <p class="text-center fs-2 fw-normal">How we help You to Grow</p>
          </h1>
          <h6>
            {" "}
            <p class="text-center fs-6 fw-normal">
              The process we follow,to help you build your career and shape your
              future.
            </p>
          </h6>
        </div>
        <div class="d-flex justify-content-evenly">
          <span class="dot mt-5">
            <img
              class="rounded-circle"
              src={Balance}
              alt=""
              width="100"
              height="100"
            />
          </span>
          <span class="dot mt-5">
            <img
              class="rounded-circle"
              src={Idea}
              alt=""
              width="100"
              height="100"
            />
          </span>
          <span class="dot mt-5">
            <img
              class="rounded-circle"
              src={Protection}
              alt=""
              width="100"
              height="100"
            />
          </span>
          <span class="dot mt-5">
            <img
              class="rounded-circle"
              src={Presentation}
              alt=""
              width="100"
              height="100"
            />
          </span>
        </div>
        <div class="d-flex justify-content-evenly">
          <span>
            <h6>
              Equally Skilled in communi
              <br />
              -cation and technologies.
            </h6>
          </span>
          <span>
            {" "}
            <h6>
              Providing ideas to imple
              <br />
              -ment your career.
            </h6>
          </span>
          <span>
            <h6>
              Efficient networking and <br />
              solving real-world pro
              <br />
              -blems to gain
              <br />
              experience
            </h6>
          </span>
          <span>
            <h6>
              Key points in growing
              <br /> your career
            </h6>
          </span>
        </div>
      </div>
    </>
  );
}

export default Method;
