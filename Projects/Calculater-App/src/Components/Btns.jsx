import style from "../App.module.css"
function Btns({btnName})
{
    return(
        <button className={style.button}>{btnName}</button>
    );
}

export default Btns;