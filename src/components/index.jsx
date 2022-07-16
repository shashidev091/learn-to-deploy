import { useState } from "react"

const Index = () => {
    const [name, setName] = useState("Shashi");

    return(
        <>
            name : {name}
            <input type="text" onChange={e => setName(e.target.value)}/>
            <button onClick={() => setName("Shashi")}>reset</button>
        </>
    )
}

export default Index;