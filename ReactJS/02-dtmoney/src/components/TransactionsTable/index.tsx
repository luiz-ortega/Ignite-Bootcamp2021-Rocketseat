import { useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";

export default function TransactionsTable() {
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((response) => console.log(response));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem ipsun</td>
            <td className="deposit">123</td>
            <td>Lorem ipsun</td>
            <td>12/12/1111</td>
          </tr>
          <tr>
            <td>Lorem ipsun</td>
            <td className="withdraw">123</td>
            <td>Lorem ipsun</td>
            <td>12/12/1111</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
