class Post extends React.Component {

render(){
return (
        <div>
        <h3>{this.props.nome}</h3>
        <small>{this.props.email}</small> 
        <small>{this.props.cidade}</small>
        <small>{this.props.rua}</small> 
        </div>
    )
}
}




class Postagem extends React.Component {
constructor(props){
    super(props)

        this.state = {
        post : [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                lat: "-37.3159",
                lng: "81.1496"
                }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
                }
            }
        ]

        }
    }
    render(){
        let lista =   this.state.post.map((item)=>{
            return (
            <Post key={item.id} nome={item.name} email={item.email} cidade={item.address.city} rua={item.address.street} />
            ) 
     })


        return (
            <div>
               {lista}
            </div>
        )
    }
}















let elemento = (
    <div>
        <Postagem />
    </div>
)



ReactDOM.render(
    elemento,
    document.getElementById('app')
)