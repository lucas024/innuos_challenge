import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import albums from '../albums.json'
import defaultAlbum from '../assets/images/undefined_album_cover.png'
import Select from 'react-select';


const Albums = (props) => {

    const [filter, setFilter] = useState("ALL")
    const [filteredAlbumList, setFilteredAlbumList] = useState([])

    

    useEffect(() => {
        /* fetch('../albums.json')
            .then(response => console.log(response))
            .then(data => setAlbums([data])) 
            
            Pedido feito ao servidor sempre que o utilizador acede a esta pagina
            
            Otimizacoes com redux-persist possiveis
            
            */
        props.setAlbums(albums) //guardo no redux
    }, [])

    useEffect(() => {
        setFilteredAlbumList(props.albums)
    }, [props.albums])

    const options = [
        { value: 'ALL', label: 'All' },
        { value: 'LOCAL', label: 'Local' },
        { value: 'QOBUZ', label: 'Qobuz' },
    ]

    const customStyles = {
        control: base => ({
            ...base,
            fontSize: 16,
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
            opacity: "0.5",
            transition: "2000ms",
            border: "2px solid rgba(255, 166, 0, 0.644)",
            "&:hover": {
                opacity: "1",
                transition: "200ms"
              }
          }),
          option: (base, state) => ({
              ...base,
              backgroundColor:state.isSelected ? "rgba(255, 166, 0, 0.644)": "#fff",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#rgba(255, 166, 0, 0.644)",
              }
          })
    }


    const mapAlbumsToView = () => {
        return filteredAlbumList.map((album, i) => {
            return (
                <div key={i} className="album-component">
                    <img className="album-component-image" src={album.cover!=null?require(`../assets/covers/${album.cover}`).default:defaultAlbum}></img>
                    <p className="album-component-album-text">{album.album}</p>
                    <p className="album-component-artist-text">{album.artist}</p>
                </div>
            )
            
        })
    }

    const filterUpdateHandler = (val) => {
        setFilter(val)
        console.log(val);
        var aux = []
        if(val==="ALL"){
            setFilteredAlbumList(props.albums)
            return 
        }
        else{
            for(let el of props.albums){
                if(el.source === val) aux.push(el)
            }
            setFilteredAlbumList(aux)
            return
        }
    }

    return (
        <div>
            <div className="filter-container">
                <Select
                    styles={customStyles}
                    value={options.filter(option => option.value === filter)}
                    onChange={e => filterUpdateHandler(e.value)}
                    options={options}
                />
            </div>
            
            {
                filteredAlbumList.length>0?
                    <div className="album-grid">
                        {mapAlbumsToView()}
                    </div>
                :
                <div>
                    <p style={{color:"#fff"}}>No albums to display :(</p>
                </div>
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        albums: state.albums,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAlbums: (albums) => dispatch({ type: 'SET_ALBUMS', payload: albums }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Albums)