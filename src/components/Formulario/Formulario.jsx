import React, { useState } from "react";
import "./Formulario.scss";
import { Button, Form, Input } from "antd";
import CardInfo from "../CardInfo/CardInfo";

const Formulario = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    surname: "",
    email: "",
    number: 0,
    message: "",
  });

  const [show, setShow] = useState(false);

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const onFinish = async(values) => {
    setDataForm(values);
    setShow(true);

    try {
      const response = await axios.post('https://metricsalad.com/form', values);

    } catch (error) {
      console.error('There was a problem with the petition:', error);
      message.error('There was an error');
    }
  };

  return (
    <div className="fondo">
      <div className="fondo-form">
        <Form
          name="formulario"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <div className="titulo">Ejemplo formulario</div>
          <div className="div-form">
            <label>Name</label>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input className="input-form" placeholder="Name" />
            </Form.Item>
          </div>
          <div className="div-form">
            <label>Surname</label>
            <Form.Item
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Please enter your surname",
                },
              ]}
            >
              <Input className="input-form" placeholder="Surname" />
            </Form.Item>
          </div>
          <div className="div-form">
            <label>Email adress</label>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email adress",
                },
                {
                  type: "email",
                  message: "Please enter a valid email adress",
                },
              ]}
            >
              <Input className="input-form" placeholder="example@example.com" />
            </Form.Item>
          </div>
          <div className="div-form">
            <label>Phone number</label>
            <Form.Item
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number",
                },
                {
                  pattern: /^\+?[1-9]\d{8,11}$/,
                  message: "Please enter a valid phone number",
                },
              ]}
            >
              <Input className="input-form" placeholder="678 777 888" />
            </Form.Item>
          </div>
          <div className="div-form">
            <label>Message</label>
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please enter your message",
                },
              ]}
            >
              <Input
                className="input-form"
                placeholder="Write here your message"
              />
            </Form.Item>
          </div>
          {console.log(show)}
          {show ? (
            <div className="cardInfor">
              <CardInfo formData={dataForm} setShow={setShow} />
            </div>
          ) : null}

          <Form.Item label={null}>
            <Button color="default" variant="solid" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Formulario;
