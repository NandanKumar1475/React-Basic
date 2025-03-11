import './App.css';
import Item from './components/item';
import DateItem from './components/dateItem';
import Card from './components/card';
function App() {
  return (
    <div className="App">
      <Card>
        <Item name="nandan"></Item>
        <DateItem day="20" month="june" year="2003"></DateItem>
        <Item name="candan"></Item>
        <DateItem day="10" month="fune" year="2023"></DateItem>
        <Item name="kandan"></Item>
        <DateItem day="21" month="july" year="2203"></DateItem>

      </Card>

    </div>
  );
}

export default App;
