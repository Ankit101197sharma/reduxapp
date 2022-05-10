import {connect} from "react-redux"
import Header from "../Components/Header";
// import {addToCart} from "../Services/Action/action"

const mapStateToProps=state=>({
    data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)






// export default Home;