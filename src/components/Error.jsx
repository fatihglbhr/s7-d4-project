import { useHistory } from 'react-router-dom';



export default function Error() {

    const history = useHistory()
    function clickHandler() {
        history.push('/')
    }
    return (
        <div><p>Kullanıcı adı veya şifre hatalı.</p>
            <button onClick={clickHandler}>Geri Dön</button></div>
    )
}