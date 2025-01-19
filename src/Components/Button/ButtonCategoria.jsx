export const ButtonCategoria = ({children, color}) => {

return(
<button className="button-categoria"  style={{backgroundColor: color}}>
    {children}
</button>
)
}