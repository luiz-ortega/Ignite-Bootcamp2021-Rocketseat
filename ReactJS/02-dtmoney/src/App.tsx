import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTranscationModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTranscationModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar trabsação</h2>
      </Modal>
    </div>
  );
}
