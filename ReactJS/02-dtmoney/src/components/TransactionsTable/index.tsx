import { Container } from "./styles";

export default function TransactionsTable() {
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
