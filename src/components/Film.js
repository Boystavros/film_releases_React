const Film = ({name, url}) => {
    return (
        
        <li class="film-name">
            <a href={url}>{name}</a>
        </li>
        
    )
}

export default Film;