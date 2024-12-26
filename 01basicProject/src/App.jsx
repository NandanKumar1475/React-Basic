
import './App.css'
import Item from './comonents/Item'
import ItemDate from './comonents/ItemDate'
import Navbar from './navbar'
function App() {
  const data = [
     {
      itemName:'andan',
      itemDate:20,
      itemMonth:'jun',
      itemYear: 2023
     },
     {
      itemName:'nandan',
      itemDate:201,
      itemMonth:'june',
      itemYear: 20203
     },
     {
      itemName:'nand',
      itemDate:202,
      itemMonth:'jun',
      itemYear: 20232
     }
  ]
  
  return (
    <>
     <h1>Hello world</h1>
     <p>ram</p>
     <Item name={data[0].itemName}></Item>
     <ItemDate date={data[0].itemDate} month={data[0].itemMonth} year={data[0].itemYear}></ItemDate>
     <Item name= {data[1].itemName}></Item>
     <ItemDate date={data[1].itemDate} month={data[1].itemMonth} year={data[1].itemYear}  ></ItemDate>
     <Item name={data[2].itemName}></Item>
     <ItemDate date={data[2].itemDate} month={data[2].itemMonth} year={data[2].itemYear}></ItemDate>
    </>
  )
}
export default App
