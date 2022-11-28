import React, { useState } from "react";
import { Button, Col, Row, message, Steps } from "antd";
const welecome = (
  <>
    <p>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there isn't
      anything embarrassing hidden in the middle of text. All the Lorem Ipsum
      generators on the Internet tend to repeat predefined chunks as necessary,
      making this the first true generator on the Internet. It uses a dictionary
      of over 200 Latin words, combined with a handful of model sentence
      structures, to generate Lorem Ipsum which looks reasonable. The generated
      Lorem Ipsum is therefore always free from repetition, injected humour, or
      non-characteristic words etc.
    </p>
  </>
);
const Disclaimer = (
  <>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </>
);

const Documents = <>Documents</>;
const Thankyou = <>Thankyou</>;
const steps = [
  {
    title: "Introduction",
    content: welecome,
  },
  {
    title: "Disclaimer",
    content: Disclaimer,
  },
  { title: "Documents", content: Documents },
  { title: "Thank you", content: Thankyou },
];
const Induction = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="page">
      <div className="page-wrapper">
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col" style={{ textAlign: "center" }}>
                <img src={require("../assets/logo.png")} />
              </div>
              <div className="col-auto ms-auto d-print-none"></div>
            </div>
          </div>
        </div>
        <div className="page-body ">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h1>Welcome come Wamart account onboarding.</h1>
                    <Row content>
                      <Col item span={4} style={{ minHeight: "700px" }}>
                        <Steps
                          direction="vertical"
                          current={current}
                          items={items}
                        />
                      </Col>
                      <Col item span={20}>
                        <div className="steps-content">
                          {steps[current].content}
                        </div>
                        <div className="steps-action" style={{textAlign:"right"}}>
                        {current > 0 && (
                            <Button
                              style={{
                                margin: "0 8px",
                              }}
                              onClick={() => prev()}
                            >
                              Previous
                            </Button>
                          )}
                          {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                              Next
                            </Button>
                          )}
                          {current === steps.length - 1 && (
                            <Button
                              type="primary"
                              onClick={() =>
                                message.success("Processing complete!")
                              }
                            >
                              Done
                            </Button>
                          )}
                         
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Induction;
