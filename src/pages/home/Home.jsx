import List from '../../components/list/List'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import { useEffect, useState } from 'react'
import {axiosInstance} from '../../requestBase'

const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                // const response = await axios.get(`http://localhost:5000/api/lists${type ? "?type=" + type : "" }${genre ? "&genre=" + genre : ""}`)
                const response = await axiosInstance.get(`lists${type ? "?type=" + type : "" }${genre ? "&genre=" + genre : ""}`)
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
