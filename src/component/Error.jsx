import { useNavigate } from "react-router-dom"

function Error() {
    const navigate = useNavigate()

    return (
        <>
            <h2>Error 404</h2>
            <p>Page not found</p>
            <p>Back to <b 
                style={{cursor: "pointer", textDecoration: "underline"}} 
                onClick={ () => navigate('/main')  }>
                    Main page
            </b></p>
        </>
    )
}

export default Error