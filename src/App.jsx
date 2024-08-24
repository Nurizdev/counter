
import{ Button, Flex, Typography} from "antd"
import { useState } from "react";



function App() {

const [count,setCount] = useState(0)

function plus(){
 setCount (count+1)
}
function minus(){

 count>0 ? setCount (count-1) :setCount(0)
  
}


  return (
    <>
<Flex gap="middle" align="center" justify="center" horizontal>
   <Typography.Title level={1}> { count}</Typography.Title>

<Button onClick={plus} type="primary"  >+</Button>
<Button type="primary" danger onClick={minus} >-</Button>
</Flex>
    </>
  )
}

export default App
