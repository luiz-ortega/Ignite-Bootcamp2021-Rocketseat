import React from "react";
import { Container, TransactionTypeContainer } from "./styles";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        onClick={onRequestClose}
        className="react-modal-close"
        type="button"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar trabsação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <button>
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </button>

          <button>
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
