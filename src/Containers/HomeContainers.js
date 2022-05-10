import {connect} from "react-redux"
import Home from "../Components/Home";
import {addToCart} from "../Services/Action/action"
import { removeToCart } from "../Services/Action/action";
const mapStateToProps=state=>({
    data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)






// export default Home;