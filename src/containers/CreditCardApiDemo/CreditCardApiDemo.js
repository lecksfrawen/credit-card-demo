import React, { useState } from "react"
import { Modal, Paper } from "@material-ui/core"
import styled from "styled-components"

import CreditCardForm from "components/CreditCardForm"
import { saveCreditCardInfo } from "../../api"

const StyledModalPaper = styled(Paper)`
  margin: 25vh auto 0;
  width: 60%;
  min-height: 130px;
  padding: ${({ theme }) => theme.spacing(2)}px;
`

const CreditCardApiDemo = () => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const handleSubmit = (values, form) => {
    // saveCreditCardInfo.then(() => {
    //   openModal()
    // })
  }

  return (
    <>
      <Modal open={showModal} onClose={closeModal}>
        <StyledModalPaper>
          <h2 id="modal-title">Success</h2>
          <p id="modal-description">
            Your credit card information has been saved
          </p>
        </StyledModalPaper>
      </Modal>
      <CreditCardForm onSubmit={handleSubmit} />
    </>
  )
}

export default CreditCardApiDemo
