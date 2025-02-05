import React from 'react'
import "./CardInfo.scss"
import { Card, Button } from 'antd';

const CardInfo = ({formData,setShow}) => {

  return (
    <Card title="Datos Enviados" style={{ marginTop: 20 }}>
      <div className="info">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Surname: </strong>{formData.surname}</p>
        <p><strong>Email: </strong>{formData.email}</p>
        <p><strong>Phone number: </strong>{formData.number}</p>
        <p><strong>Message: </strong>{formData.message}</p>
      </div>
      <Button color="default" variant="solid" htmlType="submit" onClick={() => setShow(false)}>
        Cerrar
      </Button>
    </Card>
  )
}

export default CardInfo