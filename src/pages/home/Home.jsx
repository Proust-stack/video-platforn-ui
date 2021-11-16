import List from '../../components/list/List'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/lists${type ? "?type=" + type : "" }${genre ? "&genre=" + genre : ""}`,
                {
                    headers: {
                        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjFkMDM2ZTRmMDJlODUxZWNmNzljMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDIyNTk0MywiZXhwIjoxNjM0ODMwNzQzfQ.NgbZQXZ1gfMn58kovzegcICjJy70sNtTNB_Py3AAu3c"
                    }
                }
                )
                setLists(response.data)
            } catch (error) {
                console.log(error);
            }   
        };
        getRandomLists()
    }, [ type, genre ])
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}  setGenre={setGenre} />
            {lists.map(list => 
                    <List list={list} key={list._id}/>
                )}
        </div>
    )
}

export default Home
